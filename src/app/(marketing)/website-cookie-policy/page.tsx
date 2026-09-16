import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { cookiePolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How SmartEye eQMS uses cookies and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return <LegalPage doc={cookiePolicy} />;
}
