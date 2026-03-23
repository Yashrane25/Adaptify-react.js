import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ValuesSection from "../components/landing/ValuesSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function Index() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
