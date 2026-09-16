import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import { getCategoryGradient } from "@/lib/categoryColors";

export type BlogArticleViewData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // sanitized HTML
  featuredImage: string | null;
  author: string;
  category: string;
  publishedAt: Date | string | null;
};

export type RelatedBlogCard = {
  title: string;
  slug: string;
  category: string;
  publishedAt: Date | string | null;
  featuredImage: string | null;
};

export function BlogArticleView({
  blog,
  related = [],
  previewBanner = false,
}: {
  blog: BlogArticleViewData;
  related?: RelatedBlogCard[];
  previewBanner?: boolean;
}) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className="relative bg-void pb-20 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] mask-fade-b" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All resources
          </Link>

          <p className="eyebrow kicker-line mt-6 text-teal-400">{blog.category}</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ice-100 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ice-400">
            {blog.publishedAt && <span>{formatDisplayDate(blog.publishedAt)}</span>}
            <span className="h-1 w-1 rounded-full bg-ice-400/50" aria-hidden="true" />
            <span>{blog.author}</span>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ice-300">{blog.excerpt}</p>

          {blog.featuredImage && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/8">
              {/* eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary source */}
              <img src={blog.featuredImage} alt={blog.title} className="h-full w-full object-cover" />
            </div>
          )}
        </Container>
      </div>

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Container>
      </div>

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-3xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Related posts</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((a) => (
                  <Link key={a.slug} href={`/resources/${a.slug}`} className="group block">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${getCategoryGradient(a.category)} transition-transform duration-500 group-hover:scale-[1.02]`}
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
                    <p className="mt-3 text-xs text-ice-400">{formatDisplayDate(a.publishedAt)}</p>
                    <h3 className="mt-1 font-display text-sm font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
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
