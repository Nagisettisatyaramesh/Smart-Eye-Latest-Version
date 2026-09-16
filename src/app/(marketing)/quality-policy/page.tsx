import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { qualityPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Quality Policy",
  description: "S-Cube Technologies' quality policy for the SmartEye eQMS platform.",
};

export default function QualityPolicyPage() {
  return <LegalPage doc={qualityPolicy} />;
}
