import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "SmartEye eQMS solutions for medical device and Software as a Medical Device (SaMD) teams.",
};

const solutions = [
  {
    title: "Medical Devices",
    href: "/medical-devices",
    body: "Design control, risk, testing, production and post-market surveillance for hardware-based devices.",
  },
  {
    title: "Software as a Medical Device",
    href: "/samd",
    body: "IEC 62304 software development lifecycle documentation, connected to the same requirement and risk record.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for how your product is actually developed."
        body="Whether you're bringing a hardware device or standalone software to market, SmartEye eQMS adapts to your product type without losing a single connection between requirements, risk and evidence."
      />

      <section className="border-y border-white/8 bg-navy-950 py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => (
              <Reveal key={s.href}>
                <Link
                  href={s.href}
                  className="group block h-full rounded-3xl border border-white/8 bg-white/[0.02] p-9 transition-all duration-500 hover:border-teal-400/30 hover:bg-white/[0.045]"
                >
                  <h2 className="font-display text-2xl font-semibold text-ice-100">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ice-400">{s.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300">
                    Explore
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
