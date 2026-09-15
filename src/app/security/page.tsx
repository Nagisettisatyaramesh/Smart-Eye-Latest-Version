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

const pillars = [
  {
    title: "Access Control",
    body: "Role-based permissions govern what every user can see and change.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Cloud Security",
    body: "Secure cloud access to your quality system, wherever your team connects from.",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Approvals",
    body: "Structured review and approval chains for every record and change.",
    icon: <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Audit Trail",
    body: "A full, timestamped history on every record — nothing edited without a trace.",
    icon: (
      <>
        <path d="M4 4h13l3 3v13H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10h7M9 14h7M9 18h4" strokeLinecap="round" />
      </>
    ),
  },
];

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

      <section className="bg-navy-950 py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Reveal key={p.title}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4fd6c8" strokeWidth="1.4" className="text-teal-400">
                    {p.icon}
                  </svg>
                  <h3 className="mt-4 font-display text-base font-semibold text-ice-100">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ice-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
