"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-void py-32 sm:py-40">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/scientist-pipette.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_20%,rgba(15,28,38,0.75)_0%,rgba(5,10,16,0.9)_55%,#04070a_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.2]" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-50" density={30} />
      </div>

      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="eyebrow kicker-line justify-center text-teal-400"
        >
          Get started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tighter text-ice-100 sm:text-5xl lg:text-6xl"
        >
          Ready to transform your quality system?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-ice-300"
        >
          See how SmartEye can bring your medical device quality processes together — from
          requirements to post-market surveillance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact#demo" size="lg">
            Request a Demo
          </Button>
          <Button href="/contact" variant="secondary" size="lg" icon={false}>
            Talk to an Expert
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
