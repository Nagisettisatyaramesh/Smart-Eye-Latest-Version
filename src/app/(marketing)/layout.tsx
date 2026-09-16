import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
