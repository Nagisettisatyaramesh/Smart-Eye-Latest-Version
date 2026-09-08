import type { MetadataRoute } from "next";

const routes = [
  "",
  "/platform",
  "/solutions",
  "/medical-devices",
  "/samd",
  "/design-control",
  "/risk-management",
  "/test-management",
  "/compliance",
  "/security",
  "/resources",
  "/about",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/website-cookie-policy",
  "/quality-policy",
  "/security-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eqms-smarteye.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
