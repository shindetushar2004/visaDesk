"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("CTA");
  return (
    <section className="cta-section" style={{ padding: "80px 0", background: "#f8fafc" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "linear-gradient(90deg, #1565c0 0%, #1e40af 45%, #15327a 75%, #0b1a4a 100%)",
            borderRadius: "22px",
            padding: "0",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "220px",
            boxShadow: "0 16px 50px rgba(21, 101, 192, 0.45)",
          }}
          className="cta-inner"
        >
          {/* Subtle radial highlight in center */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 60%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* ── LEFT: Airplane from Image ── */}
          <div
            className="cta-bg-left"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "350px",
              background: "url('/new-cta-bg.png') no-repeat left center",
              backgroundSize: "auto 100%",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* ── RIGHT: Towers from Image ── */}
          <div
            className="cta-bg-right"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "350px",
              background: "url('/new-cta-bg.png') no-repeat right -80px center",
              backgroundSize: "auto 100%",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* ── CENTER: Text + Buttons ── */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 20px",
              textAlign: "center",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "white",
                marginBottom: "12px",
                lineHeight: "1.2",
                letterSpacing: "-0.3px",
              }}
            >
              <span className="nowrap-mobile">{t("titlePart1")}</span>{" "}
              <br className="mobile-only-br" />
              <span className="nowrap-mobile">{t("titlePart2")}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "460px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              {t("desc")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255,255,255,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "none",
                  borderRadius: "10px",
                  padding: "12px 28px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.25s ease",
                }}
              >
                {t("getStarted")}
                <ArrowRight size={17} />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  borderRadius: "10px",
                  padding: "12px 28px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.25s ease",
                }}
              >
                {t("scheduleMeeting")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .mobile-only-br {
          display: none;
        }
        @media (max-width: 768px) {
          .cta-section { padding: 32px 0 !important; }
          .mobile-only-br {
            display: block;
          }
          .nowrap-mobile {
            white-space: nowrap;
          }
          .cta-inner {
            flex-direction: column !important;
            padding: 24px 16px !important;
            border-radius: 18px !important;
            text-align: center !important;
          }
          
          /* Airplane Image - Mobile Fix */
          .cta-bg-left {
            height: 170px !important; /* ~20-25% smaller */
            bottom: auto !important; 
            top: -70px !important; /* Moved downward 25px */
            width: 140px !important; /* Prevents overlap with center text */
            background-position: left top !important; /* Move to corner */
          }
          
          /* Burj Khalifa Image - Mobile Fix */
          .cta-bg-right {
            height: 140px !important; /* ~30-40% smaller */
            top: auto !important;
            bottom: 0 !important;
            width: 140px !important; /* Prevents overlap */
            background-position: right bottom !important; /* Move to corner, fully visible */
          }

          /* CTA Buttons - Mobile Fix */
          .cta-buttons {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 10px !important;
            width: 100%;
            justify-content: center !important;
          }
          .cta-buttons > button {
            flex: 1;
            width: auto !important;
            padding: 9px 10px !important; /* Reduced height by ~10-15% */
            justify-content: center;
            white-space: nowrap !important;
            font-size: 14px !important; /* Slightly reduced font size */
          }
        }
        
        @media (max-width: 359px) {
          /* Stack buttons ONLY below 360px */
          .cta-buttons {
            flex-direction: column !important;
          }
          .cta-buttons > button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
