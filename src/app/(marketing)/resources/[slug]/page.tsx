import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogTemplateRenderer } from "@/components/blog-templates";
import { getPublishedBlogBySlug, getRelatedPublishedBlogs } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

// Blogs are admin-managed and can change at any time — always render fresh
// rather than caching a stale version.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) return {};

  const canonical = blog.canonicalUrl || `${SITE_URL}/resources/${blog.slug}`;
  const ogImage = blog.ogImage || blog.featuredImage || undefined;

  return {
    title: blog.seoTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    alternates: { canonical },
    openGraph: {
      title: blog.socialTitle || blog.seoTitle || blog.title,
      description: blog.socialDescription || blog.metaDescription || blog.excerpt,
      url: canonical,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.socialTitle || blog.seoTitle || blog.title,
      description: blog.socialDescription || blog.metaDescription || blog.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) notFound();

  const related = await getRelatedPublishedBlogs(blog.id, 3);
  const canonical = blog.canonicalUrl || `${SITE_URL}/resources/${blog.slug}`;
  const TemplateRenderer = getBlogTemplateRenderer(blog.templateSlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.publishedAt?.toISOString(),
    dateModified: blog.updatedAt.toISOString(),
    author: { "@type": "Person", name: blog.author },
    publisher: { "@type": "Organization", name: "S-Cube Technologies" },
    mainEntityOfPage: canonical,
    ...(blog.featuredImage ? { image: blog.featuredImage } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TemplateRenderer blog={blog} related={related} />
    </>
  );
}
