"use client";

import React, { useEffect, useState } from "react";

export const AmbientFlares: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover (basic mouse test)
    const hoverMedia = window.matchMedia("(hover: hover)");
    setIsMobile(!hoverMedia.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (hoverMedia.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -60px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 40px) scale(0.9);
          }
        }

        @keyframes float-slow-2 {
          0%, 100% {
            transform: translate(0, 0) scale(0.9);
          }
          50% {
            transform: translate(-50px, -30px) scale(1.1);
          }
        }
      `}} />

      {/* Fixed Ambient Key Light - Top-Left (anchors illumination depth, especially in dark mode) */}
      <div 
        className="absolute -top-[15%] -left-[15%] w-[600px] h-[600px] bg-blue-400/20 dark:bg-sky-500/10 blur-[140px] rounded-full"
        style={{
          animation: "float-slow-1 36s ease-in-out infinite"
        }}
      />

      {/* Floating Flare 1 - Ambient Soft Indigo */}
      <div 
        className="absolute top-[25%] left-[5%] w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[130px] rounded-full"
        style={{
          animation: "float-slow-1 28s ease-in-out infinite"
        }}
      />

      {/* Floating Flare 2 - Ambient Soft Emerald */}
      <div 
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full"
        style={{
          animation: "float-slow-2 32s ease-in-out infinite"
        }}
      />

      {/* Mouse Tracking Interactive Liquid Flare (Desktops Only) */}
      {!isMobile && (
        <div 
          className="absolute w-[280px] h-[280px] bg-sky-500/10 dark:bg-sky-500/5 blur-[90px] rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${mousePos.x - 140}px`,
            top: `${mousePos.y - 140}px`,
            transform: "translate3d(0,0,0)"
          }}
        />
      )}
    </div>
  );
};
