"use client";

import { useEffect } from "react";

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
      if (host?.shadowRoot && stripAssistantSuffix(host.shadowRoot)) {
        clearInterval(interval);
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
