import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.navBarContainer}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/code-the-cure.png"
                alt="Code The Cure Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/contact">About</Link>
              </li>
              <li>
                <Link href="/about">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.authButtons}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.signupButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
