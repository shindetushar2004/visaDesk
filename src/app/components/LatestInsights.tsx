"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LatestInsights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Insights");
  
  const mainBlog = {
    date: t("date1"),
    title: t("title1"),
    img: "/blog-1.png",
  };

  const sideBlogs = [
    {
      date: t("date2"),
      title: t("title2"),
      img: "/blog-2.png",
    },
    {
      date: t("date3"),
      title: t("title3"),
      img: "/blog-3.png",
    },
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -window.innerWidth : window.innerWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Header */}
      <div
        className="insights-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#0f172a",
            letterSpacing: "-0.5px",
          }}
        >
          {t("title")}
        </h2>
        <motion.a
          href="#"
          whileHover={{ x: 4 }}
          style={{
            fontSize: "14px",
            color: "#1a56db",
            textDecoration: "none",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s ease",
          }}
        >
          {t("viewAll")}
          <ArrowRight size={16} />
        </motion.a>
      </div>

      <div style={{ width: "100%", position: "relative" }}>
        {/* Mobile Left Arrow */}
        <button className="mobile-arrow mobile-arrow-left" onClick={() => scrollCarousel('left')}>
          <ChevronLeft size={24} color="#1a56db" />
        </button>
        {/* Mobile Right Arrow */}
        <button className="mobile-arrow mobile-arrow-right" onClick={() => scrollCarousel('right')}>
          <ChevronRight size={24} color="#1a56db" />
        </button>

        {/* Mobile Carousel (Hidden on Desktop) */}
        <div ref={scrollRef} className="mobile-blog-carousel">
          {[mainBlog, ...sideBlogs].map((blog, i) => (
            <div key={i} className="mobile-blog-card">
              <div className="mobile-blog-img-wrap">
                <img src={blog.img} alt={blog.title} />
              </div>
              <div className="mobile-blog-content">
                <div className="mobile-blog-date">{blog.date}</div>
                <h3 className="mobile-blog-title">{blog.title.replace('\n', ' ')}</h3>
                <div className="mobile-blog-readmore">
                  {t("readMore")} <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div

        className="insights-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "14px",
        }}
      >
        {/* Large Featured Card */}
        <motion.div
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.18)" }}
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            minHeight: "440px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <img
            src={mainBlog.img}
            alt={mainBlog.title}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 55%, transparent 100%)",
            }}
          />
          
          <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "white", padding: "5px 12px", borderRadius: "6px", fontSize: "11px", fontWeight: "800", color: "#0f172a", alignSelf: "flex-start", letterSpacing: "0.5px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
              {mainBlog.date}
            </div>
            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "white", lineHeight: "1.3", whiteSpace: "pre-line", letterSpacing: "-0.3px" }}>
              {mainBlog.title}
            </h3>
            <div style={{ fontSize: "14px", color: "#93c5fd", display: "flex", alignItems: "center", gap: "6px", fontWeight: "700" }}>
              {t("readMore")} <ArrowRight size={15} />
            </div>
          </div>
        </motion.div>

        {/* Stack of Small Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {sideBlogs.map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6, boxShadow: "0 12px 30px rgba(0,0,0,0.08)", borderColor: "#cbd5e1" }}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "16px",
                border: "1px solid #f1f5f9",
                display: "flex",
                gap: "16px",
                alignItems: "center",
                flex: 1,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {/* Image with 14px corner radius */}
              <div style={{ width: "120px", height: "120px", borderRadius: "14px", overflow: "hidden", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: 0 }}>
                {/* Date badge */}
                <div style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "700", color: "#475569", alignSelf: "flex-start", letterSpacing: "0.5px" }}>
                  {blog.date}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", lineHeight: "1.35", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                  {blog.title}
                </h3>
                <div style={{ fontSize: "13px", color: "#1a56db", display: "flex", alignItems: "center", gap: "6px", fontWeight: "700" }}>
                  {t("readMore")} <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mobile-arrow {
          display: none;
        }
        .mobile-blog-carousel {
          display: none;
        }
        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .insights-header { margin-bottom: 20px !important; }
          .insights-grid {
            display: none !important;
          }
          .mobile-blog-carousel {
            display: flex !important;
            flex-direction: row !important;
            width: 100% !important;
            max-width: 100vw !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            scroll-snap-type: x mandatory;
            gap: 16px !important;
            padding: 0 0 16px 0 !important;
            margin: 0 !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-behavior: smooth;
          }
          .mobile-blog-carousel::-webkit-scrollbar {
            display: none;
          }
          .mobile-blog-card {
            flex: 0 0 calc(100% - 32px) !important;
            scroll-snap-align: center;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            border: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            transform: scale(0.95);
            transform-origin: center center;
            box-sizing: border-box !important;
          }
          .mobile-blog-card:first-child {
            margin-left: 16px !important;
          }
          .mobile-blog-card:last-child {
            margin-right: 16px !important;
          }
          .mobile-blog-img-wrap {
            width: 100%;
            aspect-ratio: 16/9;
            overflow: hidden;
          }
          .mobile-blog-img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .mobile-blog-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex: 1;
          }
          .mobile-blog-date {
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            color: #475569;
            align-self: flex-start;
            letter-spacing: 0.5px;
          }
          .mobile-blog-title {
            font-size: 16px;
            font-weight: 700;
            color: #0f172a;
            line-height: 1.35;
          }
          .mobile-blog-readmore {
            font-size: 14px;
            color: #1a56db;
            display: flex;
            align-items: center;
            gap: 6px;
            font-weight: 700;
            margin-top: auto;
            padding-top: 8px;
          }
          .mobile-arrow {
            display: flex !important;
            position: absolute;
            top: calc(50% - 12px);
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            border: 1px solid rgba(255,255,255,0.6);
            z-index: 10;
            cursor: pointer;
            transition: all 0.3s;
          }
          .mobile-arrow:hover {
            background: white;
            box-shadow: 0 6px 20px rgba(26, 86, 219, 0.3);
          }
          .mobile-arrow-left {
            left: 0px !important;
          }
          .mobile-arrow-right {
            right: 0px !important;
          }
        }
      `}</style>
    </div>
    </div>
  );
}
