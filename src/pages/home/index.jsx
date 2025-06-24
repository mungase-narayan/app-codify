import SiteHeader from "@/components/shared/site-header";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import CtaSection from "./components/CTA-section";
import Footer from "@/components/shared/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};
export default HomePage;
