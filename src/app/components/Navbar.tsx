"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  Plane,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Building,
  MapPin
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  {
    label: "Who We Are",
    href: "#who-we-are",
    dropdown: [
      { label: "About Us", icon: Users },
      { label: "Our Team", icon: Users },
      { label: "Mission & Vision", icon: Target },
    ],
  },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Tourist Visa", icon: Plane },
      { label: "Business Visa", icon: Briefcase },
      { label: "Student Visa", icon: GraduationCap },
      { label: "Work Visa", icon: Building },
    ],
  },
  {
    label: "Countries",
    href: "#countries",
    dropdown: [
      { label: "USA", icon: MapPin },
      { label: "Canada", icon: MapPin },
      { label: "UK", icon: MapPin },
      { label: "Australia", icon: MapPin },
      { label: "Germany", icon: MapPin },
    ],
  },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setMobileOpen(false);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 2px;
          left: 0;
          background-color: #000000;
          transform-origin: bottom left;
          transition: transform 0.3s ease-out;
          border-radius: 2px;
        }
        .nav-link-hover:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: scrolled ? "76px" : "86px",
          background: "#ffffff",
          borderBottom: scrolled ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle bottom gradient line on scroll */}
        <div 
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "1px",
            background: scrolled ? "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)" : "transparent",
            transition: "opacity 0.3s"
          }}
        />

        <div className="container-custom">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            {/* Logo */}
            <div 
              style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
              onClick={(e) => handleNavClick(e as any, "#hero")}
            >
              <img
                src="/logo.png"
                alt=""
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "24px",
                    color: "#1e3a8a",
                    lineHeight: "1",
                    letterSpacing: "-0.5px",
                    fontFamily: "Inter, sans-serif"
                  }}
                >
                  VisaDesk
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#3b82f6",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    marginTop: "4px"
                  }}
                >
                  Global LLP
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div
              className="hidden lg:flex"
              style={{ alignItems: "center", gap: "24px" }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <div
                    key={link.label}
                    style={{ position: "relative" }}
                    onMouseEnter={() =>
                      link.dropdown && setActiveDropdown(link.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="nav-link-hover"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 4px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: isActive ? "#1a56db" : "#000000",
                        background: "transparent",
                        textDecoration: "none",
                        borderRadius: "0px",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <ChevronDown size={14} style={{ opacity: 0.7, marginTop: "1px" }} />
                      )}
                    </a>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{
                            position: "absolute",
                            top: "calc(100% + 12px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "#ffffff",
                            borderRadius: "16px",
                            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0,0,0,0.03)",
                            border: "1px solid rgba(226, 232, 240, 0.8)",
                            padding: "12px",
                            minWidth: "220px",
                            zIndex: 100,
                          }}
                        >
                          {/* Dropdown bridge to prevent hover loss */}
                          <div style={{ position: "absolute", top: "-12px", left: 0, right: 0, height: "12px" }} />
                          
                          {link.dropdown.map((item, i) => (
                            <a
                              key={i}
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "10px 14px",
                                fontSize: "14.5px",
                                fontWeight: "500",
                                color: "#334155",
                                textDecoration: "none",
                                borderRadius: "10px",
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                                (e.currentTarget as HTMLElement).style.color = "#2563EB";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                                (e.currentTarget as HTMLElement).style.color = "#334155";
                              }}
                            >
                              <div style={{ 
                                background: "#eff6ff", 
                                padding: "6px", 
                                borderRadius: "8px",
                                color: "#2563EB" 
                              }}>
                                <item.icon size={16} />
                              </div>
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <motion.button
                whileHover={{ scale: 1.02, y: -1, boxShadow: "0 12px 24px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "0 4px 14px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "all 0.25s",
                }}
              >
                Get Started
              </motion.button>

              {/* Mobile toggle */}
              <button
                className="lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                {mobileOpen ? (
                  <X size={26} color="#0f172a" />
                ) : (
                  <Menu size={26} color="#0f172a" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#ffffff",
                overflow: "hidden",
                borderTop: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ padding: "16px 24px" }}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        display: "block",
                        padding: "14px 0",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: isActive ? "#1a56db" : "#000000",
                        textDecoration: "none",
                        borderBottom: "1px solid #f1f5f9",
                        transition: "color 0.2s"
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
