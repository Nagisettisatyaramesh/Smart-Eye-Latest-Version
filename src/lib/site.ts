// Single source of truth for the site's own canonical URL. Set NEXT_PUBLIC_SITE_URL
// in the deployment environment once a production domain is assigned — everything
// else (metadata, sitemap, robots.txt, structured data) reads from this.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
