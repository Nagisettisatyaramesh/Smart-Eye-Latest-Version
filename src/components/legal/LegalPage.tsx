import { Container } from "@/components/ui/Container";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="relative bg-void pb-28 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] mask-fade-b" aria-hidden="true" />
      <Container className="relative max-w-3xl">
        <p className="eyebrow kicker-line text-teal-400">Legal</p>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tighter text-ice-100 sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-4 text-sm text-ice-400">Last updated: {doc.lastUpdated}</p>

        {doc.intro && (
          <div className="mt-10 space-y-4 border-b border-white/8 pb-10 text-base leading-relaxed text-ice-300">
            {doc.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        <div className="mt-10 space-y-10">
          {doc.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-display text-xl font-semibold text-ice-100">{section.heading}</h2>
              )}
              {section.paragraphs && (
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-ice-300">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-ice-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
