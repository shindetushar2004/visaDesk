import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import WhySection from "./components/WhySection";
import AiProcessSection from "./components/AiProcessSection";
import StatsSection from "./components/StatsSection";
import SuccessStories from "./components/SuccessStories";
import LatestInsights from "./components/LatestInsights";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="process"><JourneySection /></div>
      <div id="who-we-are"><WhySection /></div>
      <div id="services"><AiProcessSection /></div>
      <div id="countries"><StatsSection /></div>
      <div id="blog">
        <section className="blog-section" style={{ background: "#f8fafc", padding: "80px 0" }}>
          <div className="container-custom blog-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <SuccessStories />
            <LatestInsights />
          </div>
        </section>
      </div>
      <CTASection />
      <div id="contact"><ContactSection /></div>
      <Footer />
      <style>{`
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .blog-section {
            padding: 32px 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
