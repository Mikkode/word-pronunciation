"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  Home,
  BookOpen,
  Palette,
  Printer,
  Users,
  Info,
} from "lucide-react";
import ColorfulText from "./ColorfulText";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState("large"); // "large", "medium", "small"
  const pathname = usePathname();

  // Vérifier la taille de l'écran au chargement et lors du redimensionnement
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1143) {
        setScreenSize("large");
      } else if (width >= 640) {
        setScreenSize("medium");
      } else {
        setScreenSize("small");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const links = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/flashcard", label: "Cards", icon: <BookOpen size={20} /> },
    { href: "/craft", label: "Craft", icon: <Palette size={20} /> },
    { href: "/print", label: "Printables", icon: <Printer size={20} /> },
    {
      href: "/resources",
      label: "Parent & Teacher Resources",
      icon: <Users size={20} />,
    },
    { href: "/about", label: "About", icon: <Info size={20} /> },
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
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.navFlex}>
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              <ColorfulText text="PaperRings" className="text-4xl" />
            </Link>
          </div>

          {/* Desktop navigation - visible uniquement sur grands écrans */}
          {screenSize === "large" && (
            <div className="flex space-x-4">
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

              {/* Bouton de thème */}
              <ThemeToggle />
            </div>
          )}

          {/* Navigation pour écrans moyens - affichage avec icônes */}
          {screenSize === "medium" && (
            <div className="flex space-x-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-10 h-10 rounded-full text-white border-2 border-black ${
                    colors[index % colors.length]
                  } relative flex items-center justify-center`}
                  style={{
                    textShadow:
                      "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  {link.icon}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full border-1 border-black animate-pulse"></span>
                  )}
                </Link>
              ))}

              {/* Bouton de thème */}
              <ThemeToggle />
            </div>
          )}

          {/* Bouton de menu pour les très petits écrans */}
          {screenSize === "small" && (
            <div className="flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-[#ff56ac] text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Menu mobile pour les très petits écrans */}
        {screenSize === "small" && isMenuOpen && (
          <div className={styles.mobileMenu}>
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
                <div className="flex items-center justify-center">
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </div>
                {isActive(link.href) && (
                  <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
                )}
              </Link>
            ))}

            {/* Bouton de thème dans le menu mobile */}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
