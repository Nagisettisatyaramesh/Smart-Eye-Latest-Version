import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/blogs";
import { BlogEditorForm, type BlogEditorInitial } from "@/components/admin/BlogEditorForm";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) notFound();

  const initial: BlogEditorInitial = {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    featuredImage: blog.featuredImage,
    author: blog.author,
    category: blog.category,
    tags: blog.tags,
    templateSlug: blog.templateSlug,
    status: blog.status,
    scheduledAt: blog.scheduledAt ? blog.scheduledAt.toISOString() : null,
    seoTitle: blog.seoTitle,
    metaDescription: blog.metaDescription,
    focusKeywords: blog.focusKeywords,
    canonicalUrl: blog.canonicalUrl,
    ogImage: blog.ogImage,
    socialTitle: blog.socialTitle,
    socialDescription: blog.socialDescription,
  };

  return <BlogEditorForm initial={initial} />;
}
