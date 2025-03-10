"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { Grid, Layers } from "lucide-react";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";
import FlashCardGrid from "@/components/FlashCardGrid";
import FlashCardCarousel from "@/components/FlashCardCarousel";
import FlashCardModeSelector from "@/components/FlashCardModeSelector";
import PurposeTooltip from "@/components/PurposeTooltip";
import Timer from "@/components/Timer";
import { getWordsByCategory } from "@/data";
import { categories } from "@/data";
import { CardMode } from "@/components/FlashCard";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const [flashcardMode, setFlashcardMode] =
    useState<CardMode>("image-to-sound");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("carousel");

  const wordsForCategory = getWordsByCategory(id);

  // Trouver la catégorie actuelle pour obtenir son purpose
  const currentCategory = categories.find((cat) => cat.id === id);

  const handleBackClick = () => {
    router.push("/flashcard");
  };

  const handleModeChange = (mode: CardMode) => {
    setFlashcardMode(mode);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "carousel" : "grid");
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

      {/* Timer flottant avec la couleur rose */}
      <Timer color="pink" />

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

          <div className="flex items-center gap-2">
            {currentCategory?.purpose && (
              <PurposeTooltip purpose={currentCategory.purpose} />
            )}

            <FlashCardModeSelector
              currentMode={flashcardMode}
              onModeChange={handleModeChange}
            />

            {/* Bouton de changement grid/carrousel */}
            <button
              onClick={toggleViewMode}
              className="bg-[#6ee2f5] hover:bg-[#4ad8f0] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-black transition-all hover:scale-110 cursor-pointer"
              aria-label={
                viewMode === "grid"
                  ? "Switch to carousel view"
                  : "Switch to grid view"
              }
              title={
                viewMode === "grid"
                  ? "Switch to carousel view"
                  : "Switch to grid view"
              }
            >
              {viewMode === "grid" ? <Layers size={20} /> : <Grid size={20} />}
            </button>
          </div>
        </div>
      </div>

      {wordsForCategory.length > 0 ? (
        <Content>
          {viewMode === "grid" ? (
            <FlashCardGrid words={wordsForCategory} mode={flashcardMode} />
          ) : (
            <FlashCardCarousel words={wordsForCategory} mode={flashcardMode} />
          )}
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
