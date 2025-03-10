"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, SunMoon } from "lucide-react";

// Bouton de changement de thème avec un style distinctif
export default function ThemeToggle() {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    if (mode === "day") {
      setMode("night");
    } else if (mode === "night") {
      setMode("auto");
    } else {
      setMode("day");
    }
  };

  // Déterminer l'icône à afficher selon le mode
  const getThemeIcon = () => {
    switch (mode) {
      case "day":
        return <Sun size={18} />;
      case "night":
        return <Moon size={18} />;
      case "auto":
        return <SunMoon size={18} />;
    }
  };

  // Texte à afficher selon le mode
  const getThemeText = () => {
    switch (mode) {
      case "day":
        return "Day";
      case "night":
        return "Night";
      case "auto":
        return "Auto";
    }
  };

  // Couleur de fond selon le mode
  const getBackgroundColor = () => {
    switch (mode) {
      case "day":
        return "bg-gradient-to-r from-yellow-400 to-orange-400";
      case "night":
        return "bg-gradient-to-r from-indigo-700 to-purple-700";
      case "auto":
        return "bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-700";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`py-2 px-4 rounded-full text-white font-bold border-2 border-black transition-all hover:scale-105 relative flex items-center gap-2 cursor-pointer ${getBackgroundColor()}`}
      style={{
        textShadow:
          "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      {getThemeIcon()}
      {getThemeText()}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-black animate-pulse"></span>
    </button>
  );
}
