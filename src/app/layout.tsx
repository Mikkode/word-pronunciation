import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DotAnimation from "@/components/DotAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";

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

        {/* Fond animé avec configuration simplifiée */}
        <AnimatedBackground
          starsCount={200}
          cycleDuration={10}
          forceMode="day" // Peut être "day", "night" ou "auto"
        />

        <main className="relative z-10 pt-16 pl-2 pr-2">{children}</main>
        <section className="pb-16">
          <DotAnimation />
        </section>
      </body>
    </html>
  );
}
