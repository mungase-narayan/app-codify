import SiteHeader from "@/components/shared/site-header";
import HeroSection from "./components/hero-section";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
    </div>
  );
};
export default HomePage;
