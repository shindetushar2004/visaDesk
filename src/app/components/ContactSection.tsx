"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, Send } from "lucide-react";

const contactItems = [
  { Icon: Phone,  line1: "+1 (555) 123-4567",           line2: null },
  { Icon: Mail,   line1: "info@visadesk.com",            line2: null },
  { Icon: MapPin, line1: "123 Global Avenue, Suite 500", line2: "New York, NY 10001, USA" },
  { Icon: Clock,  line1: "Mon - Sat: 9:00 AM - 7:00 PM", line2: null },
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

export default function ContactSection() {
  const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#1a56db";
    e.target.style.boxShadow   = "0 0 0 3px rgba(26,86,219,0.1)";
  };
  const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.boxShadow   = "none";
  };

  return (
    <section style={{ background: "#ffffff", padding: "80px 40px" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "240px 1fr 500px",
          gap: "60px",
          alignItems: "start",
        }}
        className="contact-grid"
      >

        {/* ─── LEFT: Get in Touch ─── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ paddingTop: "4px" }}
        >
          <h2 style={{
            fontSize: "24px", fontWeight: "700", color: "#0f172a",
            marginBottom: "32px", letterSpacing: "-0.4px", lineHeight: "1.2"
          }}>
            Get in Touch
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "32px" }}>
            {contactItems.map(({ Icon, line1, line2 }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ paddingTop: "2px" }}>
                  <Icon size={18} color="#1a56db" strokeWidth={2} />
                </div>
                <div>
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
        >
          <h2 style={{
            fontSize: "20px", fontWeight: "700", color: "#1a56db",
            marginBottom: "28px", letterSpacing: "-0.2px"
          }}>
            Send us a Message
          </h2>

          {/* 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
            <div>
              <label style={labelBase}>First Name</label>
              <input type="text" placeholder="John" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>Last Name</label>
              <input type="text" placeholder="Doe" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 123-4567" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelBase}>Country</label>
              <select style={{ ...inputBase, appearance: "none", cursor: "pointer" } as React.CSSProperties} onFocus={onFocus} onBlur={onBlur}>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>
            <div>
              <label style={labelBase}>Visa Type</label>
              <select style={{ ...inputBase, appearance: "none", cursor: "pointer" } as React.CSSProperties} onFocus={onFocus} onBlur={onBlur}>
                <option value="">Select Visa Type</option>
                <option value="tourist">Tourist Visa</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Visa</option>
                <option value="business">Business Visa</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div style={{ marginTop: "16px" }}>
            <label style={labelBase}>Your Message</label>
            <textarea
              placeholder="How can we help you?"
              rows={4}
              style={{ ...inputBase, resize: "none", minHeight: "100px", lineHeight: "1.6" } as React.CSSProperties}
              onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          {/* Upload + Button row */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelBase}>Upload Documents</label>
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
                  Drag & drop files here or{" "}
                  <span style={{ color: "#1a56db", fontWeight: "600" }}>Browse</span>
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
                  (DOC, JPG, PNG, Max 10MB)
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
                Send Message <Send size={16} />
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
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1.5fr !important; }
          .contact-illustration { display: none !important; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .form-actions { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
