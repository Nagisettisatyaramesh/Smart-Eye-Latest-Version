import { Hero } from "@/components/home/Hero";
import { PillarsStrip } from "@/components/home/PillarsStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SystemDiagram } from "@/components/home/SystemDiagram";
import { Lifecycle } from "@/components/home/Lifecycle";
import { PlatformFeatures } from "@/components/home/PlatformFeatures";
import { Traceability } from "@/components/home/Traceability";
import { RiskMatrix } from "@/components/home/RiskMatrix";
import { TestManagement } from "@/components/home/TestManagement";
import { ComplianceConstellation } from "@/components/home/ComplianceConstellation";
import { SamdSection } from "@/components/home/SamdSection";
import { GlobalSection } from "@/components/home/GlobalSection";
import { Templates } from "@/components/home/Templates";
import { Analytics } from "@/components/home/Analytics";
import { Onboarding } from "@/components/home/Onboarding";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsStrip />
      <ProblemSection />
      <SystemDiagram />
      <Lifecycle />
      <PlatformFeatures />
      <Traceability />
      <RiskMatrix />
      <TestManagement />
      <ComplianceConstellation />
      <SamdSection />
      <GlobalSection />
      <Templates />
      <Analytics />
      <Onboarding />
      <ResourcesPreview />
      <FinalCTA />
    </>
  );
}
