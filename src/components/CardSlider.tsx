"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Word } from '@/types';
import FlashCard, { FlashCardMode } from './FlashCard';

interface CardSliderProps {
  words: Word[];
  mode: FlashCardMode;
  onCardClick: (word: Word) => void;
  activeWordId: string | null;
}

export default function CardSlider({ words, mode, onCardClick, activeWordId }: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mettre à jour la largeur lors du redimensionnement
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % words.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + words.length) % words.length);
  };

  if (words.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No words available.</p>
      </div>
    );
  }

  // Afficher seulement 3 cartes à la fois
  const visibleWords = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % words.length;
    visibleWords.push(words[index]);
  }

  return (
    <div className="relative py-8">
      <div 
        ref={sliderRef}
        className="overflow-hidden mx-auto max-w-4xl"
      >
        <motion.div 
          className="flex gap-4"
          animate={{ x: -currentIndex * (width / 3) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {words.map((word, index) => (
            <div 
              key={word.id} 
              className="min-w-[calc(33.333%-1rem)] px-2"
              style={{ opacity: Math.abs(currentIndex - index) > 1 ? 0.3 : 1 }}
            >
              <FlashCard
                id={word.id}
                text={word.text}
                image={word.image}
                mode={mode}
                onCardClick={() => onCardClick(word)}
                isActive={activeWordId === word.id}
                size="large"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6 text-indigo-600" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white"
      >
        <ChevronRight className="h-6 w-6 text-indigo-600" />
      </button>
      
      <div className="flex justify-center mt-4 gap-1">
        {words.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 