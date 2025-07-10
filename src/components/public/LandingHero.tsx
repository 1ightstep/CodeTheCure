"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";

import styles from "./LandingHero.module.css";

//will use gsap for animations later
export default function HomeLanding() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          The <b>cure</b> to cancer-right at your fingertips
        </h1>
        <h3 className={styles.subtitle}>
          A global database propelling cancer research.
        </h3>
      </div>
    </div>
  );
}
