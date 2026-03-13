import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/marketing/HeroSection";
import TrustMarquee from "@/components/marketing/TrustMarquee";
import ProblemSection from "@/components/marketing/ProblemSection";
import SolutionSection from "@/components/marketing/SolutionSection";
import PlatformCapabilities from "@/components/marketing/PlatformCapabilities";
import InteractiveWorkflow from "@/components/marketing/InteractiveWorkflow";
import HowItWorks from "@/components/marketing/HowItWorks";
import CaseStudies from "@/components/marketing/CaseStudies";
import SecuritySection from "@/components/marketing/SecuritySection";
import ConsultationCTA from "@/components/marketing/ConsultationCTA";
import FAQSection from "@/components/marketing/FAQSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustMarquee />
        <ProblemSection />
        <SolutionSection />
        <PlatformCapabilities />
        <InteractiveWorkflow />
        <HowItWorks />
        <CaseStudies />
        <SecuritySection />
        <ConsultationCTA />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
