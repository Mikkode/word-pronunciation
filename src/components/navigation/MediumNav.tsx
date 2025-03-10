import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { navLinks, navColors, isActivePath } from "./NavLinks";

interface MediumNavProps {
  pathname: string;
}

export default function MediumNav({ pathname }: MediumNavProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-2">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-10 h-10 rounded-full text-white border-2 border-black ${
              navColors[index % navColors.length]
            } relative flex items-center justify-center`}
            style={{
              textShadow:
                "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            {link.icon}
            {isActivePath(link.href, pathname) && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full border-1 border-black animate-pulse"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Bouton de thème */}
      <ThemeToggle />
    </div>
  );
}
