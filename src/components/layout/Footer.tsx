import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Design Control", href: "/design-control" },
      { label: "Risk Management", href: "/risk-management" },
      { label: "Test Management", href: "/test-management" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Medical Devices", href: "/medical-devices" },
      { label: "Software as a Medical Device", href: "/samd" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "Standards & Frameworks", href: "/compliance" },
      { label: "Security", href: "/security" },
      { label: "Quality Policy", href: "/quality-policy" },
      { label: "Security Policy", href: "/security-policy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/smarteye-logo.svg"
                alt="SmartEye"
                width={1436}
                height={401}
                className="h-8 w-auto"
              />
              <span className="sr-only">eQMS</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ice-400">
              Quality intelligence for medical device and SaMD innovation, powered by {company.operator}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.certifications.map((c) => (
                <span
                  key={c.code}
                  className="eyebrow rounded-full border border-white/10 px-3 py-1.5 text-[0.6rem] text-ice-400"
                >
                  {c.code}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-ice-400">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ice-300 transition-colors hover:text-teal-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/8 pt-8 text-sm text-ice-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.operator}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-teal-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-teal-300">
              Terms
            </Link>
            <Link href="/website-cookie-policy" className="transition-colors hover:text-teal-300">
              Cookie Policy
            </Link>
            <Link href="/quality-policy" className="transition-colors hover:text-teal-300">
              Quality Policy
            </Link>
            <Link href="/security-policy" className="transition-colors hover:text-teal-300">
              Security Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
