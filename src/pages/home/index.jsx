import SiteHeader from "@/components/shared/site-header";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import CtaSection from "./components/CTA-section";
import StatsSection from "./components/stats-section";
import IntegrationsSection from "./components/integrations-section";
import TestimonialsSection from "./components/testimonials-section";
import PricingSection from "./components/pricing-section";
import ContactSection from "./components/contact-section";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <CtaSection />
    </div>
  );
};
export default HomePage;
