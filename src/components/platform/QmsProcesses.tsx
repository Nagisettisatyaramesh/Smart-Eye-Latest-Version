"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { qmsCoreProcesses } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function QmsProcesses() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-32">
      <Container className="relative">
        <SectionHeading
          eyebrow="Core processes"
          title="The foundation of a compliant medical device QMS."
          body="SmartEye eQMS is structured around the processes that form a compliant, effective Quality Management System for medical device companies."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0.1)}
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          {qmsCoreProcesses.map((group, i) => (
            <motion.div
              key={group.group}
              variants={fadeUp}
              className="rounded-3xl border border-white/8 bg-white/[0.02] p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-teal-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-semibold text-ice-100">{group.group}</h3>
              </div>
              <p className="mt-2 text-sm text-ice-400">{group.description}</p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ice-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
