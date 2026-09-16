import { NextResponse } from "next/server";
import { unpublishBlog } from "@/lib/blogs";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const blog = await unpublishBlog(id);
    return NextResponse.json({ blog });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to unpublish." }, { status: 500 });
  }
}
