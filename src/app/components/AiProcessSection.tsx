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
  Stethoscope,
  TrendingUp,
  Building2,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AiProcessSection() {
  const t = useTranslations("AiProcess");

  const aiFeatures = [
    {
      icon: <ScanText size={16} color="#1a56db" />,
      title: t("f1Title"),
      desc: t("f1Desc"),
    },
    {
      icon: <ScanFace size={16} color="#1a56db" />,
      title: t("f2Title"),
      desc: t("f2Desc"),
    },
    {
      icon: <Copy size={16} color="#1a56db" />,
      title: t("f3Title"),
      desc: t("f3Desc"),
    },
    {
      icon: <ClipboardList size={16} color="#1a56db" />,
      title: t("f4Title"),
      desc: t("f4Desc"),
    },
    {
      icon: <Activity size={16} color="#1a56db" />,
      title: t("f5Title"),
      desc: t("f5Desc"),
    },
    {
      icon: <Building size={16} color="#1a56db" />,
      title: t("f6Title"),
      desc: t("f6Desc"),
    },
  ];

  const visaServices = [
    { icon: <Plane size={22} color="#1a56db" />, title: t("touristVisa"), bg: "#eff6ff" },
    { icon: <Briefcase size={22} color="#1a56db" />, title: t("businessVisa"), bg: "#eff6ff" },
    { icon: <GraduationCap size={22} color="#1a56db" />, title: t("studentVisa"), bg: "#eff6ff" },
    { icon: <Briefcase size={22} color="#059669" />, title: t("workVisa"), bg: "#ecfdf5" },
    { icon: <Users size={22} color="#7c3aed" />, title: t("prImmigration"), bg: "#f5f3ff" },
    { icon: <Users size={22} color="#dc2626" />, title: t("dependentVisa"), bg: "#fef2f2" },
    { icon: <Building2 size={22} color="#1a56db" />, title: t("corporateVisa"), bg: "#eff6ff" },
    { icon: <Stethoscope size={22} color="#059669" />, title: t("medicalVisa"), bg: "#ecfdf5" },
  ];
  return (
    <section className="ai-section" style={{ background: "#ffffff", padding: "60px 0" }}>
      <div
        className="container-custom ai-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
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
              {t("titlePart1")}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1a56db, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("titlePart2")}
              </span>{" "}
              {t("titlePart3")}
            </h2>
          </motion.div>

          {/* Features list */}
          <div className="ai-features-list" style={{ marginBottom: "24px" }}>
            {aiFeatures.map((feat, i) => (
              <motion.div
                key={i}
                className="ai-feature-card"
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
                  className="ai-feature-icon"
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
                <div className="ai-feature-text-wrap">
                  <div
                    className="ai-feature-title"
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "2px",
                    }}
                  >
                    {feat.title}
                  </div>
                  <div className="ai-feature-desc" style={{ fontSize: "12px", color: "#6b7280" }}>
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
              <div style={{ flex: 1, textAlign: "center", fontSize: "10px", fontWeight: "600", color: "#9ca3af", letterSpacing: "0.5px" }}>{t("appOverview")}</div>
            </div>

            {/* Dashboard Content */}
            <div style={{ padding: "20px" }}>
              {/* Header Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#111827" }}>{t("usTouristVisa")}</div>
                  <div style={{ fontSize: "10px", color: "#6b7280" }}>{t("appId")}</div>
                </div>
                <div style={{ background: "#dbeafe", color: "#1a56db", padding: "4px 8px", borderRadius: "12px", fontSize: "10px", fontWeight: "700" }}>{t("inProgress")}</div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "11px", fontWeight: "600", color: "#4b5563" }}>
                  <span>{t("completion")}</span>
                  <span>75%</span>
                </div>
                <div style={{ height: "6px", background: "#f3f4f6", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "75%", height: "100%", background: "linear-gradient(90deg, #1a56db, #3b82f6)", borderRadius: "3px" }} />
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: "10px", color: "#6b7280", marginBottom: "4px" }}>{t("documents")}</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>{t("uploaded")}</div>
                </div>
                <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontSize: "10px", color: "#6b7280", marginBottom: "4px" }}>{t("aiVerification")}</div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#10b981" }}>{t("completed")}</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#111827", marginBottom: "12px" }}>{t("recentActivity")}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#374151" }}>{t("passportVerified")}</div>
                      <div style={{ fontSize: "9px", color: "#9ca3af" }}>{t("today")}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#374151" }}>{t("financialsUploaded")}</div>
                      <div style={{ fontSize: "9px", color: "#9ca3af" }}>{t("yesterday")}</div>
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
              {t("servicesTitle1")} <span style={{ color: "#1a56db" }}>{t("servicesTitle2")}</span> {t("servicesTitle3")}
            </h2>
          </motion.div>

          <div className="hex-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
          .ai-section { padding: 32px 0 !important; }
          .ai-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .ai-features-list {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px 10px !important;
          }
          .ai-feature-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            border-bottom: none !important;
            padding: 10px 6px !important;
            background: white !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
            border: 1px solid #f3f4f6 !important;
            min-height: 110px !important;
            justify-content: flex-start !important;
            gap: 6px !important;
          }
          .ai-feature-icon {
            margin: 0 auto !important;
            transform: scale(0.85) !important;
          }
          .ai-feature-text-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .ai-feature-title {
            font-size: 11.5px !important;
            line-height: 1.25 !important;
            margin-bottom: 4px !important;
            min-height: 28px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .ai-feature-desc {
            font-size: 10px !important;
            line-height: 1.25 !important;
          }
        }
        @media (max-width: 389px) {
          .ai-features-list {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hex-container {
            transform: scale(0.85);
            transform-origin: top center;
          }
        }
      `}</style>
    </section>
  );
}
