"use client";

import React, { useRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
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
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
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
      
      {/* Relative container to keep child nodes above spotlight overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
