"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  FileText,
  ShieldCheck,
  Globe,
  Award,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: <FileText size={30} color="white" />,
    value: "25K+",
    label: "Applications Processed",
  },
  {
    icon: <ShieldCheck size={30} color="white" />,
    value: "99%",
    label: "Visa Approval Success Rate",
  },
  {
    icon: <Globe size={30} color="white" />,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: <Award size={30} color="white" />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <Users size={30} color="white" />,
    value: "100+",
    label: "Visa & Legal Experts",
  },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #020919 0%, #071e3d 35%, #0c3260 65%, #071e3d 100%)",
        padding: "90px 24px",
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

      <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
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
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
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
        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
