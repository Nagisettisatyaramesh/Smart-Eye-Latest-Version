import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import type { BlogTemplateProps } from "./types";

// Corporate — breadcrumb header, boxed content card, sidebar meta panel.
// Restrained, structured; suited to formal regulatory/compliance write-ups.
export function CorporateTemplate({ blog, related = [], previewBanner = false }: BlogTemplateProps) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className="bg-navy-950 pb-16 pt-40 sm:pt-48">
        <Container className="max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-ice-400">
            <Link href="/resources" className="hover:text-teal-300">
              Resources
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ice-200">{blog.category}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ice-100 sm:text-4xl">
            {blog.title}
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-10">
              {blog.featuredImage && (
                <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/8">
                  {/* eslint-disable-next-line @next/next/no-img-element -- admin-uploaded, arbitrary source */}
                  <img src={blog.featuredImage} alt={blog.title} className="h-full w-full object-cover" />
                </div>
              )}
              <p className="mb-8 border-l-2 border-teal-400/50 pl-4 text-base leading-relaxed text-ice-300">
                {blog.excerpt}
              </p>
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <aside className="h-fit space-y-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ice-400">Author</p>
                <p className="mt-1.5 text-sm font-medium text-ice-100">{blog.author}</p>
              </div>
              {blog.publishedAt && (
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-ice-400">Published</p>
                  <p className="mt-1.5 text-sm font-medium text-ice-100">{formatDisplayDate(blog.publishedAt)}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest2 text-ice-400">Category</p>
                <p className="mt-1.5 text-sm font-medium text-ice-100">{blog.category}</p>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Related reading</p>
              <div className="mt-6 divide-y divide-white/8 rounded-2xl border border-white/8">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/resources/${a.slug}`}
                    className="group flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <div>
                      <p className="text-xs text-teal-400">{a.category}</p>
                      <h3 className="mt-1 text-sm font-semibold text-ice-100 transition-colors group-hover:text-teal-300">
                        {a.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-ice-400 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>

      <CTABand
        title="See SmartEye eQMS for yourself."
        body="Arrange your free tailored demo and see how an enhanced 360° view could benefit your medical device or SaMD design and development."
      />
    </>
  );
}
