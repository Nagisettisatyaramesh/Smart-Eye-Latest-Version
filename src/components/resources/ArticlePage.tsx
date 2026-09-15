import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import type { Article } from "@/lib/articles";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <>
      <div className="relative bg-void pb-20 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] mask-fade-b" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All resources
          </Link>

          <p className="eyebrow kicker-line mt-6 text-teal-400">{article.category}</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ice-100 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ice-400">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-ice-400/50" aria-hidden="true" />
            <span>{article.author}</span>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ice-300">{article.summary}</p>
        </Container>
      </div>

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-xl font-semibold text-ice-100 sm:text-2xl">{section.heading}</h2>
                )}
                {section.paragraphs && (
                  <div className={`space-y-4 text-base leading-relaxed text-ice-300 ${section.heading ? "mt-4" : ""}`}>
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className={`space-y-2.5 ${section.heading || section.paragraphs ? "mt-4" : ""}`}>
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 text-base leading-relaxed text-ice-300">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-white/8">
                    <table className="w-full min-w-[560px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-white/8 bg-white/[0.02] text-xs uppercase tracking-widest2 text-ice-400">
                          {section.table.headers.map((h, k) => (
                            <th key={k} className="px-5 py-3.5 font-medium">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, k) => (
                          <tr key={k} className="border-b border-white/5 text-sm text-ice-300 last:border-0">
                            {row.map((cell, l) => (
                              <td key={l} className="px-5 py-3.5 leading-relaxed">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTABand
        title="See SmartEye eQMS for yourself."
        body="Arrange your free tailored demo and see how an enhanced 360° view could benefit your medical device or SaMD design and development."
      />
    </>
  );
}
