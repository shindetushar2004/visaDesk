"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const mainBlog = {
  date: "MAY 15, 2024",
  title: "New Updates to Schengen\nVisa Requirements 2024",
  img: "/blog-1.png",
};

const sideBlogs = [
  {
    date: "MAY 05, 2024",
    title: "How to Prepare for Your Visa Interview",
    img: "/blog-2.png",
  },
  {
    date: "APR 28, 2024",
    title: "Top 7 Countries for International Students",
    img: "/blog-3.png",
  },
];

export default function LatestInsights() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Header */}
      <div
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
          Latest Insights
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
          View All Posts
          <ArrowRight size={16} />
        </motion.a>
      </div>

      <div
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
              Read More <ArrowRight size={15} />
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
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
