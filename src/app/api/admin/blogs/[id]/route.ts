import { NextResponse } from "next/server";
import type { BlogStatus } from "@prisma/client";
import { getBlogById, updateBlog, deleteBlog, type BlogInput } from "@/lib/blogs";
import { sanitizeBlogContent } from "@/lib/sanitize";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ blog });
}

type UpdatePayload = BlogInput & { status?: BlogStatus; scheduledAt?: string | null };

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let body: UpdatePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.title?.trim()) return NextResponse.json({ error: "Title is required." }, { status: 400 });
  if (!body.excerpt?.trim()) return NextResponse.json({ error: "Excerpt is required." }, { status: 400 });
  if (!body.content?.trim()) return NextResponse.json({ error: "Content is required." }, { status: 400 });

  try {
    const blog = await updateBlog(
      id,
      { ...body, content: sanitizeBlogContent(body.content) },
      body.status,
      body.scheduledAt ? new Date(body.scheduledAt) : null,
    );
    return NextResponse.json({ blog });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to update post." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await deleteBlog(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to delete post." }, { status: 400 });
  }
}
