import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Code The Cure</h1>
      <p className={styles.description}>
        Join us in our mission to make a difference through technology.
      </p>
      <div className={styles.grid}>
        <a href="/about" className={styles.card}>
          <h2>About Us &rarr;</h2>
          <p>Learn more about our mission and values.</p>
        </a>
        <a href="/contact" className={styles.card}>
          <h2>Contact Us &rarr;</h2>
          <p>Get in touch with us for any inquiries.</p>
        </a>
      </div>
    </main>
  );
}
