import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RiskMatrix } from "@/components/home/RiskMatrix";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Risk Management",
  description: "Identify and mitigate risk with hazard analysis workflows aligned to ISO 14971 in SmartEye eQMS.",
};

export default function RiskManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Risk management"
        title="Risk management aligned to ISO 14971, connected to everything else."
        body="Identify and mitigate risk with hazard analysis workflows that stay connected to the design and test record — so residual risk is always backed by evidence."
        image="/images/microscope-black.jpg"
        imageAlt="A row of laboratory microscopes used for detailed hazard analysis"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Explore the platform", href: "/platform" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Why it matters"
            title="Risk isn't a document. It's a living record."
            body="A risk file that lives in a spreadsheet goes stale the moment a requirement changes. SmartEye keeps hazards, controls and verification evidence linked to the requirements and tests they depend on — so when something changes upstream, the risk record reflects it."
          />
        </Container>
      </section>

      <RiskMatrix />

      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              Part of SmartEye's Product Realization &amp; Lifecycle Control processes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ice-300">
              Risk Management under ISO 14971 sits alongside Design &amp; Development Control,
              Purchasing &amp; Supplier Management, Production &amp; Process Control and Change
              Management as one of SmartEye's core Product Realization processes — keeping risk
              connected to the rest of your quality system rather than managed in isolation.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="See risk management connected to your full record."
        body="Arrange a demo to see how SmartEye links hazards, controls and verification evidence across your device lifecycle."
      />
    </>
  );
}
