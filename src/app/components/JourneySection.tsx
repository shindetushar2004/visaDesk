"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Headphones,
  CloudUpload,
  Cpu,
  Building2,
  Check,
} from "lucide-react";

const steps = [
  {
    icon: <Globe2 size={24} color="#1a56db" />,
    number: "01",
    title: "Choose Country",
    desc: "Select your preferred destination country",
    bg: "white",
    border: "2px solid #eff6ff",
    shadow: "0 8px 20px rgba(26, 86, 219, 0.08)",
  },
  {
    icon: <Headphones size={24} color="#1a56db" />,
    number: "02",
    title: "Free Consultation",
    desc: "Get expert guidance from our consultants",
    bg: "white",
    border: "2px solid #eff6ff",
    shadow: "0 8px 20px rgba(26, 86, 219, 0.08)",
  },
  {
    icon: <CloudUpload size={24} color="#1a56db" />,
    number: "03",
    title: "Upload Documents",
    desc: "Submit required documents securely online",
    bg: "white",
    border: "2px solid #eff6ff",
    shadow: "0 8px 20px rgba(26, 86, 219, 0.08)",
  },
  {
    icon: <Cpu size={24} color="#1a56db" />,
    number: "04",
    title: "AI Verification",
    desc: "AI-powered verification and document review",
    bg: "white",
    border: "2px solid #eff6ff",
    shadow: "0 8px 20px rgba(26, 86, 219, 0.08)",
  },
  {
    icon: <Building2 size={24} color="#1a56db" />,
    number: "05",
    title: "Embassy Submission",
    desc: "We submit your application to the embassy",
    bg: "white",
    border: "2px solid #eff6ff",
    shadow: "0 8px 20px rgba(26, 86, 219, 0.08)",
  },
  {
    icon: <Check size={24} color="white" />,
    number: "06",
    title: "Visa Approved",
    desc: "Receive your visa and start your journey",
    bg: "#10b981",
    border: "2px solid #10b981",
    shadow: "0 8px 20px rgba(16, 185, 129, 0.25)",
    isLast: true,
  },
];

export default function JourneySection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Left Line with Dot */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  height: "1px",
                  width: "50px",
                  background: "linear-gradient(to right, transparent, #1a56db)",
                }}
              />
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1a56db" }} />
            </div>

            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Your Journey Begins Here
            </h2>

            {/* Right Line with Dot */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1a56db" }} />
              <div
                style={{
                  height: "1px",
                  width: "50px",
                  background: "linear-gradient(to left, transparent, #1a56db)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Steps Container */}
        <div
          style={{
            position: "relative",
            minHeight: "220px",
          }}
        >
          {/* Connector Wavy SVG Line */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "40px",
              right: "40px",
              height: "40px",
              zIndex: 0,
              pointerEvents: "none",
            }}
            className="wavy-line-container"
          >
            <svg
              width="100%"
              height="30"
              viewBox="0 0 1100 30"
              preserveAspectRatio="none"
              style={{ display: "block" }}
            >
              <path
                d="M 0,15 C 50,0 50,30 91.6,15 C 133.3,0 133.3,30 183.3,15 C 233.3,0 233.3,30 275,15 C 316.6,0 316.6,30 366.6,15 C 416.6,0 416.6,30 458.3,15 C 500,0 500,30 550,15 C 600,0 600,30 641.6,15 C 683.3,0 683.3,30 733.3,15 C 783.3,0 783.3,30 825,15 C 866.6,0 866.6,30 916.6,15 C 966.6,0 966.6,30 1008.3,15 C 1050,0 1050,30 1100,15"
                fill="none"
                stroke="#bfdbfe"
                strokeWidth="2.5"
                opacity="0.8"
              />
              {/* Connector dots between circles */}
              {[91.6, 275, 458.3, 641.6, 825, 1008.3].map((cx, idx) => (
                <circle key={idx} cx={cx} cy="15" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2.5" />
              ))}
            </svg>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Circle Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    background: step.bg,
                    border: step.border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: step.shadow,
                    cursor: "default",
                    marginBottom: "16px",
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Step Number */}
                <div
                  style={{
                    fontSize: "13px",
                    color: "#1a56db",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "6px",
                    lineHeight: "1.3",
                  }}
                >
                  {step.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    lineHeight: "1.4",
                    maxWidth: "150px",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .wavy-line-container {
            display: none !important;
          }
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 32px 16px !important;
          }
        }
        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
