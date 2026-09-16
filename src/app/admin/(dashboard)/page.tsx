import Link from "next/link";
import { getBlogStats } from "@/lib/blogs";
import { formatDisplayDate } from "@/lib/formatDate";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { SeedLegacyButton } from "@/components/admin/SeedLegacyButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const stats = await getBlogStats();

  const cards = [
    { label: "Total Blogs", value: stats.total },
    { label: "Published", value: stats.published },
    { label: "Drafts", value: stats.draft },
    { label: "Scheduled", value: stats.scheduled },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-ice-100">Dashboard</h1>
        <Link
          href="/admin/blogs/new"
          className="rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-teal-300"
        >
          + Create Blog
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-widest2 text-ice-400">{c.label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-ice-100">{c.value}</p>
          </div>
        ))}
      </div>

      {stats.total === 0 && <SeedLegacyButton />}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-ice-100">Recently Published</h2>
          <BlogTable
            rows={stats.recentPublished.map((b) => ({
              id: b.id,
              title: b.title,
              status: b.status,
              date: formatDisplayDate(b.publishedAt),
            }))}
          />
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-ice-100">Recently Updated</h2>
          <BlogTable
            rows={stats.recentUpdated.map((b) => ({
              id: b.id,
              title: b.title,
              status: b.status,
              date: formatDisplayDate(b.updatedAt),
            }))}
          />
        </div>
      </div>
    </div>
  );
}

function BlogTable({ rows }: { rows: { id: string; title: string; status: string; date: string }[] }) {
  if (rows.length === 0) {
    return <p className="mt-4 text-sm text-ice-400">Nothing here yet.</p>;
  }
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-white/8">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3">
                <Link href={`/admin/blogs/${row.id}/edit`} className="text-ice-200 hover:text-teal-300">
                  {row.title}
                </Link>
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-ice-400">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
