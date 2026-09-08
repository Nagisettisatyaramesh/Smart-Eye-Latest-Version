"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const leftColumn = [
  { label: "User Needs", note: "What the device must achieve" },
  { label: "Design Inputs", note: "Requirements derived from user needs" },
  { label: "Design Process", note: "Architecture, detailed design, build" },
  { label: "Design Outputs", note: "Specifications, drawings, source code" },
];

const rightColumn = [
  { label: "Design Verification", note: "Outputs meet inputs" },
  { label: "Design Validation", note: "Device meets user needs" },
  { label: "Design Review", note: "Cross-functional sign-off at each gate" },
  { label: "Design Transfer", note: "Ready for production" },
];

export function DesignControlFlow() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-32">
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="The design control model"
          title="A structured path from user need to verified device."
          body="SmartEye's design control workflow mirrors the model used across the industry — connecting each design input to its output, verification and validation record."
        />

        <div className="relative mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {leftColumn.map((item, i) => (
              <motion.div
                key={item.label}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-4"
              >
                <p className="text-sm font-semibold text-ice-100">{item.label}</p>
                <p className="mt-1 text-xs text-ice-400">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden justify-center lg:flex">
            <svg width="60" height="420" viewBox="0 0 60 420" className="text-teal-400/50">
              <path d="M10 20 L50 200 L10 400" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {[20, 200, 400].map((y) => (
                <circle key={y} cx={y === 200 ? 50 : 10} cy={y} r="4" fill="#04070a" stroke="currentColor" strokeWidth="1.4" />
              ))}
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {rightColumn.map((item, i) => (
              <motion.div
                key={item.label}
                variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-4"
              >
                <p className="text-sm font-semibold text-ice-100">{item.label}</p>
                <p className="mt-1 text-xs text-ice-400">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
