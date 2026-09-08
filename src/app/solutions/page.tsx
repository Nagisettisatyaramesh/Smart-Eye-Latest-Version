import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "SmartEye eQMS solutions for medical device and Software as a Medical Device (SaMD) teams.",
};

const deviceCapabilities = ["Design Control", "Risk", "Testing", "Validation", "Compliance", "Post-Market"];
const samdCapabilities = ["IEC 62304", "Requirements", "Architecture", "Development", "Verification", "Validation"];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for how your product is actually developed."
        body="Whether you're bringing a hardware device or standalone software to market, SmartEye eQMS adapts to your product type without losing a single connection between requirements, risk and evidence."
      />

      {/* Medical Devices — photographic, physical engineering */}
      <section className="relative overflow-hidden border-y border-white/8 bg-navy-950 py-28 sm:py-36">
        <Image
          src="/images/prosthetic-hand.jpg"
          alt="A robotic prosthetic hand, representing advanced medical device engineering"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />

        <Container className="relative">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Solution</p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tighter text-ice-100 sm:text-5xl">
              Medical Devices
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ice-300 sm:text-lg">
              Design control, risk, testing, production and post-market surveillance for
              hardware-based devices — connected end to end in one platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {deviceCapabilities.map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-navy-950/50 px-4 py-2 text-xs font-medium text-ice-200 backdrop-blur">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/medical-devices">Explore Medical Devices</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SaMD — dark, futuristic, code-driven */}
      <section className="relative overflow-hidden bg-void py-28 sm:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(79,208,240,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.18]" />

        <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow kicker-line text-cyan-300">Solution</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tighter text-ice-100 sm:text-5xl">
              Software as a Medical Device
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ice-300 sm:text-lg">
              IEC 62304 software development lifecycle documentation, connected to the same
              requirement and risk record as the rest of your device.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {samdCapabilities.map((c) => (
                <span key={c} className="rounded-full border border-cyan-300/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-200">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/samd">Explore SaMD</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel rounded-3xl p-6 font-mono text-xs leading-relaxed shadow-panel sm:p-8">
              <div className="flex items-center gap-2 border-b border-white/8 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-signal-rose/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
                <span className="ml-2 text-ice-400">samd-lifecycle.smarteye</span>
              </div>
              <div className="mt-5 space-y-1.5 text-ice-300">
                <p className="text-ice-400/60">// software safety classification</p>
                <p>requirements <span className="text-cyan-300">→</span> architecture</p>
                <p>architecture <span className="text-cyan-300">→</span> development</p>
                <p>development <span className="text-cyan-300">→</span> verification</p>
                <p>verification <span className="text-cyan-300">→</span> validation</p>
                <p>validation <span className="text-teal-300">→ release</span></p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
