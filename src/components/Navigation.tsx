"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import DesktopNav from "@/components/navigation/DesktopNav";
import MediumNav from "@/components/navigation/MediumNav";
import MobileNav from "@/components/navigation/MobileNav";
import ColorfulText from "./ColorfulText";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl">
              <ColorfulText text="PaperRings" className="text-4xl" />
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
