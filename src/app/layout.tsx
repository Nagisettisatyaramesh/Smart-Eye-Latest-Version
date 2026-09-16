import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eqms-smarteye.com"),
  title: {
    default: "SmartEye eQMS — Quality Intelligence for Medical Device Innovation",
    template: "%s | SmartEye eQMS",
  },
  description:
    "SmartEye eQMS is the electronic Quality Management System for medical device and SaMD companies — connecting requirements, design control, risk, testing and compliance in one platform.",
  openGraph: {
    title: "SmartEye eQMS — Quality Intelligence for Medical Device Innovation",
    description:
      "Design, develop, test and maintain compliant medical devices and SaMD from one intelligent quality management platform.",
    url: "https://eqms-smarteye.com",
    siteName: "SmartEye eQMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEye eQMS — Quality Intelligence for Medical Device Innovation",
    description:
      "Design, develop, test and maintain compliant medical devices and SaMD from one intelligent quality management platform.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

// Intentionally minimal: html/body shell, fonts and site-wide metadata only.
// The public site's chrome (skip link, Nav, Footer, chatbot, grain overlay)
// lives in src/app/(marketing)/layout.tsx instead — the admin portal
// (src/app/admin) has its own separate layout and never renders any of that
// public UI.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
