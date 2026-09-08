import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import { Traceability } from "@/components/home/Traceability";
import { QmsProcesses } from "@/components/platform/QmsProcesses";
import { Differentiators } from "@/components/platform/Differentiators";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "SmartEye eQMS centralises requirements, design control, risk, testing and compliance for medical device and SaMD teams in one connected platform.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            Best QMS for medical device design control and SaMD.
          </>
        }
        body="SmartEye is your all-in-one Quality Management System, purpose-built for medical device design control and Software as a Medical Device (SaMD) compliance — whether you're developing hardware-based devices or standalone medical software."
        image="/images/hero-robotic-arm.jpg"
        imageAlt="Precision manufacturing equipment in a blue-lit facility"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "See core platform", href: "#platform-features" }}
      />

      <section className="relative border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ice-300">
              Developing a medical device — especially software-based solutions — requires strict
              adherence to regulations like FDA 21 CFR 820, ISO 13485, and IEC 62304. SmartEye
              centralises and automates your design control processes, making it easy to manage
              design inputs and outputs, risk management and hazard analysis, design verification
              and validation (V&amp;V), design reviews and approvals, and SDLC documentation.
            </p>
          </Reveal>
        </Container>
      </section>

      <PlatformFeatures />
      <div id="traceability">
        <Traceability />
      </div>
      <QmsProcesses />
      <Differentiators />
      <CTABand />
    </>
  );
}
