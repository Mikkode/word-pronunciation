"use client";

import { useState, useEffect, ReactNode } from "react";
import { Maximize, Minimize } from "lucide-react";

interface FullScreenButtonProps {
  targetRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  className?: string;
  children?: ReactNode;
}

// Définir les méthodes non standard pour TypeScript
interface FullScreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface FullScreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitFullscreenElement?: Element;
  msFullscreenElement?: Element;
}

export default function FullScreenButton({
  targetRef,
  className = "absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md border-2 border-black transform transition-transform hover:scale-110 cursor-pointer",
  children,
}: FullScreenButtonProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Gestion du mode plein écran
  const toggleFullScreen = () => {
    const doc = document as FullScreenDocument;

    if (
      !doc.fullscreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      // Entrer en mode plein écran
      const element = targetRef.current as FullScreenElement;

      if (element?.requestFullscreen) {
        element.requestFullscreen();
      } else if (element?.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element?.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      // Sortir du mode plein écran
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  };

  // Détecter les changements d'état du mode plein écran
  useEffect(() => {
    const doc = document as FullScreenDocument;

    const handleFullScreenChange = () => {
      setIsFullScreen(
        !!(
          doc.fullscreenElement ||
          doc.webkitFullscreenElement ||
          doc.msFullscreenElement
        )
      );
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
    };
  }, []);

  return (
    <button
      onClick={toggleFullScreen}
      className={className}
      aria-label={isFullScreen ? "Quitter le plein écran" : "Mode plein écran"}
    >
      {children ? (
        children
      ) : isFullScreen ? (
        <Minimize size={20} />
      ) : (
        <Maximize size={20} />
      )}
    </button>
  );
}
