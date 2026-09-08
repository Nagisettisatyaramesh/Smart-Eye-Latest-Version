import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How S-Cube Technologies collects, uses and protects your data on the SmartEye eQMS website.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
