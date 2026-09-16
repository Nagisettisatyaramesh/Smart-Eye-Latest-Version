// Shared by the Resources listing, homepage preview and related-posts cards
// so the category → gradient mapping stays consistent in one place.
const categoryPattern: Record<string, string> = {
  Regulatory: "from-cyan-500/25 via-navy-800 to-navy-950",
  QMS: "from-teal-500/25 via-navy-800 to-navy-950",
  "ISO 13485": "from-navy-600/40 via-navy-800 to-navy-950",
  "Medical Devices": "from-signal-amber/15 via-navy-800 to-navy-950",
};

export function getCategoryGradient(category: string): string {
  return categoryPattern[category] ?? "from-teal-500/20 via-navy-800 to-navy-950";
}
