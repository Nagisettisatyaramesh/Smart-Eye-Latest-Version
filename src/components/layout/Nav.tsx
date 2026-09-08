"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Requirements Management", href: "/platform#requirements" },
      { label: "Design Control", href: "/design-control" },
      { label: "Risk Management", href: "/risk-management" },
      { label: "Test Management", href: "/test-management" },
      { label: "E2E Traceability", href: "/platform#traceability" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Medical Devices", href: "/medical-devices" },
      { label: "Software as a Medical Device", href: "/samd" },
    ],
  },
  {
    label: "Compliance",
    href: "/compliance",
    children: [
      { label: "Standards & Frameworks", href: "/compliance" },
      { label: "Security", href: "/security" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "mx-auto flex max-w-content items-center justify-between px-4 transition-all duration-500",
          scrolled ? "mt-3 sm:px-6" : "mt-5 sm:px-8",
        )}
      >
        <div
          className={clsx(
            "flex w-full items-center justify-between rounded-full border transition-all duration-500",
            scrolled
              ? "border-white/10 bg-navy-950/80 px-4 py-2.5 shadow-panel backdrop-blur-xl"
              : "border-transparent bg-transparent px-2 py-3",
          )}
        >
          <Link href="/" className="flex items-center pl-2">
            <Image
              src="/brand/smarteye-logo.svg"
              alt="SmartEye"
              width={1436}
              height={401}
              priority
              className="h-7 w-auto sm:h-8"
            />
            <span className="sr-only">eQMS</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ice-300 transition-colors hover:text-teal-300"
                >
                  {link.label}
                  {link.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px opacity-60">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  )}
                </Link>
                {link.children && (
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="glass-panel rounded-2xl p-2 shadow-panel">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ice-300 transition-colors hover:bg-white/5 hover:text-teal-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-ice-300 transition-colors hover:text-teal-300"
            >
              Contact
            </Link>
            <Link
              href="/contact#demo"
              className="rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-300"
            >
              Request Demo
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ice-200 lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={clsx(
                  "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300",
                  mobileOpen && "top-1.5 rotate-45",
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition-opacity duration-200",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-all duration-300",
                  mobileOpen && "bottom-[7px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-3 rounded-3xl border border-white/10 bg-navy-950/95 p-6 shadow-panel backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <div key={link.label} className="border-b border-white/5 py-2 last:border-0">
                  <Link href={link.href} className="block py-2 text-base font-medium text-ice-100">
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 flex flex-col gap-0.5 pb-2">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="py-1.5 text-sm text-ice-400">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link
              href="/contact#demo"
              className="mt-5 flex items-center justify-center rounded-full bg-teal-400 px-5 py-3 text-sm font-semibold text-navy-950"
            >
              Request Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
