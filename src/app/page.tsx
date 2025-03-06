"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { categories, words } from '@/data';
import { Word } from '@/types';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isSpeechSynthesisSupported, setIsSpeechSynthesisSupported] = useState(false);

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

  const speakWord = (word: string, lang: string, id: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setActiveWord(id);
      const utterance = new SpeechSynthesisUtterance(word);
      
      // Forcer la langue anglaise
      utterance.lang = "en-US";
      
      // Essayer de sélectionner une voix anglaise native
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(voice => 
        voice.lang.includes('en-') && !voice.lang.includes('en-ZA')
      );
      
      if (englishVoices.length > 0) {
        // Utiliser la première voix anglaise disponible
        utterance.voice = englishVoices[0];
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
      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="text-center mb-12">
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
        </header>
        
        {!isSpeechSynthesisSupported && (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map((word, index) => (
              <motion.div 
                key={word.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => speakWord(word.text, word.lang, word.id)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${activeWord === word.id ? 'ring-2 ring-indigo-500' : 'hover:shadow-xl'}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={word.image}
                    alt={word.text}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className={`absolute bottom-3 right-3 bg-indigo-600 rounded-full p-2 text-white shadow-md ${activeWord === word.id ? 'animate-pulse' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-indigo-800 shadow-sm">
                    {categories.find(cat => cat.id === word.category)?.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <footer className="mt-16 text-center">
          <div className="bg-indigo-50 rounded-xl p-6 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">How to use</h3>
            <p className="text-gray-600">
              Simply tap on any card to hear perfect native pronunciation.
              <br />
              Practice by listening and repeating to improve your English skills.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
