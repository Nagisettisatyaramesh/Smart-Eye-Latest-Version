import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TestManagement } from "@/components/home/TestManagement";
import { Traceability } from "@/components/home/Traceability";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Test Management",
  description:
    "Plan, execute and evidence design verification and validation (V&V) with SmartEye eQMS test management.",
};

const stages = [
  { title: "Plan", body: "Build test plans directly against linked requirements and risk controls." },
  { title: "Execute", body: "Record results with reviewer sign-off, timestamped for audit readiness." },
  { title: "Evidence", body: "Every result feeds forward into verification and validation reporting." },
];

export default function TestManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Test management"
        title="Turn testing into traceable confidence."
        body="Plan, execute and evidence design verification and validation (V&V) with full status visibility and reviewer sign-off — connected to the requirement and risk record behind every test."
        image="/images/microscope-petri.jpg"
        imageAlt="A researcher examining a sample under a microscope during device testing"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Explore the platform", href: "/platform" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container>
          <SectionHeading align="center" eyebrow="How it works" title="Plan. Execute. Evidence." />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {stages.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-7">
                <span className="font-mono text-xs text-teal-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ice-100">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ice-400">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestManagement />
      <Traceability />

      <CTABand
        title="Turn your test record into audit-ready evidence."
        body="See how SmartEye connects test plans, execution and results back to requirements and risk."
      />
    </>
  );
}
