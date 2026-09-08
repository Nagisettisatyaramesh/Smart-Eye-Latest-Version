import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the SmartEye eQMS team, or request a free tailored demo.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-void pb-28 pt-40 sm:pt-48">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/microscope-petri.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_-10%,rgba(15,28,38,0.5)_0%,rgba(5,10,16,0.75)_50%,rgba(4,7,10,0.92)_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-b" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-40" density={22} />
      </div>

      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Contact</p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ice-100 sm:text-5xl">
              Let's build better quality systems.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ice-300">
              Want to understand more about how SmartEye eQMS could transform the way you manage
              your SaMD design and development process? Get in touch with one of our expert team
              for a free and easy demo from those who built it.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-5">
            <ContactRow label="Email us">
              <a href={`mailto:${company.email}`} className="text-teal-300 hover:text-teal-200">
                {company.email}
              </a>
            </ContactRow>
            <ContactRow label="Mobile">
              <span>
                {company.phone} / {company.phoneAlt}
              </span>
            </ContactRow>
            <ContactRow label="UK">
              <span>{company.address}</span>
            </ContactRow>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div id="demo" className="glass-panel scroll-mt-32 rounded-3xl p-8 shadow-panel sm:p-10">
            <p className="eyebrow text-teal-400">Request a demo</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ice-100">
              Arrange your free tailored demo
            </h2>
            <p className="mt-2 text-sm text-ice-400">
              See for yourself how an enhanced 360° view could benefit your SaMD design and
              development.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-white/8 pb-5">
      <p className="eyebrow text-ice-400">{label}</p>
      <p className="mt-2 text-base text-ice-200">{children}</p>
    </div>
  );
}
