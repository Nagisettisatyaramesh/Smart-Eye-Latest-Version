import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { company } from "@/lib/content";
import { jobs, type Job } from "@/lib/careers";

export function JobPage({ job }: { job: Job }) {
  const related = jobs.filter((j) => j.slug !== job.slug);

  return (
    <>
      <div className="relative bg-void pb-20 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] mask-fade-b" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
          >
            ← All roles
          </Link>

          <p className="eyebrow kicker-line mt-6 text-teal-400">{job.employer}</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tighter text-ice-100 sm:text-4xl lg:text-5xl">
            {job.title}
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <MetaRow label="Location" value={job.location} />
            <MetaRow label="Pay" value={job.pay} />
            <MetaRow label="Job type" value={job.jobType} />
            <MetaRow label="Posted" value={job.datePosted} />
          </div>

          <p className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-ice-400">
            This is a historical listing — the application deadline ({job.applicationDeadline}) has
            passed. For current openings, see{" "}
            <Link href="/careers" className="text-teal-300 underline underline-offset-4">
              all roles
            </Link>{" "}
            or{" "}
            <a href={`mailto:${company.email}`} className="text-teal-300 underline underline-offset-4">
              get in touch
            </a>
            .
          </p>
        </Container>
      </div>

      <div className="bg-navy-950 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {job.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-xl font-semibold text-ice-100 sm:text-2xl">{section.heading}</h2>
                )}
                {section.paragraphs && (
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-ice-300">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 text-base leading-relaxed text-ice-300">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
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

      {related.length > 0 && (
        <div className="bg-navy-950 pb-16 sm:pb-20">
          <Container className="max-w-3xl">
            <div className="border-t border-white/8 pt-10">
              <p className="eyebrow text-ice-400">Related roles</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/careers/${r.slug}`}
                    className="group block rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-teal-400/30"
                  >
                    <p className="text-xs text-ice-400">{r.datePosted}</p>
                    <h3 className="mt-1.5 font-display text-base font-semibold text-ice-100 transition-colors group-hover:text-teal-300">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-ice-400">
                      {r.employer} · {r.city}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      <CTABand
        title="Don't see the right role listed?"
        body="Get in touch — we're always keen to hear from people who care about medical device quality."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="All roles"
        secondaryHref="/careers"
      />
    </>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/8 pb-3">
      <p className="eyebrow text-ice-400">{label}</p>
      <p className="mt-1.5 text-sm text-ice-200">{value}</p>
    </div>
  );
}
