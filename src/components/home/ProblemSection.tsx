"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const problems = [
  {
    number: "01",
    title: "Manual, paper-based processes",
    body: "Requirements, design files, risk records and test evidence kept in manual, paper-based processes, instead of one connected platform.",
  },
  {
    number: "02",
    title: "Regulatory activity to keep track of",
    body: "ISO 13485, IEC 62304, ISO 14971 and FDA 21 CFR Part 820 each carry their own quality and regulatory guidance and controls to stay on top of.",
  },
  {
    number: "03",
    title: "Limited traceability",
    body: "Without bi-directional traceability linking user needs, requirements, design and test evidence, proving coverage is slow and manual.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-signal-rose/5 blur-[140px]" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          eyebrow="The problem"
          title="Medical device quality shouldn't slow innovation."
          body="Most quality processes were built for paper. Medical device and SaMD teams need a system built for how products are actually designed, tested and released today."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.15, 0.1)}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-3"
        >
          {problems.map((p) => (
            <motion.div
              key={p.number}
              variants={fadeUp}
              className="group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 sm:p-10"
            >
              <span className="font-display text-5xl font-bold text-white/10 transition-colors duration-500 group-hover:text-teal-400/25">
                {p.number}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ice-100">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-400">{p.body}</p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/0 transition-all duration-500 group-hover:via-teal-400/60 sm:inset-x-10" />
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <p className="max-w-xl text-center text-sm text-ice-400">
            SmartEye eQMS replaces the disconnected toolchain with one connected system — so your
            team spends less time assembling evidence, and more time building the product.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
