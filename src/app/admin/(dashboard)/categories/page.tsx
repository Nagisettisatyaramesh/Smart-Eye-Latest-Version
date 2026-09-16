import { DEFAULT_CATEGORIES } from "@/lib/blogs";

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ice-100">Categories</h1>
      <p className="mt-2 text-sm text-ice-400">
        These are the categories available when creating or editing a blog. Custom categories can also be typed
        directly on the blog editor.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {DEFAULT_CATEGORIES.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-ice-200"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
