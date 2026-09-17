import type { BlogArticleViewData, RelatedBlogCard } from "@/components/blog-templates/types";

// Realistic SmartEye-style content used only to preview what a template
// looks like before an admin has written a real article — both in the
// template gallery's miniature thumbnails and the full "Preview Template"
// modal. A fixed date keeps the preview stable rather than shifting daily,
// and the image is one already used elsewhere on the site (medical-devices,
// SaMD pages), not a new asset.
export const SAMPLE_BLOG: BlogArticleViewData = {
  title: "How an eQMS Simplifies ISO 13485 Compliance for UK Medical Device Startups",
  slug: "sample-preview",
  excerpt:
    "Manual, paper-based quality processes slow teams down right when they need to move fastest. Here's how a connected eQMS changes that.",
  featuredImage: "/images/prosthetic-hand.jpg",
  author: "SmartEye Team",
  category: "Compliance",
  publishedAt: new Date("2026-09-16"),
  content: `
    <h2>Why manual QMS processes break down</h2>
    <p>Most early-stage medical device teams start with spreadsheets and shared drives. It works — until it doesn't. As headcount and document volume grow, traceability between requirements, risk, design and test starts to fall apart.</p>
    <ul>
      <li>Documents get versioned by filename, not by system</li>
      <li>Approvals happen over email, with no audit trail</li>
      <li>Risk assessments drift out of sync with design changes</li>
    </ul>
    <h3>What a connected eQMS changes</h3>
    <p>A proper eQMS ties every requirement to its design output, its risk assessment and its test evidence — automatically. That connection is what auditors are actually looking for.</p>
    <blockquote>Traceability isn't a document. It's a live relationship between everything you build and why you built it.</blockquote>
    <p>Teams that adopt this earlier spend far less time preparing for audits, because the evidence has been assembling itself the whole time.</p>
  `,
};

export const SAMPLE_RELATED: RelatedBlogCard[] = [
  {
    title: "Why Most Medical Device Startups Fail Their First Audit",
    slug: "sample-related-1",
    category: "ISO 13485",
    publishedAt: new Date("2026-09-10"),
    featuredImage: null,
  },
  {
    title: "ISO 13485 Explained in Plain English",
    slug: "sample-related-2",
    category: "ISO 13485",
    publishedAt: new Date("2026-08-24"),
    featuredImage: null,
  },
  {
    title: "Documentation Control in ISO 13485",
    slug: "sample-related-3",
    category: "QMS",
    publishedAt: new Date("2026-07-04"),
    featuredImage: null,
  },
];
