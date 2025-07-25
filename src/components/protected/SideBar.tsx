"use client";
import styles from "./SideBar.module.css";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logo}>
        <Image
          src="/code-the-cure.png"
          alt="Code The Cure Logo"
          width={60}
          height={60}
        />
      </div>
      <div className={styles.sideBarItemContainer}>
        <Link href="/engine" className={styles.sideBarFeatureItem}>
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link href="/folder" className={styles.sideBarFeatureItem}>
          <FontAwesomeIcon icon={faFolder} />
        </Link>
        <Link href="/account" className={styles.sideBarFeatureItem}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}
