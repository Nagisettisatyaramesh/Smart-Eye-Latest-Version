"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { viewportOnce } from "@/lib/motion";

export function CTABand({
  title = "See SmartEye eQMS for yourself.",
  body = "Arrange your free tailored demo and see how an enhanced 360° view could benefit your medical device or SaMD design and development.",
  primaryLabel = "Request a Demo",
  primaryHref = "/contact#demo",
  secondaryLabel = "Talk to an Expert",
  secondaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" aria-hidden="true" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel flex flex-col items-start gap-8 rounded-3xl p-10 shadow-panel sm:p-14 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold tracking-tighter text-ice-100 sm:text-3xl">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-ice-300">{body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary" icon={false}>
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
