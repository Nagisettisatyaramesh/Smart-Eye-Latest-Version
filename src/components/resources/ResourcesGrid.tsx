"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const categoryPattern: Record<string, string> = {
  Regulatory: "from-cyan-500/25 via-navy-800 to-navy-950",
  QMS: "from-teal-500/25 via-navy-800 to-navy-950",
  "ISO 13485": "from-navy-600/40 via-navy-800 to-navy-950",
  "Medical Devices": "from-signal-amber/15 via-navy-800 to-navy-950",
  SaMD: "from-cyan-400/25 via-navy-800 to-navy-950",
};

const filters = ["All", "QMS", "ISO 13485", "Regulatory", "Medical Devices", "SaMD"];

// approximate editorial read-time estimates, not a product claim
const readTimes: Record<string, string> = {
  "how-an-eqms-simplifies-iso-13485-compliance-for-uk-medical-device-startups": "7 min read",
  "why-uk-medical-device-startups-are-adopting-eqms-to-accelerate-iso-13485-compliance": "6 min read",
  "iso-13485-explained-in-plain-english": "5 min read",
  "why-most-medical-device-startups-fail-their-first-audit": "8 min read",
  "iso-13485-qms-a-complete-guide-for-medical-device-companies-and-startups": "10 min read",
  "streamlining-medical-device-design-and-development-under-eu-mdr-2017-745-a-comprehensive-guide": "9 min read",
  "documentation-control-in-iso-13485": "6 min read",
  "advantages-and-disadvantages-of-e-qms-in-medical-device-companies": "7 min read",
};

export function ResourcesGrid() {
  const [active, setActive] = useState("All");
  const [featured, ...rest] = blogPosts;
  const visible = rest.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <section className="border-y border-white/8 bg-navy-950 py-16">
        <Container>
          <Reveal>
            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-3xl bg-gradient-to-br ${categoryPattern[featured.category] ?? "from-teal-500/20 via-navy-800 to-navy-950"} transition-transform duration-500 group-hover:scale-[1.01]`}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1.5 text-xs text-ice-200 backdrop-blur">
                  Featured
                </span>
              </div>
              <div>
                <span className="eyebrow text-teal-400">{featured.category}</span>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ice-100 transition-colors group-hover:text-teal-300 sm:text-3xl">
                  {featured.title}
                </h2>
                <div className="mt-5 flex items-center gap-4 text-xs text-ice-400">
                  <span>{featured.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readTimes[featured.slug] ?? "6 min read"}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300">
                  Read the article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-950 pb-20">
        <Container>
          <div className="flex flex-wrap gap-2 border-b border-white/8 pb-8">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? "border-teal-400/50 bg-teal-400/15 text-teal-200"
                    : "border-white/10 text-ice-300 hover:border-teal-400/30 hover:text-teal-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.08)}
            className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link href={post.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${categoryPattern[post.category] ?? "from-teal-500/20 via-navy-800 to-navy-950"} transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] text-ice-200 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs text-ice-400">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{readTimes[post.slug] ?? "6 min read"}</span>
                  </div>
                  <h2 className="mt-1.5 font-display text-base font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
                    {post.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 opacity-0 transition-opacity group-hover:opacity-100">
                    Read more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
            {visible.length === 0 && (
              <p className="col-span-full py-12 text-center text-sm text-ice-400">
                No articles in this category yet — check back soon.
              </p>
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
