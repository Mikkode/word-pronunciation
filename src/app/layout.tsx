import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DotAnimation from "@/components/DotAnimation";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WordNest - Learn Languages with Fun",
  description: "A fun and interactive way to learn new languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white relative`}
      >
        {/* Barre de navigation en premier pour qu'elle soit au-dessus */}
        <Navigation />

        {/* Ajout du fond animé */}
        <div className={styles.animatedBackground}>
          <div className={styles.sun}></div>
          <div className={styles.moon}></div>
          <div className={styles.stars}>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
            <div className={styles.star}></div>
          </div>
          <div className={styles.cloud1}></div>
          <div className={styles.cloud2}></div>
          <div className={styles.cloud3}></div>
        </div>

        <main className="relative z-10 pt-16 pl-2 pr-2">{children}</main>
        <section className="pb-16">
          <DotAnimation />
        </section>
      </body>
    </html>
  );
}
