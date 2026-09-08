import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at S-Cube Technologies, the team behind SmartEye eQMS.",
};

const roles = [
  {
    title: "Java Spring Boot Engineer",
    meta: "8–12 years experience · Remote",
    skills: [
      "Developing new APIs using Spring Boot",
      "Spring Cloud & Spring Security, microservices architecture",
      "REST API and multi-tenant architecture design",
      "Docker, Kubernetes and CI/CD",
    ],
  },
  {
    title: "UI Engineer — React.js + TypeScript",
    meta: "8–12 years experience · Remote",
    skills: [
      "Developing new user-facing features using React.js",
      "Building reusable components and front-end libraries",
      "Modern front-end build pipelines and tooling",
      "RESTful APIs and modern authorisation (JWT)",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build the platform medical device teams rely on."
        body="We're a remote-first team building SmartEye eQMS for medical device and SaMD companies worldwide."
      />

      <section className="border-y border-white/8 bg-navy-950 py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {roles.map((role) => (
              <Reveal key={role.title}>
                <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8">
                  <h2 className="font-display text-xl font-semibold text-ice-100">{role.title}</h2>
                  <p className="mt-1 text-sm text-teal-300">{role.meta}</p>
                  <ul className="mt-5 space-y-2.5">
                    {role.skills.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed text-ice-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/70" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${company.email}?subject=${encodeURIComponent(role.title)}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
                  >
                    Apply — {company.email}
                  </a>
                </div>
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
