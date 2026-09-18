import { prisma } from "@/lib/db";
import type { Comment } from "@prisma/client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Comments are shown to every visitor immediately (matching the reference
// behaviour: a freshly submitted comment appears right away with an
// "awaiting moderation" notice) — status exists so a moderation UI can be
// added later without a schema change, not to gate visibility today.
export async function getCommentsForBlog(blogId: string): Promise<Comment[]> {
  return prisma.comment.findMany({
    where: { blogId, status: { not: "SPAM" } },
    orderBy: { createdAt: "asc" },
  });
}

export async function getCommentCount(blogId: string): Promise<number> {
  return prisma.comment.count({ where: { blogId, status: { not: "SPAM" } } });
}

export type CommentInput = {
  blogId: string;
  parentId?: string | null;
  name: string;
  email: string;
  website?: string;
  content: string;
};

export async function createComment(input: CommentInput): Promise<Comment> {
  const name = input.name.trim();
  const email = input.email.trim();
  const content = input.content.trim();

  if (!name) throw new Error("Name is required.");
  if (!email || !EMAIL_RE.test(email)) throw new Error("A valid email is required.");
  if (!content) throw new Error("Comment cannot be empty.");

  const blog = await prisma.blog.findUnique({ where: { id: input.blogId }, select: { id: true, status: true } });
  if (!blog || blog.status !== "PUBLISHED") throw new Error("This article is not open for comments.");

  if (input.parentId) {
    const parent = await prisma.comment.findUnique({ where: { id: input.parentId }, select: { blogId: true } });
    if (!parent || parent.blogId !== input.blogId) throw new Error("Invalid comment to reply to.");
  }

  return prisma.comment.create({
    data: {
      blogId: input.blogId,
      parentId: input.parentId || null,
      name: name.slice(0, 100),
      email: email.slice(0, 200),
      website: input.website?.trim().slice(0, 300) || null,
      content: content.slice(0, 5000),
    },
  });
}
