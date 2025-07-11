import "@/styles/globals.css";
import { geistSans, geistMono } from "@/lib/fonts";
import { Metadata } from "next";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
