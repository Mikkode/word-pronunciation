"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import ColorfulText from "./ColorfulText";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/flashcard", label: "Cards" },
    { href: "/craft", label: "Craft" },
    { href: "/print", label: "Printables" },
    { href: "/resources", label: "Parent & Teacher Resources" },
    { href: "/about", label: "About" },
  ];

  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50 font-kg-red-hands">
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
                className={`py-2 px-4 rounded-full text-white font-bold border-2 border-black transition-transform hover:scale-105 ${
                  colors[index % colors.length]
                } relative`}
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
                )}
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
                className={`block py-2 px-4 rounded-full text-white font-bold border-2 border-black text-center mb-2 relative ${
                  colors[index % colors.length]
                }`}
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
