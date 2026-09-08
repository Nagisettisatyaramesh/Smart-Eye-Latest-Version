import clsx from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
