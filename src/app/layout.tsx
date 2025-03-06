import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModernNavigation from "@/components/ModernNavigation";
import { categories } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0f4ff"
};

export const metadata: Metadata = {
  title: "English Pronunciation - Learn Everyday Objects & Animals",
  description: "Interactive app to learn English pronunciation of everyday objects and animals. Click on images to hear correct pronunciation.",
  keywords: "english pronunciation, language learning, vocabulary, animals, objects, speech synthesis",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "English Pronunciation - Learn Everyday Objects & Animals",
    description: "Interactive app to learn English pronunciation of everyday objects and animals",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Pronunciation - Learn Everyday Objects & Animals",
    description: "Interactive app to learn English pronunciation of everyday objects and animals",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
          <ModernNavigation categories={categories} />
          {children}
        </div>
      </body>
    </html>
  );
}
