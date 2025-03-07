"use client";

import { FlashCardMode } from "./FlashCard";

interface FlashCardModeSelectorProps {
  currentMode: FlashCardMode;
  onModeChange: (mode: FlashCardMode) => void;
}

export default function FlashCardModeSelector({
  currentMode,
  onModeChange,
}: FlashCardModeSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onModeChange("image-to-sound")}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all cursor-pointer ${
          currentMode === "image-to-sound"
            ? "bg-gradient-to-r from-[#ff56ac] to-[#ff3d9a] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Sound Mode"
      >
        <span className="text-lg">🔊</span>
      </button>
      <button
        onClick={() => onModeChange("image-to-text")}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all cursor-pointer ${
          currentMode === "image-to-text"
            ? "bg-gradient-to-r from-[#56ebff] to-[#00d4ff] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Flip Mode"
      >
        <span className="text-lg">🔄</span>
      </button>
      <button
        onClick={() => onModeChange("text-to-image")}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all cursor-pointer ${
          currentMode === "text-to-image"
            ? "bg-gradient-to-r from-[#a057ff] to-[#8a3dff] text-white"
            : "bg-white/70 hover:bg-white text-gray-700"
        }`}
        title="Text Mode"
      >
        <span className="text-lg">📝</span>
      </button>
    </div>
  );
}
