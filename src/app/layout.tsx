import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import DotAnimation from "@/components/DotAnimation";

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
    // <html lang="en" className={`${kgHappy.variable}`}>
    <html lang="en">
      <body
        className={`${inter.className} bg-[#56ebff]/30 min-h-screen relative`}
      >
        {/* Barre de navigation en premier pour qu'elle soit au-dessus */}
        <Navigation />

        <main className="relative z-10 pt-16 pl-2 pr-2">{children}</main>
        <section className="pb-16">
          <DotAnimation />
        </section>
      </body>
    </html>
  );
}
