import { prisma } from "@/lib/db";
import type { Blog, BlogStatus } from "@prisma/client";
import { DEFAULT_TEMPLATE_SLUG } from "@/lib/blogTemplates";

export const DEFAULT_CATEGORIES = ["Regulatory", "QMS", "ISO 13485", "Medical Devices"];

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 100);
}

export async function generateUniqueSlug(title: string, currentId?: string): Promise<string> {
  let base = slugify(title) || "post";
  let slug = base;
  let n = 2;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await prisma.blog.findUnique({ where: { slug } });
    if (!existing || existing.id === currentId) return slug;
    slug = `${base}-${n}`;
    n += 1;
  }
}

// Any SCHEDULED post whose time has arrived gets flipped to PUBLISHED. Called
// on every public read (belt) and optionally by a Vercel Cron hitting
// /api/cron/publish-scheduled (suspenders) — see vercel.json.
export async function promoteDueScheduledBlogs(): Promise<number> {
  const due = await prisma.blog.findMany({
    where: { status: "SCHEDULED", scheduledAt: { lte: new Date() } },
  });
  if (due.length === 0) return 0;
  await prisma.blog.updateMany({
    where: { id: { in: due.map((b) => b.id) } },
    data: { status: "PUBLISHED", publishedAt: new Date() },
  });
  return due.length;
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  await promoteDueScheduledBlogs();
  return prisma.blog.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
  });
}

export async function getPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  await promoteDueScheduledBlogs();
  return prisma.blog.findFirst({ where: { slug, status: "PUBLISHED" } });
}

export async function getRelatedPublishedBlogs(excludeId: string, limit = 3): Promise<Blog[]> {
  return prisma.blog.findMany({
    where: { status: "PUBLISHED", id: { not: excludeId } },
    orderBy: { publishedAt: "desc" },
    take: limit,
  });
}

export async function getAllBlogsForAdmin(status?: BlogStatus | "ALL"): Promise<Blog[]> {
  await promoteDueScheduledBlogs();
  return prisma.blog.findMany({
    where: status && status !== "ALL" ? { status } : undefined,
    orderBy: { updatedAt: "desc" },
  });
}

export async function getBlogById(id: string): Promise<Blog | null> {
  return prisma.blog.findUnique({ where: { id } });
}

export async function getBlogStats() {
  const [total, published, draft, scheduled, archived, recentPublished, recentUpdated] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { status: "PUBLISHED" } }),
    prisma.blog.count({ where: { status: "DRAFT" } }),
    prisma.blog.count({ where: { status: "SCHEDULED" } }),
    prisma.blog.count({ where: { status: "ARCHIVED" } }),
    prisma.blog.findMany({ where: { status: "PUBLISHED" }, orderBy: { publishedAt: "desc" }, take: 5 }),
    prisma.blog.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
  ]);
  return { total, published, draft, scheduled, archived, recentPublished, recentUpdated };
}

export type BlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  featuredImage?: string | null;
  author: string;
  category: string;
  tags?: string[];
  templateSlug?: string;
  seoTitle?: string;
  metaDescription?: string;
  focusKeywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  socialTitle?: string;
  socialDescription?: string;
};

function applySeoDefaults(input: BlogInput, slug: string) {
  return {
    seoTitle: input.seoTitle?.trim() || input.title,
    metaDescription: input.metaDescription?.trim() || input.excerpt,
    focusKeywords: input.focusKeywords?.trim() || null,
    canonicalUrl: input.canonicalUrl?.trim() || null, // resolved against SITE_URL at render time if empty
    ogImage: input.ogImage?.trim() || input.featuredImage || null,
    socialTitle: input.socialTitle?.trim() || input.seoTitle?.trim() || input.title,
    socialDescription: input.socialDescription?.trim() || input.metaDescription?.trim() || input.excerpt,
  };
}

export async function createBlog(input: BlogInput, status: BlogStatus, scheduledAt?: Date | null): Promise<Blog> {
  const slug = input.slug?.trim() ? slugify(input.slug) : await generateUniqueSlug(input.title);
  const seo = applySeoDefaults(input, slug);
  return prisma.blog.create({
    data: {
      title: input.title.trim(),
      slug,
      excerpt: input.excerpt.trim(),
      content: input.content,
      featuredImage: input.featuredImage || null,
      author: input.author.trim() || "SmartEye Team",
      category: input.category.trim() || "General",
      tags: (input.tags ?? []).join(","),
      templateSlug: input.templateSlug?.trim() || DEFAULT_TEMPLATE_SLUG,
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
      scheduledAt: status === "SCHEDULED" ? scheduledAt : null,
      ...seo,
    },
  });
}

export async function updateBlog(
  id: string,
  input: BlogInput,
  status?: BlogStatus,
  scheduledAt?: Date | null,
): Promise<Blog> {
  const existing = await prisma.blog.findUniqueOrThrow({ where: { id } });
  let slug = existing.slug;
  if (input.slug?.trim() && slugify(input.slug) !== existing.slug) {
    slug = await generateUniqueSlug(input.slug, id);
  } else if (input.title.trim() !== existing.title && !input.slug?.trim()) {
    // Title changed but admin didn't touch the slug field — keep the
    // existing slug so published URLs never break silently.
    slug = existing.slug;
  }
  const seo = applySeoDefaults(input, slug);
  const nextStatus = status ?? existing.status;

  return prisma.blog.update({
    where: { id },
    data: {
      title: input.title.trim(),
      slug,
      excerpt: input.excerpt.trim(),
      content: input.content,
      featuredImage: input.featuredImage || null,
      author: input.author.trim() || "SmartEye Team",
      category: input.category.trim() || "General",
      tags: (input.tags ?? []).join(","),
      templateSlug: input.templateSlug?.trim() || existing.templateSlug,
      status: nextStatus,
      publishedAt:
        nextStatus === "PUBLISHED" && existing.status !== "PUBLISHED" ? new Date() : existing.publishedAt,
      scheduledAt: nextStatus === "SCHEDULED" ? scheduledAt : null,
      ...seo,
    },
  });
}

export async function publishBlog(id: string): Promise<Blog> {
  return prisma.blog.update({
    where: { id },
    data: { status: "PUBLISHED", publishedAt: new Date(), scheduledAt: null },
  });
}

export async function unpublishBlog(id: string): Promise<Blog> {
  return prisma.blog.update({ where: { id }, data: { status: "ARCHIVED" } });
}

export async function deleteBlog(id: string): Promise<void> {
  const blog = await prisma.blog.findUniqueOrThrow({ where: { id } });
  if (blog.status === "PUBLISHED") {
    throw new Error("Published articles must be unpublished (archived) before they can be deleted.");
  }
  await prisma.blog.delete({ where: { id } });
}
