"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Code The Cure?",
    answer:
      "Code The Cure is a non-profit tech initiative focused on advancing early cancer diagnosis through machine learning, data science, and open collaboration.",
  },
  {
    question: "How does your technology help with cancer diagnosis?",
    answer:
      "We build AI-powered tools that assist doctors in identifying early signs of cancer from medical data, such as imaging or pathology reports, with improved accuracy and speed.",
  },
  {
    question:
      "Is your platform intended for patients or medical professionals?",
    answer:
      "We build AI-powered tools that assist doctors in identifying early signs of cancer from medical data, such as imaging or pathology reports, with improved accuracy and speed.",
  },
  {
    question: "Are the tools you develop FDA-approved or medically certified?",
    answer:
      "We build AI-powered tools that assist doctors in identifying early signs of cancer from medical data, such as imaging or pathology reports, with improved accuracy and speed.",
  },
  {
    question: "How can I contribute or get involved?",
    answer:
      "You can contribute by donating, volunteering your technical or medical expertise, or partnering with us on research. Visit our Contact page to reach out.",
  },
  {
    question: "Is patient data used, and is it secure?",
    answer:
      "We build AI-powered tools that assist doctors in identifying early signs of cancer from medical data, such as imaging or pathology reports, with improved accuracy and speed.",
  },
];

export default function FAQPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll("h1, h2");

      gsap.from(elements, {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
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
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#00bb77",
          marginBottom: "2rem",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "6px",
          textDecorationColor: "#00bb77",
        }}
      >
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "1rem 0",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              color: "#000000",
              marginBottom: "0.5rem",
            }}
          >
            {faq.question}
          </h2>

          <div
            style={{
              maxHeight: hoveredIndex === index ? "300px" : "0px",
              opacity: hoveredIndex === index ? 1 : 0,
              transform:
                hoveredIndex === index
                  ? "translateY(0px)"
                  : "translateY(-10px)",
              overflow: "hidden",
              transition: "all 0.4s ease",
            }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                color: "#666666",
                paddingTop: "0.3rem",
              }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
