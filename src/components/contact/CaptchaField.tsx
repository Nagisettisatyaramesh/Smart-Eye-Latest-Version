"use client";

import { useId } from "react";
import type { CaptchaState } from "@/lib/useCaptcha";

export function CaptchaField({ captcha, error }: { captcha: CaptchaState; error?: string }) {
  // Both forms can render a CaptchaField on the same page — a hardcoded id
  // would duplicate across them (invalid HTML, and breaks the label's
  // association with the wrong instance's input).
  const inputId = useId();

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm font-medium text-ice-200">CAPTCHA</p>
      <p className="mt-1 text-xs text-ice-400">
        This question is to verify you're a human visitor and to prevent automated spam submissions.
      </p>

      <div className="mt-3 flex items-center gap-3">
        {captcha.svg ? (
          <div
            className="overflow-hidden rounded-lg border border-white/10"
            // eslint-disable-next-line react/no-danger -- our own server-generated SVG, not user input
            dangerouslySetInnerHTML={{ __html: captcha.svg }}
          />
        ) : (
          <div className="flex h-[60px] w-[160px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-ice-400">
            Loading…
          </div>
        )}
        <button
          type="button"
          onClick={() => captcha.refresh()}
          disabled={captcha.loading}
          aria-label="Get a new CAPTCHA image"
          title="Get a new CAPTCHA image"
          className="rounded-full border border-white/15 p-2 text-ice-300 hover:border-teal-400/50 hover:text-teal-300 disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2v3h-3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <label htmlFor={inputId} className="mt-3 block text-sm font-medium text-ice-200">
        What code is in the image? <span className="text-signal-amber">*</span>
      </label>
      <input
        id={inputId}
        type="text"
        autoComplete="off"
        value={captcha.answer}
        onChange={(e) => captcha.setAnswer(e.target.value)}
        aria-invalid={!!error}
        className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ice-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/50 ${
          error ? "border-signal-rose/50" : "border-white/10 focus:border-teal-400/50"
        }`}
      />
      <p className="mt-1.5 text-xs text-ice-400">Enter the characters (without spaces) shown in the image.</p>
      {error && (
        <p className="mt-1.5 text-xs text-signal-rose" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
