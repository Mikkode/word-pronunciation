"use client";

import styles from "./AnimatedBackground.module.css";
import { useTheme } from "./ThemeProvider";

// Composant côté serveur qui sera importé par le composant client
export function AnimatedBackgroundServer({
  starsCount = 12,
  cycleDuration = 60,
  mode = "night",
}: {
  starsCount?: number;
  cycleDuration?: number;
  mode: "day" | "night" | "auto";
}) {
  // Générer les étoiles de manière statique
  const stars = Array.from({ length: starsCount }).map((_, i) => {
    const size = (i % 3) + 1.5; // Utilisation d'un modèle déterministe au lieu de Math.random()
    const top = (i * 7.3) % 100;
    const left = (i * 8.7) % 100;
    const animationDelay = (i * 0.4) % 5;
    const opacity = 0.3 + (i % 5) * 0.1;

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

  // Style pour la durée du cycle jour/nuit
  const style = {
    "--cycle-duration": `${cycleDuration}s`,
  } as React.CSSProperties;

  // Déterminer les classes CSS en fonction du mode
  const backgroundClass =
    mode === "auto"
      ? styles.animatedBackground
      : mode === "day"
      ? styles.dayBackground
      : styles.nightBackground;

  return (
    <div className={backgroundClass} style={style}>
      {/* Soleil visible uniquement en mode jour ou auto */}
      {mode !== "night" && <div className={styles.sun}></div>}

      {/* Lune et étoiles visibles uniquement en mode nuit ou auto */}
      {mode !== "day" && (
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

// Composant client qui utilise le composant serveur
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
  const { currentMode } = useTheme();

  // Utiliser le mode forcé s'il est spécifié, sinon utiliser le mode du thème
  const effectiveMode = forceMode === "auto" ? currentMode : forceMode;

  return (
    <AnimatedBackgroundServer
      starsCount={starsCount}
      cycleDuration={cycleDuration}
      mode={effectiveMode}
    />
  );
}
