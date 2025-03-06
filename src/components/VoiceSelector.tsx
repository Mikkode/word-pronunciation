"use client";

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface VoiceSelectorProps {
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
  selectedVoice: SpeechSynthesisVoice | null;
}

export default function VoiceSelector({ onVoiceChange, selectedVoice }: VoiceSelectorProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        // Récupérer toutes les voix disponibles
        const availableVoices = window.speechSynthesis.getVoices();
        
        // Filtrer pour ne garder que les voix anglaises
        const englishVoices = availableVoices.filter(voice => 
          voice.lang.startsWith('en-')
        );
        
        setVoices(englishVoices);
        
        // Si aucune voix n'est sélectionnée et qu'il y a des voix disponibles, sélectionner la première
        if (!selectedVoice && englishVoices.length > 0) {
          onVoiceChange(englishVoices[0]);
        }
      }
    };

    // Charger les voix immédiatement
    loadVoices();
    
    // Certains navigateurs chargent les voix de manière asynchrone
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [onVoiceChange, selectedVoice]);

  if (voices.length === 0) {
    return (
      <div className="text-sm text-gray-500">
        No English voices available
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span>{selectedVoice?.name || 'Select voice'}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {voices.map((voice) => (
              <li
                key={voice.name}
                onClick={() => {
                  onVoiceChange(voice);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-indigo-100 ${
                  selectedVoice?.name === voice.name ? 'bg-indigo-50 font-medium' : ''
                }`}
              >
                {voice.name} ({voice.lang})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 