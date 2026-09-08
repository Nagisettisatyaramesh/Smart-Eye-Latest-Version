import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { GlobalSection } from "@/components/home/GlobalSection";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Security",
  description:
    "SmartEye eQMS is cloud-based, ISO 27001 certified and built around confidentiality, integrity and availability.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Your quality system, securely available everywhere."
        body="SmartEye eQMS is built on the information security principles S-Cube Technologies is independently certified against — so your quality data stays protected wherever your team works from."
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Read our Security Policy", href: "/security-policy" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Certified</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              Backed by ISO/IEC 27001:2013 and GDPR compliance.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ice-300">
              {company.operator} operates an Information Security Management System certified to
              ISO/IEC 27001:2013, alongside ISO 9001:2015 for quality management and full GDPR
              compliance. Read the full{" "}
              <Link href="/security-policy" className="text-teal-300 underline underline-offset-4">
                Security Policy
              </Link>{" "}
              for details.
            </p>
          </Reveal>
        </Container>
      </section>

      <GlobalSection />

      <CTABand
        title="Ask us about SmartEye's security posture."
        body="Talk to our team about how SmartEye protects your quality data — from access control to audit trail."
      />
    </>
  );
}
