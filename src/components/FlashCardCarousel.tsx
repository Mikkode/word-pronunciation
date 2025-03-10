"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FlashCard, { CardMode } from "./FlashCard";
import { Word } from "@/types";

type FlashCardCarouselProps = {
  words: Word[];
  mode: CardMode;
};

export default function FlashCardCarousel({
  words,
  mode,
}: FlashCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);

  // Couleurs disponibles pour la rotation
  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];

  // Gestion du défilement tactile pour le carrousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

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
      if (diff < -50 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
      // Swipe à gauche (suivant)
      else if (diff > 50 && currentIndex < words.length - 1) {
        setCurrentIndex(currentIndex + 1);
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
  }, [currentIndex, words.length]);

  const goToPrevious = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? words.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastCard = currentIndex === words.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!words || words.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl border-4 border-pink-main shadow-lg">
          <h3 className="text-xl font-bold text-center text-gray-700">
            No cards available for this category
          </h3>
          <p className="text-center text-gray-500 mt-2">
            Try selecting a different category
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      ref={carouselRef}
    >
      <div className="w-full max-w-md aspect-square mx-auto mb-6">
        <FlashCard
          image={words[currentIndex].image}
          text={words[currentIndex].text}
          title={words[currentIndex].text}
          mode={mode}
          lang={words[currentIndex].lang}
          color1={colors[currentIndex % colors.length]}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center w-full max-w-md px-4">
        <button
          onClick={goToPrevious}
          className="bg-pink-main hover:bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 border-black transform transition-transform hover:scale-110 cursor-pointer"
          aria-label="Previous card"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="text-center font-bold text-[#6454f0]">
          {currentIndex + 1} / {words.length}
        </div>

        <button
          onClick={goToNext}
          className="bg-pink-main hover:bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 border-black transform transition-transform hover:scale-110 cursor-pointer"
          aria-label="Next card"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
