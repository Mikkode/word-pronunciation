"use client";

import { useState } from 'react';

interface SizeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function SizeSlider({ 
  value, 
  onChange, 
  min = 0.5, 
  max = 2.5, 
  step = 0.5 
}: SizeSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center space-x-4 max-w-xs mx-auto">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 text-gray-500" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M2 4.5A1.5 1.5 0 013.5 3h13A1.5 1.5 0 0118 4.5v1.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 6v-1.5zM3.5 7h13a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 10v-1.5A1.5 1.5 0 013.5 7zm0 6h13a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5V15a1.5 1.5 0 011.5-1.5z" />
      </svg>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      />
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-gray-500" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    </div>
  );
} 