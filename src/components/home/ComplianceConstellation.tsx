"use client";

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

  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Compliance"
          title="Built around the standards that matter."
          body="SmartEye's workflows are structured around the frameworks medical device and SaMD teams are held to — kept in view across every project."
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
                <stop offset="0%" stopColor="#4fd0f0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4fd0f0" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="1 5" />

            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step);
              return (
                <motion.line
                  key={s.code}
                  x1={CENTER}
                  y1={CENTER}
                  x2={p.x}
                  y2={p.y}
                  stroke="#4fd0f0"
                  strokeOpacity="0.3"
                  strokeWidth="1.2"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    show: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } },
                  }}
                />
              );
            })}

            <circle cx={CENTER} cy={CENTER} r="100" fill="url(#coreGlow2)" />
            <motion.g variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}>
              <circle cx={CENTER} cy={CENTER} r="50" fill="#070b12" stroke="#4fd0f0" strokeWidth="1.4" />
              <text x={CENTER} y={CENTER - 2} textAnchor="middle" className="fill-ice-100" style={{ font: "700 12px var(--font-display)" }}>
                SMARTEYE
              </text>
              <text x={CENTER} y={CENTER + 14} textAnchor="middle" className="fill-cyan-300" style={{ font: "600 9px var(--font-mono)", letterSpacing: "0.1em" }}>
                COMPLIANCE CORE
              </text>
            </motion.g>

            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step);
              return (
                <motion.circle
                  key={s.code}
                  cx={p.x}
                  cy={p.y}
                  r="4.5"
                  fill="#04070a"
                  stroke="#7fe8ff"
                  strokeWidth="1.6"
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 + i * 0.08 } },
                  }}
                />
              );
            })}
          </motion.svg>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {complianceStandards.map((s, i) => {
              const p = point(-90 + i * step, RADIUS + 40);
              const pct = { left: `${(p.x / 480) * 100}%`, top: `${(p.y / 480) * 100}%` };
              return (
                <span
                  key={s.code}
                  style={pct}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-950/80 px-3 py-1.5 text-xs font-medium text-ice-300 backdrop-blur"
                >
                  {s.code}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {complianceStandards.map((s) => (
            <div key={s.code} className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-center">
              <p className="text-xs font-semibold text-ice-100">{s.code}</p>
              <p className="mt-1 text-[0.65rem] text-ice-400">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
