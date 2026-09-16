import { prisma } from "@/lib/db";
import { articles as legacyArticles, type ArticleSection } from "@/lib/articles";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sectionToHtml(section: ArticleSection): string {
  let html = "";
  if (section.heading) html += `<h2>${escapeHtml(section.heading)}</h2>`;
  if (section.paragraphs) {
    html += section.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  }
  if (section.list) {
    html += `<ul>${section.list.map((li) => `<li>${escapeHtml(li)}</li>`).join("")}</ul>`;
  }
  if (section.table) {
    const head = `<thead><tr>${section.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>`;
    const body = `<tbody>${section.table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
      .join("")}</tbody>`;
    html += `<table>${head}${body}</table>`;
  }
  return html;
}

const MONTHS: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

function parseDisplayDate(date: string): Date {
  const [day, month, year] = date.split(" ");
  const monthIndex = MONTHS[month] ?? 0;
  return new Date(Date.UTC(Number(year), monthIndex, Number(day), 12));
}

// Idempotent: safe to call more than once. Existing DB rows (matched by
// slug, which is preserved from the original hardcoded articles so old
// links keep working) are left untouched — this only fills in what's
// missing, it never overwrites admin edits.
export async function migrateLegacyArticlesIfNeeded(): Promise<{ migrated: number; skipped: number }> {
  let migrated = 0;
  let skipped = 0;

  for (const article of legacyArticles) {
    const existing = await prisma.blog.findUnique({ where: { slug: article.slug } });
    if (existing) {
      skipped += 1;
      continue;
    }

    const content = article.sections.map(sectionToHtml).join("");
    const publishedAt = parseDisplayDate(article.date);

    await prisma.blog.create({
      data: {
        title: article.title,
        slug: article.slug,
        excerpt: article.summary,
        content,
        featuredImage: null,
        author: article.author,
        category: article.category,
        tags: "",
        status: "PUBLISHED",
        publishedAt,
        seoTitle: article.title,
        metaDescription: article.summary,
      },
    });
    migrated += 1;
  }

  return { migrated, skipped };
}
