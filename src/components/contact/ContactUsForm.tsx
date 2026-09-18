"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCaptcha } from "@/lib/useCaptcha";
import { CaptchaField } from "@/components/contact/CaptchaField";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Distinct from GetDemoForm — matches the simpler enquiry form used on the
// production site's own Contact page: no country field, a single message
// box instead of a "requirement" prompt, stacked full-width fields.
export function ContactUsForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [captchaError, setCaptchaError] = useState<string | undefined>();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const captcha = useCaptcha();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    setErrors(next);

    const captchaOk = captcha.answer.trim().length > 0;
    setCaptchaError(captchaOk ? undefined : "Please enter the code shown in the image.");

    return Object.keys(next).length === 0 && captchaOk;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          formType: "contact",
          captchaToken: captcha.token,
          captchaAnswer: captcha.answer,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.error === "CAPTCHA_MISMATCH") {
          setCaptchaError("That code doesn't match — please try again with the new image.");
          captcha.refresh();
          setStatus("idle");
          return;
        }
        throw new Error("Request failed");
      }
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
      captcha.refresh();
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-teal-400/25 bg-teal-400/5 px-8 py-16 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/40">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
            <path d="M3 8.5l3 3 7-7" stroke="#4fd6c8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-ice-100">Thanks — message sent.</h3>
        <p className="mt-2 max-w-sm text-sm text-ice-400">
          A member of the SmartEye eQMS team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-teal-300 hover:text-teal-200"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Your name" htmlFor="contact-name" error={errors.name}>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
          className={inputClass(!!errors.name)}
        />
      </Field>
      <Field label="Your email" htmlFor="contact-email" error={errors.email}>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          className={inputClass(!!errors.email)}
        />
      </Field>
      <Field label="Phone number" htmlFor="contact-phone" error={errors.phone} optional>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass(false)}
        />
      </Field>
      <Field label="Company name" htmlFor="contact-company" error={errors.company} optional>
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass(false)}
        />
      </Field>
      <Field label="Message" htmlFor="contact-message" error={errors.message}>
        <textarea
          id="contact-message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClass(!!errors.message)}
          placeholder="Write a message…"
        />
      </Field>

      <CaptchaField captcha={captcha} error={captchaError} />

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="rounded-xl border border-signal-rose/30 bg-signal-rose/10 px-4 py-3 text-sm text-signal-rose"
          >
            Something went wrong sending your message. Please try again, or email us directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-navy-950/40 border-t-navy-950" />
            Sending…
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ice-200">
        {label}
        {optional && <span className="ml-1.5 text-xs font-normal text-ice-400">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-signal-rose" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ice-100 placeholder:text-ice-400/60 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/50 ${
    hasError ? "border-signal-rose/50" : "border-white/10 focus:border-teal-400/50"
  }`;
}
