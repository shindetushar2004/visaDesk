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
        <section style={{ background: "#f8fafc", padding: "80px 0" }}>
          <div style={{ width: "100%", maxWidth: "1600px", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <SuccessStories />
            <LatestInsights />
          </div>
        </section>
      </div>
      <CTASection />
      <div id="contact"><ContactSection /></div>
      <Footer />
    </main>
  );
}
