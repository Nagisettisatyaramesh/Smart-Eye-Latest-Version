import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import type { BlogTemplateProps } from "./types";

// Editorial — wide reading column, large display typography, pull-quote
// style excerpt, dedicated author byline. Content rendering itself is
// identical to every other template; only the surrounding layout differs.
export function EditorialTemplate({ blog, related = [], previewBanner = false }: BlogTemplateProps) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className="relative bg-void pb-16 pt-40 sm:pt-48">
        <Container className="relative max-w-4xl text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All resources
          </Link>
          <p className="eyebrow kicker-line mx-auto mt-6 justify-center text-teal-400">{blog.category}</p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tighter text-ice-100 sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-ice-300">
            “{blog.excerpt}”
          </p>
        </Container>
      </div>

      {blog.featuredImage && (
        <Container className="max-w-5xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-white/8">
            {/* eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary source */}
            <img src={blog.featuredImage} alt={blog.title} className="h-full w-full object-cover" />
          </div>
        </Container>
      )}

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="mb-10 flex items-center justify-center gap-3 border-y border-white/8 py-4 text-sm text-ice-400">
            <span className="font-medium text-ice-200">{blog.author}</span>
            {blog.publishedAt && (
              <>
                <span className="h-1 w-1 rounded-full bg-ice-400/50" aria-hidden="true" />
                <span>{formatDisplayDate(blog.publishedAt)}</span>
              </>
            )}
          </div>
          <div className="blog-prose text-lg" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Container>
      </div>

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-2xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Further reading</p>
              <div className="mt-6 divide-y divide-white/8">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/resources/${a.slug}`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div>
                      <p className="text-xs text-teal-400">{a.category}</p>
                      <h3 className="mt-1 font-display text-base font-semibold text-ice-100 transition-colors group-hover:text-teal-300">
                        {a.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-ice-400 transition-transform group-hover:translate-x-1">→</span>
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
