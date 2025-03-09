import styles from "./AnimatedBackground.module.css";
import { useMemo } from "react";

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
  // Générer les étoiles dynamiquement avec des propriétés aléatoires
  const stars = useMemo(() => {
    return Array.from({ length: starsCount }, (_, i) => {
      // Générer des positions et délais aléatoires pour chaque étoile
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 3;
      const randomSize =
        Math.random() > 0.7 ? Math.random() * 3 + 3 : Math.random() * 2 + 2;

      // Style inline pour chaque étoile
      const starStyle = {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        animationDelay: `${randomDelay}s`,
      };

      return <div key={i} className={styles.star} style={starStyle}></div>;
    });
  }, [starsCount]);

  // Générer des positions de départ aléatoires pour les nuages
  const cloudPositions = useMemo(() => {
    return {
      cloud1: {
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 30}s`,
      },
      cloud2: {
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 45}s`,
      },
      cloud3: {
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 38}s`,
      },
      cloud4: {
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 50}s`,
      },
      cloud5: {
        left: `${Math.random() * 100}%`,
        animationDelay: `-${Math.random() * 35}s`,
      },
    };
  }, []);

  // Déterminer les classes CSS en fonction du mode forcé
  const backgroundClass =
    forceMode === "auto"
      ? styles.animatedBackground
      : forceMode === "day"
      ? styles.dayBackground
      : styles.nightBackground;

  // Appliquer les variables CSS personnalisées
  const style = {
    "--cycle-duration": `${cycleDuration}s`,
  } as React.CSSProperties;

  return (
    <div className={backgroundClass} style={style}>
      {/* Soleil visible uniquement en mode jour ou auto */}
      {forceMode !== "night" && <div className={styles.sun}></div>}

      {/* Lune et étoiles visibles uniquement en mode nuit ou auto */}
      {forceMode !== "day" && (
        <>
          <div className={styles.moon}></div>
          <div className={styles.stars}>{stars}</div>
        </>
      )}

      {/* Nuages visibles dans tous les modes avec positions aléatoires */}
      <div className={styles.cloud1} style={cloudPositions.cloud1}></div>
      <div className={styles.cloud2} style={cloudPositions.cloud2}></div>
      <div className={styles.cloud3} style={cloudPositions.cloud3}></div>
      <div className={styles.cloud4} style={cloudPositions.cloud4}></div>
      <div className={styles.cloud5} style={cloudPositions.cloud5}></div>
    </div>
  );
}
