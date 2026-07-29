"use client";

import React, { useRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  thickness?: "thin" | "regular" | "thick";
  glowColor?: "indigo" | "emerald" | "amber" | "blue" | "violet" | "rose" | "pink";
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  thickness = "regular",
  glowColor,
  ...props 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Skip 3D tilt on touch/coarse pointer devices to prevent scroll jank
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom coordinates for spotlight gradients
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Calculate 3D tilt angles (capped at a subtle 4 degrees maximum)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 4; // range: -4 to 4
    const rotateY = ((x - centerX) / centerX) * 4; // range: -4 to 4

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Reset transform smoothly back to neutral
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const thicknessClass = {
    thin: "glass-thickness-thin",
    regular: "glass-thickness-regular",
    thick: "glass-thickness-thick"
  }[thickness];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card glass-card-hover group ${thicknessClass} ${className}`}
      {...props}
    >
      {/* Dynamic Specular Point-Light Cursor Highlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--specular-spotlight, rgba(255, 255, 255, 0.12)), transparent 80%)",
        }}
      />

      {/* Internal Glass Color Flare (simulates refractive ambient color refraction) */}
      {glowColor && (
        <div 
          className={`absolute w-44 h-44 rounded-full blur-[52px] opacity-[0.14] dark:opacity-[0.08] pointer-events-none z-0 ${
            glowColor === "indigo" ? "bg-indigo-500 -top-12 -left-12" :
            glowColor === "emerald" ? "bg-emerald-500 -bottom-12 -right-12" :
            glowColor === "amber" ? "bg-amber-500 -top-12 -right-12" :
            glowColor === "blue" ? "bg-blue-500 -top-10 -left-10" :
            glowColor === "violet" ? "bg-violet-500 -bottom-10 -left-10" :
            glowColor === "rose" ? "bg-rose-500 -bottom-10 -right-10" :
            glowColor === "pink" ? "bg-pink-500 -top-10 -right-10" :
            "bg-neutral-500"
          }`}
        />
      )}
      
      {/* Relative container to keep child nodes above spotlight/color overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
