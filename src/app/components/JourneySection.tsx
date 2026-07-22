"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Headset,
  Cloud,
  ArrowUp,
  Cpu,
  Landmark,
  Check,
} from "lucide-react";

const steps = [
  {
    icon: <Globe size={46} color="#1d4ed8" strokeWidth={2.2} />,
    number: "01",
    title: "Choose Country",
    desc: "Select your preferred destination country",
  },
  {
    icon: <Headset size={46} color="#1d4ed8" fill="#1d4ed8" strokeWidth={1} />,
    number: "02",
    title: "Free Consultation",
    desc: "Get expert guidance from our consultants",
  },
  {
    icon: (
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Cloud size={52} color="#1d4ed8" fill="#1d4ed8" strokeWidth={1} />
        <ArrowUp size={24} color="white" strokeWidth={4} style={{ position: "absolute", top: "14px" }} />
      </div>
    ),
    number: "03",
    title: "Upload Documents",
    desc: "Submit required documents securely online",
  },
  {
    icon: (
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Cpu size={52} color="#1d4ed8" strokeWidth={2.2} />
        <span style={{ position: "absolute", fontWeight: 800, fontSize: "15px", color: "#1d4ed8", marginTop: "2px" }}>AI</span>
      </div>
    ),
    number: "04",
    title: "AI Verification",
    desc: "AI-powered verification and document review",
  },
  {
    icon: <Landmark size={46} color="#1d4ed8" fill="#1d4ed8" strokeWidth={1} />,
    number: "05",
    title: "Embassy Submission",
    desc: "We submit your application to the embassy",
  },
  {
    icon: (
      <div style={{ width: "54px", height: "54px", background: "#3bba71", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Check size={36} color="white" strokeWidth={4} />
      </div>
    ),
    number: "06",
    title: "Visa Approved",
    desc: "Receive your visa and start your journey",
  },
];

export default function JourneySection() {
  return (
    <section
      style={{
        background: "#fcfcfc",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Left Decorative Line */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  height: "2px",
                  width: "60px",
                  background: "linear-gradient(to right, transparent, #1d4ed8)",
                }}
              />
              <div style={{ width: "5px", height: "5px", background: "#1d4ed8", transform: "rotate(45deg)" }} />
            </div>

            <h2
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#0f172a",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Your Journey Begins Here
            </h2>

            {/* Right Decorative Line */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "5px", height: "5px", background: "#1d4ed8", transform: "rotate(45deg)" }} />
              <div
                style={{
                  height: "2px",
                  width: "60px",
                  background: "linear-gradient(to left, transparent, #1d4ed8)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Steps Container */}
        <div
          style={{
            position: "relative",
          }}
        >
          {/* Connector Wavy SVG Line */}
          <div
            style={{
              position: "absolute",
              top: "55px",
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
                d="M 0,15 L 91.6,15 C 137.4,15 137.4,25 183.3,25 C 229.2,25 229.2,15 275,15 C 320.8,15 320.8,25 366.6,25 C 412.4,25 412.4,15 458.3,15 C 504.1,15 504.1,25 550,25 C 595.8,25 595.8,15 641.6,15 C 687.4,15 687.4,25 733.3,25 C 779.1,25 779.1,15 825,15 C 870.8,15 870.8,25 916.6,25 C 962.4,25 962.4,15 1008.3,15 L 1100,15"
                fill="none"
                stroke="#bae6fd"
                strokeWidth="2.5"
              />
              {/* Connector dots between steps */}
              {[183.3, 366.6, 550, 733.3, 916.6].map((cx, idx) => (
                <circle key={idx} cx={cx} cy="25" r="3.5" fill="white" stroke="#7dd3fc" strokeWidth="2" />
              ))}
            </svg>
          </div>

          {/* Grid of Steps */}
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
                {/* Large White Circle with Glow */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.2), 0 0 0 6px #f4f9ff, 0 10px 25px rgba(0,0,0,0.03)",
                    cursor: "default",
                    marginBottom: "24px",
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Step Number */}
                <div
                  style={{
                    fontSize: "17px",
                    color: "#1d4ed8",
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "8px",
                    lineHeight: "1.3",
                  }}
                >
                  {step.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: "1.5",
                    maxWidth: "160px",
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
        @media (max-width: 1024px) {
          .wavy-line-container {
            display: none !important;
          }
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 56px 24px !important;
          }
        }
        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 48px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
