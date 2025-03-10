"use client";

import { useTheme } from "./ThemeProvider";

// Bouton de changement de thème qui respecte le style existant
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

  // Texte à afficher selon le mode
  const getThemeText = () => {
    switch (mode) {
      case "day":
        return "Jour";
      case "night":
        return "Nuit";
      case "auto":
        return "Auto";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-4 rounded-full text-white font-bold border-2 border-black transition-transform hover:scale-105 bg-purple-main"
      style={{
        textShadow:
          "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      {getThemeText()}
    </button>
  );
}
