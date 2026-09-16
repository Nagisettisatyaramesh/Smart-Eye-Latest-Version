const styles: Record<string, string> = {
  PUBLISHED: "bg-teal-400/15 text-teal-300",
  DRAFT: "bg-white/8 text-ice-300",
  SCHEDULED: "bg-signal-amber/15 text-signal-amber",
  ARCHIVED: "bg-signal-rose/15 text-signal-rose",
};

const labels: Record<string, string> = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  SCHEDULED: "Scheduled",
  ARCHIVED: "Archived",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status] ?? "bg-white/8 text-ice-300"}`}>
      {labels[status] ?? status}
    </span>
  );
}
