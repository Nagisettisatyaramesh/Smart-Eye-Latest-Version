"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { TemplatePicker } from "@/components/admin/TemplatePicker";
import { DEFAULT_CATEGORIES } from "@/lib/blogs";
import { DEFAULT_TEMPLATE_SLUG, getBlogTemplate } from "@/lib/blogTemplates";

export type BlogEditorInitial = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  author: string;
  category: string;
  tags: string;
  templateSlug: string;
  status: string;
  scheduledAt: string | null;
  seoTitle: string | null;
  metaDescription: string | null;
  focusKeywords: string | null;
  canonicalUrl: string | null;
  ogImage: string | null;
  socialTitle: string | null;
  socialDescription: string | null;
};

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function BlogEditorForm({
  initial,
  initialTemplateSlug,
}: {
  initial?: BlogEditorInitial;
  initialTemplateSlug?: string;
}) {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>(initial?.id);

  const [templateSlug, setTemplateSlug] = useState(
    initial?.templateSlug ?? initialTemplateSlug ?? DEFAULT_TEMPLATE_SLUG,
  );
  const [showTemplatePicker, setShowTemplatePicker] = useState(false);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!initial?.slug);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "SmartEye Team");
  const [category, setCategory] = useState(initial?.category ?? DEFAULT_CATEGORIES[0]);
  const [tags, setTags] = useState(initial?.tags ?? "");
  const [featuredImage, setFeaturedImage] = useState<string | null>(initial?.featuredImage ?? null);
  const [uploadingFeatured, setUploadingFeatured] = useState(false);
  const featuredInputRef = useRef<HTMLInputElement>(null);

  const [seoTitle, setSeoTitle] = useState(initial?.seoTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription ?? "");
  const [focusKeywords, setFocusKeywords] = useState(initial?.focusKeywords ?? "");
  const [canonicalUrl, setCanonicalUrl] = useState(initial?.canonicalUrl ?? "");
  const [ogImage, setOgImage] = useState(initial?.ogImage ?? "");
  const [socialTitle, setSocialTitle] = useState(initial?.socialTitle ?? "");
  const [socialDescription, setSocialDescription] = useState(initial?.socialDescription ?? "");

  const [scheduleMode, setScheduleMode] = useState<"now" | "later">(
    initial?.status === "SCHEDULED" ? "later" : "now",
  );
  const [scheduleDate, setScheduleDate] = useState(
    initial?.scheduledAt ? initial.scheduledAt.slice(0, 10) : "",
  );
  const [scheduleTime, setScheduleTime] = useState(
    initial?.scheduledAt ? initial.scheduledAt.slice(11, 16) : "10:00",
  );

  const [status, setStatus] = useState(initial?.status ?? "DRAFT");
  const [saving, setSaving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function uploadFeaturedImage(file: File) {
    setUploadingFeatured(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setFeaturedImage(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploadingFeatured(false);
    }
  }

  function buildPayload(targetStatus: string) {
    const scheduledAt =
      targetStatus === "SCHEDULED" && scheduleDate ? new Date(`${scheduleDate}T${scheduleTime}`).toISOString() : null;
    return {
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      author,
      category,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      templateSlug,
      status: targetStatus,
      scheduledAt,
      seoTitle,
      metaDescription,
      focusKeywords,
      canonicalUrl,
      ogImage,
      socialTitle,
      socialDescription,
    };
  }

  async function save(targetStatus: string, opts: { redirect?: boolean } = {}): Promise<string | null> {
    setError(null);
    if (!title.trim()) { setError("Title is required."); return null; }
    if (!excerpt.trim()) { setError("Excerpt is required."); return null; }
    if (!content || content === "<p></p>") { setError("Content is required."); return null; }
    if (targetStatus === "SCHEDULED" && !scheduleDate) { setError("Pick a schedule date and time."); return null; }

    setSaving(targetStatus);
    try {
      const payload = buildPayload(targetStatus);
      const res = await fetch(id ? `/api/admin/blogs/${id}` : "/api/admin/blogs", {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save.");

      const savedId = data.blog.id as string;
      setId(savedId);
      setStatus(data.blog.status);
      setSlug(data.blog.slug);

      if (!id) {
        router.replace(`/admin/blogs/${savedId}/edit`);
      }

      if (opts.redirect) {
        router.push("/admin/blogs");
      } else {
        setMessage(
          targetStatus === "PUBLISHED"
            ? `Published — live at /resources/${data.blog.slug}`
            : targetStatus === "SCHEDULED"
              ? "Scheduled — it will publish automatically at the chosen time."
              : "Draft saved.",
        );
      }
      return savedId;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.");
      return null;
    } finally {
      setSaving(null);
    }
  }

  async function handlePreview() {
    const savedId = await save(status === "PUBLISHED" ? "PUBLISHED" : "DRAFT");
    if (savedId) window.open(`/admin/blogs/${savedId}/preview`, "_blank");
  }

  // Swaps the whole form for the template gallery temporarily — none of the
  // fields above are touched, so switching back just resumes editing.
  if (showTemplatePicker) {
    return (
      <TemplatePicker
        currentSlug={templateSlug}
        title="Change Template"
        subtitle="Your title, content, images and SEO settings are untouched — only the presentation changes."
        onSelect={(slug) => {
          setTemplateSlug(slug);
          setShowTemplatePicker(false);
        }}
      />
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-ice-100">{id ? "Edit Blog" : "Create Blog"}</h1>
        {status && <span className="text-xs text-ice-400">Status: {status}</span>}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-3.5">
        <p className="text-sm text-ice-300">
          Template: <span className="font-medium text-ice-100">{getBlogTemplate(templateSlug).name}</span>
        </p>
        <button
          type="button"
          onClick={() => setShowTemplatePicker(true)}
          className="text-xs font-medium text-teal-300 hover:text-teal-200"
        >
          Change Template
        </button>
      </div>

      {error && (
        <p className="rounded-xl border border-signal-rose/30 bg-signal-rose/10 px-4 py-3 text-sm text-signal-rose">
          {error}
        </p>
      )}
      {message && (
        <p className="rounded-xl border border-teal-400/30 bg-teal-400/10 px-4 py-3 text-sm text-teal-300">
          {message}
        </p>
      )}

      <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
        <h2 className="font-display text-base font-semibold text-ice-100">Basic Information</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Blog Title">
            <input value={title} onChange={(e) => handleTitleChange(e.target.value)} className={inputClass()} />
          </Field>
          <Field label="URL Slug">
            <input
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(slugify(e.target.value));
              }}
              className={inputClass()}
            />
            <p className="mt-1.5 text-xs text-ice-400">/resources/{slug || "your-slug"}</p>
          </Field>
          <Field label="Author">
            <input value={author} onChange={(e) => setAuthor(e.target.value)} className={inputClass()} />
          </Field>
          <Field label="Category">
            <input
              list="categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass()}
            />
            <datalist id="categories">
              {DEFAULT_CATEGORIES.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </Field>
          <Field label="Tags (comma-separated)">
            <input value={tags} onChange={(e) => setTags(e.target.value)} className={inputClass()} />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Short Description / Excerpt">
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} className={inputClass()} />
          </Field>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-ice-200">Featured Image</p>
          {featuredImage && (
            <img src={featuredImage} alt="" className="mb-3 h-40 w-full max-w-sm rounded-xl object-cover" />
          )}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => featuredInputRef.current?.click()}
              disabled={uploadingFeatured}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-ice-200 hover:border-teal-400/50"
            >
              {uploadingFeatured ? "Uploading…" : featuredImage ? "Replace image" : "Upload image"}
            </button>
            {featuredImage && (
              <button
                type="button"
                onClick={() => setFeaturedImage(null)}
                className="text-xs text-ice-400 hover:text-signal-rose"
              >
                Remove
              </button>
            )}
          </div>
          <input
            ref={featuredInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (file) uploadFeaturedImage(file);
            }}
          />
        </div>
      </section>

      <section>
        <h2 className="font-display text-base font-semibold text-ice-100">Blog Content</h2>
        <div className="mt-4">
          <RichTextEditor content={content} onChange={setContent} />
        </div>
      </section>

      <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
        <h2 className="font-display text-base font-semibold text-ice-100">SEO Settings</h2>
        <p className="mt-1 text-xs text-ice-400">Left blank, these are generated from the title/excerpt automatically.</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="SEO Title">
            <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder={title} className={inputClass()} />
          </Field>
          <Field label="Focus Keywords">
            <input value={focusKeywords} onChange={(e) => setFocusKeywords(e.target.value)} className={inputClass()} />
          </Field>
          <Field label="Canonical URL">
            <input value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} placeholder={`/resources/${slug}`} className={inputClass()} />
          </Field>
          <Field label="Open Graph Image">
            <input value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder={featuredImage ?? ""} className={inputClass()} />
          </Field>
          <Field label="Social Sharing Title">
            <input value={socialTitle} onChange={(e) => setSocialTitle(e.target.value)} placeholder={seoTitle || title} className={inputClass()} />
          </Field>
          <Field label="Social Sharing Description">
            <input value={socialDescription} onChange={(e) => setSocialDescription(e.target.value)} placeholder={metaDescription || excerpt} className={inputClass()} />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Meta Description">
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder={excerpt} rows={2} className={inputClass()} />
          </Field>
        </div>
      </section>

      <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
        <h2 className="font-display text-base font-semibold text-ice-100">Publish</h2>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <label className="flex items-center gap-2 text-ice-200">
            <input type="radio" checked={scheduleMode === "now"} onChange={() => setScheduleMode("now")} />
            Publish immediately
          </label>
          <label className="flex items-center gap-2 text-ice-200">
            <input type="radio" checked={scheduleMode === "later"} onChange={() => setScheduleMode("later")} />
            Schedule publication
          </label>
        </div>
        {scheduleMode === "later" && (
          <div className="mt-4 flex flex-wrap gap-4">
            <Field label="Publish Date">
              <input type="date" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} className={inputClass()} />
            </Field>
            <Field label="Publish Time">
              <input type="time" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} className={inputClass()} />
            </Field>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => save("DRAFT")}
            disabled={!!saving}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-200 hover:border-teal-400/50 disabled:opacity-60"
          >
            {saving === "DRAFT" ? "Saving…" : "Save Draft"}
          </button>
          <button
            type="button"
            onClick={handlePreview}
            disabled={!!saving}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-200 hover:border-teal-400/50 disabled:opacity-60"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => save(scheduleMode === "later" ? "SCHEDULED" : "PUBLISHED", { redirect: true })}
            disabled={!!saving}
            className="rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-teal-300 disabled:opacity-60"
          >
            {saving === "PUBLISHED" || saving === "SCHEDULED"
              ? "Saving…"
              : scheduleMode === "later"
                ? "Schedule"
                : "Publish"}
          </button>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ice-200">{label}</label>
      {children}
    </div>
  );
}

function inputClass() {
  return "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ice-100 placeholder:text-ice-400/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50";
}
