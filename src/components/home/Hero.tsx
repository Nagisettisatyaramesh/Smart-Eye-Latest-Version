"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { easePremium } from "@/lib/motion";

const headlineWords = ["Quality", "intelligence", "for", "medical", "device", "innovation."];

const floatingChips = [
  { label: "Design Verification", status: "Passed", top: "18%", left: "8%", delay: 1.6 },
  { label: "ISO 14971 Risk Review", status: "On Track", top: "68%", left: "6%", delay: 1.9 },
  { label: "IEC 62304 Trace", status: "Linked", top: "24%", left: "82%", delay: 2.1 },
  { label: "CAPA-0142", status: "Closed", top: "72%", left: "80%", delay: 2.35 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-void pt-32 pb-24">
      {/* cinematic backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.6, ease: easePremium }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-robotic-arm.jpg"
            alt="Precision medical-device manufacturing equipment in a blue-lit facility"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(15,28,38,0.25)_0%,rgba(5,10,16,0.55)_45%,rgba(4,7,10,0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-void/5" />
        <div className="absolute inset-0 bg-grid opacity-[0.25] mask-fade-b" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" density={46} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, ease: easePremium }}
          className="absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[160px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
      </div>

      {/* floating status chips — decorative, hidden from small screens & AT */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {floatingChips.map((chip) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: chip.delay, ease: easePremium }}
            className="absolute animate-float"
            style={{ top: chip.top, left: chip.left, animationDelay: `${chip.delay}s` }}
          >
            <div className="glass-panel flex items-center gap-2.5 rounded-full px-4 py-2.5 text-xs shadow-panel">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(79,214,200,0.6)]" />
              <span className="text-ice-300">{chip.label}</span>
              <span className="font-mono text-[0.65rem] text-teal-300">{chip.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easePremium }}
            className="eyebrow kicker-line text-teal-400"
          >
            SmartEye eQMS
          </motion.p>

          <h1 className="mt-7 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tightest text-ice-100 sm:text-6xl lg:text-[5.2rem]">
            {headlineWords.map((word, i) => (
              <span key={word} className="mr-3 inline-block overflow-hidden sm:mr-4">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.35 + i * 0.08, ease: easePremium }}
                  className={clsxWord(word)}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: easePremium }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ice-300 sm:text-xl"
          >
            The tool medical device and SaMD companies need to optimise their Quality
            Management System and keep track of regulatory activity — transforming manual,
            paper-based processes into one platform built to mitigate risk, accelerate
            compliance and improve quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: easePremium }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact#demo" size="lg">
              Request a Demo
            </Button>
            <Button href="/platform" variant="secondary" size="lg" icon={false}>
              Explore SmartEye
            </Button>
            <Button href="https://youtu.be/YjVfsjdiYAY" variant="ghost" size="lg" icon={false}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
              </svg>
              Watch a Video
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute inset-x-0 bottom-9 flex justify-center"
      >
        <div className="flex flex-col items-center gap-3 text-ice-400">
          <span className="eyebrow">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-9 w-[1.5px] bg-gradient-to-b from-teal-400 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

function clsxWord(word: string) {
  return word === "Quality" || word === "innovation." ? "text-teal-300" : "text-ice-100";
}
