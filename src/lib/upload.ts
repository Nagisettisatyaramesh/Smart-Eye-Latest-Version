import fs from "fs";
import path from "path";

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export function validateImageFile(file: File): string | null {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return "Only JPEG, PNG, WebP or GIF images are allowed.";
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return "Image must be 5MB or smaller.";
  }
  return null;
}

function extensionFor(type: string) {
  return { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }[type] || "bin";
}

// Stores an uploaded image and returns its public URL.
//
// Production note: when BLOB_READ_WRITE_TOKEN is set (Vercel Blob storage
// enabled on the project), uploads go there and persist properly. Without
// it, uploads are written to public/uploads on local disk — fine for local
// development, but on Vercel's serverless filesystem these will NOT persist
// reliably between requests or survive a redeploy. Enable Vercel Blob (or
// swap this function for S3/Cloudinary/etc.) before relying on image
// uploads in production.
export async function storeUploadedImage(file: File): Promise<string> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensionFor(file.type)}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import("@vercel/blob");
    const blob = await put(`blog-uploads/${filename}`, bytes, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: file.type,
    });
    return blob.url;
  }

  const dir = path.join(process.cwd(), "public", "uploads");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), bytes);
  return `/uploads/${filename}`;
}
