"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const severityLabels = ["Negligible", "Minor", "Serious", "Critical", "Catastrophic"];
const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Frequent"];

// score = severity(1-5) * likelihood(1-5); banded into acceptable / ALARP / unacceptable
function band(score: number) {
  if (score <= 4) return "low";
  if (score <= 12) return "medium";
  return "high";
}

const bandColor: Record<string, string> = {
  low: "bg-teal-400/25 hover:bg-teal-400/35",
  medium: "bg-signal-amber/30 hover:bg-signal-amber/40",
  high: "bg-signal-rose/35 hover:bg-signal-rose/45",
};

const flow = [
  { label: "Hazard", detail: "Identify potential source of harm" },
  { label: "Risk", detail: "Estimate severity × likelihood" },
  { label: "Mitigation", detail: "Design or process control applied" },
  { label: "Control", detail: "Residual risk re-assessed" },
  { label: "Verification", detail: "Control effectiveness evidenced" },
];

export function RiskMatrix() {
  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <Container className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Risk management"
            title="Identify risk before it becomes reality."
            body="Score hazards by severity and likelihood, aligned to ISO 14971. SmartEye tracks each risk from identification through to verified control — connected to the design and test record."
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.1, 0.15)}
            className="mt-10 space-y-4"
          >
            {flow.map((step, i) => (
              <motion.li key={step.label} variants={fadeUp} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal-400/40 font-mono text-[0.65rem] text-teal-300">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ice-100">{step.label}</p>
                  <p className="text-sm text-ice-400">{step.detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-6 shadow-panel sm:p-8"
        >
          <div className="flex items-center justify-between">
            <p className="eyebrow text-ice-400">Risk Matrix</p>
            <div className="flex items-center gap-3 text-[0.65rem] text-ice-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-400/70" /> Acceptable
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-signal-amber/70" /> ALARP
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-signal-rose/70" /> Unacceptable
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[auto_1fr] gap-2">
            <div className="flex flex-col justify-between py-2 pr-1 text-right">
              {[...severityLabels].reverse().map((s) => (
                <span key={s} className="text-[0.6rem] text-ice-400">
                  {s}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[5, 4, 3, 2, 1].map((sev) =>
                [1, 2, 3, 4, 5].map((lik) => {
                  const score = sev * lik;
                  return (
                    <motion.div
                      key={`${sev}-${lik}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.3, delay: (sev + lik) * 0.02 }}
                      className={`aspect-square rounded-md transition-colors duration-300 ${bandColor[band(score)]}`}
                    />
                  );
                }),
              )}
            </div>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1.5 pl-[52px]">
            {likelihoodLabels.map((l) => (
              <span key={l} className="text-center text-[0.55rem] text-ice-400">
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
