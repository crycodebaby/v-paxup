import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import ComparisonSection from "@/components/ComparisonSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UseCasesSection from "@/components/UseCasesSection";
import AboutSection from "@/components/AboutSection";
import FundingSection from "@/components/FundingSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ComparisonCTA from "@/components/ComparisonCTA";
import LeadPopup from "@/components/LeadPopup";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ProcessSection />
        <ServicesSection />
        <UseCasesSection />
        <ComparisonSection />
        <ComparisonCTA />
        <TestimonialsSection />
        <AboutSection />
        <FundingSection />
        <CTASection />
        <Footer />
      </main>
      <LeadPopup />
      <ScrollProgressBar />
    </div>
  );
};

export default Index;
