"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const rows = [
  {
    id: "TC-2201",
    req: "REQ-118",
    method: "Bench Test",
    status: "PASS",
    reviewer: "QA Reviewer",
    approval: "Approved",
    note: "Verified against acceptance criteria in DI-072. Evidence attached to DHF.",
  },
  {
    id: "TC-2202",
    req: "REQ-119",
    method: "Automated",
    status: "PASS",
    reviewer: "Test Engineer",
    approval: "Approved",
    note: "Regression suite run on every build. Last run: main branch, all assertions passed.",
  },
  {
    id: "TC-2203",
    req: "REQ-122",
    method: "Usability",
    status: "IN REVIEW",
    reviewer: "Usability Lead",
    approval: "Pending",
    note: "Formative usability session complete — summative report awaiting QA sign-off.",
  },
  {
    id: "TC-2204",
    req: "REQ-124",
    method: "Bench Test",
    status: "PENDING",
    reviewer: "QA Reviewer",
    approval: "Not started",
    note: "Scheduled once RM-031 mitigation is verified — blocked on design change CR-014.",
  },
  {
    id: "TC-2205",
    req: "REQ-130",
    method: "Software V&V",
    status: "VALIDATED",
    reviewer: "V&V Lead",
    approval: "Approved",
    note: "Validation run against user needs UN-004 and UN-007. Closed with 2 reviewer approvals.",
  },
];

const stats = [
  { label: "Tests", value: "12" },
  { label: "Passed", value: "8", tone: "pass" as const },
  { label: "In review", value: "2", tone: "track" as const },
  { label: "Pending", value: "2", tone: "muted" as const },
];

const statusStyle: Record<string, string> = {
  PASS: "bg-teal-400/15 text-teal-300",
  "IN REVIEW": "bg-signal-amber/15 text-signal-amber",
  VALIDATED: "bg-cyan-400/15 text-cyan-300",
  PENDING: "bg-white/8 text-ice-400",
};

const statusIcon: Record<string, JSX.Element> = {
  PASS: (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "IN REVIEW": <span className="block h-1.5 w-1.5 rounded-full bg-signal-amber" />,
  VALIDATED: (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  PENDING: <span className="block h-1.5 w-1.5 rounded-full bg-ice-400/50" />,
};

export function TestManagement() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <Image
        src="/images/microscope-petri.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.16]"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-950/70" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.16]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Test management"
          title="Turn testing into traceable confidence."
          body="Every test case links back to its requirement, and every result feeds forward into verification and validation — with full reviewer sign-off history."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel relative mt-16 overflow-hidden rounded-3xl shadow-panel"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              <span className="ml-3 font-mono text-xs text-ice-400">SmartEye / Test Management — Verification Suite</span>
            </div>
            <span className="hidden font-mono text-[0.65rem] text-ice-400 sm:block">Live sync</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/8 px-6 py-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span
                  className={`font-mono text-lg font-semibold ${
                    s.tone === "pass" ? "text-teal-300" : s.tone === "track" ? "text-signal-amber" : "text-ice-100"
                  }`}
                >
                  {s.value}
                </span>
                <span className="text-xs text-ice-400">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="max-h-[420px] overflow-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="sticky top-0 z-10 bg-navy-950/95 backdrop-blur">
                <tr className="border-b border-white/8 text-[0.65rem] uppercase tracking-widest2 text-ice-400">
                  <th className="px-6 py-3.5 font-medium">Test ID</th>
                  <th className="px-6 py-3.5 font-medium">Requirement</th>
                  <th className="px-6 py-3.5 font-medium">Method</th>
                  <th className="px-6 py-3.5 font-medium">Status</th>
                  <th className="px-6 py-3.5 font-medium">Reviewer</th>
                  <th className="px-6 py-3.5 font-medium">Approval</th>
                  <th className="w-8 px-4 py-3.5" aria-hidden="true" />
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const isOpen = expanded === row.id;
                  return (
                    <Fragment key={row.id}>
                      <motion.tr
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                        onClick={() => setExpanded(isOpen ? null : row.id)}
                        className="cursor-pointer border-b border-white/5 text-sm text-ice-300 last:border-0 hover:bg-white/[0.04]"
                        aria-expanded={isOpen}
                      >
                        <td className="px-6 py-3.5 font-mono text-xs text-ice-200">{row.id}</td>
                        <td className="px-6 py-3.5 font-mono text-xs text-teal-300">{row.req}</td>
                        <td className="px-6 py-3.5">{row.method}</td>
                        <td className="px-6 py-3.5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.65rem] ${statusStyle[row.status]}`}
                          >
                            {statusIcon[row.status]}
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-3.5">{row.reviewer}</td>
                        <td className="px-6 py-3.5 text-ice-400">{row.approval}</td>
                        <td className="px-4 py-3.5 text-ice-400">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </td>
                      </motion.tr>
                      {isOpen && (
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                          <td colSpan={7} className="px-6 py-4">
                            <motion.p
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25 }}
                              className="max-w-2xl text-xs leading-relaxed text-ice-400"
                            >
                              {row.note}
                            </motion.p>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-ice-400">
          Illustrative product view — sample data shown for demonstration purposes only.
        </p>
      </Container>
    </section>
  );
}
