import React, { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  className?: string;
  image?: string;
  title?: string;
  onClick?: () => void;
  imageSize?: "fill" | "contain" | "natural" | "custom";
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  color?: string;
}

export default function Card1({
  children,
  className = "",
  image,
  title,
  onClick,
  imageSize = "contain",
  imageClassName = "",
  imageWidth,
  imageHeight,
  color = "#ffffff",
}: CardProps) {
  // Couleurs pour les cartes du fond (si aucune couleur n'est spécifiée)
  const defaultBackColors = ["#ffeb3b", "#ff56ac", "#56ebff", "#a057ff"];

  // Sélectionner aléatoirement des couleurs pour les cartes du fond
  const getRandomColor = () => {
    return defaultBackColors[
      Math.floor(Math.random() * defaultBackColors.length)
    ];
  };

  // Couleurs pour les cartes du fond
  const backColor1 = getRandomColor();
  const backColor2 = getRandomColor();

  return (
    // Conteneur principal carré
    <div className={`relative aspect-square ${className}`} onClick={onClick}>
      {/* Première feuille (rotation gauche) */}
      <div
        className="absolute inset-0 border-2 border-black z-0 transform rotate-[-6deg]"
        style={{ backgroundColor: "#ff56ac" }}
      ></div>

      {/* Deuxième feuille (rotation droite) */}
      <div
        className="absolute inset-0 border-2 border-black z-10 transform rotate-[3deg]"
        style={{ backgroundColor: "#56ebff" }}
      ></div>

      {/* Feuille centrale (contenu principal) */}
      <div
        className="absolute inset-0 border-2 border-black z-20 transform rotate-[-1deg] overflow-hidden"
        style={{ backgroundColor: "white" }}
      >
        {/* Contenu de la carte */}
        <div className="p-4 h-full flex flex-col">
          {image && imageSize === "fill" && (
            <div className="relative flex-grow overflow-hidden">
              <Image
                src={image}
                alt={title || "Card image"}
                fill
                className={`object-contain ${imageClassName}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {image && imageSize === "contain" && (
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full max-h-full">
                <Image
                  src={image}
                  alt={title || "Card image"}
                  fill
                  className={`object-contain ${imageClassName}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {image && imageSize === "natural" && (
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={title || "Card image"}
                width={0}
                height={0}
                className={`w-auto h-auto max-w-full max-h-full ${imageClassName}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}

          {image && imageSize === "custom" && imageWidth && imageHeight && (
            <div className="flex-grow flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={title || "Card image"}
                width={imageWidth}
                height={imageHeight}
                className={`max-w-full max-h-full ${imageClassName}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          {title && !image && (
            <h3 className="text-xl font-bold mb-3 font-kg-happy">{title}</h3>
          )}

          {!image && (
            <div className="font-kg-happy flex-grow flex items-center justify-center">
              {children}
            </div>
          )}

          {image && children && (
            <div className="mt-2 font-kg-happy">{children}</div>
          )}
        </div>
      </div>

      {/* Étoile décorative (optionnelle) */}
      {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-10 h-10">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="#FF56AC"
              stroke="#000000"
              strokeWidth="1.5"
              d="M12,1.5l2.76,6.9L22,9.24l-5.5,4.73L18.49,21L12,17.25L5.51,21l1.99-7.03L2,9.24l7.24-0.84L12,1.5z"
            />
            <circle cx="12" cy="11" r="1.5" fill="white" />
          </svg>
        </div>
      </div> */}
    </div>
  );
}
