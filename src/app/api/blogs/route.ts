import { NextResponse } from "next/server";
import { getPublishedBlogs } from "@/lib/blogs";

// Public — returns only published articles.
export async function GET() {
  const blogs = await getPublishedBlogs();
  return NextResponse.json({ blogs });
}
