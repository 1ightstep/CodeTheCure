"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../page.module.css"; // adjust path if needed

const GRID_ROWS = 10;
const GRID_COLS = 10;

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

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

        gsap.to(dot, { x, y, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(dot, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
      }
    });
  };

  return (
    <main ref={containerRef} className={styles.contactContainer}>
      {/* Left */}
      <section className={styles.contactLeft}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.paragraph}>
          Have questions about our mission, technology, or how to get involved?
          Reach out — we’d love to hear from you.
        </p>

        <div className={styles.infoBlock}>
          <h2 className={styles.subheading}>Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>

        <div className={styles.infoBlock}>
          <h2 className={styles.subheading}>Email</h2>
          <p>contact@codethecure.org</p>
        </div>

        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        <div className={styles.socialSection}>
          <h2 className={styles.subheading}>Connect with us</h2>
          <div className={styles.socialIcons}>
            <a href="mailto:contact@codethecure.org" title="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/company/your-org"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/codethecure/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Right */}
      <section onMouseMove={handleMouseMove} className={styles.contactRight}>
        <div ref={gridRef} className={styles.grid}>
          {Array.from({ length: GRID_ROWS * GRID_COLS }).map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
      </section>
    </main>
  );
}
