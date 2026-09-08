"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const categoryPattern: Record<string, string> = {
  Regulatory: "from-cyan-500/25 via-navy-800 to-navy-950",
  QMS: "from-teal-500/25 via-navy-800 to-navy-950",
  "ISO 13485": "from-navy-600/40 via-navy-800 to-navy-950",
  "Medical Devices": "from-signal-amber/15 via-navy-800 to-navy-950",
};

export function ResourcesPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            surface="light"
            eyebrow="Resources"
            title="Learn from teams building compliant medical devices."
          />
          <Link href="/resources" className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-teal-600 lg:flex">
            All resources
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1, 0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${categoryPattern[post.category] ?? "from-teal-500/20 via-navy-800 to-navy-950"} transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] text-ice-200 backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <p className="mt-4 text-xs text-graphite-500">{post.date}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-navy-950 transition-colors group-hover:text-teal-600">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link href="/resources" className="text-sm font-medium text-teal-600">
            All resources →
          </Link>
        </div>
      </Container>
    </section>
  );
}
