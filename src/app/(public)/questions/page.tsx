"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "../page.module.css"; // Update path as needed

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
    question: "Is your platform for patients or medical professionals?",
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

  useGSAP(
    () => {
      gsap.from(containerRef.current?.querySelectorAll("h1, h2"), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className={styles.faqContainer}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={styles.faqItem}
        >
          <h2 className={styles.faqQuestion}>{faq.question}</h2>

          <div
            className={`${styles.faqAnswer} ${
              hoveredIndex === index ? styles.faqAnswerVisible : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
