"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@prisma/client";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCategoryGradient } from "@/lib/categoryColors";
import { formatDisplayDate } from "@/lib/formatDate";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ResourcesPreview({ posts: allPosts }: { posts: Blog[] }) {
  const posts = allPosts.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-void py-28 sm:py-36">
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Resources" title="Learn from teams building compliant medical devices." />
          <Link href="/resources" className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-teal-300 lg:flex">
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
              <Link href={`/resources/${post.slug}`} className="group block">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${getCategoryGradient(post.category)} transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  {post.featuredImage ? (
                    <img src={post.featuredImage} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-grid opacity-30" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1 text-[0.65rem] text-ice-200 backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <p className="mt-4 text-xs text-ice-400">{formatDisplayDate(post.publishedAt)}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-ice-100 transition-colors group-hover:text-teal-300">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link href="/resources" className="text-sm font-medium text-teal-300">
            All resources →
          </Link>
        </div>
      </Container>
    </section>
  );
}
