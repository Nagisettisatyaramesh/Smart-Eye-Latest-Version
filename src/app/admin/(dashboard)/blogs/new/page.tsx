"use client";

import { useState } from "react";
import { BlogEditorForm } from "@/components/admin/BlogEditorForm";
import { TemplatePicker } from "@/components/admin/TemplatePicker";

export default function NewBlogPage() {
  const [templateSlug, setTemplateSlug] = useState<string | null>(null);

  if (!templateSlug) {
    return (
      <TemplatePicker
        title="Create New Blog — Choose a Template"
        subtitle="Pick the layout for this article. You'll add the title, content, image and SEO details next using the regular blog editor."
        onSelect={setTemplateSlug}
      />
    );
  }

  return <BlogEditorForm initialTemplateSlug={templateSlug} />;
}
