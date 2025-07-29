"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "../page.module.css";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = containerRef.current?.querySelectorAll("h1, h2, p");

      if (elements) {
        gsap.from(elements, {
          duration: 1,
          y: 30,
          opacity: 0,
          stagger: 0.3,
          ease: "power3.out",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className={styles.container}>
      <h1 className={styles.heading}>Welcome to Code The Cure</h1>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Who We Are -&gt;</h2>
        <p className={styles.paragraph}>
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

      <section className={styles.section}>
        <h2 className={styles.subheading}>What We Do -&gt;</h2>
        <p className={styles.paragraph}>
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

      <section className={styles.section}>
        <h2 className={styles.subheading}>Why It Matters -&gt;</h2>
        <p className={styles.paragraph}>
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
