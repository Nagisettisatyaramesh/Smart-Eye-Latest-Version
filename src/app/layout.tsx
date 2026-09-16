import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ChatbotWidget } from "@/components/ChatbotWidget";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal-500 focus:px-5 focus:py-2.5 focus:text-navy-950 focus:font-semibold"
        >
          Skip to content
        </a>
        <GrainOverlay />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
