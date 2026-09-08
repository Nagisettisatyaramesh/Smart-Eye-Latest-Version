"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { Button } from "@/components/ui/Button";
import { easePremium } from "@/lib/motion";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export function PageHero({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: StaticImageData | string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-void pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="absolute inset-0" aria-hidden="true">
        {image && (
          <>
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-void/55" />
          </>
        )}
        {!image && <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_50%_-10%,#0f1c26_0%,#050a10_50%,#04070a_100%)]" />}
        <div className="absolute inset-0 bg-grid opacity-[0.2] mask-fade-b" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-50" density={26} />
      </div>

      <Container className="relative max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easePremium }}
          className="eyebrow kicker-line text-teal-400"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easePremium }}
          className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ice-100 sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ice-300"
        >
          {body}
        </motion.p>
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easePremium }}
            className="mt-9 flex flex-wrap gap-4"
          >
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" icon={false}>
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
