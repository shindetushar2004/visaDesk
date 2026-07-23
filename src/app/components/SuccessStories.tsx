"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -window.innerWidth : window.innerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ width: "100%", position: "relative", zIndex: 20, overflow: "hidden" }}>
      {/* Header */}
      <div
        className="stories-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          marginLeft: 0,
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

      <div className="stories-carousel-wrapper" style={{ width: "100%", marginLeft: 0 }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Left Arrow removed for desktop */}


          {/* Mobile Left Arrow */}
          <button className="mobile-arrow mobile-arrow-left" onClick={() => scrollCarousel('left')}>
            <ChevronLeft size={24} color="#1a56db" />
          </button>
          {/* Mobile Right Arrow */}
          <button className="mobile-arrow mobile-arrow-right" onClick={() => scrollCarousel('right')}>
            <ChevronRight size={24} color="#1a56db" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
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
                  boxSizing: "border-box",
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
                        objectFit: "contain",
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
                    className="story-name"
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

          {/* Right Arrow removed for desktop */}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .stories-grid {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px !important;
            padding-bottom: 24px;
            -webkit-overflow-scrolling: touch;
          }
          .stories-grid > div {
            min-width: 280px;
            scroll-snap-align: center;
          }
          .mobile-arrow {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .stories-header {
            margin-left: 0 !important;
          }
          .stories-carousel-wrapper {
            width: 100% !important;
            margin-left: 0 !important;
          }
          .stories-grid {
            width: 100% !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding: 0 0 16px 0 !important;
            margin: 0 !important;
            gap: 16px !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch !important;
            display: flex !important;
            flex-direction: row !important;
            scroll-behavior: smooth;
          }
          .stories-grid::-webkit-scrollbar {
            display: none;
          }
          .stories-grid > div {
            flex: 0 0 calc(100% - 32px) !important;
            min-width: unset !important;
            scroll-snap-align: center;
            height: 330px !important;
            min-height: unset !important;
            box-sizing: border-box !important;
          }
          .stories-grid > div:first-child {
            margin-left: 16px !important;
          }
          .stories-grid > div:last-child {
            margin-right: 16px !important;
          }
          .mobile-arrow {
            display: flex !important;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            border: 1px solid rgba(255,255,255,0.6);
            z-index: 10;
            cursor: pointer;
            transition: all 0.3s;
          }
          .mobile-arrow:hover {
            background: white;
            box-shadow: 0 6px 20px rgba(26, 86, 219, 0.3);
          }
          .mobile-arrow-left {
            left: 0px !important;
          }
          .mobile-arrow-right {
            right: 0px !important;
          }
          .story-name {
            font-size: 17px !important;
            font-weight: 600 !important;
          }
        }
      `}</style>
    </div>
  );
}
