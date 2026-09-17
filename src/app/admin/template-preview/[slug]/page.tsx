import { notFound } from "next/navigation";
import { getBlogTemplateRenderer } from "@/components/blog-templates";
import { BLOG_TEMPLATES } from "@/lib/blogTemplates";
import { SAMPLE_BLOG, SAMPLE_RELATED } from "@/lib/sampleBlogContent";

// Standalone (no admin sidebar/chrome) render of a template with sample
// content, meant to be loaded in an <iframe> by TemplatePicker so the
// Desktop/Tablet/Mobile toggle gets a real viewport to respond to — Tailwind
// breakpoints react to actual viewport width, not a parent element's width.
export default async function TemplatePreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!BLOG_TEMPLATES.some((t) => t.slug === slug)) notFound();

  const Renderer = getBlogTemplateRenderer(slug);
  return <Renderer blog={SAMPLE_BLOG} related={SAMPLE_RELATED} />;
}
