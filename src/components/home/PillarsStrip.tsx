"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { pillars } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function PillarsStrip() {
  return (
    <section className="relative border-y border-white/8 bg-navy-950/60 py-14">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {pillars.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <p className="font-display text-sm font-semibold text-teal-300">{p.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ice-400">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
