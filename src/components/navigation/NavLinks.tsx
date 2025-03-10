import { Home, BookOpen, Palette, Printer, Info } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/flashcard", label: "Cards", icon: <BookOpen size={20} /> },
  { href: "/craft", label: "Craft", icon: <Palette size={20} /> },
  { href: "/print", label: "Printables", icon: <Printer size={20} /> },
  { href: "/about", label: "About", icon: <Info size={20} /> },
];

export const navColors = [
  "bg-pink-main",
  "bg-blue-main",
  "bg-purple-main",
  "bg-orange-main",
];

export const isActivePath = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};
