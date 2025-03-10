"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeMode = "day" | "night" | "auto";

interface ThemeContextType {
  mode: ThemeMode;
  currentMode: "day" | "night"; // Le mode effectif (après résolution de "auto")
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  initialMode?: "day" | "night";
}

export default function ThemeProvider({
  children,
  initialMode = "night",
}: ThemeProviderProps) {
  // Récupérer le mode depuis localStorage si disponible
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [currentMode, setCurrentMode] = useState<"day" | "night">(initialMode);

  // Effet pour charger la préférence de l'utilisateur depuis localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Effet pour mettre à jour le mode effectif
  useEffect(() => {
    if (mode === "auto") {
      // En mode auto, déterminer le mode basé sur l'heure
      const currentHour = new Date().getHours();
      setCurrentMode(currentHour >= 6 && currentHour < 18 ? "day" : "night");

      // Mettre en place un intervalle pour vérifier l'heure régulièrement
      const interval = setInterval(() => {
        const hour = new Date().getHours();
        setCurrentMode(hour >= 6 && hour < 18 ? "day" : "night");
      }, 60000); // Vérifier chaque minute

      return () => clearInterval(interval);
    } else {
      // En mode manuel, utiliser le mode sélectionné
      setCurrentMode(mode);
    }
  }, [mode]);

  // Effet pour sauvegarder la préférence de l'utilisateur
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  // Appliquer la classe au body pour le mode sombre
  useEffect(() => {
    if (currentMode === "night") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentMode]);

  const value = {
    mode,
    currentMode,
    setMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
