import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { navLinks, navColors, isActivePath } from "./NavLinks";

interface DesktopNavProps {
  pathname: string;
}

export default function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex space-x-4">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`py-2 px-4 rounded-full text-white font-bold border-2 border-black transition-transform hover:scale-105 ${
              navColors[index % navColors.length]
            } relative flex items-center justify-center`}
            style={{
              textShadow:
                "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            {link.label}
            {isActivePath(link.href, pathname) && (
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Bouton de thème */}
      <ThemeToggle />
    </div>
  );
}
