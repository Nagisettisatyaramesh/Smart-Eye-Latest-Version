import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ResourcesGrid } from "@/components/resources/ResourcesGrid";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and articles on ISO 13485, medical device quality management and SaMD compliance.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge hub"
        title="Navigate the world of medical-device quality."
        body="Guides and articles on ISO 13485, medical device quality management, regulatory compliance and SaMD — everyone has their own way of learning, these resources help you learn more."
      />

      <ResourcesGrid />

      <section id="videos" className="scroll-mt-32 bg-void py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Videos &amp; media</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              See SmartEye eQMS in action.
            </h2>
            <a
              href="https://youtu.be/YjVfsjdiYAY"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-200 transition-colors hover:border-teal-400/50 hover:text-teal-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
              </svg>
              Watch a video
            </a>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
