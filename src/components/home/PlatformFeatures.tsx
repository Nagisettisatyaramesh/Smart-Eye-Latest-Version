"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platformCapabilities } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import Link from "next/link";

const accents: Record<string, JSX.Element> = {
  requirements: (
    <div className="flex flex-col gap-1.5">
      {[70, 100, 45].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-white/8">
          <div className="h-full rounded-full bg-teal-400/70" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  ),
  "design-control": (
    <div className="flex gap-1.5">
      {["Input", "Review", "Output"].map((s) => (
        <span key={s} className="rounded-full border border-white/10 px-2.5 py-1 text-[0.6rem] text-ice-400">
          {s}
        </span>
      ))}
    </div>
  ),
  risk: (
    <div className="grid grid-cols-4 gap-1">
      {[1, 2, 1, 3, 2, 1, 2, 1].map((v, i) => (
        <div
          key={i}
          className="h-2.5 rounded-sm"
          style={{ background: v > 2 ? "rgba(224,99,122,0.55)" : v > 1 ? "rgba(232,169,79,0.5)" : "rgba(79,214,200,0.4)" }}
        />
      ))}
    </div>
  ),
  "test-management": (
    <div className="flex items-center gap-1.5 font-mono text-[0.6rem] text-teal-300">
      <span className="rounded bg-teal-400/15 px-1.5 py-0.5">PASS</span>
      <span className="rounded bg-teal-400/15 px-1.5 py-0.5">PASS</span>
      <span className="rounded bg-signal-amber/15 px-1.5 py-0.5 text-signal-amber">REVIEW</span>
    </div>
  ),
  traceability: (
    <svg width="100%" height="28" viewBox="0 0 200 28" className="text-teal-400/70">
      <path d="M4 14h30M74 14h30M144 14h30" stroke="currentColor" strokeWidth="1" />
      {[4, 40, 74, 110, 144, 180].map((x, i) => (
        <circle key={i} cx={x + 15} cy={14} r={3.5} fill="#04070a" stroke="currentColor" strokeWidth="1.2" />
      ))}
    </svg>
  ),
  documents: (
    <div className="flex -space-x-3">
      {["QMS", "DHF", "DMR"].map((d) => (
        <span
          key={d}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-navy-900 text-[0.55rem] font-semibold text-ice-300"
        >
          {d}
        </span>
      ))}
    </div>
  ),
  "review-approval": (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#4fd6c8" strokeWidth="1.2" />
        <path d="M5 8l2 2 4-4" stroke="#4fd6c8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-[0.6rem] text-ice-400">e-signed · 21 CFR Part 11</span>
    </div>
  ),
  analytics: (
    <div className="flex items-end gap-1">
      {[6, 14, 9, 18, 12, 20].map((h, i) => (
        <div key={i} className="w-2 rounded-t bg-teal-400/60" style={{ height: `${h}px` }} />
      ))}
    </div>
  ),
};

export function PlatformFeatures() {
  return (
    <section id="platform-features" className="relative overflow-hidden bg-void py-28 sm:py-36">
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Core platform"
            title={
              <>
                Everything your quality team needs.
                <br />
                Connected in one platform.
              </>
            }
          />
          <Link
            href="/platform"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-teal-300 lg:flex"
          >
            View full platform
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0.1)}
          className="mt-16 grid gap-5 sm:grid-cols-2"
        >
          {platformCapabilities.map((f) => (
            <motion.div
              key={f.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.035] to-transparent p-8 transition-all duration-500 hover:border-teal-400/30 hover:bg-white/[0.05]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-400/0 blur-3xl transition-all duration-700 group-hover:bg-teal-400/15"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-ice-400">{f.number}</span>
                <span className="h-8 w-8 rounded-full border border-white/10 transition-colors duration-500 group-hover:border-teal-400/50" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ice-100">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ice-400">{f.summary}</p>
              <div className="mt-6 min-h-[28px]">{accents[f.id]}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
