"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pipeline = ["Requirements", "Architecture", "Development", "Verification", "Validation", "Release"];

const codeLines = [
  { text: "// IEC 62304 — software safety classification", color: "text-ice-400/60" },
  { text: "class SoftwareItem {", color: "text-ice-300" },
  { text: "  classification: 'Class B'", color: "text-teal-300" },
  { text: "  requirement: 'REQ-118'", color: "text-cyan-300" },
  { text: "  verification: 'TC-2201' → PASS", color: "text-teal-300" },
  { text: "}", color: "text-ice-300" },
];

export function SamdSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(79,208,240,0.10)_0%,transparent_70%)]" />

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Software as a Medical Device"
            title="Built for SaMD, not bolted on."
            body="SmartEye provides E2E software life cycle frameworks supporting Agile methodologies — keeping IEC 62304 software development lifecycle documentation connected to the same requirements, risk and test record as the rest of your device."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.2)}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {pipeline.map((stage, i) => (
              <motion.div key={stage} variants={fadeUp} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-ice-200">
                  {stage}
                </span>
                {i < pipeline.length - 1 && <span className="text-ice-400/50">→</span>}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <Button href="/samd" variant="secondary">
              Explore SaMD compliance
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-6 font-mono text-[0.8rem] leading-relaxed shadow-panel sm:p-8"
        >
          <div className="flex items-center gap-2 border-b border-white/8 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
            <span className="ml-2 text-xs text-ice-400">software-item.smarteye</span>
          </div>
          <div className="mt-5 space-y-1.5">
            {codeLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className={line.color}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-400/5 px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#4fd6c8" strokeWidth="1.2" />
              <path d="M5 8l2 2 4-4" stroke="#4fd6c8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-teal-300">Traceable to REQ-118 · Risk RM-031</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
