import "@/styles/globals.css";
import SideBar from "@/components/protected/SideBar";
import { geistSans, geistMono } from "@/app/ui/fonts";
import { Metadata } from "next";
import styles from "./layout.module.css";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div className={styles.appContainer}>
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
