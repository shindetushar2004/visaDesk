"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageModal() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only show if it hasn't been shown before
    const hasSelected = localStorage.getItem("languageSelected");
    if (!hasSelected) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const handleSelect = (locale: string) => {
    localStorage.setItem("languageSelected", "true");
    setShow(false);
    
    // Switch language by redirecting to the locale prefix path.
    // If the path is /es-en/about, we replace the prefix.
    const newPath = pathname.replace(/^\/[^\/]+/, `/${locale}`);
    router.push(newPath || `/${locale}`);
  };

  const languages = [
    { code: "es-en", name: "Spanish", flag: "🇪🇸" },
    { code: "fr-en", name: "French", flag: "🇫🇷" },
    { code: "ar-en", name: "Arabic", flag: "🇸🇦" }
  ];

  return (
    <div 
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px", color: "#0f172a" }}>
          Select your language
        </h2>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                transition: "transform 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <div 
                style={{ 
                  fontSize: "48px", 
                  width: "70px", 
                  height: "70px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  background: "#f8fafc",
                  borderRadius: "50%",
                  marginBottom: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  border: "1px solid #e2e8f0"
                }}
              >
                {lang.flag}
              </div>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#334155" }}>
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
