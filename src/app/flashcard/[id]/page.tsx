"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";
import FlashCardGrid from "@/components/FlashCardGrid";
import FlashCardModeSelector from "@/components/FlashCardModeSelector";
import { getWordsByCategory } from "@/data";
import { categories } from "@/data";
import { CardMode } from "@/components/FlashCard";
import styles from "./timer.module.css";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const [flashcardMode, setFlashcardMode] =
    useState<CardMode>("image-to-sound");

  // Utiliser useRef pour stocker le timer sans déclencher de re-render
  const timerRef = useRef({ hours: 0, minutes: 0, seconds: 0 });
  const timerDisplayRef = useRef<HTMLDivElement>(null);

  // Format timer display with leading zeros
  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  // Timer logic
  useEffect(() => {
    const updateTimerDisplay = () => {
      if (timerDisplayRef.current) {
        const { hours, minutes, seconds } = timerRef.current;
        timerDisplayRef.current.textContent = `${formatTime(
          hours
        )}:${formatTime(minutes)}:${formatTime(seconds)}`;
      }
    };

    const interval = setInterval(() => {
      const { seconds, minutes, hours } = timerRef.current;

      const newSeconds = seconds + 1;
      const newMinutes = minutes + Math.floor(newSeconds / 60);
      const newHours = hours + Math.floor(newMinutes / 60);

      timerRef.current = {
        hours: newHours % 24,
        minutes: newMinutes % 60,
        seconds: newSeconds % 60,
      };

      updateTimerDisplay();
    }, 1000);

    // Initialiser l'affichage
    updateTimerDisplay();

    return () => clearInterval(interval);
  }, []);

  const wordsForCategory = getWordsByCategory(id);

  // Trouver la catégorie actuelle pour obtenir son purpose
  const currentCategory = categories.find((cat) => cat.id === id);

  const handleBackClick = () => {
    router.push("/flashcard");
  };

  const handleModeChange = (mode: CardMode) => {
    setFlashcardMode(mode);
  };

  // Fonction pour formater le nom de la catégorie
  const formatCategoryName = (id: string) => {
    // Convertir strokes-lines en Strokes & Lines
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" & ");
  };

  return (
    <div className="max-w-4xl mx-auto font-kg-red-hands">
      <ColorfulText
        text="Flip Cards"
        className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center "
      />

      {/* Timer flottant */}
      <div className={styles.floatingTimer}>
        <div className={styles.timerInner}>
          <div className={styles.timerDigits} ref={timerDisplayRef}>
            00:00:00
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-md mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleBackClick}
              className="bg-[#ff56ac] hover:bg-[#ff3d9a] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow transition-all cursor-pointer"
              aria-label="Back to categories"
            >
              ←
            </button>

            <h2 className="text-xl font-bold bg-gradient-to-r from-[#a057ff] to-[#8a4bff] text-transparent bg-clip-text">
              {currentCategory?.name || formatCategoryName(id)}
            </h2>
          </div>

          <FlashCardModeSelector
            currentMode={flashcardMode}
            onModeChange={handleModeChange}
          />
        </div>

        {currentCategory?.purpose && (
          <div className="mt-3 bg-gradient-to-r from-[#f0f9ff] to-[#e6f7ff] border-l-4 border-[#56ebff] p-3 rounded-md text-sm text-gray-700">
            <h3 className="font-bold text-[#0088cc] mb-1">Purpose:</h3>
            <p>{currentCategory.purpose}</p>
          </div>
        )}
      </div>

      {wordsForCategory.length > 0 ? (
        <Content>
          <FlashCardGrid words={wordsForCategory} mode={flashcardMode} />
        </Content>
      ) : (
        <Content className="text-center">
          <h3 className="text-xl font-bold text-[#a057ff]">
            No cards found for this category
          </h3>
          <p className="text-gray-600 mt-2">Please try another category</p>
        </Content>
      )}
    </div>
  );
}
