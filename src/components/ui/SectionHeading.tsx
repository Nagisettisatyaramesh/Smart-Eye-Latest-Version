import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, fadeUpSm } from "@/lib/motion";
import type { ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "muted";
  size?: "md" | "lg";
}) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <Reveal variants={fadeUpSm}>
          <p className={clsx("eyebrow kicker-line text-teal-400", align === "center" && "justify-center")}>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08} variants={fadeUp}>
        <h2
          className={clsx(
            "font-display font-semibold tracking-tighter text-ice-100 text-balance",
            size === "lg" ? "mt-5 text-4xl sm:text-5xl lg:text-6xl" : "mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16} variants={fadeUp}>
          <p
            className={clsx(
              "mt-5 text-base sm:text-lg leading-relaxed",
              tone === "muted" ? "text-ice-400" : "text-ice-300",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
