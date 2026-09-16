"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const navGroups = [
  {
    items: [{ label: "Dashboard", href: "/admin" }],
  },
  {
    heading: "Content",
    items: [
      { label: "Blogs", href: "/admin/blogs" },
      { label: "Categories", href: "/admin/categories" },
    ],
  },
  {
    heading: "Media",
    items: [{ label: "Images", href: "/admin/media" }],
  },
  {
    heading: "Settings",
    items: [
      { label: "SEO", href: "/admin/settings/seo" },
      { label: "Admin Account", href: "/admin/settings/account" },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-white/8 bg-navy-950 px-4 py-6">
      <div className="px-2">
        <p className="font-display text-base font-bold text-ice-100">SmartEye</p>
        <p className="eyebrow text-teal-400">Admin</p>
      </div>

      <nav className="mt-8 flex-1 space-y-6 overflow-y-auto">
        {navGroups.map((group, i) => (
          <div key={i}>
            {group.heading && (
              <p className="px-3 text-[0.65rem] font-semibold uppercase tracking-widest2 text-ice-400/70">
                {group.heading}
              </p>
            )}
            <div className={clsx("space-y-0.5", group.heading && "mt-2")}>
              {group.items.map((item) => {
                const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "block rounded-lg px-3 py-2 text-sm transition-colors",
                      active ? "bg-teal-400/10 text-teal-300" : "text-ice-300 hover:bg-white/5 hover:text-ice-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-6 rounded-lg px-3 py-2 text-left text-sm text-ice-400 hover:bg-white/5 hover:text-signal-rose"
      >
        Logout
      </button>
    </aside>
  );
}
