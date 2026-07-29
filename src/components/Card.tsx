"use client";

import React, { useRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  thickness?: "thin" | "regular" | "thick";
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  thickness = "regular",
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--glow-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const thicknessClass = {
    thin: "glass-thickness-thin",
    regular: "glass-thickness-regular",
    thick: "glass-thickness-thick"
  }[thickness];

  const specularClass = {
    thin: "glass-specular-thin",
    regular: "glass-specular-regular",
    thick: "glass-specular-thick"
  }[thickness];

  const hasContent = !!children;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      className={`glass-card glass-card-hover group ${thicknessClass} glass-specular-edge ${specularClass} ${className}`}
      {...props}
    >
      {/* Dynamic Specular Point-Light Cursor Highlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--specular-spotlight, rgba(255, 255, 255, 0.12)), transparent 80%)",
        }}
      />

      {/* Content wrapper — flat legibility scrim when content exists, pure glass when decorative */}
      <div
        className="relative z-10 w-full h-full"
        style={hasContent ? {
          background: "rgba(255, 255, 255, 0.04)",
          borderRadius: "inherit",
        } : undefined}
      >
        {children}
      </div>
    </div>
  );
};
