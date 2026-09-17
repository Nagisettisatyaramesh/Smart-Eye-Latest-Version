import { getBlogTemplateRenderer } from "@/components/blog-templates";
import { SAMPLE_BLOG, SAMPLE_RELATED } from "@/lib/sampleBlogContent";

// Renders the actual template component at a simulated ~1280px desktop
// width, scaled down to fit the card via a pure-CSS trick (inner stage at
// 400% width + scale(0.25) = exactly 100% of whatever the outer box's real
// pixel width turns out to be, no JS measurement needed). This is a real
// render of the real component with realistic sample content — not a
// hand-drawn approximation — so it stays accurate automatically if a
// template's design ever changes. Only the top portion is visible
// (overflow-hidden), which is enough to tell templates apart at a glance.
export function TemplateThumbnail({ slug }: { slug: string }) {
  const Renderer = getBlogTemplateRenderer(slug);

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-white/8 bg-navy-950">
      <div
        className="pointer-events-none absolute left-0 top-0 origin-top-left"
        style={{ width: "400%", transform: "scale(0.25)" }}
      >
        <Renderer blog={SAMPLE_BLOG} related={SAMPLE_RELATED} />
      </div>
      {/* Softens the hard clip at the bottom edge so it reads as a "peek", not a cut-off page. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
