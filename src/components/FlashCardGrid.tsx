"use client";

import { useState, useEffect } from "react";
import FlashCard, { CardMode } from "./FlashCard";
import { Word } from "@/types";

type FlashCardGridProps = {
  words: Word[];
  mode: CardMode;
};

export default function FlashCardGrid({ words, mode }: FlashCardGridProps) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Réinitialiser la carte sélectionnée quand les mots changent
  useEffect(() => {
    setSelectedCardId(null);
  }, [words]);

  // Couleurs disponibles pour la rotation
  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];

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
    <div className="w-full">
      {/* Grille de cartes avec espacement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11">
        {words.map((word, index) => (
          <div key={word.id} className="w-full aspect-square">
            <FlashCard
              image={word.image}
              text={word.text}
              title={word.text}
              mode={mode}
              lang={word.lang}
              isActive={word.id === selectedCardId}
              className="h-full w-full"
              color1={colors[index % colors.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
