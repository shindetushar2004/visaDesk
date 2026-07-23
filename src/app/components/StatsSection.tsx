"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import {
  FileText,
  ShieldCheck,
  Globe,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Stats");

  const stats = [
    {
      icon: <FileText size={30} color="white" />,
      value: "25K+",
      label: t("appsProcessed"),
    },
    {
      icon: <ShieldCheck size={30} color="white" />,
      value: "99%",
      label: t("approvalRate"),
    },
    {
      icon: <Globe size={30} color="white" />,
      value: "50+",
      label: t("countriesServed"),
    },
    {
      icon: <Award size={30} color="white" />,
      value: "10+",
      label: t("yearsExp"),
    },
    {
      icon: <Users size={30} color="white" />,
      value: "100+",
      label: t("experts"),
    },
  ];
  return (
    <section
      className="stats-section"
      style={{
        background: "linear-gradient(90deg, #020919 0%, #071e3d 35%, #0c3260 65%, #071e3d 100%)",
        padding: "90px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
          background: "radial-gradient(ellipse at center, rgba(29, 78, 216, 0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Navigation Arrows for Mobile */}
        <button className="mobile-nav-btn mobile-nav-left" onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
          }
        }}>
          <ChevronLeft size={24} color="#1d4ed8" />
        </button>
        <button className="mobile-nav-btn mobile-nav-right" onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
          }
        }}>
          <ChevronRight size={24} color="#1d4ed8" />
        </button>

        <div
          ref={scrollRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "12px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stats-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(59, 130, 246, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: "20px",
                padding: "28px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                cursor: "default",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                minHeight: "115px",
                height: "100%",
              }}
            >
              {/* Semi-transparent Circular Container for Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                {stat.icon}
              </div>

              {/* Typography Group */}
              <div className="stats-text-group" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  className="stats-value"
                  style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "white",
                    marginBottom: "4px",
                    lineHeight: "1",
                    letterSpacing: "-0.5px",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="stats-label"
                  style={{
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: "1.35",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mobile-nav-btn {
          display: none;
        }
        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .stats-section {
            padding: 32px 0 !important;
          }
          .stats-grid {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 8px !important;
            padding: 0 40px 12px 40px !important;
            margin: 0 -20px !important;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE and Edge */
          }
          .stats-grid::-webkit-scrollbar {
            display: none;
          }
          .stats-card {
            flex: 0 0 135px !important;
            width: 135px !important;
            height: 190px !important;
            scroll-snap-align: center;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            padding: 20px 10px !important;
            min-height: unset !important;
          }
          .stats-text-group {
            align-items: center !important;
            margin-top: 12px !important;
          }
          .stats-value {
            font-size: 24px !important;
            line-height: 1 !important;
            margin-bottom: 6px !important;
          }
          .stats-label {
            text-align: center !important;
            font-size: 11px !important;
            line-height: 1.35 !important;
            min-height: 30px !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: center !important;
          }
          /* Nav Buttons */
          .mobile-nav-btn {
            display: flex;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.4);
            z-index: 10;
            cursor: pointer;
            transition: all 0.3s;
          }
          .mobile-nav-btn:hover {
            background: white;
            box-shadow: 0 4px 15px rgba(29, 78, 216, 0.4);
          }
          .mobile-nav-left {
            left: 0;
          }
          .mobile-nav-right {
            right: 0;
          }
        }
      `}</style>
    </section>
  );
}
