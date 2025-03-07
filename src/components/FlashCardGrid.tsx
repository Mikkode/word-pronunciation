"use client";

import FlashCard, { FlashCardMode } from "./FlashCard";
import { Word } from "@/types";

interface FlashCardGridProps {
  words: Word[];
  mode: FlashCardMode;
  borderColor?: string;
}

export default function FlashCardGrid({ words, mode }: FlashCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {words.map((word) => (
        <div
          key={word.id}
          className="rounded-xl overflow-hidden transform transition-transform hover:scale-105 shadow-lg cursor-pointer"
        >
          <FlashCard
            id={word.id}
            text={word.text}
            image={word.image}
            mode={mode}
          />
        </div>
      ))}
    </div>
  );
}
