"use client";

import { useEffect } from "react";

type Lead = { name: string; email: string };

function sendLeadToServer(lead: Lead) {
  fetch("/api/chat-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, page: window.location.pathname }),
  }).catch(() => {
    // Non-fatal — the visitor's chat experience doesn't depend on this succeeding.
  });
}

// The widget script hardcodes " (Semantic)" / " (Keyword)" onto its own header
// title depending on which chat endpoint is configured — there's no attribute to
// override just that label. We keep /api/chat-semantic (the real backend route)
// and instead strip the suffix from the rendered title once the widget draws it,
// via its own shadow root (mode: "open", so it's readable from outside).
function stripAssistantSuffix(root: ParentNode): boolean {
  const title = root.querySelector<HTMLElement>(".aiwa-header-title");
  const text = title?.textContent ?? "";
  if (title && /\((Semantic|Keyword)\)\s*$/.test(text)) {
    title.textContent = text.replace(/\s*\((Semantic|Keyword)\)\s*$/, "");
    return true;
  }
  return false;
}

// The widget always seeds the conversation with a generic "Hi! How can I help
// you?" bot bubble as soon as it renders. Once we know the visitor's name, we
// swap that one bubble's text in place — there's no API for a custom welcome
// message, so this is the only hook we have. Runs after every gate submission
// (the gate re-appears each time the chat is opened), so it just always
// overwrites with the latest name rather than checking what was there before.
function personalizeGreeting(root: ParentNode, name: string) {
  const firstBotBubble = root.querySelector<HTMLElement>(".aiwa-messages .aiwa-msg-bot");
  if (firstBotBubble) {
    firstBotBubble.textContent = `Hi ${name}! How can I help you today?`;
  }
}

// No vendor API exists for a pre-chat form, so we overlay our own inside the
// widget's own panel (same shadow root) the first time it's opened, blocking
// the message list + input underneath until the visitor submits name + email.
function mountLeadGate(root: ShadowRoot, onSubmit: (lead: Lead) => void) {
  const panel = root.querySelector<HTMLElement>(".aiwa-panel");
  const header = root.querySelector<HTMLElement>(".aiwa-header");
  if (!panel || panel.querySelector(".se-lead-gate")) return;

  const accent = header ? getComputedStyle(header).backgroundColor : "#0f766e";
  const headerHeight = header?.offsetHeight ?? 60;

  const style = document.createElement("style");
  style.textContent = `
    .se-lead-gate {
      position: absolute;
      top: ${headerHeight}px;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 20;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .se-lead-gate-title { margin: 0 0 6px; font-size: 15px; font-weight: 600; color: #1a1a1a; }
    .se-lead-gate-body { margin: 0 0 16px; font-size: 13px; color: #666; line-height: 1.4; }
    .se-lead-gate input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 12px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
    }
    .se-lead-gate input:focus { outline: 2px solid ${accent}; outline-offset: -1px; }
    .se-lead-gate-error { margin: 0 0 10px; font-size: 12px; color: #d92d20; }
    .se-lead-gate button {
      width: 100%;
      padding: 10px 12px;
      border: none;
      border-radius: 8px;
      background: ${accent};
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
    }
    .se-lead-gate button:hover { opacity: 0.92; }
  `;
  root.appendChild(style);

  const overlay = document.createElement("div");
  overlay.className = "se-lead-gate";
  overlay.innerHTML = `
    <div style="width: 100%; max-width: 280px;">
      <p class="se-lead-gate-title">Before we start chatting</p>
      <p class="se-lead-gate-body">Tell us who you are so we can help you faster.</p>
      <input class="se-lead-name" type="text" placeholder="Your name" autocomplete="name" />
      <input class="se-lead-email" type="email" placeholder="Your email" autocomplete="email" />
      <p class="se-lead-gate-error" hidden></p>
      <button type="button">Start chatting</button>
    </div>
  `;
  panel.appendChild(overlay);

  const nameInput = overlay.querySelector<HTMLInputElement>(".se-lead-name")!;
  const emailInput = overlay.querySelector<HTMLInputElement>(".se-lead-email")!;
  const errorEl = overlay.querySelector<HTMLElement>(".se-lead-gate-error")!;
  const submitBtn = overlay.querySelector<HTMLButtonElement>("button")!;

  function showError(message: string) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  }

  function submit() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (!name) {
      showError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    const lead = { name, email };
    sendLeadToServer(lead);
    overlay.remove();
    onSubmit(lead);
  }

  submitBtn.addEventListener("click", submit);
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") emailInput.focus();
  });
  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submit();
  });

  window.setTimeout(() => nameInput.focus(), 50);
}

// Asks for name + email every time the chat is opened — closing the panel
// (or refreshing the page, which destroys all this in-memory state anyway)
// and reopening it always shows the gate again, deliberately with no
// persistence across opens.
function setupLeadCapture(root: ShadowRoot) {
  const panel = root.querySelector<HTMLElement>(".aiwa-panel");
  if (!panel || panel.dataset.seLeadWired) return;
  panel.dataset.seLeadWired = "true";

  const maybeShowGate = () => {
    if (!panel.classList.contains("aiwa-open")) return;
    mountLeadGate(root, (lead) => personalizeGreeting(root, lead.name));
  };

  maybeShowGate();
  const observer = new MutationObserver(maybeShowGate);
  observer.observe(panel, { attributes: true, attributeFilter: ["class"] });
}

export function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chatbot.vitalitysoft.com/widget.js";
    script.setAttribute("data-website-id", "smart-eye");
    script.setAttribute("data-chat-endpoint", "/api/chat-semantic");
    document.body.appendChild(script);

    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      const host = document.querySelector<HTMLElement>('[id^="aiwa-host-"]');
      if (host?.shadowRoot) {
        stripAssistantSuffix(host.shadowRoot);
        setupLeadCapture(host.shadowRoot);
        if (host.shadowRoot.querySelector(".aiwa-panel")) clearInterval(interval);
      }
      if (attempts > 40) clearInterval(interval); // give up after ~20s
    }, 500);

    return () => {
      clearInterval(interval);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
