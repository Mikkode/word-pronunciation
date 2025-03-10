"use client";

import { useState, useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";

interface PurposeTooltipProps {
  purpose: string;
}

export default function PurposeTooltip({ purpose }: PurposeTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const toggleTooltip = () => {
    setIsOpen(!isOpen);
  };

  // Fermer le tooltip quand on clique en dehors
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTooltip}
        className="bg-pink-main hover:bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-black transition-all hover:scale-110 cursor-pointer"
        aria-label="Show purpose"
      >
        <HelpCircle size={20} />
      </button>

      {isOpen && (
        <div
          ref={tooltipRef}
          className="absolute top-12 right-0 z-50 w-64 md:w-80 animate-[wiggle_0.3s_ease-in-out]"
          style={{
            animation:
              "pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
          }}
        >
          {/* Bulle de dialogue avec style enfantin */}
          <div className="relative bg-white border-4 border-pink-main rounded-2xl p-4 shadow-lg">
            {/* Flèche pointant vers le bouton */}
            <div className="absolute -top-4 right-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-pink-main"></div>

            <h3 className="text-lg font-bold text-blue-main mb-2 font-kg-happy">
              Purpose:
            </h3>
            <p className="text-gray-700 font-kg-red-hands">{purpose}</p>
          </div>
        </div>
      )}

      {/* Style pour l'animation */}
      <style jsx>{`
        @keyframes pop-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
