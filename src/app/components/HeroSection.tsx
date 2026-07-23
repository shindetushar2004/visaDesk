"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="hero-section-wrapper"
      style={{
        background: "linear-gradient(105deg, #eff6ff 0%, #eaf3ff 50%, #ffffff 75%, #ffffff 100%)",
        paddingTop: "120px",
        paddingBottom: "80px",
        minHeight: "700px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
          className="hero-flex"
        >
          {/* Left Content */}
          <div className="hero-left" style={{ flex: "0 0 50%", maxWidth: "50%", paddingBottom: "60px", zIndex: 10 }}>
            {/* Badge */}
            <motion.div
              className="hero-badge-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "30px",
                padding: "8px 16px",
                marginBottom: "24px",
                fontSize: "13px",
                color: "#1a56db",
                fontWeight: "600",
                boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
              }}
            >
              <span style={{ fontSize: "16px" }}>✨</span>
              AI Powered Visa Consultancy
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "56px",
                fontWeight: "800",
                lineHeight: "1.1",
                color: "#111827",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              Your Passport to
            </motion.h1>
            <motion.h1
              className="hero-heading gradient-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontSize: "56px",
                fontWeight: "800",
                lineHeight: "1.1",
                background: "linear-gradient(90deg, #1a56db, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Global Opportunities
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "15px",
                color: "#4b5563",
                lineHeight: "1.6",
                marginBottom: "32px",
                maxWidth: "480px",
              }}
            >
              Helping students, professionals, families, and businesses
              obtain visas with AI-powered document verification and
              expert immigration guidance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", gap: "16px", marginBottom: "40px", flexWrap: "wrap" }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#113bba",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 8px 20px rgba(17, 59, 186, 0.25)",
                }}
              >
                Start Your Journey
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "transparent",
                  color: "#1a56db",
                  border: "1.5px solid #1a56db",
                  borderRadius: "8px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Book Consultation
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="hero-badges"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[
                { icon: "🛡️", label: "Government Approved" },
                { icon: "🤖", label: "AI Verification" },
                { icon: "🔒", label: "Secure Documents" },
                { icon: "🏅", label: "99% Success Rate" },
              ].map((badge, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "white",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    {badge.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#374151",
                      fontWeight: "600",
                      lineHeight: "1.2",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {badge.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Main Image */}
          <div className="hero-right" style={{ flex: "0 0 55%", maxWidth: "55%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "-5%" }}>
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: "relative",
                width: "160%",
                marginRight: "-60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                WebkitMaskImage: "linear-gradient(to right, transparent 0px, black 120px)",
                maskImage: "linear-gradient(to right, transparent 0px, black 120px)",
              }}
            >
              <img
                src="/hero-image.png"
                alt="Global Opportunities Visa Passport"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "contrast(1.2) brightness(1.05)",
                  zIndex: 5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-flex {
            flex-direction: column;
            text-align: center;
          }
          .hero-left {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            margin: 0 auto;
            align-items: center;
            display: flex;
            flex-direction: column;
            padding-bottom: 24px !important;
          }
          .hero-right {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
          }
          .hero-image-wrapper {
            width: 100% !important;
            margin-right: 0 !important;
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
          .hero-badges {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .hero-section-wrapper {
            padding-top: 100px !important;
            padding-bottom: 24px !important;
            min-height: auto !important;
          }
          .container-custom {
            padding: 0 16px !important;
          }
          
          /* Vertical Layout for Mobile (1 column) */
          .hero-flex {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
          .hero-left, .hero-right {
            display: contents !important;
          }
          
          .hero-badge-wrap { 
            order: 1; 
            margin-bottom: 12px !important; 
            white-space: nowrap !important;
            font-size: 11.5px !important;
            padding: 6px 12px !important;
            justify-content: center !important;
          }
          .hero-heading:not(.gradient-heading) { 
            order: 2; 
            font-size: clamp(28px, 8vw, 42px) !important; 
            line-height: 1.15 !important; 
            margin-bottom: 0px !important; 
          }
          .gradient-heading { 
            order: 3; 
            font-size: clamp(28px, 8vw, 42px) !important; 
            line-height: 1.15 !important; 
            white-space: nowrap; 
            margin-bottom: 8px !important; 
          }
          .hero-desc { 
            order: 4; 
            margin-bottom: 12px !important; 
            text-align: center; 
            font-size: 14px !important;
            padding: 0 8px;
          }
          
          .hero-image-wrapper { 
            order: 5; 
            width: 95% !important; 
            margin: 0 auto 12px auto !important; 
          }
          
          .hero-badges { 
            order: 6; 
            display: grid !important; 
            grid-template-columns: 1fr 1fr; 
            gap: 12px 12px !important; 
            text-align: center; 
            width: 100%; 
            margin-bottom: 16px !important;
          }
          .hero-badges > div { 
            justify-content: flex-start; 
            flex-direction: row;
            align-items: center;
            gap: 8px !important;
          }
          .hero-badges > div > div:last-child {
            font-size: 10px !important;
            white-space: nowrap !important;
          }

          .hero-buttons { 
            order: 7; 
            flex-direction: row !important; 
            width: 95%; 
            margin: 0 auto 20px auto !important;
            gap: 8px !important; 
          }
          .hero-buttons > button { 
            flex: 1; 
            padding: 12px 0 !important; 
            font-size: 14px !important; 
            justify-content: center; 
            min-height: 48px;
          }
        }

        @media (max-width: 380px) {
          .hero-buttons { flex-direction: column !important; width: 100%; }
        }
      `}</style>
    </section>
  );
}
