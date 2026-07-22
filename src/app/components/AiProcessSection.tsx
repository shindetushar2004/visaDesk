"use client";

import { motion } from "framer-motion";
import {
  ScanText,
  ScanFace,
  Copy,
  ClipboardList,
  Activity,
  Building,
  Plane,
  GraduationCap,
  Briefcase,
  Users,
  Building2,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const aiFeatures = [
  {
    icon: <ScanText size={16} color="#1a56db" />,
    title: "AI Document Scanner",
    desc: "Advanced OCR & document detection",
  },
  {
    icon: <ScanFace size={16} color="#1a56db" />,
    title: "OCR Passport Reading",
    desc: "Extracts data instantly & accurately",
  },
  {
    icon: <Copy size={16} color="#1a56db" />,
    title: "Duplicate Detection",
    desc: "Ensures authenticity & reduces errors",
  },
  {
    icon: <ClipboardList size={16} color="#1a56db" />,
    title: "Smart Checklist",
    desc: "Personalised document checklist",
  },
  {
    icon: <Activity size={16} color="#1a56db" />,
    title: "Real-Time Status Tracking",
    desc: "Track your application every step",
  },
  {
    icon: <Building size={16} color="#1a56db" />,
    title: "Embassy Updates",
    desc: "Stay informed with live embassy updates",
  },
];

const visaServices = [
  { icon: <Plane size={22} color="#1a56db" />, title: "Tourist Visa", bg: "#eff6ff" },
  { icon: <Briefcase size={22} color="#1a56db" />, title: "Business Visa", bg: "#eff6ff" },
  { icon: <GraduationCap size={22} color="#1a56db" />, title: "Student Visa", bg: "#eff6ff" },
  { icon: <Briefcase size={22} color="#059669" />, title: "Work Visa", bg: "#ecfdf5" },
  { icon: <Users size={22} color="#7c3aed" />, title: "PR & Immigration", bg: "#f5f3ff" },
  { icon: <Users size={22} color="#dc2626" />, title: "Dependent Visa", bg: "#fef2f2" },
  { icon: <Building2 size={22} color="#1a56db" />, title: "Corporate Visa", bg: "#eff6ff" },
  { icon: <Stethoscope size={22} color="#059669" />, title: "Medical Visa", bg: "#ecfdf5" },
];

export default function AiProcessSection() {
  return (
    <section style={{ background: "#ffffff", padding: "60px 20px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
        className="ai-grid"
      >
        {/* Left: AI-Powered Smart Process */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              AI-Powered{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1a56db, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Smart
              </span>{" "}
              Process
            </h2>
          </motion.div>

          {/* Features list */}
          <div style={{ marginBottom: "24px" }}>
            {aiFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom: i < aiFeatures.length - 1 ? "1px solid #f3f4f6" : "none",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feat.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "2px",
                    }}
                  >
                    {feat.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    {feat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Middle: AI Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "340px",
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              border: "1px solid #f3f4f6",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Window Header */}
            <div style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              <div style={{ flex: 1, textAlign: "center", fontSize: "10px", fontWeight: "600", color: "#9ca3af", letterSpacing: "0.5px" }}>Application Overview</div>
            </div>

            {/* Dashboard Content */}
            <div style={{ padding: "20px" }}>
              {/* Header Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#111827" }}>US Tourist Visa</div>
                  <div style={{ fontSize: "10px", color: "#6b7280" }}>Application ID: #US-8492</div>
                </div>
                <div style={{ background: "#dbeafe", color: "#1a56db", padding: "4px 8px", borderRadius: "12px", fontSize: "10px", fontWeight: "700" }}>In Progress</div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "11px", fontWeight: "600", color: "#4b5563" }}>
                  <span>Completion</span>
                  <span>75%</span>
                </div>
                <div style={{ height: "6px", background: "#f3f4f6", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #1a56db, #3b82f6)", borderRadius: "3px" }} />
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: "10px", color: "#6b7280", marginBottom: "4px" }}>Documents</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>12/15 Uploaded</div>
                </div>
                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: "10px", color: "#6b7280", marginBottom: "4px" }}>AI Verification</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#10b981" }}>Completed</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#111827", marginBottom: "12px" }}>Recent Activity</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#374151" }}>Passport Verified</div>
                      <div style={{ fontSize: "9px", color: "#9ca3af" }}>Today, 10:23 AM</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#374151" }}>Financials Uploaded</div>
                      <div style={{ fontSize: "9px", color: "#9ca3af" }}>Yesterday, 04:15 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Our Visa Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "32px",
                textAlign: "center"
              }}
            >
              Our <span style={{ color: "#1a56db" }}>Visa</span> Services
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Top Row (3) */}
            <div style={{ display: "flex", gap: "10px", zIndex: 3 }}>
              {visaServices.slice(0, 3).map((service, i) => (
                <div key={i} style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.08))" }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    style={{
                      width: "105px",
                      height: "115px",
                      background: "white",
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    <div style={{ marginBottom: "8px" }}>{service.icon}</div>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: "#111827", textAlign: "center", lineHeight: "1.2" }}>{service.title}</div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Middle Row (2) */}
            <div style={{ display: "flex", gap: "10px", marginTop: "-28px", zIndex: 2 }}>
              {visaServices.slice(3, 5).map((service, i) => (
                <div key={i + 3} style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.08))" }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    style={{
                      width: "105px",
                      height: "115px",
                      background: "white",
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    <div style={{ marginBottom: "8px" }}>{service.icon}</div>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: "#111827", textAlign: "center", lineHeight: "1.2" }}>{service.title}</div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Bottom Row (3) */}
            <div style={{ display: "flex", gap: "10px", marginTop: "-28px", zIndex: 1 }}>
              {visaServices.slice(5, 8).map((service, i) => (
                <div key={i + 5} style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.08))" }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    style={{
                      width: "105px",
                      height: "115px",
                      background: "white",
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    <div style={{ marginBottom: "8px" }}>{service.icon}</div>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: "#111827", textAlign: "center", lineHeight: "1.2" }}>{service.title}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ai-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .ai-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
