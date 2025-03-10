"use client";

import { forwardRef, ReactNode, useEffect, useState } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className = "" }, ref) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Détecter les changements d'état du mode plein écran
    useEffect(() => {
      const handleFullScreenChange = () => {
        setIsFullScreen(!!document.fullscreenElement);
      };

      document.addEventListener("fullscreenchange", handleFullScreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.addEventListener("mozfullscreenchange", handleFullScreenChange);
      document.addEventListener("MSFullscreenChange", handleFullScreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullScreenChange
        );
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
      <div
        ref={ref}
        className={`bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#ff56ac] ${
          isFullScreen
            ? "w-full h-full flex flex-col justify-center items-center overflow-auto"
            : ""
        } ${className}`}
        data-fullscreen={isFullScreen ? "true" : "false"}
      >
        <h2 className="text-3xl font-semibold text-[#ff56ac] mb-4 text-center"></h2>
        <div
          className={
            isFullScreen
              ? "w-full h-full flex flex-col justify-center items-center overflow-auto p-4"
              : ""
          }
          style={
            isFullScreen
              ? {
                  width: "min(90vw, 90vh, 1400px)",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  padding: "20px",
                }
              : {}
          }
        >
          {children}
        </div>
      </div>
    );
  }
);

Content.displayName = "Content";

export default Content;
