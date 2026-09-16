import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for the purchase of services and goods from S-Cube Technologies.",
};

export default function TermsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
