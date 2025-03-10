"use client";

import styles from "./AnimatedBackground.module.css";
import { useMemo } from "react";
import { useTheme } from "./ThemeProvider";

type AnimatedBackgroundProps = {
  starsCount?: number;
  cycleDuration?: number;
  forceMode?: "day" | "night" | "auto";
};

export default function AnimatedBackground({
  starsCount = 12,
  cycleDuration = 60,
  forceMode = "auto",
}: AnimatedBackgroundProps) {
  // Utiliser le contexte de thème
  let { currentMode } = { currentMode: "night" };
  const themeContext = useTheme();
  currentMode = themeContext.currentMode;

  // Utiliser le mode forcé s'il est spécifié, sinon utiliser le mode du thème
  const effectiveMode = forceMode === "auto" ? currentMode : forceMode;

  // Générer les étoiles dynamiquement avec des propriétés aléatoires
  const stars = useMemo(() => {
    return Array.from({ length: starsCount }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 5;
      const opacity = Math.random() * 0.5 + 0.3;

      return (
        <div
          key={i}
          className={styles.star}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${animationDelay}s`,
            opacity,
          }}
        />
      );
    });
  }, [starsCount]);

  // Style pour la durée du cycle jour/nuit
  const style = {
    "--cycle-duration": `${cycleDuration}s`,
  } as React.CSSProperties;

  // Déterminer les classes CSS en fonction du mode effectif
  const backgroundClass =
    effectiveMode === "auto"
      ? styles.animatedBackground
      : effectiveMode === "day"
      ? styles.dayBackground
      : styles.nightBackground;

  return (
    <div className={backgroundClass} style={style}>
      {/* Soleil visible uniquement en mode jour ou auto */}
      {effectiveMode !== "night" && <div className={styles.sun}></div>}

      {/* Lune et étoiles visibles uniquement en mode nuit ou auto */}
      {effectiveMode !== "day" && (
        <>
          <div className={styles.moon}></div>
          {stars}
        </>
      )}

      {/* Nuages visibles dans tous les modes */}
      <div className={`${styles.cloud} ${styles.cloud1}`}></div>
      <div className={`${styles.cloud} ${styles.cloud2}`}></div>
      <div className={`${styles.cloud} ${styles.cloud3}`}></div>
      <div className={`${styles.cloud} ${styles.cloud4}`}></div>
      <div className={`${styles.cloud} ${styles.cloud5}`}></div>
    </div>
  );
}
