"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import DesktopNav from "@/components/navigation/DesktopNav";
import MediumNav from "@/components/navigation/MediumNav";
import MobileNav from "@/components/navigation/MobileNav";
import ColorfulText from "./ColorfulText";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/50 dark:bg-gray-900 shadow-md sticky top-0 z-50 p-1">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              <Image
                src="/logo-text.svg"
                alt="Paper Rings"
                width={150}
                height={10}
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation - visible uniquement sur grands écrans */}
          <div className="hidden lg:block">
            <DesktopNav pathname={pathname} />
          </div>

          {/* Navigation pour écrans moyens - affichage avec icônes */}
          <div className="hidden sm:block lg:hidden">
            <MediumNav pathname={pathname} />
          </div>

          {/* Bouton de menu pour les très petits écrans */}
          <div className="sm:hidden">
            <div className="flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-[#ff56ac] text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile pour les très petits écrans */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <MobileNav
              pathname={pathname}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
