"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { securityPrinciples, roles } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const regions = [
  { label: "North America", cx: 90, cy: 150 },
  { label: "Europe", cx: 250, cy: 110 },
  { label: "Asia", cx: 340, cy: 150 },
  { label: "Australia", cx: 360, cy: 250 },
  { label: "South America", cx: 140, cy: 260 },
];

const controls = [
  "Role-based access permissions",
  "Secure cloud access from any location",
  "Full audit trail on every record",
  "Controlled review and approval chains",
];

export function GlobalSection() {
  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Cloud security & global collaboration"
          title="One quality platform. Teams across the world."
          body="Your quality system, securely available everywhere your team works — collaborate, review and approve from wherever you are."
        />

        <div className="relative mt-16 flex justify-center">
          <svg viewBox="0 0 440 320" className="h-auto w-full max-w-2xl">
            {/* globe wireframe */}
            <ellipse cx="220" cy="180" rx="170" ry="120" fill="none" stroke="rgba(255,255,255,0.08)" />
            <ellipse cx="220" cy="180" rx="170" ry="60" fill="none" stroke="rgba(255,255,255,0.06)" />
            <ellipse cx="220" cy="180" rx="90" ry="120" fill="none" stroke="rgba(255,255,255,0.06)" />
            <line x1="50" y1="180" x2="390" y2="180" stroke="rgba(255,255,255,0.08)" />

            {/* connecting arcs */}
            {regions.map((r, i) => {
              const next = regions[(i + 1) % regions.length];
              const midX = (r.cx + next.cx) / 2;
              const midY = Math.min(r.cy, next.cy) - 46;
              return (
                <motion.path
                  key={`${r.label}-${next.label}`}
                  d={`M${r.cx},${r.cy} Q${midX},${midY} ${next.cx},${next.cy}`}
                  fill="none"
                  stroke="#4fd6c8"
                  strokeOpacity="0.35"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 1.2, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
              );
            })}

            {regions.map((r, i) => (
              <motion.g
                key={r.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              >
                <circle cx={r.cx} cy={r.cy} r="10" fill="#4fd6c8" fillOpacity="0.12" />
                <circle cx={r.cx} cy={r.cy} r="4" fill="#04070a" stroke="#7fe8ff" strokeWidth="1.6" />
                <text
                  x={r.cx}
                  y={r.cy - 16}
                  textAnchor="middle"
                  className="fill-ice-300"
                  style={{ font: "500 10px var(--font-body)" }}
                >
                  {r.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.1)}
            className="glass-panel rounded-3xl p-8"
          >
            <p className="eyebrow text-teal-400">Security principles</p>
            <div className="mt-6 space-y-5">
              {securityPrinciples.map((p) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <p className="text-sm font-semibold text-ice-100">{p.title}</p>
                  <p className="mt-1 text-sm text-ice-400">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.1)}
            className="glass-panel rounded-3xl p-8"
          >
            <p className="eyebrow text-teal-400">Access & control</p>
            <ul className="mt-6 space-y-4">
              {controls.map((c) => (
                <motion.li key={c} variants={fadeUp} className="flex items-center gap-3 text-sm text-ice-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#4fd6c8" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#4fd6c8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {c}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
              {roles.map((r) => (
                <span key={r} className="rounded-full border border-white/10 px-3 py-1.5 text-[0.65rem] text-ice-400">
                  {r}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
