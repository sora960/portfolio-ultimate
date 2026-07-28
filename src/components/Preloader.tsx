"use client";

import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Session check to prevent repeating the intro on reload
    const hasLoadedBefore = sessionStorage.getItem("jairzon_portfolio_loaded");
    if (hasLoadedBefore === "true") {
      onComplete();
    } else {
      setShouldRender(true);
      // Play animation for 2.2 seconds, then trigger fade out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 2200);

      // Finish loading after fade transition (500ms)
      const completeTimer = setTimeout(() => {
        sessionStorage.setItem("jairzon_portfolio_loaded", "true");
        onComplete();
      }, 2700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center select-none pointer-events-none transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drop-fall {
          0% {
            transform: translateY(-250px) scaleY(1.2) scaleX(0.85);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          40% {
            transform: translateY(0) scaleY(0.9) scaleX(1.1);
          }
          50% {
            transform: translateY(10px) scaleY(1) scaleX(1);
          }
          55% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes splash-left {
          0%, 40% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          48% {
            opacity: 1;
          }
          85% {
            transform: translate(-140px, -40px) scale(1.1);
            opacity: 0.95;
          }
          100% {
            transform: translate(-180px, -50px) scale(0);
            opacity: 0;
          }
        }

        @keyframes splash-right {
          0%, 40% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          48% {
            opacity: 1;
          }
          85% {
            transform: translate(140px, -40px) scale(1.1);
            opacity: 0.95;
          }
          100% {
            transform: translate(180px, -50px) scale(0);
            opacity: 0;
          }
        }

        @keyframes splash-top {
          0%, 40% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          48% {
            opacity: 1;
          }
          85% {
            transform: translate(0px, -150px) scale(1.2);
            opacity: 0.95;
          }
          100% {
            transform: translate(0px, -190px) scale(0);
            opacity: 0;
          }
        }

        @keyframes ripple-wave {
          0%, 40% {
            transform: scale(0.2);
            opacity: 0;
            border-width: 8px;
          }
          45% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.2;
            border-width: 1px;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @keyframes logo-reveal {
          0%, 50% {
            opacity: 0;
            transform: translateY(20px);
          }
          75% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}} />

      {/* SVG Gooey container */}
      <div className="relative w-80 h-80 flex items-center justify-center liquid-goo-container">
        
        {/* Falling Main Droplet */}
        <div 
          className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-600 to-emerald-500 rounded-full shadow-lg"
          style={{
            animation: "drop-fall 2.2s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite"
          }}
        />

        {/* Scattered Droplets - Left */}
        <div 
          className="absolute w-8 h-8 bg-blue-500 rounded-full"
          style={{
            animation: "splash-left 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite"
          }}
        />

        {/* Scattered Droplets - Right */}
        <div 
          className="absolute w-7 h-7 bg-emerald-500 rounded-full"
          style={{
            animation: "splash-right 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite"
          }}
        />

        {/* Scattered Droplets - Top */}
        <div 
          className="absolute w-9 h-9 bg-indigo-600 rounded-full"
          style={{
            animation: "splash-top 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite"
          }}
        />
        
        {/* Splash Landing Base */}
        <div 
          className="absolute w-16 h-3 bg-neutral-300 dark:bg-neutral-800 rounded-full opacity-40 translate-y-6 scale-x-125"
        />
      </div>

      {/* Spreading Ripple rings (outside gooey filter to maintain sharp edge) */}
      <div 
        className="absolute w-44 h-44 rounded-full border border-neutral-300 dark:border-neutral-700 pointer-events-none"
        style={{
          animation: "ripple-wave 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite",
          transformOrigin: "center center"
        }}
      />

      {/* Rebranding reveal name */}
      <div 
        className="absolute bottom-24 text-center space-y-2"
        style={{
          animation: "logo-reveal 2.2s ease-in-out infinite"
        }}
      >
        <span className="font-mono text-sm font-bold tracking-widest uppercase text-neutral-800 dark:text-neutral-200">
          Jairzon
        </span>
        <p className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600 tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
};
