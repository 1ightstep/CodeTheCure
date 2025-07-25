"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll("h1, h2, p");

      gsap.from(elements, {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      style={{
        maxWidth: 800,
        margin: "3rem auto",
        padding: "0 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#666666", // gray text
      }}
    >
      {/* Main heading */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#00bb77",
          userSelect: "none",
          fontWeight: "700",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "6px",
          textDecorationColor: "#00bb77", // underline
        }}
      >
        Welcome to Code The Cure
      </h1>

      {/* Who We Are */}
      <section style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "0.75rem",
            color: "#000000", // black subheading
            userSelect: "none",
            fontWeight: "600",
          }}
        >
          Who We Are -{">"}
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          We are a passionate collective of developers, researchers, and
          change-makers united by a common goal: to revolutionize cancer
          diagnosis through cutting-edge technology. Our team combines expertise
          in programming, biomedical research, and clinical practice to deliver
          innovative solutions that make a real difference in patients’ lives.
          At Code The Cure, collaboration and compassion drive every step we
          take toward a future with earlier detection and better treatment
          outcomes.
        </p>
      </section>

      {/* What We Do */}
      <section style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "0.75rem",
            color: "#000000",
            userSelect: "none",
            fontWeight: "600",
          }}
        >
          What We Do -{">"}
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          Leveraging state-of-the-art AI algorithms and comprehensive data
          analysis, we develop powerful diagnostic tools that assist medical
          professionals in detecting cancer at its earliest stages. Our
          solutions integrate seamlessly with clinical workflows, enhancing
          accuracy and speed while reducing the burden on healthcare providers.
          Through continuous research and technological advancement, we aim to
          empower people worldwide with tools that translate complex data into
          actionable insights, ultimately saving lives.
        </p>
      </section>

      {/* Why It Matters */}
      <section>
        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "0.75rem",
            color: "#000000",
            userSelect: "none",
            fontWeight: "600",
          }}
        >
          Why It Matters -{">"}
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          Cancer remains one of the leading causes of death globally, but early
          detection can dramatically improve survival rates and quality of life.
          By advancing diagnostic technology, Code The Cure plays a critical
          role in this fight. Our innovations help identify cancer sooner,
          allowing for timely treatment and better patient outcomes. Beyond
          saving lives, our work contributes to ongoing research and opens new
          pathways for understanding this complex disease.
        </p>
      </section>
    </main>
  );
}
