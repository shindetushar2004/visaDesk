"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, Send, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");

  const contactItems = [
    { Icon: Phone,  line1: "+1 (555) 123-4567",           line2: null },
    { Icon: Mail,   line1: "info@visadesk.com",            line2: null },
    { Icon: MapPin, line1: t("address1"), line2: t("address2") },
    { Icon: Clock,  line1: t("hours"), line2: null },
  ];

  const socials = [Facebook, Linkedin, Instagram, Youtube];

  const inputBase: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
    background: "#f8fafc",
    color: "#1e293b",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "Inter, sans-serif",
  };

  const labelBase: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    marginBottom: "8px",
    display: "block",
  };

  const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#1a56db";
    e.target.style.boxShadow   = "0 0 0 3px rgba(26,86,219,0.1)";
  };
  const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.boxShadow   = "none";
  };

  const [countryVal, setCountryVal] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);

  const [visaVal, setVisaVal] = useState("");
  const [visaOpen, setVisaOpen] = useState(false);

  return (
    <section className="contact-section" style={{ background: "#ffffff", padding: "80px 0" }}>
      <div
        className="container-custom contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr 500px",
          gap: "60px",
          alignItems: "start",
        }}
      >

        {/* ─── LEFT: Get in Touch ─── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ paddingTop: "4px" }}
        >
          <h2 className="contact-heading" style={{
            fontSize: "24px", fontWeight: "700", color: "#0f172a",
            marginBottom: "32px", letterSpacing: "-0.4px", lineHeight: "1.2"
          }}>
            {t("getInTouch")}
          </h2>

          <div className="contact-info-grid" style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
            {contactItems.map(({ Icon, line1, line2 }, i) => (
              <div key={i} className="contact-info-item" style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div className="contact-info-icon" style={{ paddingTop: "2px" }}>
                  <Icon size={18} color="#1a56db" strokeWidth={2} />
                </div>
                <div className="contact-info-text">
                  <div style={{ fontSize: "14px", fontWeight: "500", color: "#334155", lineHeight: "1.4" }}>{line1}</div>
                  {line2 && <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>{line2}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "16px" }}>
            {socials.map((Icon, i) => (
              <motion.a
                key={i} href="#"
                whileHover={{ color: "#113bba" }}
                style={{
                  color: "#1a56db",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s", textDecoration: "none",
                }}
              >
                <Icon size={18} strokeWidth={2} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ─── CENTER: Form Card ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="form-container"
        >
          <h2 style={{
            fontSize: "20px", fontWeight: "700", color: "#1a56db",
            marginBottom: "28px", letterSpacing: "-0.2px"
          }}>
            {t("sendMessage")}
          </h2>

          {/* 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
            <div>
              <label style={labelBase}>{t("firstName")}</label>
              <input type="text" placeholder="John" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>{t("lastName")}</label>
              <input type="text" placeholder="Doe" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>{t("email")}</label>
              <input type="email" placeholder="john@example.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>{t("phone")}</label>
              <input type="tel" placeholder="+1 (555) 123-4567" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>{t("country")}</label>
              
              {/* Desktop Native Select */}
              <div className="select-wrapper desktop-select-wrap" style={{ position: "relative" }}>
                <select defaultValue="" className="contact-select" style={{ ...inputBase, appearance: "none", cursor: "pointer" } as React.CSSProperties} onFocus={onFocus} onBlur={onBlur}>
                  <option value="" disabled>{t("selectCountry")}</option>
                  <option value="us">{t("unitedStates")}</option>
                  <option value="uk">{t("unitedKingdom")}</option>
                  <option value="ca">{t("canada")}</option>
                  <option value="au">{t("australia")}</option>
                </select>
                <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", display: "flex", alignItems: "center" }}>
                  <ChevronDown size={16} color="#64748b" />
                </div>
              </div>

              {/* Mobile Custom Select */}
              <div className="mobile-select-wrap" style={{ position: "relative" }}>
                <div 
                  onClick={() => { setCountryOpen(!countryOpen); setVisaOpen(false); }}
                  style={{ ...inputBase, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" } as React.CSSProperties}
                  className="mobile-select-input"
                >
                  <span style={{ color: "#1e293b", fontSize: "13px" }}>
                    {countryVal || t("selectCountry")}
                  </span>
                  <ChevronDown size={16} color="#64748b" />
                </div>
                
                {countryOpen && (
                  <>
                    <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setCountryOpen(false)} />
                    <div className="mobile-dropdown-popup">
                      {[t("unitedStates"), t("unitedKingdom"), t("canada"), t("australia")].map((opt) => (
                        <div 
                          key={opt}
                          className="mobile-dropdown-option"
                          onClick={() => { setCountryVal(opt); setCountryOpen(false); }}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <label style={labelBase}>{t("visaType")}</label>

              {/* Desktop Native Select */}
              <div className="select-wrapper desktop-select-wrap" style={{ position: "relative" }}>
                <select defaultValue="" className="contact-select" style={{ ...inputBase, appearance: "none", cursor: "pointer" } as React.CSSProperties} onFocus={onFocus} onBlur={onBlur}>
                  <option value="" disabled>{t("selectVisaType")}</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="business">Business Visa</option>
                </select>
                <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", display: "flex", alignItems: "center" }}>
                  <ChevronDown size={16} color="#64748b" />
                </div>
              </div>

              {/* Mobile Custom Select */}
              <div className="mobile-select-wrap" style={{ position: "relative" }}>
                <div 
                  onClick={() => { setVisaOpen(!visaOpen); setCountryOpen(false); }}
                  style={{ ...inputBase, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" } as React.CSSProperties}
                  className="mobile-select-input"
                >
                  <span style={{ color: "#1e293b", fontSize: "13px" }}>
                    {visaVal || t("selectVisaType")}
                  </span>
                  <ChevronDown size={16} color="#64748b" />
                </div>
                
                {visaOpen && (
                  <>
                    <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setVisaOpen(false)} />
                    <div className="mobile-dropdown-popup">
                      {["Tourist Visa", "Student Visa", "Work Visa", "Business Visa"].map((opt) => (
                        <div 
                          key={opt}
                          className="mobile-dropdown-option"
                          onClick={() => { setVisaVal(opt); setVisaOpen(false); }}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Message */}
          <div style={{ marginTop: "16px" }}>
            <label style={labelBase}>{t("message")}</label>
            <textarea
              placeholder={t("placeholderMessage")}
              rows={4}
              style={{ ...inputBase, resize: "none", minHeight: "100px", lineHeight: "1.6" } as React.CSSProperties}
              onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          {/* Upload + Button row */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelBase}>{t("uploadDocuments")}</label>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="form-actions">
              {/* Upload box */}
              <motion.div
                whileHover={{ borderColor: "#1a56db", background: "#f0f5ff" }}
                style={{
                  flex: 1,
                  border: "1px dashed #cbd5e1",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  textAlign: "center",
                  background: "#f8fafc",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "13px", color: "#64748b" }}>
                  {t("dragDrop")}{" "}
                  <span style={{ color: "#1a56db", fontWeight: "600" }}>{t("browse")}</span>
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
                  {t("fileTypes")}
                </div>
              </motion.div>

              {/* Send Button */}
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(26,86,219,0.25)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#1a56db",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "16px 28px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 4px 16px rgba(26,86,219,0.2)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.25s ease",
                }}
              >
                {t("submit")} <Send size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT: Illustration ─── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
          className="contact-illustration"
        >
          <img
            src="/hero-suitcase-white.jpg"
            alt="VisaDesk Suitcase and Passport"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              mixBlendMode: "multiply",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        .mobile-select-wrap { display: none; }
        .desktop-select-wrap { display: block; }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1.5fr !important; }
          .contact-illustration { display: none !important; }
        }
        @media (max-width: 768px) {
          .contact-section { padding: 48px 0 !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .contact-heading { margin-bottom: 24px !important; }
          
          /* Contact Info Grid - Mobile */
          .contact-info-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .contact-info-item {
            flex-direction: row !important;
            align-items: center !important;
            text-align: left !important;
            gap: 12px !important;
            width: 100%;
          }
          .contact-info-icon {
            padding-top: 0 !important;
          }
          
          /* Send Us A Message Form Grid - Mobile */
          .form-grid { 
            grid-template-columns: 1fr 1fr !important; 
            gap: 12px !important; 
          }
          
          .form-container {
            border: 1px solid #e2e8f0 !important;
            padding: 16px !important;
            border-radius: 16px !important;
          }
          
          /* Form Selects Mobile Adjustments */
          .mobile-select-wrap { display: block !important; }
          .desktop-select-wrap { display: none !important; }
          
          .mobile-select-input {
            border: 1px solid #cbd5e1 !important;
            padding: 13px 16px !important;
          }
          
          .mobile-dropdown-popup {
            position: absolute;
            top: calc(100% + 4px);
            left: 50%;
            transform: translateX(-50%);
            width: 80%; /* Increased width by ~15% */
            max-height: 140px; /* Reduce height by ~40% */
            overflow-y: auto;
            background: white;
            border: 1px solid #64748b; /* Clearly visible 1px border */
            border-radius: 8px; /* Keep existing radius */
            box-shadow: 0 4px 16px rgba(0,0,0,0.12); /* Keep shadow */
            z-index: 50;
          }
          .mobile-dropdown-option {
            padding: 8px 12px; /* Reduce vertical padding */
            font-size: 13px; /* Smaller text size */
            color: #1e293b;
            border-bottom: 1px solid #f1f5f9;
            cursor: pointer;
          }
          .mobile-dropdown-option:last-child {
            border-bottom: none;
          }
          .mobile-dropdown-option:active {
            background: #f8fafc;
          }
          
          .form-actions { flex-direction: column !important; }
          .form-actions > button { width: 100%; justify-content: center; }
          .form-actions > div { width: 100%; }
        }
      `}</style>
    </section>
  );
}
