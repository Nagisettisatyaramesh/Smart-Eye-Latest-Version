// Re-exported from the existing BlogArticleView component (unchanged) so
// every template shares one source of truth for the data shape they render.
export type { BlogArticleViewData, RelatedBlogCard } from "@/components/resources/BlogArticleView";
import type { BlogArticleViewData, RelatedBlogCard } from "@/components/resources/BlogArticleView";

export type BlogTemplateProps = {
  blog: BlogArticleViewData;
  related?: RelatedBlogCard[];
  previewBanner?: boolean;
};
