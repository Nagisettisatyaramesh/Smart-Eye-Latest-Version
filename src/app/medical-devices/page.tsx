import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Lifecycle } from "@/components/home/Lifecycle";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { qmsCoreProcesses } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Medical Devices",
  description:
    "SmartEye eQMS supports hardware-based medical device design control, from requirements through production and post-market surveillance.",
};

const realization = qmsCoreProcesses.find((g) => g.group.startsWith("Product Realization"))!;

export default function MedicalDevicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical devices"
        title="From concept to production, one connected record."
        body="SmartEye eQMS is purpose-built for medical device design control — centralising requirements, risk, testing, production and post-market surveillance so nothing is left to a shared drive."
        image="/images/prosthetic-hand.jpg"
        imageAlt="A robotic prosthetic hand, representing advanced medical device engineering"
        primaryCta={{ label: "Request a Demo", href: "/contact#demo" }}
        secondaryCta={{ label: "Explore Design Control", href: "/design-control" }}
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">{realization.group}</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              Turning ideas into compliant, safe and effective medical devices.
            </h2>
            <ul className="mt-8 space-y-3">
              {realization.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ice-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Lifecycle />

      <section className="bg-void py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Built for hardware and software"
            title="One system for the whole device, not just the code."
            body="Bench testing, production records, labelling and UDI compliance sit alongside your software and documentation record — connected by the same traceability model."
          />
        </Container>
      </section>

      <CTABand
        title="See your device lifecycle in one platform."
        body="Request a demo to see requirements, risk, testing and production connected end to end."
      />
    </>
  );
}
