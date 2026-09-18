import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { ContactFormsPanel } from "@/components/contact/ContactFormsPanel";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the SmartEye eQMS team, or request a free tailored demo.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-void pb-28 pt-40 sm:pt-48">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_-10%,#0f1c26_0%,#050a10_50%,#04070a_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-b" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-40" density={22} />
      </div>

      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Contact</p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ice-100 sm:text-5xl">
              Talk to the SmartEye eQMS team.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ice-300">
              Want to understand more about how SmartEye eQMS could transform the way you manage
              your SaMD design and development process? Get in touch with one of our expert team
              for a free and easy demo from those who built it.
            </p>
            <a
              href="https://youtu.be/YjVfsjdiYAY"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-200 transition-colors hover:border-teal-400/50 hover:text-teal-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
              </svg>
              Watch a Video
            </a>
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

        <ContactFormsPanel />
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
