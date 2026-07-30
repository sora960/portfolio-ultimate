import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "active" | "warning";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "default", className = "" }) => {
  const variantStyles = {
    default: "bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 border-transparent",
    active: "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900/50 dark:border-white/50 shadow-xs",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] sm:text-[10px] font-mono tracking-widest uppercase border backdrop-blur-md select-none ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
};
