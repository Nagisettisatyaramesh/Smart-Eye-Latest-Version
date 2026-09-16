import { NextResponse } from "next/server";
import { publishBlog } from "@/lib/blogs";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const blog = await publishBlog(id);
    return NextResponse.json({ blog });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed to publish." }, { status: 500 });
  }
}
