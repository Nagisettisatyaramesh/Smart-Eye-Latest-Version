"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { platformCapabilities } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

const RADIUS = 220;
const CENTER = 260;
const STEP = 360 / platformCapabilities.length;

function point(angleDeg: number, r = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

const accents: Record<string, JSX.Element> = {
  requirements: (
    <div className="flex flex-col gap-1.5">
      {[70, 100, 45].map((w, i) => (
        <div key={i} className="h-1.5 rounded-full bg-navy-950/8">
          <div className="h-full rounded-full bg-teal-500/70" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  ),
  "design-control": (
    <div className="flex gap-1.5">
      {["Input", "Review", "Output"].map((s) => (
        <span key={s} className="rounded-full border border-navy-950/10 px-2.5 py-1 text-[0.6rem] text-graphite-500">
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
          style={{ background: v > 2 ? "rgba(224,99,122,0.6)" : v > 1 ? "rgba(232,169,79,0.55)" : "rgba(22,184,166,0.5)" }}
        />
      ))}
    </div>
  ),
  "test-management": (
    <div className="flex items-center gap-1.5 font-mono text-[0.6rem] text-teal-600">
      <span className="rounded bg-teal-500/15 px-1.5 py-0.5">PASS</span>
      <span className="rounded bg-teal-500/15 px-1.5 py-0.5">PASS</span>
      <span className="rounded bg-signal-amber/20 px-1.5 py-0.5 text-signal-amber">REVIEW</span>
    </div>
  ),
  traceability: (
    <svg width="100%" height="24" viewBox="0 0 200 24" className="text-teal-600/70">
      <path d="M4 12h30M74 12h30M144 12h30" stroke="currentColor" strokeWidth="1" />
      {[4, 40, 74, 110, 144, 180].map((x, i) => (
        <circle key={i} cx={x + 15} cy={12} r={3} fill="#f7fafc" stroke="currentColor" strokeWidth="1.2" />
      ))}
    </svg>
  ),
  documents: (
    <div className="flex -space-x-3">
      {["QMS", "DHF", "DMR"].map((d) => (
        <span
          key={d}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-navy-950/10 bg-white text-[0.55rem] font-semibold text-graphite-600 shadow-sm"
        >
          {d}
        </span>
      ))}
    </div>
  ),
  "review-approval": (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#16b8a6" strokeWidth="1.2" />
        <path d="M5 8l2 2 4-4" stroke="#16b8a6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-[0.6rem] text-graphite-500">e-signed · 21 CFR Part 11</span>
    </div>
  ),
  analytics: (
    <div className="flex items-end gap-1">
      {[6, 14, 9, 18, 12, 20].map((h, i) => (
        <div key={i} className="w-2 rounded-t bg-teal-500/70" style={{ height: `${h}px` }} />
      ))}
    </div>
  ),
};

export function SystemDiagram() {
  const [activeId, setActiveId] = useState(platformCapabilities[0].id);
  const active = platformCapabilities.find((c) => c.id === activeId)!;

  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(79,214,200,0.08)_0%,transparent_70%)]" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="The SmartEye solution"
          title={
            <>
              One intelligent system.
              <br />
              Every quality process connected.
            </>
          }
          body="SmartEye eQMS sits at the centre of your medical device lifecycle. Select a capability to see how it works."
        />

        <div className="relative mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative flex justify-center">
            <motion.svg
              viewBox="0 0 520 520"
              className="h-auto w-full max-w-[520px]"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4fd6c8" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#4fd6c8" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4fd6c8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#4fd6c8" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx={CENTER} cy={CENTER} r={RADIUS - 44} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" />

              {platformCapabilities.map((cap, i) => {
                const p = point(-90 + i * STEP);
                const isActive = cap.id === activeId;
                return (
                  <motion.line
                    key={cap.id}
                    x1={CENTER}
                    y1={CENTER}
                    x2={p.x}
                    y2={p.y}
                    stroke={isActive ? "#7fe8ff" : "url(#lineGrad)"}
                    strokeWidth={isActive ? 2 : 1.4}
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      show: {
                        pathLength: 1,
                        opacity: 1,
                        transition: { duration: 1, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  />
                );
              })}

              <circle cx={CENTER} cy={CENTER} r="120" fill="url(#coreGlow)" />
              <motion.g
                variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <circle cx={CENTER} cy={CENTER} r="58" fill="#070b12" stroke="#4fd6c8" strokeWidth="1.4" />
                <circle cx={CENTER} cy={CENTER} r="44" fill="none" stroke="rgba(79,214,200,0.35)" strokeWidth="1" />
                <text x={CENTER} y={CENTER - 4} textAnchor="middle" className="fill-ice-100" style={{ font: "700 12px var(--font-display)", letterSpacing: "0.02em" }}>
                  SMARTEYE
                </text>
                <text x={CENTER} y={CENTER + 14} textAnchor="middle" className="fill-teal-300" style={{ font: "600 10px var(--font-mono)", letterSpacing: "0.15em" }}>
                  eQMS
                </text>
              </motion.g>

              {platformCapabilities.map((cap, i) => {
                const p = point(-90 + i * STEP);
                const isActive = cap.id === activeId;
                return (
                  <motion.g
                    key={cap.id}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 + i * 0.07, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveId(cap.id)}
                  >
                    <circle cx={p.x} cy={p.y} r={isActive ? 18 : 14} fill="transparent" />
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? 7 : 5}
                      fill={isActive ? "#7fe8ff" : "#04070a"}
                      stroke="#7fe8ff"
                      strokeWidth="1.6"
                      animate={{ r: isActive ? 7 : 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <circle cx={p.x} cy={p.y} r="1.6" fill={isActive ? "#04070a" : "#7fe8ff"} />
                  </motion.g>
                );
              })}
            </motion.svg>

            {/* labels positioned via CSS grid overlay for legibility across screens */}
            <div className="absolute inset-0 hidden lg:block">
              {platformCapabilities.map((cap, i) => {
                const p = point(-90 + i * STEP, RADIUS + 32);
                const pct = { left: `${(p.x / 520) * 100}%`, top: `${(p.y / 520) * 100}%` };
                const isActive = cap.id === activeId;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveId(cap.id)}
                    style={pct}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur transition-colors ${
                      isActive
                        ? "border-teal-400/60 bg-teal-400/15 text-teal-200"
                        : "border-white/10 bg-navy-950/80 text-ice-300 hover:border-teal-400/30 hover:text-teal-200"
                    }`}
                  >
                    {cap.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* detail panel — updates on selection */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-panel backdrop-blur">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-xs text-teal-300">{active.number}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ice-100">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-300">{active.summary}</p>
              <div className="mt-6 rounded-2xl border border-navy-950/10 bg-white p-4">
                {accents[active.id]}
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5 lg:hidden">
              {platformCapabilities.map((cap) => (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveId(cap.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    cap.id === activeId
                      ? "border-teal-400/60 bg-teal-400/15 text-teal-200"
                      : "border-white/10 text-ice-300"
                  }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
