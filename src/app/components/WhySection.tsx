"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ScanFace,
  Activity,
  Users,
  Shield,
  User,
  Globe,
} from "lucide-react";

// Beautiful inline custom round SVG flags (28px size as requested)
const USFlag = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" style={{ borderRadius: "50%", flexShrink: 0 }}>
    <rect width="32" height="32" fill="#B22234" />
    {[1, 3, 5, 7, 9, 11, 13].map((i) => (
      <rect key={i} y={(i * 32) / 13} width="32" height={32 / 13} fill="white" />
    ))}
    <rect width="18" height="17.2" fill="#3C3B6E" />
    <circle cx="3" cy="3" r="1.2" fill="white" />
    <circle cx="8" cy="3" r="1.2" fill="white" />
    <circle cx="13" cy="3" r="1.2" fill="white" />
    <circle cx="5" cy="7" r="1.2" fill="white" />
    <circle cx="10" cy="7" r="1.2" fill="white" />
    <circle cx="3" cy="11" r="1.2" fill="white" />
    <circle cx="8" cy="11" r="1.2" fill="white" />
    <circle cx="13" cy="11" r="1.2" fill="white" />
    <circle cx="5" cy="14" r="1.2" fill="white" />
    <circle cx="10" cy="14" r="1.2" fill="white" />
  </svg>
);

const CAFlag = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" style={{ borderRadius: "50%", flexShrink: 0 }}>
    <rect width="32" height="32" fill="white" />
    <rect width="8" height="32" fill="#D80621" />
    <rect x="24" width="8" height="32" fill="#D80621" />
    <path d="M 16 6 L 18 12 L 22 10 L 20 15 L 24 16 L 20 18 L 22 23 L 18 21 L 17 26 L 15 26 L 14 21 L 10 23 L 12 18 L 8 16 L 12 15 L 10 10 L 14 12 Z" fill="#D80621" />
  </svg>
);

const UKFlag = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" style={{ borderRadius: "50%", flexShrink: 0 }}>
    <rect width="32" height="32" fill="#012169" />
    <line x1="0" y1="0" x2="32" y2="32" stroke="white" strokeWidth="4" />
    <line x1="32" y1="0" x2="0" y2="32" stroke="white" strokeWidth="4" />
    <line x1="0" y1="0" x2="32" y2="32" stroke="#C8102E" strokeWidth="2.2" />
    <line x1="32" y1="0" x2="0" y2="32" stroke="#C8102E" strokeWidth="2.2" />
    <rect x="12" width="8" height="32" fill="white" />
    <rect y="12" width="32" height="8" fill="white" />
    <rect x="13.5" width="5" height="32" fill="#C8102E" />
    <rect y="13.5" width="32" height="5" fill="#C8102E" />
  </svg>
);

const AUFlag = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" style={{ borderRadius: "50%", flexShrink: 0 }}>
    <rect width="32" height="32" fill="#012169" />
    <g transform="scale(0.5)">
      <rect width="32" height="32" fill="#012169" />
      <line x1="0" y1="0" x2="32" y2="32" stroke="white" strokeWidth="4" />
      <line x1="32" y1="0" x2="0" y2="32" stroke="white" strokeWidth="4" />
      <line x1="0" y1="0" x2="32" y2="32" stroke="#C8102E" strokeWidth="2.2" />
      <line x1="32" y1="0" x2="0" y2="32" stroke="#C8102E" strokeWidth="2.2" />
      <rect x="12" width="8" height="32" fill="white" />
      <rect y="12" width="32" height="8" fill="white" />
      <rect x="13.5" width="5" height="32" fill="#C8102E" />
      <rect y="13.5" width="32" height="5" fill="#C8102E" />
    </g>
    <polygon points="8,23 9,21 11,21 10,19 11,17 9,17 8,15 7,17 5,17 6,19 5,21 7,21" fill="white" transform="translate(0, 1)" />
    <circle cx="24" cy="8" r="1.2" fill="white" />
    <circle cx="28" cy="13" r="1.2" fill="white" />
    <circle cx="24" cy="18" r="1.2" fill="white" />
    <circle cx="20" cy="14" r="1.2" fill="white" />
    <circle cx="25" cy="25" r="1.5" fill="white" />
  </svg>
);

