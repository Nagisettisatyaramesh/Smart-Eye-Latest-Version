"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatDisplayDate } from "@/lib/formatDate";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  status: string;
  updatedAt: string;
  publishedAt: string | null;
};

const FILTERS = ["ALL", "PUBLISHED", "DRAFT", "SCHEDULED", "ARCHIVED"] as const;

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    const res = await fetch(`/api/admin/blogs?status=${filter}`);
    const data = await res.json();
    setBlogs(data.blogs ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const filtered = useMemo(
    () => blogs.filter((b) => b.title.toLowerCase().includes(search.toLowerCase())),
    [blogs, search],
  );

  async function handleUnpublish(id: string) {
    setActionError(null);
    const res = await fetch(`/api/admin/blogs/${id}/unpublish`, { method: "POST" });
    if (!res.ok) {
      const data = await res.json();
      setActionError(data.error || "Failed to unpublish.");
      return;
    }
    load();
  }

  async function handleDelete(id: string) {
    setActionError(null);
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json();
      setActionError(data.error || "Failed to delete.");
      setConfirmDeleteId(null);
      return;
    }
    setConfirmDeleteId(null);
    load();
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-ice-100">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-teal-300"
        >
          + Create Blog
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blogs..."
          className="w-full max-w-xs rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ice-100 focus:outline-none focus:ring-2 focus:ring-teal-400/50"
        />
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                filter === f ? "bg-teal-400/15 text-teal-300" : "text-ice-400 hover:text-ice-200"
              }`}
            >
              {f === "ALL" ? "All" : f.charAt(0) + f.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {actionError && (
        <p className="mt-4 rounded-xl border border-signal-rose/30 bg-signal-rose/10 px-4 py-3 text-sm text-signal-rose">
          {actionError}
        </p>
      )}

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/8">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/8 text-xs uppercase tracking-widest2 text-ice-400">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-ice-400">
                  Loading…
                </td>
              </tr>
            )}
            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-ice-400">
                  No blogs found.
                </td>
              </tr>
            )}
            {filtered.map((blog) => (
              <tr key={blog.id} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 text-ice-200">{blog.title}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={blog.status} />
                </td>
                <td className="px-4 py-3 text-ice-400">
                  {formatDisplayDate(blog.publishedAt) || formatDisplayDate(blog.updatedAt)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <Link href={`/admin/blogs/${blog.id}/edit`} className="text-teal-300 hover:text-teal-200">
                      Edit
                    </Link>
                    <Link
                      href={`/admin/blogs/${blog.id}/preview`}
                      target="_blank"
                      className="text-ice-400 hover:text-ice-200"
                    >
                      Preview
                    </Link>
                    {blog.status === "PUBLISHED" && (
                      <button onClick={() => handleUnpublish(blog.id)} className="text-signal-amber hover:opacity-80">
                        Unpublish
                      </button>
                    )}
                    {blog.status !== "PUBLISHED" && (
                      <>
                        {confirmDeleteId === blog.id ? (
                          <span className="flex items-center gap-2">
                            <button onClick={() => handleDelete(blog.id)} className="text-signal-rose hover:opacity-80">
                              Confirm delete
                            </button>
                            <button onClick={() => setConfirmDeleteId(null)} className="text-ice-400 hover:text-ice-200">
                              Cancel
                            </button>
                          </span>
                        ) : (
                          <button
                            onClick={() => setConfirmDeleteId(blog.id)}
                            className="text-ice-400 hover:text-signal-rose"
                          >
                            Delete
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
