"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { formatDisplayDateTime } from "@/lib/formatDate";

type CommentData = {
  id: string;
  parentId: string | null;
  name: string;
  website: string | null;
  content: string;
  status: string;
  createdAt: string | Date;
};

function buildTree(comments: CommentData[]) {
  const byParent = new Map<string | null, CommentData[]>();
  for (const c of comments) {
    const key = c.parentId;
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key)!.push(c);
  }
  return byParent;
}

export function CommentsSection({ blogId, comments }: { blogId: string; comments: CommentData[] }) {
  const tree = buildTree(comments);
  const topLevel = tree.get(null) ?? [];
  const count = comments.length;
  const formRef = useRef<HTMLDivElement>(null);
  const [replyTo, setReplyTo] = useState<{ id: string; name: string } | null>(null);

  function startReply(id: string, name: string) {
    setReplyTo({ id, name });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 border-b border-white/8 pb-4">
          <span className="text-teal-400" aria-hidden="true">
            💬
          </span>
          <p className="eyebrow text-ice-200">
            {count === 0 ? "No comments" : `${count} comment${count === 1 ? "" : "s"}`}
          </p>
        </div>

        {topLevel.length > 0 && (
          <div className="mt-8 space-y-8">
            {topLevel.map((c) => (
              <CommentItem key={c.id} comment={c} tree={tree} depth={0} onReply={startReply} />
            ))}
          </div>
        )}

        <div ref={formRef} className="mt-12">
          {replyTo && <p className="text-sm text-ice-400">Reply to {replyTo.name}</p>}
          <div className="flex items-center gap-3">
            <h2 className="font-display text-lg font-semibold text-ice-100">Post a comment</h2>
            {replyTo && (
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-xs font-medium text-ice-400 hover:text-teal-300"
              >
                Cancel reply
              </button>
            )}
          </div>
          <CommentForm
            blogId={blogId}
            parentId={replyTo?.id ?? null}
            onPosted={() => setReplyTo(null)}
          />
        </div>
      </div>
    </div>
  );
}

function CommentItem({
  comment,
  tree,
  depth,
  onReply,
}: {
  comment: CommentData;
  tree: Map<string | null, CommentData[]>;
  depth: number;
  onReply: (id: string, name: string) => void;
}) {
  const replies = tree.get(comment.id) ?? [];

  return (
    <div className={depth > 0 ? "ml-8 border-l border-white/8 pl-6 sm:ml-12" : ""}>
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-400/15 text-sm font-semibold text-teal-300">
          {comment.name.trim().charAt(0).toUpperCase() || "?"}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <p className="text-sm font-semibold text-ice-100">
              {comment.website ? (
                <a href={comment.website} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-teal-300">
                  {comment.name}
                </a>
              ) : (
                comment.name
              )}{" "}
              says:
            </p>
          </div>
          {comment.status === "PENDING" && (
            <p className="mt-0.5 text-xs italic text-ice-400">Your comment is awaiting moderation.</p>
          )}
          <p className="mt-0.5 text-xs text-ice-400">{formatDisplayDateTime(comment.createdAt)}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-ice-300">{comment.content}</p>
          <button
            type="button"
            onClick={() => onReply(comment.id, comment.name)}
            className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 hover:text-teal-200"
          >
            ↩ Reply
          </button>
        </div>
      </div>

      {replies.length > 0 && (
        <div className="mt-6 space-y-6">
          {replies.map((r) => (
            <CommentItem key={r.id} comment={r} tree={tree} depth={depth + 1} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
}

function CommentForm({
  blogId,
  parentId,
  onPosted,
}: {
  blogId: string;
  parentId: string | null;
  onPosted?: () => void;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId, parentId, name, email, website, content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to post comment.");
      setName("");
      setEmail("");
      setWebsite("");
      setContent("");
      router.refresh();
      onPosted?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post comment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      {error && (
        <p className="mb-4 rounded-xl border border-signal-rose/30 bg-signal-rose/10 px-4 py-2.5 text-sm text-signal-rose">
          {error}
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className={inputClass()}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className={inputClass()}
        />
        <input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website (optional)"
          className={inputClass()}
        />
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your comment"
        required
        rows={5}
        className={`mt-3 w-full ${inputClass()}`}
      />
      <button
        type="submit"
        disabled={submitting}
        className="mt-4 rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-navy-950 hover:bg-teal-300 disabled:opacity-60"
      >
        {submitting ? "Posting…" : parentId ? "Post Reply" : "Submit Your Comment"}
      </button>
    </form>
  );
}

function inputClass() {
  return "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ice-100 placeholder:text-ice-400/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50";
}
