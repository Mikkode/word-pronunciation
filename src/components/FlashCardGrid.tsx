"use client";

import { useState, useRef, useEffect } from "react";
import FlashCard, { CardMode } from "./FlashCard";
import { Word } from "@/types";
import styles from "./FlashCardGrid.module.css";

type ViewMode = "grid" | "carousel";

type FlashCardGridProps = {
  words: Word[];
  mode: CardMode;
};

export default function FlashCardGrid({ words, mode }: FlashCardGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);

  // Couleurs pour les cartes
  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];

  // Gestion du défilement tactile pour le carrousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || viewMode !== "carousel") return;

    const handleTouchStart = (e: TouchEvent) => {
      startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (startXRef.current === null) return;

      const touchX = e.touches[0].clientX;
      const diff = startXRef.current - touchX;

      // Empêcher le défilement de la page pendant le swipe
      if (Math.abs(diff) > 5) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startXRef.current === null) return;

      const touchX = e.changedTouches[0].clientX;
      const diff = startXRef.current - touchX;

      // Swipe à droite (précédent)
      if (diff < -50 && currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
      // Swipe à gauche (suivant)
      else if (diff > 50 && currentCardIndex < words.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }

      startXRef.current = null;
    };

    carousel.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [viewMode, currentCardIndex, words.length]);

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleNextCard = () => {
    if (currentCardIndex < words.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "carousel" : "grid");
    // Réinitialiser l'index quand on passe en mode carrousel
    if (viewMode === "grid") {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#6454f0]">
          {words.length} cartes
        </h2>

        <button
          onClick={toggleViewMode}
          className="bg-[#6ee2f5] hover:bg-[#4ad8f0] text-white px-4 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          {viewMode === "grid" ? (
            <>
              <span>Mode Carrousel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
                <path d="M16 3l-4 4-4-4"></path>
                <path d="M16 21l-4-4-4 4"></path>
              </svg>
            </>
          ) : (
            <>
              <span>Mode Grille</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </>
          )}
        </button>
      </div>

      {viewMode === "grid" ? (
        // Mode grille (existant)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {words.map((word, index) => (
            <FlashCard
              key={word.id}
              image={word.image}
              title={word.text}
              text={word.text}
              mode={mode}
              color1={colors[index % colors.length]}
              color2="bg-white"
            />
          ))}
        </div>
      ) : (
        // Mode carrousel (nouveau)
        <div className={styles.carouselContainer} ref={carouselRef}>
          <div className="relative mx-auto">
            {/* Carte actuelle */}
            <div className={styles.carouselCardContainer}>
              <FlashCard
                image={words[currentCardIndex].image}
                title={words[currentCardIndex].text}
                text={words[currentCardIndex].text}
                mode={mode}
                color1={colors[currentCardIndex % colors.length]}
                color2="bg-white"
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevCard}
                disabled={currentCardIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
                  styles.navButton
                } ${
                  currentCardIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#ff56ac] hover:bg-[#ff3d9a] text-white cursor-pointer"
                }`}
                aria-label="Carte précédente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="text-center font-bold text-[#6454f0]">
                {currentCardIndex + 1} / {words.length}
              </div>

              <button
                onClick={handleNextCard}
                disabled={currentCardIndex === words.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
                  styles.navButton
                } ${
                  currentCardIndex === words.length - 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#ff56ac] hover:bg-[#ff3d9a] text-white cursor-pointer"
                }`}
                aria-label="Carte suivante"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Instructions de swipe */}
            <div
              className={`text-center text-gray-500 text-sm mt-2 ${styles.swipeInstruction}`}
            >
              Glissez vers la gauche ou la droite pour naviguer
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
