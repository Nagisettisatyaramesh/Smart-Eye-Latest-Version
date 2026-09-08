import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ComplianceConstellation } from "@/components/home/ComplianceConstellation";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { complianceStandards, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "SmartEye eQMS workflows are structured around ISO 13485, ISO 14971, IEC 62304, IEC 62366, FDA design control, 21 CFR Part 11 and EU MDR.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance architecture"
        title="Built around the standards that matter."
        body="SmartEye's workflows are pre-configured around the frameworks medical device and SaMD teams are held to — kept in view across every project, from first requirement to post-market surveillance."
        image="/images/test-tubes.jpg"
        imageAlt="A lab technician working with sample vials in a controlled environment"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Security", href: "/security" }}
      />

      <ComplianceConstellation />

      <section className="border-y border-white/8 bg-navy-950 py-24">
        <Container>
          <SectionHeading eyebrow="Frameworks" title="Standards SmartEye is structured around." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complianceStandards.map((s) => (
              <Reveal key={s.code}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <p className="font-display text-lg font-semibold text-ice-100">{s.code}</p>
                  <p className="mt-1.5 text-sm text-ice-400">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-void py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Certifications</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              {company.operator} is independently certified.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {company.certifications.map((c) => (
                <div key={c.code} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <p className="font-display text-base font-semibold text-teal-300">{c.code}</p>
                  <p className="mt-1 text-sm text-ice-400">{c.name}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <p className="font-display text-base font-semibold text-teal-300">GDPR</p>
                <p className="mt-1 text-sm text-ice-400">Compliant data handling</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="See compliance built into every workflow."
        body="Request a demo to see how SmartEye keeps your team aligned to the standards your device is held to."
      />
    </>
  );
}
