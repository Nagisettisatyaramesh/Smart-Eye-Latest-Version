import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobPage } from "@/components/careers/JobPage";
import { jobs, getJobBySlug } from "@/lib/careers";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: `${job.title} at ${job.employer} — ${job.location}.`,
  };
}

export default async function JobRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();
  return <JobPage job={job} />;
}
