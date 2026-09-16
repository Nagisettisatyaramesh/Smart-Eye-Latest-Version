import sanitizeHtml from "sanitize-html";

// Whitelist matches exactly what the Tiptap editor (src/components/admin/RichTextEditor.tsx)
// can produce — headings, formatting, lists, links, images, blockquote, table, code, hr.
export function sanitizeBlogContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4",
      "p", "br", "hr",
      "strong", "em", "s", "u",
      "ul", "ol", "li",
      "a", "img",
      "blockquote",
      "table", "thead", "tbody", "tr", "th", "td",
      "pre", "code",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }, true),
    },
  });
}
