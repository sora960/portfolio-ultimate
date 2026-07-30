"use client";

import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Session check to prevent repeating intro on reload
    const hasLoadedBefore = sessionStorage.getItem("jairzon_portfolio_loaded");
    if (hasLoadedBefore === "true") {
      onComplete();
    } else {
      setShouldRender(true);
      // Snappy 800ms animation, then trigger 300ms fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 800);

      const completeTimer = setTimeout(() => {
        sessionStorage.setItem("jairzon_portfolio_loaded", "true");
        onComplete();
      }, 1100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-2xl flex flex-col items-center justify-center select-none pointer-events-none transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes apple-pulse {
          0% {
            transform: scale(0.92);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}} />

      {/* Sleek Apple Glass Monogram Orb */}
      <div 
        className="w-16 h-16 rounded-full glass-card glass-thickness-thick flex items-center justify-center shadow-2xl border border-white/20 dark:border-white/10"
        style={{
          animation: "apple-pulse 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
        }}
      >
        <span className="font-mono text-xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100">
          J
        </span>
      </div>
    </div>
  );
};
