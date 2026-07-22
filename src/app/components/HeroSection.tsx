"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
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
          <div style={{ flex: "0 0 50%", maxWidth: "50%", paddingBottom: "60px", zIndex: 10 }}>
            {/* Badge */}
            <motion.div
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
                { icon: "🛡️", label: "Government\nApproved" },
                { icon: "🤖", label: "AI\nVerification" },
                { icon: "🔒", label: "Secure\nDocuments" },
                { icon: "🏅", label: "99% Success\nRate" },
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
          <div style={{ flex: "0 0 55%", maxWidth: "55%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "-5%" }}>
            <motion.div
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
          .hero-flex > div:first-child {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

        }
      `}</style>
    </section>
  );
}
