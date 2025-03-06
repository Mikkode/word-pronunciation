"use client";

import { useState, useEffect } from 'react';
import { categories, words } from '@/data';
import { Word } from '@/types';
import FlashCard, { FlashCardMode } from '@/components/FlashCard';
import VoiceSelector from '@/components/VoiceSelector';
import SizeSlider from '@/components/SizeSlider';

export default function Home() {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(false);
  const [cardMode, setCardMode] = useState<FlashCardMode>('image-to-sound');
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [gridColumns, setGridColumns] = useState(3); // Valeur par défaut: 3 colonnes

  // Set initial state after component mounts
  useEffect(() => {
    setIsMounted(true);
    setFilteredWords(words);
    setIsSpeechSynthesisSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    
    // Précharger les voix
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  // Filter words based on search term
  useEffect(() => {
    if (isMounted) {
      const results = words.filter(word => 
        word.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredWords(results);
    }
  }, [searchTerm, isMounted]);

  // Fonction pour gérer le changement du nombre de colonnes
  const handleGridChange = (value: number) => {
    // Convertir la valeur du slider (1-3) en nombre de colonnes (1-5)
    const columns = Math.round(value * 2);
    setGridColumns(columns);
  };

  // Générer la classe CSS pour la grille en fonction du nombre de colonnes
  const getGridClass = () => {
    const baseClass = "grid gap-6 ";
    
    switch(gridColumns) {
      case 1:
        return baseClass + "grid-cols-1";
      case 2:
        return baseClass + "grid-cols-1 sm:grid-cols-2";
      case 3:
        return baseClass + "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return baseClass + "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      case 5:
        return baseClass + "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
      default:
        return baseClass + "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  const speakWord = (word: string, lang: string, id: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setActiveWord(id);
      const utterance = new SpeechSynthesisUtterance(word);
      
      // Forcer la langue anglaise
      utterance.lang = "en-US";
      
      // Utiliser la voix sélectionnée si disponible
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      } else {
        // Fallback: essayer de sélectionner une voix anglaise native
        const voices = window.speechSynthesis.getVoices();
        const englishVoices = voices.filter(voice => 
          voice.lang.includes('en-') && !voice.lang.includes('en-ZA')
        );
        
        if (englishVoices.length > 0) {
          utterance.voice = englishVoices[0];
        }
      }
      
      utterance.onend = () => setActiveWord(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Prevent hydration errors by not rendering until client-side
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100"> 
      <div className="max-w-6xl mx-auto py-8 px-4">
        <header className="text-center mb-12">
          {/* Mode selector */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setCardMode('image-to-sound')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  cardMode === 'image-to-sound' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Image → Sound
              </button>
              <button
                type="button"
                onClick={() => setCardMode('image-to-text')}
                className={`px-4 py-2 text-sm font-medium ${
                  cardMode === 'image-to-text' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Image → Text
              </button>
              <button
                type="button"
                onClick={() => setCardMode('text-to-image')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  cardMode === 'text-to-image' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Text → Image
              </button>
            </div>
          </div>
          
          {/* Modern Search Bar */}
          <div className="relative max-w-md mx-auto mt-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search words..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Sélecteur de voix */}
          {cardMode === 'image-to-sound' && (
            <div className="max-w-xs mx-auto mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select English Voice
              </label>
              <VoiceSelector 
                onVoiceChange={setSelectedVoice}
                selectedVoice={selectedVoice}
              />
            </div>
          )}

          {/* Slider pour ajuster le nombre de colonnes */}
          <div className="mt-4 mb-6">
            <p className="text-sm text-gray-600 mb-2 text-center">Ajuster le nombre de cartes par ligne</p>
            <SizeSlider 
              value={gridColumns / 2}
              onChange={handleGridChange}
              min={0.5}
              max={2.5}
              step={0.5}
            />
          </div>
        </header>
        
        {!isSpeechSynthesisSupported && cardMode === 'image-to-sound' && (
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md mb-6">
            <p className="font-medium">Warning</p>
            <p>Your browser does not support speech synthesis.</p>
          </div>
        )}
        
        {filteredWords.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No words match your search.</p>
          </div>
        ) : (
          <div className={getGridClass()}>
            {filteredWords.map((word) => (
              <FlashCard
                key={word.id}
                id={word.id}
                text={word.text}
                image={word.image}
                category={categories.find(cat => cat.id === word.category)?.name}
                mode={cardMode}
                onCardClick={() => {
                  if (cardMode === 'image-to-sound') {
                    speakWord(word.text, word.lang, word.id);
                  }
                }}
                isActive={activeWord === word.id}
                gridColumns={gridColumns}
              />
            ))}
          </div>
        )}
        
        <footer className="mt-16 text-center">
          <div className="bg-indigo-50 rounded-xl p-6 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">How to use</h3>
            <p className="text-gray-600">
              {cardMode === 'image-to-sound' && 'Tap any card to hear perfect native pronunciation.'}
              {cardMode === 'image-to-text' && 'Tap any card to reveal the word.'}
              {cardMode === 'text-to-image' && 'Tap any text to see the corresponding image.'}
              <br />
              Practice by listening and repeating to improve your English skills.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
