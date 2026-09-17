import type { ComponentType } from "react";
import { BlogArticleView } from "@/components/resources/BlogArticleView";
import { DEFAULT_TEMPLATE_SLUG } from "@/lib/blogTemplates";
import { EditorialTemplate } from "./EditorialTemplate";
import { MagazineTemplate } from "./MagazineTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { VisualStoryTemplate } from "./VisualStoryTemplate";
import { CorporateTemplate } from "./CorporateTemplate";
import type { BlogTemplateProps } from "./types";

// Maps a blog's templateSlug to the component that renders it. To add a new
// template: build its component, then add one line here — nothing else
// (editor, API, database, other templates) needs to change.
export const BLOG_TEMPLATE_RENDERERS: Record<string, ComponentType<BlogTemplateProps>> = {
  "modern-article": BlogArticleView,
  editorial: EditorialTemplate,
  magazine: MagazineTemplate,
  minimal: MinimalTemplate,
  "visual-story": VisualStoryTemplate,
  corporate: CorporateTemplate,
};

export function getBlogTemplateRenderer(slug: string | null | undefined): ComponentType<BlogTemplateProps> {
  return BLOG_TEMPLATE_RENDERERS[slug ?? ""] ?? BLOG_TEMPLATE_RENDERERS[DEFAULT_TEMPLATE_SLUG];
}

export type { BlogTemplateProps } from "./types";
