"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Youtube, Send } from "lucide-react";

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.58)",
  textDecoration: "none",
  fontSize: "13px",
  lineHeight: "1.5",
  transition: "color 0.2s",
  display: "block",
};

const headingStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "700",
  color: "white",
  marginBottom: "18px",
  letterSpacing: "0.01em",
};

const hoverLink = (enter: boolean, e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = enter ? "white" : "rgba(255,255,255,0.58)";
};

export default function Footer() {
  return (
    <footer className="footer-container" style={{ background: "#0b1120", color: "white", paddingTop: "56px" }}>
      <div className="container-custom">

        {/* ── Main Grid: 5 columns ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1.1fr 1fr 1.8fr",
            gap: "36px",
            marginBottom: "44px",
          }}
          className="footer-grid"
        >

          {/* ── Col 1: Brand ── */}
          <div className="brand-col">
            {/* Logo */}
            <div className="footer-logo-wrap" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{
                width: "38px", height: "38px",
                background: "linear-gradient(135deg, #1a56db, #1e40af)",
                borderRadius: "9px",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ color: "white", fontWeight: "900", fontSize: "14px", letterSpacing: "-0.5px" }}>VD</span>
              </div>
              <div>
                <div style={{ fontWeight: "800", fontSize: "17px", color: "white", lineHeight: "1.1" }}>VisaDesk</div>
                <div style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>GLOBAL LLP</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="footer-brand-desc" style={{
              fontSize: "12.5px", color: "rgba(255,255,255,0.55)",
              lineHeight: "1.7", maxWidth: "230px", marginBottom: "22px",
            }}>
              Your trusted partner for global mobility. We make the visa process simple, fast and hassle-free with AI and expert guidance.
            </p>

            {/* Social Icons */}
            <div className="social-icons-row" style={{ display: "flex", gap: "10px" }}>
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ background: "#1a56db", scale: 1.1 }}
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul className="desktop-only" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {["Home", "Who We Are", "Services", "Countries", "Process", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-only-flex mobile-quick-links-row">
              {["Home", "About", "Services", "Process", "Success Stories", "Blog", "Contact"].map((item) => (
                <a key={item} href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>{item}</a>
              ))}
            </div>
          </div>

          {/* ── Col 3: Our Services ── */}
          <div>
            <h4 style={headingStyle}>Our Services</h4>
            <ul className="desktop-only" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {["Tourist Visa", "Business Visa", "Student Visa", "Work Visa", "PR & Immigration", "Dependent Visa", "Corporate Visa", "Medical Visa"].map((item) => (
                <li key={item}>
                  <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-only-flex mobile-services-row">
              {["Tourist Visa", "Student Visa", "Business Visa", "Immigration"].map((item) => (
                <a key={item} href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>{item}</a>
              ))}
            </div>
          </div>

          {/* ── Col 4: Popular Countries ── */}
          <div>
            <h4 style={headingStyle}>Popular Countries</h4>
            <ul className="desktop-only" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {["Canada", "USA", "UK", "Australia", "Germany", "France", "Italy"].map((item) => (
                <li key={item}>
                  <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-only-flex mobile-countries-row">
              <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>USA</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>Canada</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>UK</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>Australia</a>
              <a href="#" style={linkStyle} onMouseEnter={(e) => hoverLink(true, e)} onMouseLeave={(e) => hoverLink(false, e)}>Germany</a>
            </div>
          </div>

          {/* ── Col 5: Subscribe to Newsletter ── */}
          <div>
            <h4 style={headingStyle}>Subscribe to Newsletter</h4>
            <p className="newsletter-desc" style={{
              fontSize: "12.5px", color: "rgba(255,255,255,0.55)",
              lineHeight: "1.65", marginBottom: "18px",
            }}>
              Get latest updates, visa news and exclusive tips straight to your inbox.
            </p>

            {/* Email Input Row */}
            <div style={{ display: "flex", gap: "0", borderRadius: "9px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.06)",
                  border: "none",
                  color: "white",
                  fontSize: "13px",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                }}
              />
              <motion.button
                whileHover={{ background: "#1e40af" }}
                style={{
                  background: "#1a56db",
                  border: "none",
                  padding: "0 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <Send size={15} color="white" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)",
          }}
          className="footer-bottom"
        >
          <div>© 2024 VisaDesk Global. All Rights Reserved.</div>
          <div className="footer-links" style={{ display: "flex", gap: "28px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "12px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mobile-only-flex, .mobile-only-grid { display: none !important; }
        
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only-flex { display: flex !important; }
          .mobile-only-grid { display: grid !important; }
          
          .footer-container { padding-top: 16px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 12px !important; margin-bottom: 12px !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px !important; text-align: center !important; padding: 10px 0 !important; }
          .footer-links { flex-wrap: wrap; justify-content: center; gap: 14px !important; }
          
          footer h4 { margin-bottom: 8px !important; }
          
          .brand-col { align-items: center !important; text-align: center !important; }
          .footer-logo-wrap { margin-bottom: 8px !important; }
          .footer-brand-desc { 
            text-align: center !important; 
            max-width: 100% !important; 
            margin: 0 auto 10px auto !important; 
            font-size: 11.5px !important;
          }
          .newsletter-desc { margin-bottom: 8px !important; }
          .social-icons-row { justify-content: center !important; }
          
          .mobile-quick-links-row { justify-content: space-between; align-items: center; width: 100%; overflow-x: auto; }
          .mobile-quick-links-row a { font-size: 11px !important; white-space: nowrap; }
          
          .mobile-services-row { justify-content: space-between; align-items: center; width: 100%; overflow-x: auto; }
          .mobile-services-row a { font-size: 11px !important; white-space: nowrap; }
          
          .mobile-countries-row { justify-content: space-between; align-items: center; width: 100%; overflow-x: auto; }
          .mobile-countries-row a { font-size: 11.5px !important; white-space: nowrap; }
        }
        input::placeholder { color: rgba(255,255,255,0.35); }
      `}</style>
    </footer>
  );
}
