"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-offset-4";

  const variants = {
    primary:
      "bg-teal-400 text-navy-950 hover:bg-teal-300 shadow-[0_0_0_1px_rgba(79,214,200,0.4)]",
    secondary:
      "border border-white/15 text-ice-100 hover:border-teal-400/60 hover:bg-white/5",
    ghost: "text-ice-200 hover:text-teal-300",
  };

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={clsx(base, variants[variant], sizes[size], className)}
      >
        {children}
        {icon && (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path
              d="M4 11L11 4M11 4H5M11 4V10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    </motion.span>
  );
}
