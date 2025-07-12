"use client";
import styles from "./page.module.css";
import { useState } from "react";
import SearchBar from "@/components/protected/SearchBar";
import SideBar from "@/components/protected/SideBar";

export default function App() {
  function handleSearch(query: string) {
    if (!query.trim()) return;
    console.log("Search query:", query);
  }

  return (
    <div className={styles.app}>
      <SideBar />
      <div className={styles.appContainer}>
        <h2>Your cancer research journey begins here.</h2>
        <SearchBar
          onSearch={handleSearch}
          width="100%"
          height="auto"
          placeholder="Search cancer studies, treatments, and symptoms"
        />
      </div>
    </div>
  );
}
