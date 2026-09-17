// Registry of available blog layout templates. Adding a new template means:
//   1. Add an entry here (slug/name/description/features).
//   2. Add its renderer component in src/components/blog-templates/.
//   3. Register the renderer in src/components/blog-templates/index.ts.
// Nothing else (editor, API, database, other templates) needs to change.

export type BlogTemplateDefinition = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
};

export const DEFAULT_TEMPLATE_SLUG = "modern-article";

export const BLOG_TEMPLATES: BlogTemplateDefinition[] = [
  {
    slug: "modern-article",
    name: "Modern Article",
    tagline: "Clean, focused, balanced",
    description:
      "The classic SmartEye article layout — large featured image, clear category and metadata, a focused reading column.",
    features: ["Featured image", "Category eyebrow", "Author & date", "Related posts", "CTA"],
  },
  {
    slug: "editorial",
    name: "Editorial",
    tagline: "Wide, elegant, magazine-quality prose",
    description:
      "Large display typography and a wider reading column, with a pull-quote style excerpt and a dedicated author byline.",
    features: ["Large display headline", "Wide reading column", "Pull-quote excerpt", "Author byline card"],
  },
  {
    slug: "magazine",
    name: "Magazine",
    tagline: "Strong visual hierarchy, side-by-side hero",
    description:
      "Image and headline sit side-by-side on desktop for a magazine-cover feel, with a compact author card and numbered related reads.",
    features: ["Side-by-side hero", "Bold category badge", "Author card", "Numbered related reads"],
  },
  {
    slug: "minimal",
    name: "Minimal",
    tagline: "Narrow, quiet, content-first",
    description:
      "No hero imagery competing for attention — a narrow column and restrained metadata keep the focus entirely on the writing.",
    features: ["Narrow reading width", "No featured-image hero", "Minimal metadata", "Text-only related links"],
  },
  {
    slug: "visual-story",
    name: "Visual Story",
    tagline: "Cinematic, image-led, immersive",
    description:
      "A full-bleed hero image with the headline overlaid on top, for announcements or visually-driven stories.",
    features: ["Full-bleed cinematic hero", "Overlaid headline", "Immersive opening", "Related posts grid"],
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Structured, professional, restrained",
    description:
      "A boxed, breadcrumb-led layout with a sidebar-style meta panel — suited to formal regulatory or compliance write-ups.",
    features: ["Breadcrumb header", "Boxed content card", "Sidebar meta panel", "Compact related list"],
  },
];

export function getBlogTemplate(slug: string | null | undefined): BlogTemplateDefinition {
  return BLOG_TEMPLATES.find((t) => t.slug === slug) ?? BLOG_TEMPLATES.find((t) => t.slug === DEFAULT_TEMPLATE_SLUG)!;
}
