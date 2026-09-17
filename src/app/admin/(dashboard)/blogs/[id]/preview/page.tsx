import { notFound } from "next/navigation";
import { getBlogById, getRelatedPublishedBlogs } from "@/lib/blogs";
import { getBlogTemplateRenderer } from "@/components/blog-templates";

export const dynamic = "force-dynamic";

export default async function PreviewBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) notFound();

  const related = await getRelatedPublishedBlogs(blog.id, 3);
  const TemplateRenderer = getBlogTemplateRenderer(blog.templateSlug);

  return <TemplateRenderer blog={blog} related={related} previewBanner />;
}
