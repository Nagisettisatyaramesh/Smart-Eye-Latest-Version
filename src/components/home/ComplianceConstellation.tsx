"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { complianceStandards } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

const CENTER = 240;
const RADIUS = 190;

function point(angleDeg: number, r = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

export function ComplianceConstellation() {
  const step = 360 / complianceStandards.length;
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const active = complianceStandards.find((s) => s.code === activeCode) ?? null;

  return (
    <section className="relative overflow-hidden bg-ice-100 py-28 sm:py-36">
      <Container className="relative">
        <SectionHeading
          surface="light"
          align="center"
          eyebrow="Compliance"
          title="Built around the standards that matter."
          body="SmartEye's workflows are structured around the frameworks medical device and SaMD teams are held to. Select a standard to see what it covers."
        />

        <div className="relative mt-16 flex justify-center">
          <motion.svg
            viewBox="0 0 480 480"
            className="h-auto w-full max-w-[480px]"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <defs>
              <radialGradient id="coreGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#16b8a6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#16b8a6" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(7,17,31,0.1)" strokeWidth="1" strokeDasharray="1 5" />

            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step);
              const isActive = s.code === activeCode;
              return (
                <motion.line
                  key={s.code}
                  x1={CENTER}
                  y1={CENTER}
                  x2={p.x}
                  y2={p.y}
                  stroke={isActive ? "#16b8a6" : "#38d9e8"}
                  strokeOpacity={isActive ? 0.8 : 0.35}
                  strokeWidth={isActive ? 2 : 1.2}
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } },
                  }}
                />
              );
            })}

            <circle cx={CENTER} cy={CENTER} r="100" fill="url(#coreGlow2)" />
            <motion.g variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}>
              <circle cx={CENTER} cy={CENTER} r="50" fill="#ffffff" stroke="#16b8a6" strokeWidth="1.4" />
              <text x={CENTER} y={CENTER - 2} textAnchor="middle" className="fill-navy-950" style={{ font: "700 12px var(--font-display)" }}>
                SMARTEYE
              </text>
              <text x={CENTER} y={CENTER + 14} textAnchor="middle" className="fill-teal-600" style={{ font: "600 9px var(--font-mono)", letterSpacing: "0.1em" }}>
                COMPLIANCE CORE
              </text>
            </motion.g>

            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step);
              const isActive = s.code === activeCode;
              return (
                <motion.g
                  key={s.code}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveCode(s.code)}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 + i * 0.08 } },
                  }}
                >
                  <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isActive ? 6.5 : 4.5}
                    fill={isActive ? "#16b8a6" : "#ffffff"}
                    stroke="#16b8a6"
                    strokeWidth="1.6"
                  />
                </motion.g>
              );
            })}
          </motion.svg>

          <div className="absolute inset-0 hidden lg:block">
            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step, RADIUS + 40);
              const pct = { left: `${(p.x / 480) * 100}%`, top: `${(p.y / 480) * 100}%` };
              const isActive = s.code === activeCode;
              return (
                <button
                  key={s.code}
                  type="button"
                  onClick={() => setActiveCode(s.code)}
                  style={pct}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur transition-colors ${
                    isActive
                      ? "border-teal-500/50 bg-teal-500/10 text-teal-700"
                      : "border-navy-950/10 bg-white/80 text-graphite-600 hover:border-teal-500/40"
                  }`}
                >
                  {s.code}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 min-h-[64px] max-w-xl text-center">
          {active ? (
            <motion.p
              key={active.code}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-graphite-600"
            >
              <span className="font-semibold text-navy-950">{active.code}</span> — {active.label}
            </motion.p>
          ) : (
            <p className="text-sm text-graphite-500">Select a standard above to see what it covers.</p>
          )}
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {complianceStandards.map((s) => (
            <button
              key={s.code}
              type="button"
              onClick={() => setActiveCode(s.code)}
              className={`rounded-xl border px-3 py-3 text-center transition-colors ${
                s.code === activeCode ? "border-teal-500/50 bg-teal-500/10" : "border-navy-950/8 bg-white"
              }`}
            >
              <p className="text-xs font-semibold text-navy-950">{s.code}</p>
              <p className="mt-1 text-[0.65rem] text-graphite-500">{s.label}</p>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
