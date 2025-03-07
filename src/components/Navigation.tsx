"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import ColorfulText from "./ColorfulText";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/flashcard", label: "Cards" },
    { href: "/categories", label: "Categories" },
    { href: "/games", label: "Games" },
    { href: "/about", label: "About" },
  ];

  const colors = ["#ff56ac", "#56ebff", "#a057ff", "#ffa726"];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              <ColorfulText text="PaperRings" className="text-4xl" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-4 rounded-full text-white font-bold border-2 border-black transition-transform hover:scale-105"
                style={{
                  backgroundColor: colors[index % colors.length],
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-[#ff56ac] text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 rounded-full text-white font-bold border-2 border-black text-center mb-2"
                style={{
                  backgroundColor: colors[index % colors.length],
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
