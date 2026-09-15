import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and articles on ISO 13485, medical device quality management and SaMD compliance.",
};

const categoryPattern: Record<string, string> = {
  Regulatory: "from-cyan-500/25 via-navy-800 to-navy-950",
  QMS: "from-teal-500/25 via-navy-800 to-navy-950",
  "ISO 13485": "from-navy-600/40 via-navy-800 to-navy-950",
  "Medical Devices": "from-signal-amber/15 via-navy-800 to-navy-950",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn from teams building compliant medical devices."
        body="Guides and articles on ISO 13485, medical device quality management, regulatory compliance and SaMD — everyone has their own way of learning, these resources help you learn more."
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Reveal key={post.slug}>
                <Link href={post.url} className="group block h-full">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${categoryPattern[post.category] ?? "from-teal-500/20 via-navy-800 to-navy-950"} transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] text-ice-200 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-ice-400">{post.date}</p>
                  <h2 className="mt-1.5 font-display text-base font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
                    {post.title}
                  </h2>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-void py-24">
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
