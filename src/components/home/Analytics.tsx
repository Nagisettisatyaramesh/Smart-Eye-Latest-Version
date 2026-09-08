"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const kpis = [
  { label: "Compliance progress", value: "82%" },
  { label: "Open CAPAs", value: "4" },
  { label: "Tests in review", value: "12" },
  { label: "Approvals pending", value: "3" },
];

const bars = [
  { label: "Requirements", value: 92 },
  { label: "Design Control", value: 78 },
  { label: "Risk Mgmt", value: 88 },
  { label: "Testing", value: 64 },
  { label: "Validation", value: 55 },
];

const donutSegments = [
  { label: "Approved", value: 58, color: "#4fd6c8" },
  { label: "In review", value: 26, color: "#e8a94f" },
  { label: "Draft", value: 16, color: "#3d4552" },
];

function Donut() {
  const circumference = 2 * Math.PI * 46;
  let offset = 0;
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
      <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
      {donutSegments.map((seg) => {
        const len = (seg.value / 100) * circumference;
        const el = (
          <motion.circle
            key={seg.label}
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke={seg.color}
            strokeWidth="14"
            strokeDasharray={`${len} ${circumference - len}`}
            strokeDashoffset={-offset}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

export function Analytics() {
  return (
    <section className="relative overflow-hidden bg-ice-100 py-28 sm:py-36">
      <Container className="relative">
        <SectionHeading
          surface="light"
          align="center"
          eyebrow="Analytics"
          title="See the state of quality, at a glance."
          body="Analytics dashboards measure progress across compliance phases — filter by user, team or project inside the SmartEye interface."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel mt-16 rounded-3xl p-6 shadow-panel sm:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5"
              >
                <p className="text-[0.65rem] uppercase tracking-widest2 text-ice-400">{k.label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-ice-100">{k.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p className="text-xs font-medium text-ice-300">Project status by process area</p>
              <div className="mt-6 space-y-4">
                {bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="mb-1.5 flex justify-between text-xs text-ice-400">
                      <span>{b.label}</span>
                      <span className="font-mono">{b.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.value}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p className="self-start text-xs font-medium text-ice-300">Approval status</p>
              <Donut />
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {donutSegments.map((s) => (
                  <span key={s.label} className="flex items-center gap-1.5 text-[0.65rem] text-ice-400">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-graphite-500">
          Illustrative product view — sample data shown for demonstration purposes only.
        </p>
      </Container>
    </section>
  );
}
