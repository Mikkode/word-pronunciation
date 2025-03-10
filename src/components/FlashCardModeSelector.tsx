"use client";

import { Volume2, Image as ImageIcon, ALargeSmall } from "lucide-react";

import { CardMode } from "./FlashCard";

interface FlashCardModeSelectorProps {
  currentMode: CardMode;
  onModeChange: (mode: CardMode) => void;
  compact?: boolean;
}

export default function FlashCardModeSelector({
  currentMode,
  onModeChange,
  compact = false,
}: FlashCardModeSelectorProps) {
  const buttonSize = compact ? "w-9 h-9" : "w-10 h-10";
  const iconSize = compact ? "h-5 w-5" : "h-6 w-6";

  return (
    <div className="flex gap-1">
      <button
        onClick={() => onModeChange("image-to-sound")}
        className={`flex items-center justify-center ${buttonSize} rounded-lg transition-all cursor-pointer ${
          currentMode === "image-to-sound"
            ? "bg-gradient-to-r from-[#ff56ac] to-[#ff3d9a] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Sound Mode"
      >
        <Volume2 className={iconSize} />
      </button>
      <button
        onClick={() => onModeChange("image-to-text")}
        className={`flex items-center justify-center ${buttonSize} rounded-lg transition-all cursor-pointer ${
          currentMode === "image-to-text"
            ? "bg-gradient-to-r from-[#56ebff] to-[#00d4ff] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Flip Mode"
      >
        <ImageIcon className={iconSize} />
      </button>
      <button
        onClick={() => onModeChange("text-to-image")}
        className={`flex items-center justify-center ${buttonSize} rounded-lg transition-all cursor-pointer ${
          currentMode === "text-to-image"
            ? "bg-gradient-to-r from-[#a057ff] to-[#8a3dff] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Text Mode"
      >
        <ALargeSmall className={iconSize} />
      </button>
    </div>
  );
}
