import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { videos } from "@/lib/content";
import { getPublishedBlogs } from "@/lib/blogs";
import { getCategoryGradient } from "@/lib/categoryColors";
import { formatDisplayDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and articles on ISO 13485, medical device quality management and SaMD compliance.",
};

// Blogs are admin-managed (published/unpublished at any time) — always
// render fresh rather than caching a stale listing.
export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const blogPosts = await getPublishedBlogs();

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
                <Link href={`/resources/${post.slug}`} className="group block h-full">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${getCategoryGradient(post.category)} transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    {post.featuredImage ? (
                      <img src={post.featuredImage} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-grid opacity-30" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] text-ice-200 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-ice-400">{formatDisplayDate(post.publishedAt)}</p>
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
        <Container>
          <Reveal>
            <p className="eyebrow kicker-line text-teal-400">Videos &amp; media</p>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ice-100 sm:text-3xl">
              See SmartEye eQMS in action.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
              <Reveal key={video.id}>
                <a
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/8 bg-navy-950">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-950/20 transition-colors duration-300 group-hover:bg-navy-950/10" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-navy-950/70 backdrop-blur transition-transform duration-300 group-hover:scale-105">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M5 3.5v9l8-4.5-8-4.5z" fill="#f5f8fa" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-snug text-ice-200 transition-colors group-hover:text-teal-300">
                    {video.title}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
