import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedBlogs } from "@/lib/blogs";

// Blog URLs change whenever an admin publishes/unpublishes a post, so this
// must reflect the database on every request rather than being generated
// once at build time.
export const dynamic = "force-dynamic";

const routes = [
  "",
  "/platform",
  "/solutions",
  "/medical-devices",
  "/samd",
  "/design-control",
  "/risk-management",
  "/test-management",
  "/compliance",
  "/security",
  "/resources",
  "/about",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/website-cookie-policy",
  "/quality-policy",
  "/security-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // getPublishedBlogs() only returns status: PUBLISHED rows (drafts,
  // archived, and not-yet-due scheduled posts are excluded by that query,
  // not by any filtering here), and promotes any due scheduled posts first —
  // so this is always exactly what's live on the public site right now.
  const publishedBlogs = await getPublishedBlogs();
  const blogPages: MetadataRoute.Sitemap = publishedBlogs.map((blog) => ({
    url: `${SITE_URL}/resources/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...blogPages];
}
