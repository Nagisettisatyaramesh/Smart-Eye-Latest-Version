"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lifecycleStages } from "@/lib/content";

const STAGE_ICONS: Record<string, JSX.Element> = {
  "01": <path d="M6 4h12M6 12h12M6 20h8" strokeLinecap="round" />,
  "02": <path d="M4 20l7-16 7 16M8 14h6" strokeLinecap="round" strokeLinejoin="round" />,
  "03": <path d="M12 3l9 16H3z M12 10v4 M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />,
  "04": <path d="M8 5L3 12l5 7M16 5l5 7-5 7M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />,
  "05": <path d="M9 3h6v4H9zM7 7h10l1 13H6z M10 12h4" strokeLinecap="round" strokeLinejoin="round" />,
  "06": <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
  "07": <path d="M12 3l2.6 5.9L21 10l-5 4.2L17.4 21 12 17.6 6.6 21 8 14.2 3 10l6.4-1.1z" strokeLinejoin="round" />,
  "08": <path d="M4 4h16v16H4z M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />,
  "09": <path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />,
  "10": <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zM12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />,
};

const STAGE_IMAGES: Record<string, string> = {
  "04": "/images/engineer-laptop.jpg",
  "05": "/images/microscope-petri.jpg",
  "06": "/images/microscope-black.jpg",
  "07": "/images/prosthetic-hand.jpg",
  "09": "/images/hero-robotic-arm.jpg",
};

export function Lifecycle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const total = lifecycleStages.length;
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActive(idx);
  });

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative bg-navy-950" style={{ height: `calc(${total * 62}vh + 420px)` }}>
      <div className="pt-28 sm:pt-32">
        <Container className="relative">
          <SectionHeading
            eyebrow="The medical device lifecycle"
            title="One platform, present at every stage."
            body="Scroll to follow a device from first requirement to post-market surveillance — SmartEye stays connected at every step."
          />
        </Container>
      </div>

      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 transition-[background] duration-700"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 40%, rgba(79,214,200,0.10) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative mt-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-baseline gap-4">
                <motion.span
                  key={lifecycleStages[active].number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-6xl font-bold text-teal-400/90"
                >
                  {lifecycleStages[active].number}
                </motion.span>
                <span className="font-mono text-xs uppercase tracking-widest2 text-ice-400">
                  Stage {active + 1} of {total}
                </span>
              </div>
              <motion.h3
                key={lifecycleStages[active].title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-3 font-display text-3xl font-semibold text-ice-100 sm:text-4xl"
              >
                {lifecycleStages[active].title}
              </motion.h3>
              <motion.p
                key={lifecycleStages[active].note}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 max-w-md text-base leading-relaxed text-ice-300"
              >
                {lifecycleStages[active].note}
              </motion.p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 shadow-panel">
              {STAGE_IMAGES[lifecycleStages[active].number] ? (
                <motion.div
                  key={lifecycleStages[active].number}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={STAGE_IMAGES[lifecycleStages[active].number]}
                    alt={`${lifecycleStages[active].title} — SmartEye eQMS`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-navy-950/40" />
                </motion.div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.svg
                      key={lifecycleStages[active].number}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4fd6c8"
                      strokeWidth="1"
                      className="drop-shadow-[0_0_30px_rgba(79,214,200,0.35)]"
                    >
                      {STAGE_ICONS[lifecycleStages[active].number]}
                    </motion.svg>
                  </div>
                </>
              )}
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(79,214,200,0.6)]" />
                <span className="eyebrow text-ice-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">Live in SmartEye</span>
              </div>
            </div>
          </div>

          {/* stage rail */}
          <div className="relative mt-14">
            <div className="h-px w-full bg-white/10" />
            <motion.div
              className="absolute left-0 top-0 h-px bg-teal-400 shadow-glow-sm"
              style={{ width: barWidth }}
            />
            <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
              {lifecycleStages.map((s, i) => (
                <div key={s.number} className="flex flex-col items-start gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      i <= active ? "bg-teal-400" : "bg-white/15"
                    }`}
                  />
                  <span
                    className={`text-[0.65rem] leading-tight transition-colors duration-300 ${
                      i === active ? "text-teal-300" : "text-ice-400/70"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
