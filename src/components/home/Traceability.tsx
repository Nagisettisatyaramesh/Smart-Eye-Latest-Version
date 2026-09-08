"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const chain = [
  { label: "User Need", id: "UN-004" },
  { label: "Requirement", id: "REQ-118" },
  { label: "Design Input", id: "DI-072" },
  { label: "Risk", id: "RM-031" },
  { label: "Test", id: "TC-256" },
  { label: "Result", id: "RES-256" },
  { label: "Validation", id: "VAL-019" },
];

export function Traceability() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="End-to-end traceability"
          title="From requirement to verification. Nothing gets lost."
          body="SmartEye's bi-directional traceability web grids keep every user need connected to its requirement, design input, risk, test and result. Hover a node to trace what depends on it."
        />

        <div className="relative mt-20 overflow-x-auto no-scrollbar">
          <div
            className="relative mx-auto flex min-w-[860px] max-w-5xl items-center justify-between px-4 lg:min-w-0"
            onMouseLeave={() => setHovered(null)}
          >
            <svg className="absolute inset-x-0 top-1/2 h-1 w-full -translate-y-1/2" preserveAspectRatio="none">
              <motion.line
                x1="6%"
                y1="50%"
                x2="94%"
                y2="50%"
                stroke="#4fd6c8"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              {hovered !== null && (
                <motion.line
                  x1={`${6 + (hovered / (chain.length - 1)) * 88}%`}
                  y1="50%"
                  x2="94%"
                  y2="50%"
                  stroke="#7fe8ff"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </svg>

            {chain.map((node, i) => {
              const isDownstream = hovered !== null && i >= hovered;
              const isHovered = hovered === i;
              const isDimmed = hovered !== null && !isDownstream;
              return (
                <motion.button
                  key={node.id}
                  type="button"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  animate={{ opacity: isDimmed ? 0.35 : 1, scale: isHovered ? 1.08 : 1 }}
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  className="relative z-10 flex flex-col items-center gap-3 border-0 bg-transparent p-0"
                >
                  <div
                    className={`glass-panel flex h-14 w-14 items-center justify-center rounded-2xl transition-shadow duration-300 ${
                      isDownstream ? "shadow-glow" : "shadow-glow-sm"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full bg-teal-400 transition-shadow duration-300 ${
                        isDownstream ? "shadow-[0_0_14px_5px_rgba(127,232,255,0.7)]" : "shadow-[0_0_10px_3px_rgba(79,214,200,0.55)]"
                      }`}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-ice-100">{node.label}</p>
                    <p className="font-mono text-[0.6rem] text-ice-400">{node.id}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-14 min-h-[44px] max-w-xl text-center">
          {hovered !== null ? (
            <motion.p
              key={hovered}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-sm text-ice-300"
            >
              <span className="font-mono text-teal-300">{chain[hovered].id}</span> is linked forward to{" "}
              <span className="text-ice-100">{chain.length - 1 - hovered}</span>{" "}
              downstream {chain.length - 1 - hovered === 1 ? "artifact" : "artifacts"} — update it and every one
              relinks automatically.
            </motion.p>
          ) : (
            <p className="text-sm text-ice-400">
              Every link is live — update a requirement and SmartEye surfaces every design input, risk and test
              that depends on it.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
