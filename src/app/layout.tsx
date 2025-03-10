import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DotAnimation from "@/components/DotAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paper Rings - Learn Languages with Fun",
  description: "A fun and interactive way to learn new languages",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Déterminer le mode initial basé sur l'heure du serveur
  const currentHour = new Date().getHours();
  const initialMode = currentHour >= 6 && currentHour < 18 ? "day" : "night";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white relative`}
      >
        <ThemeProvider initialMode={initialMode}>
          {/* Barre de navigation en premier pour qu'elle soit au-dessus */}
          <Navigation />

          {/* Fond animé avec configuration simplifiée */}
          <AnimatedBackground
            starsCount={200}
            cycleDuration={10}
            forceMode="auto" // Sera contrôlé par le ThemeProvider
          />

          <main className="relative z-10 pt-16 pl-2 pr-2">{children}</main>
          <section className="pb-16">
            <DotAnimation />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
