"use client";

import { useState, useEffect } from 'react';
import ColorfulText from '@/components/ColorfulText';
import FlashCard, { FlashCardMode } from '@/components/FlashCard';
import { categories, getWordsByCategory } from '@/data';
import { Word } from '@/types';

export default function FlashcardPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(true);
  const [flashcardMode, setFlashcardMode] = useState<FlashCardMode>('image-to-sound');
  const [categoryWords, setCategoryWords] = useState<Word[]>([]);
  
  const colors = ['#ff56ac', '#56ebff', '#a057ff', '#ffa726'];

  // Ajouter la catégorie "All" aux catégories existantes
  const allCategories = [
    { id: 'all', name: 'All Categories', icon: '' },
    ...categories
  ];

  useEffect(() => {
    if (selectedCategory) {
      const wordsForCategory = getWordsByCategory(selectedCategory);
      setCategoryWords(wordsForCategory);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowCategories(false);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setShowCategories(true);
  };

  const handleModeChange = (mode: FlashCardMode) => {
    setFlashcardMode(mode);
  };

  // Trouver la catégorie sélectionnée
  const selectedCategoryData = selectedCategory 
    ? allCategories.find(cat => cat.id === selectedCategory)
    : null;

  const handleCardClick = (id: string) => {
    // Fonction pour gérer le clic sur une carte
    console.log("Card clicked:", id);
    
    // Si c'est le mode son, on pourrait ajouter la synthèse vocale ici
    if (flashcardMode === 'image-to-sound') {
      const word = categoryWords.find(w => w.id === id);
      if (word && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word.text);
        utterance.lang = word.lang || 'en-US';
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ColorfulText text="Flashcards" className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center" />
        
        {showCategories ? (
          <>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md p-6 md:p-8 mb-6 md:mb-8 border-4 border-[#ff56ac]">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#a057ff] mb-4 md:mb-6">
                Choose a category
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {allCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="py-3 md:py-4 px-4 md:px-6 rounded-full border-2 border-black font-bold text-white transition-transform hover:scale-105 shadow-md cursor-pointer text-center"
                    style={{ 
                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <span style={{ 
                      textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    }}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Barre de navigation simplifiée */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              {/* Bouton retour et titre */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleBackToCategories}
                  className="bg-[#56ebff] text-white font-bold py-2 px-4 rounded-full border-2 border-black"
                >
                  ← Back
                </button>
                
                <h2 className="text-xl font-bold text-[#a057ff]">
                  {selectedCategoryData?.name || "All Categories"}
                </h2>
              </div>
              
              {/* Boutons de mode simplifiés */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleModeChange('image-to-sound')}
                  className={`p-2 rounded-full ${flashcardMode === 'image-to-sound' ? 'bg-[#ff56ac]' : 'bg-gray-200'} border-2 border-black`}
                  title="Sound Mode"
                >
                  🔊
                </button>
                <button
                  onClick={() => handleModeChange('image-to-text')}
                  className={`p-2 rounded-full ${flashcardMode === 'image-to-text' ? 'bg-[#56ebff]' : 'bg-gray-200'} border-2 border-black`}
                  title="Flip Mode"
                >
                  🔄
                </button>
                <button
                  onClick={() => handleModeChange('text-to-image')}
                  className={`p-2 rounded-full ${flashcardMode === 'text-to-image' ? 'bg-[#a057ff]' : 'bg-gray-200'} border-2 border-black`}
                  title="Text Mode"
                >
                  📝
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categoryWords.map((word) => (
                <div 
                  key={word.id}
                  className="border-4 rounded-xl overflow-hidden transform transition-transform hover:scale-105 shadow-lg cursor-pointer"
                  style={{ borderColor: colors[Math.floor(Math.random() * colors.length)] }}
                >
                  <FlashCard
                    id={word.id}
                    text={word.text}
                    image={word.image}
                    mode={flashcardMode}
                    onCardClick={() => handleCardClick(word.id)}
                  />
                </div>
              ))}
            </div>
            
            {categoryWords.length === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border-4 border-[#ff56ac] shadow-lg">
                <h3 className="text-xl font-bold text-[#a057ff]">No cards found for this category</h3>
                <p className="text-gray-600 mt-2">Please try another category</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
