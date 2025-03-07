"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type FlashCardMode = 'image-to-sound' | 'image-to-text' | 'text-to-image';

export interface FlashCardProps {
  id: string;
  text: string;
  image: string;
  category?: string;
  mode: FlashCardMode;
  onCardClick?: () => void;
  isActive?: boolean;
  gridColumns?: number;
  size?: 'small' | 'medium' | 'large';
}

export default function FlashCard({ 
  id, 
  text, 
  image, 
  mode = 'image-to-sound',
  onCardClick,
  isActive = false
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipTimer, setFlipTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Nettoyer le timer quand le composant est démonté
  useEffect(() => {
    return () => {
      if (flipTimer) clearTimeout(flipTimer);
    };
  }, [flipTimer]);
  
  // Réinitialiser le flip quand le mode change
  useEffect(() => {
    setIsFlipped(false);
  }, [mode]);
  
  const handleCardClick = () => {
    console.log("Card clicked:", id, text, mode);
    
    // Appeler le callback si fourni (pour le son)
    if (onCardClick) {
      onCardClick();
    }
    
    // Gérer le retournement pour les modes avec flip
    if (mode !== 'image-to-sound') {
      // Annuler tout timer existant
      if (flipTimer) {
        clearTimeout(flipTimer);
        setFlipTimer(null);
      }
      
      // Retourner la carte
      setIsFlipped(!isFlipped);
      
      // Si on vient de retourner la carte, programmer son retour après 3 secondes
      if (!isFlipped) {
        const timer = setTimeout(() => {
          setIsFlipped(false);
        }, 3000);
        setFlipTimer(timer);
      }
    }
  };
  
  // Rendu pour le mode text-to-image
  if (mode === 'text-to-image') {
    return (
      <div className="relative aspect-square w-full perspective-1000">
        <motion.div 
          onClick={handleCardClick}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full w-full absolute transition-all duration-500"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="flex items-center justify-center h-full p-4">
            <h2 className="text-2xl font-bold text-indigo-800 text-center">{text}</h2>
          </div>
        </motion.div>
        
        <motion.div 
          onClick={handleCardClick}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full w-full absolute transition-all duration-500"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="relative h-full w-full">
            <Image 
              src={image}
              alt={text}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    );
  }
  
  // Rendu pour les modes image-to-sound et image-to-text
  return (
    <div className="relative aspect-square w-full perspective-1000">
      {/* Face avant (image) */}
      <motion.div 
        onClick={handleCardClick}
        className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full w-full absolute transition-all duration-500 ${isActive ? 'ring-2 ring-indigo-500' : ''}`}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="relative h-full w-full">
          <Image 
            src={image}
            alt={text}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            style={{ objectFit: 'cover' }}
            priority
          />
          {mode === 'image-to-sound' && (
            <div className={`absolute bottom-3 right-3 bg-indigo-600 rounded-full p-2 text-white shadow-md ${isActive ? 'animate-pulse' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Face arrière (texte) - uniquement pour image-to-text */}
      {mode === 'image-to-text' && (
        <motion.div 
          onClick={handleCardClick}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full w-full absolute transition-all duration-500"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-50 to-blue-100 p-4">
            <h2 className="text-2xl font-bold text-indigo-800 text-center">{text}</h2>
          </div>
        </motion.div>
      )}
    </div>
  );
} 