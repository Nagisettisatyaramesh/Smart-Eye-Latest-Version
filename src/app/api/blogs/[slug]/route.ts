import { NextResponse } from "next/server";
import { getPublishedBlogBySlug } from "@/lib/blogs";

// Public — 404s for drafts/scheduled/archived, same as the page route.
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  if (!blog) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ blog });
}
