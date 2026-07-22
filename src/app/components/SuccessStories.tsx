"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    visa: "Tourist Visa",
    country: "USA",
    countryColor: "#3b82f6",
    date: "12 May 2024",
    img: "/avatar-1.png",
  },
  {
    name: "Priya Sharma",
    visa: "Study Visa",
    country: "CANADA",
    countryColor: "#ef4444",
    date: "08 Apr 2024",
    img: "/avatar-2.png",
  },
  {
    name: "Arjun Patel",
    visa: "Work Visa",
    country: "AUSTRALIA",
    countryColor: "#3b82f6",
    date: "26 Mar 2024",
    img: "/avatar-3.png",
  },
];

export default function SuccessStories() {
  return (
    <div style={{ width: "100%", position: "relative", zIndex: 20 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          marginLeft: "-75  px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#0f172a",
            letterSpacing: "-0.5px",
          }}
        >
          Success Stories
        </h2>
      </div>

      <div style={{ width: "120%", marginLeft: "-20%" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Left Arrow - Circular White Glass Button with Blue Shadow */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(26, 86, 219, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "white",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              color: "#1a56db",
              boxShadow: "0 6px 20px rgba(26, 86, 219, 0.18)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* Cards Container */}
          <div
            className="stories-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              flex: 1,
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 45px rgba(0, 0, 0, 0.1)",
                  borderColor: "#cbd5e1",
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "24px",
                  padding: "32px 24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  minHeight: "340px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Subtle top gradient swoosh */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "110px",
                    background:
                      "linear-gradient(135deg, rgba(239, 246, 255, 0.8) 0%, rgba(255,255,255,0) 100%)",
                    zIndex: 0,
                  }}
                />

                {/* Avatar & Stamp Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    zIndex: 1,
                    marginBottom: "22px",
                  }}
                >
                  {/* Avatar (80px) */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid white",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Country Stamp (74px) rotated slightly */}
                  <div
                    style={{
                      width: "74px",
                      height: "74px",
                      borderRadius: "50%",
                      border: `2px solid ${t.countryColor}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(-15deg)",
                      position: "relative",
                      flexShrink: 0,
                      boxShadow: `0 4px 12px ${t.countryColor}15`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        border: `1.5px dashed ${t.countryColor}75`,
                        inset: "5px",
                        borderRadius: "50%",
                      }}
                    />
                    <span
                      style={{
                        color: t.countryColor,
                        fontSize: "12px",
                        fontWeight: "900",
                        letterSpacing: "0.4px",
                        transform: "rotate(-8deg)",
                        textAlign: "center",
                      }}
                    >
                      {t.country}
                    </span>
                  </div>
                </div>

                {/* Name & Visa */}
                <div style={{ zIndex: 1, marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "19px",
                      fontWeight: "700",
                      color: "#0f172a",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b" }}>
                    <span style={{ color: t.countryColor, fontWeight: "700" }}>
                      {t.country}
                    </span>{" "}
                    {t.visa}
                  </div>
                </div>

                {/* Thicker Progress Indicator with Smooth Blue Gradient */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "24px",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 0 3px #d1fae5",
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      height: "4px",
                      background: "linear-gradient(90deg, #10b981, #1a56db)",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 0 3px #d1fae5",
                    }}
                  />
                  <div
                    style={{ flex: 1, height: "4px", background: "#1a56db" }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#1a56db",
                      boxShadow: "0 0 0 3px #dbeafe",
                    }}
                  />
                  <div
                    style={{ flex: 1, height: "4px", background: "#1a56db" }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#1a56db",
                      boxShadow: "0 0 0 3px #dbeafe",
                    }}
                  />
                </div>

                {/* Footer: Date & Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 1,
                    marginTop: "auto",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                        lineHeight: "1",
                      }}
                    >
                      Approved on
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#334155",
                        lineHeight: "1.3",
                        marginTop: "4px",
                      }}
                    >
                      {t.date}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow - Circular White Glass Button with Blue Shadow */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(26, 86, 219, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "white",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              color: "#1a56db",
              boxShadow: "0 6px 20px rgba(26, 86, 219, 0.18)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stories-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
