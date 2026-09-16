import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "SmartEye eQMS is powered by S-Cube Technologies — connecting medical device innovators with quality and regulatory expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Powered by S-Cube Technologies."
        body="We are committed to bringing meaningful difference to your business, with quality solutions built from innovation."
        image="/images/hero-robotic-arm.jpg"
        imageAlt="Precision engineering equipment in a blue-lit facility"
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ice-300">
              S-Cube Technologies connects leading innovators from the medical device and
              healthcare sector to the very best in specialist advice and facilities. We help
              forward-thinking organisations identify and access new markets with our software
              and digital solutions, all while offering tailored support that enhances business
              capability and innovation management.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ice-300">
              SmartEye eQMS is powered by S-Cube Technologies — your growth, driven by our
              innovation. We help you grow your ideas by taking care of the process, implementing
              management processes and providing the services you need, so you don't have to
              worry.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-void py-24">
        <Container>
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Certified</p>
            <h2 className="mt-5 max-w-2xl font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              You can trust us to build each step of your business with innovative solutions for
              your big innovation.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {company.certifications.map((c) => (
              <Reveal key={c.code}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                  <p className="font-display text-lg font-semibold text-teal-300">{c.code}</p>
                  <p className="mt-1.5 text-sm text-ice-400">{c.name}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <p className="font-display text-lg font-semibold text-teal-300">GDPR</p>
                <p className="mt-1.5 text-sm text-ice-400">Compliant</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Find us</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              {company.operator}
            </h2>
            <p className="mt-4 text-base text-ice-300">{company.address}</p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-base text-ice-300">
              <a href={`mailto:${company.email}`} className="text-teal-300 underline underline-offset-4">
                {company.email}
              </a>
              <span>{company.phone}</span>
              <span>{company.phoneAlt}</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Find out what SmartEye eQMS could do for your product."
        body="Talk to the team behind SmartEye eQMS about your medical device or SaMD design and development process."
      />
    </>
  );
}
