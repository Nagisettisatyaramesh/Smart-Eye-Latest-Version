"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const nodes = [
  { label: "Requirements", angle: -90 },
  { label: "Design Control", angle: -54 },
  { label: "Risk", angle: -18 },
  { label: "Testing", angle: 18 },
  { label: "Verification", angle: 54 },
  { label: "Validation", angle: 90 },
  { label: "Documents", angle: 126 },
  { label: "Compliance", angle: 162 },
  { label: "Post-Market", angle: -126 },
];

const RADIUS = 230;
const CENTER = 260;

function point(angleDeg: number, r = RADIUS) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + r * Math.cos(rad), y: CENTER + r * Math.sin(rad) };
}

export function SystemDiagram() {
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
          body="SmartEye eQMS sits at the centre of your medical device lifecycle — connecting the people, records and processes that used to live apart."
        />

        <div className="relative mt-16 flex justify-center">
          <motion.svg
            viewBox="0 0 520 520"
            className="h-auto w-full max-w-[560px]"
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

            {/* orbit rings */}
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <circle cx={CENTER} cy={CENTER} r={RADIUS - 46} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" />

            {/* connecting lines */}
            {nodes.map((n, i) => {
              const p = point(n.angle);
              return (
                <motion.line
                  key={n.label}
                  x1={CENTER}
                  y1={CENTER}
                  x2={p.x}
                  y2={p.y}
                  stroke="url(#lineGrad)"
                  strokeWidth="1.4"
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

            {/* core glow + node */}
            <circle cx={CENTER} cy={CENTER} r="120" fill="url(#coreGlow)" />
            <motion.g
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <circle cx={CENTER} cy={CENTER} r="58" fill="#070b12" stroke="#4fd6c8" strokeWidth="1.4" />
              <circle cx={CENTER} cy={CENTER} r="44" fill="none" stroke="rgba(79,214,200,0.35)" strokeWidth="1" />
              <text
                x={CENTER}
                y={CENTER - 4}
                textAnchor="middle"
                className="fill-ice-100"
                style={{ font: "700 12px var(--font-display)", letterSpacing: "0.02em" }}
              >
                SMARTEYE
              </text>
              <text
                x={CENTER}
                y={CENTER + 14}
                textAnchor="middle"
                className="fill-teal-300"
                style={{ font: "600 10px var(--font-mono)", letterSpacing: "0.15em" }}
              >
                eQMS
              </text>
            </motion.g>

            {/* satellite nodes */}
            {nodes.map((n, i) => {
              const p = point(n.angle);
              return (
                <motion.g
                  key={n.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    show: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 + i * 0.07, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <circle cx={p.x} cy={p.y} r="5" fill="#04070a" stroke="#7fe8ff" strokeWidth="1.6" />
                  <circle cx={p.x} cy={p.y} r="1.6" fill="#7fe8ff" />
                </motion.g>
              );
            })}
          </motion.svg>

          {/* labels positioned via CSS grid overlay for legibility across screens */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {nodes.map((n) => {
              const p = point(n.angle, RADIUS + 34);
              const pct = { left: `${(p.x / 520) * 100}%`, top: `${(p.y / 520) * 100}%` };
              return (
                <span
                  key={n.label}
                  style={pct}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-950/80 px-3 py-1.5 text-xs font-medium text-ice-300 backdrop-blur"
                >
                  {n.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* mobile / accessible list fallback of the same relationships */}
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 lg:hidden">
          {nodes.map((n) => (
            <li
              key={n.label}
              className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5 text-sm text-ice-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {n.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
