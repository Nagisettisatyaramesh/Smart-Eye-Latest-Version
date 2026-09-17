"use client";

import { useState } from "react";
import { BLOG_TEMPLATES } from "@/lib/blogTemplates";
import { TemplateThumbnail } from "@/components/admin/TemplateThumbnail";

export function TemplatePicker({
  currentSlug,
  onSelect,
  title = "Choose a Template",
  subtitle = "Pick the layout your article will use — you can change this later without losing any content.",
}: {
  currentSlug?: string;
  onSelect: (slug: string) => void;
  title?: string;
  subtitle?: string;
}) {
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const deviceWidth = device === "mobile" ? "390px" : device === "tablet" ? "768px" : "100%";

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ice-100">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-ice-400">{subtitle}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_TEMPLATES.map((t) => (
          <div
            key={t.slug}
            className={`flex flex-col rounded-2xl border p-5 transition-colors ${
              currentSlug === t.slug
                ? "border-teal-400/60 bg-teal-400/[0.04]"
                : "border-white/8 bg-white/[0.02] hover:border-white/15"
            }`}
          >
            <TemplateThumbnail slug={t.slug} />
            <div className="mt-4 flex items-center justify-between gap-2">
              <h3 className="font-display text-base font-semibold text-ice-100">{t.name}</h3>
              {currentSlug === t.slug && (
                <span className="rounded-full bg-teal-400/15 px-2.5 py-1 text-[0.65rem] font-medium text-teal-300">
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-teal-400">{t.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ice-400">{t.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {t.features.map((f) => (
                <li key={f} className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] text-ice-300">
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setPreviewSlug(t.slug)}
                className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-ice-200 hover:border-teal-400/50"
              >
                Preview Template
              </button>
              <button
                type="button"
                onClick={() => onSelect(t.slug)}
                className="flex-1 rounded-full bg-teal-400 px-4 py-2.5 text-xs font-semibold text-navy-950 hover:bg-teal-300"
              >
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {previewSlug && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950">
          <div className="sticky top-0 z-10 border-b border-white/10 bg-navy-950/95 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
              <button
                type="button"
                onClick={() => setPreviewSlug(null)}
                className="flex items-center gap-2 text-sm font-medium text-ice-200 hover:text-teal-300"
              >
                ← Back to Templates
              </button>
              <p className="text-sm font-medium text-ice-200">
                <span className="text-teal-300">{BLOG_TEMPLATES.find((t) => t.slug === previewSlug)?.name}</span>{" "}
                Template
              </p>
              <button
                type="button"
                onClick={() => {
                  onSelect(previewSlug!);
                  setPreviewSlug(null);
                }}
                className="rounded-full bg-teal-400 px-4 py-2 text-xs font-semibold text-navy-950 hover:bg-teal-300"
              >
                Use This Template
              </button>
            </div>
            <div className="flex justify-center gap-1.5 border-t border-white/8 py-2.5">
              {(["desktop", "tablet", "mobile"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDevice(d)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium capitalize transition-colors ${
                    device === d ? "bg-teal-400/15 text-teal-300" : "text-ice-400 hover:text-ice-200"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center bg-navy-950 py-6" style={{ height: "calc(100vh - 130px)" }}>
            <div
              className={`h-full w-full overflow-hidden transition-[max-width] duration-300 ${
                device !== "desktop" ? "rounded-2xl border border-white/10 shadow-2xl" : ""
              }`}
              style={{ maxWidth: deviceWidth }}
            >
              {/* Rendered in a real iframe (its own viewport) rather than a
                  width-constrained div, so sm:/lg: breakpoints inside the
                  template actually respond to the Tablet/Mobile width
                  instead of staying laid out for the parent page's viewport. */}
              <iframe
                key={previewSlug}
                src={`/admin/template-preview/${previewSlug}`}
                title="Template preview"
                className="h-full w-full border-0 bg-navy-950"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
