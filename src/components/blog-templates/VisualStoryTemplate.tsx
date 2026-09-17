import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import { getCategoryGradient } from "@/lib/categoryColors";
import type { BlogTemplateProps } from "./types";

// Visual Story — full-bleed cinematic hero with the headline overlaid on
// top. Falls back to a category-tinted gradient (same pattern used
// elsewhere on the site) when there's no featured image, so the layout
// never breaks for text-only articles.
export function VisualStoryTemplate({ blog, related = [], previewBanner = false }: BlogTemplateProps) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className={`relative flex min-h-[70vh] items-end bg-gradient-to-br ${getCategoryGradient(blog.category)} pt-40`}>
        {blog.featuredImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary source
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-grid opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

        <Container className="relative max-w-4xl pb-14">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-ice-100/90 hover:text-white"
          >
            ← All resources
          </Link>
          <p className="eyebrow kicker-line mt-6 text-teal-300">{blog.category}</p>
          <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ice-200">
            {blog.publishedAt && <span>{formatDisplayDate(blog.publishedAt)}</span>}
            <span className="h-1 w-1 rounded-full bg-ice-200/60" aria-hidden="true" />
            <span>{blog.author}</span>
          </div>
        </Container>
      </div>

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="mb-8 text-lg leading-relaxed text-ice-300">{blog.excerpt}</p>
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Container>
      </div>

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-5xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Related posts</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((a) => (
                  <Link key={a.slug} href={`/resources/${a.slug}`} className="group block">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${getCategoryGradient(a.category)} transition-transform duration-500 group-hover:scale-[1.02]`}
                    >
                      {a.featuredImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={a.featuredImage} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 bg-grid opacity-30" />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-navy-950/60 px-2.5 py-1 text-[0.6rem] text-ice-200 backdrop-blur">
                        {a.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
                      {a.title}
                    </h3>
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
