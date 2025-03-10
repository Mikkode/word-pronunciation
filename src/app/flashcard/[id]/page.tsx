"use client";

import { useState, useRef } from "react";
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
import FullScreenButton from "@/components/FullScreenButton";
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
  const contentRef = useRef<HTMLDivElement>(null);

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
        className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center"
      />

      {/* Timer flottant avec la couleur rose */}
      <Timer color="pink" />

      {/* Barre de navigation avec fond blanc transparent */}
      <div className="bg-white/0 backdrop-blur-xl p-2 rounded-xl shadow-md mb-6 border border-white/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          {/* Groupe gauche: bouton retour et titre */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleBackClick}
              className="bg-[#ff56ac] hover:bg-[#ff3d9a] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-sm hover:shadow transition-all cursor-pointer"
              aria-label="Back to categories"
            >
              ←
            </button>

            <h2 className="text-lg font-bold text-[#8a4bff] sm:max-w-none">
              {currentCategory?.name || formatCategoryName(id)}
            </h2>
          </div>

          {/* Groupe droite: tous les contrôles */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Sélecteur de mode */}
            <FlashCardModeSelector
              currentMode={flashcardMode}
              onModeChange={handleModeChange}
              compact={true}
            />

            {/* Bouton de changement grid/carrousel */}
            <button
              onClick={toggleViewMode}
              className="bg-[#6ee2f5] hover:bg-[#4ad8f0] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 border-black transition-all hover:scale-110 cursor-pointer"
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
              {viewMode === "grid" ? <Layers size={18} /> : <Grid size={18} />}
            </button>

            {/* Bouton plein écran */}
            <FullScreenButton
              targetRef={contentRef}
              className="bg-blue-500 hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 border-black transition-all hover:scale-110 cursor-pointer"
            />

            {/* Bouton d'aide */}
            {currentCategory?.purpose && (
              <PurposeTooltip purpose={currentCategory.purpose} />
            )}
          </div>
        </div>
      </div>

      {wordsForCategory.length > 0 ? (
        <Content ref={contentRef}>
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
