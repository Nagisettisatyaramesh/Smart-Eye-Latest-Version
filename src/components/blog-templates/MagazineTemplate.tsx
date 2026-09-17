import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import { getCategoryGradient } from "@/lib/categoryColors";
import type { BlogTemplateProps } from "./types";

// Magazine — side-by-side hero (image + headline), bold category badge,
// author card, numbered related reads.
export function MagazineTemplate({ blog, related = [], previewBanner = false }: BlogTemplateProps) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className="relative bg-void pb-16 pt-40 sm:pt-48">
        <Container className="relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All resources
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full bg-teal-400 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy-950">
                {blog.category}
              </span>
              <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ice-100 sm:text-4xl lg:text-5xl">
                {blog.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ice-300">{blog.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                <span className="font-medium text-ice-100">{blog.author}</span>
                {blog.publishedAt && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-ice-400/50" aria-hidden="true" />
                    <span className="text-ice-400">{formatDisplayDate(blog.publishedAt)}</span>
                  </>
                )}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br ${getCategoryGradient(blog.category)}`}
              >
                {blog.featuredImage ? (
                  // eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary source
                  <img src={blog.featuredImage} alt={blog.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-grid opacity-30" />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Container>
      </div>

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-5xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">More like this</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((a, i) => (
                  <Link key={a.slug} href={`/resources/${a.slug}`} className="group block">
                    <span className="font-display text-4xl font-bold text-white/10 transition-colors group-hover:text-teal-400/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-xs text-teal-400">{a.category}</p>
                    <h3 className="mt-1 font-display text-sm font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-xs text-ice-400">{formatDisplayDate(a.publishedAt)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      <CTABand
        title="See SmartEye eQMS for yourself."
        body="Arrange your free tailored demo and see how an enhanced 360° view could benefit your medical device or SaMD design and development."
      />
    </>
  );
}
