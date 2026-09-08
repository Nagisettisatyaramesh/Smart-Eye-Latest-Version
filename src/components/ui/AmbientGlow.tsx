import clsx from "clsx";

export function AmbientGlow({
  className,
  variant = "teal",
}: {
  className?: string;
  variant?: "teal" | "cyan" | "amber";
}) {
  const colors = {
    teal: "rgba(79,214,200,0.22)",
    cyan: "rgba(79,208,240,0.18)",
    amber: "rgba(232,169,79,0.14)",
  };
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute rounded-full blur-[120px]", className)}
      style={{ background: colors[variant] }}
    />
  );
}
