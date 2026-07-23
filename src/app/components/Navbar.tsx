"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
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
  MapPin,
} from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("home"), href: "#hero" },
    {
      label: t("whoWeAre"),
      href: "#who-we-are",
      dropdown: [
        { label: t("aboutUs"), icon: Users },
        { label: t("ourTeam"), icon: Users },
        { label: t("missionVision"), icon: Target },
      ],
    },
    {
      label: t("services"),
      href: "#services",
      dropdown: [
        { label: t("touristVisa"), icon: Plane },
        { label: t("businessVisa"), icon: Briefcase },
        { label: t("studentVisa"), icon: GraduationCap },
        { label: t("workVisa"), icon: Building },
      ],
    },
    {
      label: t("countries"),
      href: "#countries",
      dropdown: [
        { label: t("usa"), icon: MapPin },
        { label: t("canada"), icon: MapPin },
        { label: t("uk"), icon: MapPin },
        { label: t("australia"), icon: MapPin },
        { label: t("germany"), icon: MapPin },
      ],
    },
    { label: t("process"), href: "#process" },
    { label: t("blog"), href: "#blog" },
    { label: t("contact"), href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  const locales = [
    { code: "en", label: "EN", full: "English" },
    { code: "es-en", label: "ES", full: "Spanish" },
    { code: "fr-en", label: "FR", full: "French" },
    { code: "ar-en", label: "AR", full: "Arabic" },
  ];
  const currentLocaleObj = locales.find((l) => l.code === locale) || locales[0];

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) setMobileOpen(false);
        if (langOpen) setLangOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, langOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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
          behavior: "smooth",
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
        @media (max-width: 768px) {
          .get-started-btn {
            padding: 8px 14px !important;
            font-size: 13px !important;
            border-radius: 8px !important;
          }
          .mobile-logo-img {
            height: 40px !important;
          }
          .mobile-logo-text {
            font-size: 20px !important;
          }
          .mobile-logo-sub {
            font-size: 8.5px !important;
          }
          .navbar-actions {
            gap: 10px !important;
          }
          .navbar-logo-container {
            gap: 8px !important;
          }
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
          borderBottom: scrolled
            ? "1px solid rgba(226, 232, 240, 0.8)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.04)" : "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Subtle bottom gradient line on scroll */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: scrolled
              ? "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent)"
              : "transparent",
            transition: "opacity 0.3s",
          }}
        />

        <div className="container-custom">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Logo */}
            <div
              className="navbar-logo-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
              onClick={(e) => handleNavClick(e as any, "#hero")}
            >
              <img
                src="/logo.png"
                alt=""
                className="mobile-logo-img"
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="mobile-logo-text"
                  style={{
                    fontWeight: "800",
                    fontSize: "24px",
                    color: "#1e3a8a",
                    lineHeight: "1",
                    letterSpacing: "-0.5px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  VisaDesk
                </div>
                <div
                  className="mobile-logo-sub"
                  style={{
                    fontSize: "10px",
                    color: "#3b82f6",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    marginTop: "4px",
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
                        <ChevronDown
                          size={14}
                          style={{ opacity: 0.7, marginTop: "1px" }}
                        />
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
                            boxShadow:
                              "0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0,0,0,0.03)",
                            border: "1px solid rgba(226, 232, 240, 0.8)",
                            padding: "12px",
                            minWidth: "220px",
                            zIndex: 100,
                          }}
                        >
                          {/* Dropdown bridge to prevent hover loss */}
                          <div
                            style={{
                              position: "absolute",
                              top: "-12px",
                              left: 0,
                              right: 0,
                              height: "12px",
                            }}
                          />

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
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background = "#f8fafc";
                                (e.currentTarget as HTMLElement).style.color =
                                  "#2563EB";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLElement
                                ).style.background = "transparent";
                                (e.currentTarget as HTMLElement).style.color =
                                  "#334155";
                              }}
                            >
                              <div
                                style={{
                                  background: "#eff6ff",
                                  padding: "6px",
                                  borderRadius: "8px",
                                  color: "#2563EB",
                                }}
                              >
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

            {/* CTA Button & Language Switcher */}
            <div
              className="navbar-actions"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div
                className="language-switcher"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  position: "relative",
                }}
              >
                <Globe size={18} color="#64748b" />
                <div
                  onClick={() => setLangOpen(!langOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#334155",
                    cursor: "pointer",
                  }}
                >
                  {currentLocaleObj.label} <ChevronDown size={14} />
                </div>

                <AnimatePresence>
                  {langOpen && (
                    <>
                      <div
                        style={{ position: "fixed", inset: 0, zIndex: 90 }}
                        onClick={() => setLangOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 12px)",
                          right: "-10px",
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                          width: "140px",
                          zIndex: 100,
                          display: "flex",
                          flexDirection: "column",
                          padding: "6px",
                          gap: "4px",
                        }}
                      >
                        {locales.map((l) => (
                          <div
                            key={l.code}
                            onClick={() => {
                              router.replace(pathname, { locale: l.code });
                              setLangOpen(false);
                            }}
                            style={{
                              padding: "6px 8px",
                              fontSize: "12px",
                              fontWeight: "500",
                              color: locale === l.code ? "#1a56db" : "#475569",
                              background:
                                locale === l.code ? "#f1f5f9" : "transparent",
                              cursor: "pointer",
                              borderRadius: "6px",
                              transition: "all 0.2s",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                            onMouseEnter={(e) => {
                              if (locale !== l.code)
                                e.currentTarget.style.background = "#f8fafc";
                            }}
                            onMouseLeave={(e) => {
                              if (locale !== l.code)
                                e.currentTarget.style.background =
                                  "transparent";
                            }}
                          >
                            {l.full}
                            {locale === l.code && (
                              <div
                                style={{
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  background: "#1a56db",
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -1,
                  boxShadow: "0 12px 24px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="get-started-btn"
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
                  boxShadow:
                    "0 4px 14px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "all 0.25s",
                }}
              >
                {t("getStarted")}
              </motion.button>

              {/* Mobile toggle */}
              <button
                className="flex items-center justify-center lg:hidden"
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
      </motion.nav>

      {/* Mobile Menu Overlay (Outside Navbar, Lower z-index) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.4)",
              backdropFilter: "blur(4px)",
              zIndex: 40,
            }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in Mobile Menu (Outside Navbar, Lower z-index) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              background: "#ffffff",
              zIndex: 45,
              boxShadow: "-10px 0 25px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              paddingTop: scrolled ? "76px" : "86px", // Clear the navbar height
              transition: "padding-top 0.3s",
            }}
          >
            <div
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                overflowY: "auto",
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      display: "block",
                      padding: "16px 0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: isActive ? "#1a56db" : "#0f172a",
                      textDecoration: "none",
                      borderBottom: "1px solid #f8fafc",
                      transition: "color 0.2s",
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
    </>
  );
}
