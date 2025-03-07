"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ColorfulText from '@/components/ColorfulText';
import FlashCard, { FlashCardMode } from '@/components/FlashCard';
import { categories, getWordsByCategory, words } from '@/data';

export default function FlashcardPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(true);
  const [flashcardMode, setFlashcardMode] = useState<FlashCardMode>('image-to-sound');
  const [categoryWords, setCategoryWords] = useState<any[]>([]);
  
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
    <div className="p-8 bg-[#56ebff]/30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <ColorfulText text="Flashcards" className="text-5xl font-extrabold mb-8 text-center" />
        
        {showCategories ? (
          <>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#ff56ac]">
              <h2 className="text-3xl font-semibold text-[#a057ff] mb-6">
                Choose a category
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="p-4 rounded-xl border-2 border-black font-bold text-white transition-transform hover:scale-105 shadow-md"
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <button 
                onClick={handleBackToCategories}
                className="bg-[#56ebff] hover:bg-[#56ebff]/80 text-white font-bold py-2 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform border-2 border-black flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span style={{ 
                  textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>
                  Categories
                </span>
              </button>
              
              {selectedCategoryData && (
                <h2 className="text-2xl font-bold" style={{ color: colors[1] }}>
                  {selectedCategoryData.name}
                </h2>
              )}
              
              <div className="flex space-x-3">
                {[
                  { mode: 'image-to-sound' as FlashCardMode, icon: '🔊', label: 'Sound' },
                  { mode: 'image-to-text' as FlashCardMode, icon: '🔄', label: 'Flip' },
                  { mode: 'text-to-image' as FlashCardMode, icon: '📝', label: 'Text' }
                ].map((item, index) => (
                  <button
                    key={item.mode}
                    onClick={() => handleModeChange(item.mode)}
                    className={`py-2 px-5 rounded-full text-white border-2 border-black transition-transform shadow-md flex items-center ${flashcardMode === item.mode ? 'scale-110 ring-2 ring-white' : 'hover:scale-105'}`}
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span style={{ 
                      textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    }}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryWords.map((word) => (
                <div 
                  key={word.id}
                  className="border-4 rounded-xl overflow-hidden transform transition-transform hover:scale-105 shadow-lg"
                  style={{ borderColor: colors[Math.floor(Math.random() * colors.length)] }}
                >
                  <FlashCard
                    id={word.id}
                    text={word.text}
                    image={word.image}
                    category={word.category}
                    mode={flashcardMode}
                    onCardClick={() => handleCardClick(word.id)}
                    gridColumns={4}
                  />
                </div>
              ))}
            </div>
            
            {categoryWords.length === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border-4 border-[#ff56ac] shadow-lg">
                <h3 className="text-xl font-bold text-[#a057ff]">No cards found for this category</h3>
                <p className="text-gray-600 mt-2">Please try another category</p>
              </div>
            )}
          </>
        )}
        
        <div className="mt-12 flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div 
              key={dot} 
              className="w-6 h-6 rounded-full animate-pulse"
              style={{ 
                backgroundColor: dot % 3 === 0 ? '#56ebff' : dot % 2 === 0 ? '#ff56ac' : '#a057ff',
                animationDelay: `${dot * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
