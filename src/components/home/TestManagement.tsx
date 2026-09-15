"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/motion";

const rows = [
  { id: "TC-2201", req: "REQ-118", method: "Bench Test", status: "PASS", reviewer: "QA Reviewer", approval: "Approved" },
  { id: "TC-2202", req: "REQ-119", method: "Automated", status: "PASS", reviewer: "Test Engineer", approval: "Approved" },
  { id: "TC-2203", req: "REQ-122", method: "Usability", status: "IN REVIEW", reviewer: "Usability Lead", approval: "Pending" },
  { id: "TC-2204", req: "REQ-124", method: "Bench Test", status: "PASS", reviewer: "QA Reviewer", approval: "Approved" },
  { id: "TC-2205", req: "REQ-130", method: "Software V&V", status: "VALIDATED", reviewer: "V&V Lead", approval: "Approved" },
];

const statusStyle: Record<string, string> = {
  PASS: "bg-teal-400/15 text-teal-300",
  "IN REVIEW": "bg-signal-amber/15 text-signal-amber",
  VALIDATED: "bg-cyan-400/15 text-cyan-300",
};

export function TestManagement() {
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
          <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              <span className="ml-3 font-mono text-xs text-ice-400">Test Management — Verification Suite</span>
            </div>
            <span className="hidden font-mono text-[0.65rem] text-ice-400 sm:block">Live sync</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/8 text-[0.65rem] uppercase tracking-widest2 text-ice-400">
                  <th className="px-6 py-3.5 font-medium">Test ID</th>
                  <th className="px-6 py-3.5 font-medium">Requirement</th>
                  <th className="px-6 py-3.5 font-medium">Method</th>
                  <th className="px-6 py-3.5 font-medium">Status</th>
                  <th className="px-6 py-3.5 font-medium">Reviewer</th>
                  <th className="px-6 py-3.5 font-medium">Approval</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="border-b border-white/5 text-sm text-ice-300 last:border-0 hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-3.5 font-mono text-xs text-ice-200">{row.id}</td>
                    <td className="px-6 py-3.5 font-mono text-xs text-teal-300">{row.req}</td>
                    <td className="px-6 py-3.5">{row.method}</td>
                    <td className="px-6 py-3.5">
                      <span className={`rounded-full px-2.5 py-1 font-mono text-[0.65rem] ${statusStyle[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">{row.reviewer}</td>
                    <td className="px-6 py-3.5 text-ice-400">{row.approval}</td>
                  </motion.tr>
                ))}
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
