import styles from "./page.module.css";
import LandingHero from "@/components/public/LandingHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingHero></LandingHero>
    </main>
  );
}
