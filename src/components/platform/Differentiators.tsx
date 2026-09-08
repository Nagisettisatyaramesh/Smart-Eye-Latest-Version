"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-32">
      <Container className="relative">
        <SectionHeading eyebrow="Why SmartEye" title="Transforming medical compliance." />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06, 0.1)}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-teal-400/25"
            >
              <span className="font-mono text-xs text-ice-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-sm font-semibold text-ice-100">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ice-400">{d.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
