import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "active" | "warning";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "default", className = "" }) => {
  const variantStyles = {
    default: "bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border-white/20 dark:border-white/10",
    active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wider uppercase border backdrop-blur-md ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
};
