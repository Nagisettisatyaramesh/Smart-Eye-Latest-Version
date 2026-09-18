import { NextResponse } from "next/server";
import { createComment } from "@/lib/comments";

export async function POST(request: Request) {
  let body: { blogId?: string; parentId?: string; name?: string; email?: string; website?: string; content?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.blogId) return NextResponse.json({ error: "Missing blog." }, { status: 400 });

  try {
    const comment = await createComment({
      blogId: body.blogId,
      parentId: body.parentId,
      name: body.name ?? "",
      email: body.email ?? "",
      website: body.website,
      content: body.content ?? "",
    });
    return NextResponse.json({ comment }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to post comment." }, { status: 400 });
  }
}
