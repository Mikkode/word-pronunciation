"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Volume2 } from "lucide-react";
export type CardMode = "image-to-text" | "text-to-image" | "image-to-sound";

interface CardProps {
  className?: string;
  image?: string;
  text?: string;
  title?: string;
  onClick?: () => void;
  color1?: string;
  color2?: string;
  mode?: CardMode;
  isActive?: boolean;
  lang?: string;
}

export default function FlashCard({
  className = "",
  image,
  text,
  title,
  onClick,
  color1 = "bg-pink-main",
  color2 = "bg-white",
  mode = "image-to-text",
  isActive = false,
  lang = "en-US",
}: CardProps) {
  // Initialiser isFlipped à true si le mode est text-to-image
  const [isFlipped, setIsFlipped] = useState(mode === "text-to-image");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Réinitialiser le flip quand le mode change
  useEffect(() => {
    setIsFlipped(mode === "text-to-image");
  }, [mode]);

  // Fonction pour lire le texte avec la synthèse vocale
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      // Arrêter toute synthèse vocale en cours
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Légèrement plus lent pour une meilleure compréhension

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      console.error(
        "La synthèse vocale n'est pas prise en charge par ce navigateur."
      );
    }
  };

  // Arrêter la synthèse vocale quand le composant est démonté
  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const handleCardClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (mode === "image-to-sound" && text) {
      speak(text);
      return;
    }

    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative aspect-square ${className} ${
        isActive ? "ring-4 ring-purple-main" : ""
      } perspective-1000 cursor-pointer`}
      onClick={handleCardClick}
    >
      {/* Première feuille (rotation gauche) */}
      <div
        className={`absolute inset-0 border-2 border-black z-0 transform rotate-[-6deg] rounded-2xl ${color1}`}
      ></div>

      {/* Conteneur de la carte qui tourne */}
      <div
        className={`absolute inset-0 border-2 border-black z-10 rounded-2xl bg-white transition-all duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : "rotate-[3deg]"
        }`}
      >
        {/* Face avant (image) */}
        <div
          className={`absolute inset-0 overflow-hidden flex items-center justify-center ${color2} backface-hidden rounded-2xl`}
        >
          <div className="p-4 h-full w-full flex flex-col">
            {image && (
              <div className="flex-grow flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full max-h-full">
                  <Image
                    src={image}
                    alt={title || text || "Card image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            )}

            {title && !image && (
              <h3 className="text-xl font-bold mb-3 font-kg-happy">{title}</h3>
            )}

            {/* Bouton de son pour le mode image-to-sound */}
            {mode === "image-to-sound" && text && (
              <div className="absolute bottom-4 right-4 ">
                <button
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
                    isSpeaking ? "bg-purple-main" : "bg-blue-main"
                  } text-white border-2 border-black`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSpeaking) {
                      window.speechSynthesis.cancel();
                      setIsSpeaking(false);
                    } else {
                      speak(text);
                    }
                  }}
                >
                  <Volume2 className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Face arrière (texte) */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${color2} backface-hidden rotate-y-180 rounded-2xl`}
        >
          <div className="p-4 h-full w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-center font-kg-red-hands text-black">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
