import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { formatDisplayDate } from "@/lib/formatDate";
import type { BlogTemplateProps } from "./types";

// Minimal — no hero imagery, narrow reading width, restrained metadata.
// Deliberately skips the featured image even when one is set, since the
// whole point of this layout is text-only focus.
export function MinimalTemplate({ blog, related = [], previewBanner = false }: BlogTemplateProps) {
  return (
    <>
      {previewBanner && (
        <div className="bg-signal-amber/15 py-2.5 text-center text-xs font-medium text-signal-amber">
          Preview — this is how the article will look once published. It is not live yet.
        </div>
      )}

      <div className="bg-navy-950 pb-16 pt-40 sm:pt-48">
        <Container className="max-w-2xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All resources
          </Link>

          <p className="mt-8 text-xs uppercase tracking-widest2 text-ice-400">{blog.category}</p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ice-100 sm:text-3xl">
            {blog.title}
          </h1>
          <p className="mt-3 text-sm text-ice-400">
            {blog.author}
            {blog.publishedAt && <> · {formatDisplayDate(blog.publishedAt)}</>}
          </p>

          <div className="mt-10 blog-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />

          {related.length > 0 && (
            <div className="mt-16 border-t border-white/8 pt-8">
              <p className="text-xs uppercase tracking-widest2 text-ice-400">Also worth reading</p>
              <ul className="mt-4 space-y-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/resources/${a.slug}`} className="text-sm text-ice-200 hover:text-teal-300">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