const features = [
  { icon: <FileText size={24} color="#1a56db" />, title: "AI Document Analysis" },
  { icon: <ScanFace size={24} color="#1a56db" />, title: "Passport OCR" },
  { icon: <Activity size={24} color="#1a56db" />, title: "Live Applications Tracking" },
  { icon: <Users size={24} color="#1a56db" />, title: "Expert Consultants" },
  { icon: <Shield size={24} color="#1a56db" />, title: "Government Compliance" },
  { icon: <User size={24} color="#1a56db" />, title: "Dedicated Relationship Manager" },
];

const mapCountries = [
  { flag: <USFlag />, name: "USA",       num: "15", days: "Days", rate: "99% Success" },
  { flag: <CAFlag />, name: "Canada",    num: "20", days: "Days", rate: "99% Success" },
  { flag: <UKFlag />, name: "UK",        num: "15", days: "Days", rate: "99% Success" },
  { flag: <AUFlag />, name: "Australia", num: "20", days: "Days", rate: "99% Success" },
];

export default function WhySection() {
  return (
    <section className="why-section" style={{ background: "#f8fafc", padding: "70px 0" }}>
      <div
        className="container-custom why-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1.2fr",
          gap: "32px",
          alignItems: "flex-start",
        }}
      >
        {/* ─── LEFT: Why VisaDesk ─── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <motion.h2
            className="why-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginTop: "32px", marginBottom: "28px" }}
          >
            Why <span style={{ color: "#1a56db" }}>VisaDesk</span> is Different?
          </motion.h2>

          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              alignContent: "flex-start",
            }}
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="why-feature-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 12px 28px rgba(26, 86, 219, 0.15)",
                  borderColor: "#93c5fd",
                }}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "16px 12px",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
                  border: "1px solid #e5e7eb",
                  cursor: "default",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  minHeight: "100px",
                }}
              >
                {/* Soft blue circular icon container */}
                <div
                    className="why-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "#eff6ff",
                      border: "1px solid #dbeafe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(26, 86, 219, 0.06)",
                  }}
                  >
                    <div className="why-svg-inner" style={{ transform: "scale(0.85)" }}>{feat.icon}</div>
                  </div>
                  <div className="why-feature-title" style={{ fontSize: "12px", fontWeight: "700", color: "#1e293b", lineHeight: "1.3" }}>
                    {feat.title}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Where Do You Want to Go? (Image Replacement) ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            position: "relative",
            display: "flex",
            borderRadius: "28px",
            boxShadow: "0 16px 45px rgba(0,0,0,0.35)",
            overflow: "hidden",
            background: "#040b16",
          }}
        >
          <img
            src="/where_do_you_want_to_go.jpg"
            alt="Where Do You Want to Go?"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .why-section { padding: 32px 0 !important; }
          .why-heading { margin-top: 16px !important; margin-bottom: 16px !important; }
          .features-grid { 
            grid-template-columns: repeat(3, 1fr) !important; 
            gap: 10px 8px !important;
          }
          .why-feature-card {
            align-items: center !important;
            text-align: center !important;
            padding: 12px 6px !important;
            min-height: 105px !important;
            gap: 8px !important;
          }
          .why-icon-wrap {
            width: 32px !important;
            height: 32px !important;
            margin: 0 auto !important;
          }
          .why-svg-inner {
            transform: scale(0.7) !important;
          }
          .why-feature-title {
            font-size: 11px !important;
            line-height: 1.25 !important;
            white-space: normal !important;
          }
        }
        @media (max-width: 389px) {
          .features-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
