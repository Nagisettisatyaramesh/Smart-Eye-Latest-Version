"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { easePremium } from "@/lib/motion";

const headlineWords = ["Quality", "intelligence", "for", "medical", "device", "innovation."];

const floatingCards = [
  {
    title: "Design Verification",
    status: "Passed",
    tone: "pass" as const,
    detail: "TC-2201",
    top: "14%",
    right: "4%",
    delay: 1.6,
  },
  {
    title: "ISO 14971 Risk Review",
    status: "On Track",
    tone: "track" as const,
    detail: "RM-031",
    top: "39%",
    right: "9%",
    delay: 1.9,
  },
  {
    title: "Traceability",
    status: "Complete",
    tone: "pass" as const,
    detail: "118 linked artifacts",
    top: "63%",
    right: "3%",
    delay: 2.15,
  },
  {
    title: "CAPA-0142",
    status: "Closed",
    tone: "pass" as const,
    detail: "Verified · 2 approvals",
    top: "86%",
    right: "10%",
    delay: 2.4,
  },
];

const toneStyle = {
  pass: { dot: "bg-teal-400 shadow-[0_0_8px_2px_rgba(79,214,200,0.6)]", text: "text-teal-300" },
  track: { dot: "bg-signal-amber shadow-[0_0_8px_2px_rgba(232,169,79,0.5)]", text: "text-signal-amber" },
};

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

      {/* floating product notifications — decorative, hidden from small screens & AT */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {floatingCards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: card.delay, ease: easePremium }}
            className="absolute w-52 animate-float"
            style={{ top: card.top, right: card.right, animationDelay: `${card.delay}s` }}
          >
            <div className="glass-panel rounded-2xl px-4 py-3.5 shadow-panel">
              <p className="eyebrow text-[0.6rem] text-ice-400">{card.title}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${toneStyle[card.tone].dot}`} />
                <span className={`font-mono text-xs font-semibold uppercase tracking-wide ${toneStyle[card.tone].text}`}>
                  {card.status}
                </span>
              </div>
              <p className="mt-2 border-t border-white/8 pt-2 font-mono text-[0.65rem] text-ice-400">
                {card.detail}
              </p>
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

          <h1 className="mt-7 font-display text-[2.65rem] font-bold leading-[1.03] tracking-tightest text-ice-100 sm:text-6xl lg:text-[5.75rem] xl:text-[6.25rem]">
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
            Design, develop, test and maintain compliant medical devices and SaMD from one
            intelligent quality management platform — built to mitigate risk, accelerate
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
