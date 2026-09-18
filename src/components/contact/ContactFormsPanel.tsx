"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactUsForm } from "@/components/contact/ContactUsForm";
import { GetDemoForm } from "@/components/contact/GetDemoForm";

type View = "contact" | "demo";

function readView(): View {
  return typeof window !== "undefined" && window.location.hash === "#demo" ? "demo" : "contact";
}

// Only one form is ever shown — which one is decided by the URL: plain
// /contact for the enquiry form, /contact#demo (what every "Request Demo"
// button sitewide already links to) for the demo form. A small link lets
// someone switch without going back to the nav.
export function ContactFormsPanel() {
  const [view, setView] = useState<View>("contact");

  useEffect(() => {
    setView(readView());
    const onHashChange = () => setView(readView());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function switchTo(next: View) {
    window.location.hash = next === "demo" ? "demo" : "";
    setView(next);
  }

  if (view === "demo") {
    return (
      <Reveal delay={0.1}>
        <div id="demo" className="glass-panel scroll-mt-32 rounded-3xl p-8 shadow-panel sm:p-10">
          <p className="eyebrow text-teal-400">Request a demo</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ice-100">
            Arrange your free tailored demo
          </h2>
          <p className="mt-2 text-sm text-ice-400">
            See for yourself how an enhanced 360° view could benefit your SaMD design and development.
          </p>
          <div className="mt-8">
            <GetDemoForm />
          </div>
          <button
            type="button"
            onClick={() => switchTo("contact")}
            className="mt-6 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            Just have a question? Contact us instead →
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={0.1}>
      <div className="glass-panel scroll-mt-32 rounded-3xl p-8 shadow-panel sm:p-10">
        <p className="eyebrow text-teal-400">Contact us</p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ice-100">Send us a message</h2>
        <p className="mt-2 text-sm text-ice-400">
          Have a question, or want to talk to a real person first? Drop us a line and we'll get back to
          you.
        </p>
        <div className="mt-8">
          <ContactUsForm />
        </div>
        <button
          type="button"
          onClick={() => switchTo("demo")}
          className="mt-6 text-sm font-medium text-teal-300 hover:text-teal-200"
        >
          Looking to book a demo instead? →
        </button>
      </div>
    </Reveal>
  );
}
