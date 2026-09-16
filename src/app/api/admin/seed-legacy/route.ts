import { NextResponse } from "next/server";
import { migrateLegacyArticlesIfNeeded } from "@/lib/migrateLegacyArticles";

// One-off (idempotent) migration: pulls the 8 originally-hardcoded articles
// from src/lib/articles.ts into the Blog table, preserving their slugs so
// existing links keep working. Safe to call more than once — already
// migrated slugs are left untouched.
export async function POST() {
  const result = await migrateLegacyArticlesIfNeeded();
  return NextResponse.json(result);
}
