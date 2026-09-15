"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { templateCategories } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

const positions = [
  { top: "6%", left: "10%" },
  { top: "2%", left: "42%" },
  { top: "10%", left: "74%" },
  { top: "48%", left: "2%" },
  { top: "50%", left: "80%" },
  { top: "76%", left: "16%" },
  { top: "82%", left: "48%" },
  { top: "74%", left: "78%" },
];

export function Templates() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Ready-to-use templates"
            title="Start faster with proven quality frameworks."
            body="SmartEye eQMS is pre-installed with 100s of ready-made SOPs and templates — including QMS, DHF and Technical files — as well as automatic DHF and DMR files generation, helping ensure your documents meet industry standards and guidelines with our ready-made checklists."
          />
        </div>

        <div className="relative order-1 aspect-square w-full max-w-md justify-self-center lg:order-2">
          <div className="absolute inset-0 rounded-full bg-teal-400/5 blur-3xl" aria-hidden="true" />
          {templateCategories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20, x: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="absolute animate-float"
              style={{ ...positions[i], animationDelay: `${i * 0.5}s` }}
            >
              <div className="glass-panel flex h-16 w-16 flex-col items-center justify-center rounded-2xl text-center shadow-panel sm:h-20 sm:w-20">
                <span className="text-[0.6rem] font-semibold leading-tight text-ice-200 sm:text-xs">{cat}</span>
              </div>
            </motion.div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-teal-400/40 bg-navy-950 shadow-glow sm:h-28 sm:w-28">
              <span className="text-center font-display text-xs font-bold leading-tight text-teal-300">
                SmartEye
                <br />
                eQMS
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
