import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-all duration-150 hover:border-white/80 dark:hover:border-white/30 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
