import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { articles, type Article } from "@/lib/articles";

const categoryPattern: Record<string, string> = {
  Regulatory: "from-cyan-500/25 via-navy-800 to-navy-950",
  QMS: "from-teal-500/25 via-navy-800 to-navy-950",
  "ISO 13485": "from-navy-600/40 via-navy-800 to-navy-950",
  "Medical Devices": "from-signal-amber/15 via-navy-800 to-navy-950",
};

export function ArticlePage({ article }: { article: Article }) {
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

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

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-3xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Related posts</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((a) => (
                  <Link key={a.slug} href={`/resources/${a.slug}`} className="group block">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${categoryPattern[a.category] ?? "from-teal-500/20 via-navy-800 to-navy-950"} transition-transform duration-500 group-hover:scale-[1.02]`}
                    >
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-navy-950/60 px-2.5 py-1 text-[0.6rem] text-ice-200 backdrop-blur">
                        {a.category}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-ice-400">{a.date}</p>
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
