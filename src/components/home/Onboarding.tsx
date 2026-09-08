"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { onboardingSteps } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Onboarding() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <Container className="relative">
        <SectionHeading
          eyebrow="Onboarding"
          title="From implementation to value. Without the complexity."
          body="Customer-centric onboarding and support, with seamless migration of your existing quality records into SmartEye."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12, 0.15)}
          className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" aria-hidden="true" />
          {onboardingSteps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-teal-400/40 bg-navy-950 font-mono text-sm text-teal-300">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ice-100">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ice-400">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
