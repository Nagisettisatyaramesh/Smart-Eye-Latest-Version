import { NextResponse } from "next/server";
import type { BlogStatus } from "@prisma/client";
import { getAllBlogsForAdmin, createBlog, type BlogInput } from "@/lib/blogs";
import { sanitizeBlogContent } from "@/lib/sanitize";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as BlogStatus | "ALL" | null;
  const blogs = await getAllBlogsForAdmin(status ?? "ALL");
  return NextResponse.json({ blogs });
}

type CreatePayload = BlogInput & { status?: BlogStatus; scheduledAt?: string };

export async function POST(request: Request) {
  let body: CreatePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.title?.trim()) return NextResponse.json({ error: "Title is required." }, { status: 400 });
  if (!body.excerpt?.trim()) return NextResponse.json({ error: "Excerpt is required." }, { status: 400 });
  if (!body.content?.trim()) return NextResponse.json({ error: "Content is required." }, { status: 400 });

  const status = body.status ?? "DRAFT";
  if (status === "SCHEDULED" && !body.scheduledAt) {
    return NextResponse.json({ error: "A schedule date/time is required for scheduled posts." }, { status: 400 });
  }

  try {
    const blog = await createBlog(
      { ...body, content: sanitizeBlogContent(body.content) },
      status,
      body.scheduledAt ? new Date(body.scheduledAt) : null,
    );
    return NextResponse.json({ blog }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to create post." }, { status: 500 });
  }
}
