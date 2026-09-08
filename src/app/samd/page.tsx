import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SamdSection } from "@/components/home/SamdSection";
import { Traceability } from "@/components/home/Traceability";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Software as a Medical Device",
  description:
    "SmartEye eQMS supports Software as a Medical Device (SaMD) compliance, connecting IEC 62304 SDLC documentation to requirements, risk and test evidence.",
};

const focus = [
  { title: "IEC 62304", body: "Software development lifecycle documentation, structured by safety classification." },
  { title: "IEC 62366", body: "Usability engineering evidence connected to the same requirement record." },
  { title: "21 CFR Part 11", body: "Electronic records and signatures for every review and approval." },
];

export default function SamdPage() {
  return (
    <>
      <PageHero
        eyebrow="Software as a Medical Device"
        title="Standalone medical software, held to the same standard."
        body="Whether you're developing hardware-based devices or standalone medical software, SmartEye helps you streamline your product lifecycle while staying compliant with global regulatory standards for SaMD."
        image="/images/engineer-laptop.jpg"
        imageAlt="A researcher working at a lab bench with connected instrumentation"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Explore the platform", href: "/platform" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container>
          <SectionHeading eyebrow="What SaMD compliance requires" title="Standards SmartEye keeps in view." />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {focus.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-7">
                <h3 className="font-display text-lg font-semibold text-teal-300">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ice-400">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SamdSection />
      <Traceability />

      <CTABand
        title="Bring SaMD compliance into your quality system."
        body="See how SmartEye connects your software development lifecycle to requirements, risk and test evidence."
      />
    </>
  );
}
