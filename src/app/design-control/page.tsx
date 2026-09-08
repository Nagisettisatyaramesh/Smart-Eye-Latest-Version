import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { DesignControlFlow } from "@/components/design-control/DesignControlFlow";
import { Traceability } from "@/components/home/Traceability";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Design Control",
  description:
    "Manage design inputs and outputs, design reviews and approvals across the full SDLC documentation set with SmartEye eQMS.",
};

const managed = [
  "Design inputs and outputs",
  "Risk management and hazard analysis",
  "Design verification and validation (V&V)",
  "Design reviews and approvals",
  "Software development life cycle (SDLC) documentation",
];

export default function DesignControlPage() {
  return (
    <>
      <PageHero
        eyebrow="Design control"
        title="Design control, without the spreadsheet sprawl."
        body="Manage the full medical device design lifecycle — from design inputs and outputs to verification, validation and design reviews — aligned to FDA 21 CFR 820 and ISO 13485."
        image="/images/scientist-pipette.jpg"
        imageAlt="A scientist precisely handling lab samples during device verification"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Explore the platform", href: "/platform" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="What SmartEye manages"
            title="Every design control record, centrally connected."
            body="SmartEye centralises and automates your design control processes so nothing is left to a shared drive."
          />
          <Reveal>
            <ul className="space-y-4">
              {managed.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#4fd6c8" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#4fd6c8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-ice-200">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <DesignControlFlow />
      <Traceability />
      <CTABand
        title="Bring design control into one connected system."
        body="See how SmartEye keeps design inputs, outputs, reviews and approvals linked from first sketch to release."
      />
    </>
  );
}
