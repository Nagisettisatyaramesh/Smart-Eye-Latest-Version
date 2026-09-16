export default function SeoSettingsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ice-100">SEO Settings</h1>
      <p className="mt-2 text-sm text-ice-400">
        Site-wide SEO defaults (domain, robots.txt, sitemap) are configured in the codebase. Per-article SEO fields
        (title, meta description, keywords, canonical URL, social preview) are set on each blog in its editor, under
        the SEO Settings section.
      </p>
    </div>
  );
}
