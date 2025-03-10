import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { navLinks, navColors, isActivePath } from "./NavLinks";

interface MobileNavProps {
  pathname: string;
  onClose: () => void;
}

export default function MobileNav({ pathname, onClose }: MobileNavProps) {
  return (
    <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 flex flex-col">
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className={`block py-2 px-4 rounded-full text-white font-bold border-2 border-black text-center mb-2 relative ${
            navColors[index % navColors.length]
          }`}
          style={{
            textShadow:
              "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
          onClick={onClose}
        >
          <div className="flex items-center justify-center">
            <span className="mr-2">{link.icon}</span>
            {link.label}
          </div>
          {isActivePath(link.href, pathname) && (
            <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
          )}
        </Link>
      ))}

      {/* Bouton de thème dans le menu mobile */}
      <div className="mt-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
