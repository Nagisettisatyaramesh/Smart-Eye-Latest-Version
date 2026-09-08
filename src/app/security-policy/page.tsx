import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { securityPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "S-Cube Technologies' information security policy for the SmartEye eQMS platform.",
};

export default function SecurityPolicyPage() {
  return <LegalPage doc={securityPolicy} />;
}
