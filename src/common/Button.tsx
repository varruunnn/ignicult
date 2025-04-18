// src/components/ui/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  primary = false,
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-colors ${
        primary
          ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg shadow-amber-900/20"
          : "border border-[#FFB000] bg-[#1D1D1D] hover:bg-gray-800"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;