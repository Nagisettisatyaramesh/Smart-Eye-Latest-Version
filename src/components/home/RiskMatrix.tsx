"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const severityLabels = ["Negligible", "Minor", "Serious", "Critical", "Catastrophic"];
const likelihoodLabels = ["Rare", "Unlikely", "Possible", "Likely", "Frequent"];

// score = severity(1-5) * likelihood(1-5); banded into acceptable / ALARP / unacceptable
function band(score: number): "low" | "medium" | "high" {
  if (score <= 4) return "low";
  if (score <= 12) return "medium";
  return "high";
}

const bandColor: Record<string, string> = {
  low: "bg-teal-500/25 hover:bg-teal-500/40",
  medium: "bg-signal-amber/40 hover:bg-signal-amber/55",
  high: "bg-signal-rose/45 hover:bg-signal-rose/60",
};

const bandLabel: Record<string, string> = {
  low: "Acceptable",
  medium: "ALARP — as low as reasonably practicable",
  high: "Unacceptable — requires mitigation",
};

// illustrative sample record shown when a matrix cell is selected — not real risk data
const sampleRecord = {
  id: "RM-031",
  control: "Design mitigation applied",
  verification: "TC-2201",
  status: "Verified",
};

const flow = [
  { label: "Hazard", detail: "Identify potential source of harm" },
  { label: "Risk", detail: "Estimate severity × likelihood" },
  { label: "Mitigation", detail: "Design or process control applied" },
  { label: "Control", detail: "Residual risk re-assessed" },
  { label: "Verification", detail: "Control effectiveness evidenced" },
];

export function RiskMatrix() {
  const [selected, setSelected] = useState<{ sev: number; lik: number } | null>(null);
  const selectedBand = selected ? band(selected.sev * selected.lik) : null;

  return (
    <section className="relative overflow-hidden bg-ice-100 py-28 sm:py-36">
      <Container className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            surface="light"
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
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal-500/40 font-mono text-[0.65rem] text-teal-600">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-950">{step.label}</p>
                  <p className="text-sm text-graphite-500">{step.detail}</p>
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
          className="rounded-3xl border border-navy-950/8 bg-white p-6 shadow-[0_20px_60px_rgba(7,17,31,0.08)] sm:p-8"
        >
          <div className="flex items-center justify-between">
            <p className="eyebrow text-graphite-500">Risk Matrix</p>
            <div className="flex items-center gap-3 text-[0.65rem] text-graphite-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-teal-500/70" /> Acceptable
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
                <span key={s} className="text-[0.6rem] text-graphite-500">
                  {s}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[5, 4, 3, 2, 1].map((sev) =>
                [1, 2, 3, 4, 5].map((lik) => {
                  const score = sev * lik;
                  const isSelected = selected?.sev === sev && selected?.lik === lik;
                  return (
                    <motion.button
                      key={`${sev}-${lik}`}
                      type="button"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.3, delay: (sev + lik) * 0.02 }}
                      onMouseEnter={() => setSelected({ sev, lik })}
                      onFocus={() => setSelected({ sev, lik })}
                      aria-label={`Severity ${severityLabels[sev - 1]}, likelihood ${likelihoodLabels[lik - 1]}`}
                      className={`aspect-square rounded-md border-0 p-0 transition-all duration-200 ${bandColor[band(score)]} ${
                        isSelected ? "ring-2 ring-navy-950/70" : ""
                      }`}
                    />
                  );
                }),
              )}
            </div>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1.5 pl-[52px]">
            {likelihoodLabels.map((l) => (
              <span key={l} className="text-center text-[0.55rem] text-graphite-500">
                {l}
              </span>
            ))}
          </div>

          <div className="mt-6 min-h-[92px] rounded-2xl border border-navy-950/8 bg-ice-100 p-4">
            {selected && selectedBand ? (
              <motion.div
                key={`${selected.sev}-${selected.lik}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs"
              >
                <div>
                  <p className="text-graphite-500">Severity</p>
                  <p className="font-semibold text-navy-950">{severityLabels[selected.sev - 1]}</p>
                </div>
                <div>
                  <p className="text-graphite-500">Likelihood</p>
                  <p className="font-semibold text-navy-950">{likelihoodLabels[selected.lik - 1]}</p>
                </div>
                <div className="col-span-2 border-t border-navy-950/8 pt-2">
                  <p className="text-graphite-500">{bandLabel[selectedBand]}</p>
                  {selectedBand === "high" && (
                    <p className="mt-1 font-mono text-[0.65rem] text-graphite-500">
                      e.g. {sampleRecord.id} · Control: {sampleRecord.control} · Verified via{" "}
                      {sampleRecord.verification}
                    </p>
                  )}
                </div>
              </motion.div>
            ) : (
              <p className="text-xs text-graphite-500">Hover a cell to see how SmartEye bands that risk.</p>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
