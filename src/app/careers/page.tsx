import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";
import { jobs } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at S-Cube Technologies, the team behind SmartEye eQMS.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build the platform medical device teams rely on."
        body="Roles behind SmartEye eQMS are listed on our jobs page as they open — a snapshot of recent postings is below."
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {jobs.map((job) => (
              <Reveal key={job.slug}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group block rounded-3xl border border-white/8 bg-white/[0.02] p-8 transition-colors hover:border-teal-400/30"
                >
                  <h2 className="font-display text-xl font-semibold text-ice-100">{job.title}</h2>
                  <p className="mt-1 text-sm text-teal-300">
                    {job.employer} · {job.city}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300 group-hover:text-teal-200">
                    View listing
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-void py-20">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <p className="text-base text-ice-300">
              Don't see the right role listed?{" "}
              <a href={`mailto:${company.email}`} className="text-teal-300 underline underline-offset-4">
                Get in touch
              </a>{" "}
              — we're always keen to hear from people who care about medical device quality.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
