"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const GRID_ROWS = 10;
const GRID_COLS = 10;

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Animate in on page load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse-repel animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const children = Array.from(grid.children) as HTMLElement[];

    children.forEach((dot) => {
      const dotX = dot.offsetLeft + dot.offsetWidth / 2;
      const dotY = dot.offsetTop + dot.offsetHeight / 2;

      const dx = mouseX - dotX;
      const dy = mouseY - dotY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const angle = Math.atan2(dy, dx);
        const offset = (maxDist - dist) * 0.2;

        const x = -Math.cos(angle) * offset;
        const y = -Math.sin(angle) * offset;

        gsap.to(dot, {
          x,
          y,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(dot, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  };

  return (
    <main
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        height: "100vh",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#666666",
      }}
    >
      {/* Left Side */}
      <section style={{ flex: 1, paddingRight: "2rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#00bb77",
            marginBottom: "1rem",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            textDecorationColor: "#00bb77",
          }}
        >
          Get in Touch
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Have questions about our mission, technology, or how to get involved?
          Reach out — we’d love to hear from you.
        </p>

        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ color: "#000000", fontSize: "1.2rem" }}>Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ color: "#000000", fontSize: "1.2rem" }}>Email</h2>
          <p>contact@codethecure.org</p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "1.2rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              backgroundColor: "#00bb77",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div style={{ marginTop: "2rem" }}>
          <h2
            style={{
              color: "#000000",
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
            }}
          >
            Connect with us
          </h2>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="mailto:contact@codethecure.org"
              style={{ color: "#00bb77", fontSize: "1.5rem" }}
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/company/your-org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00bb77", fontSize: "1.5rem" }}
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/codethecure/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00bb77", fontSize: "1.5rem" }}
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Right Side - Repel Grid */}
      <section
        onMouseMove={handleMouseMove}
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
            width: "100%",
            height: "100%",
            gap: "10px",
            padding: "1rem",
          }}
        >
          {Array.from({ length: GRID_ROWS * GRID_COLS }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#80ef80",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
