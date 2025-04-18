import React from "react";

const Logo: React.FC = () => (
  <div className="flex items-center">
    <div className="relative">
      <img
        src="/blackLOgo.svg"
        alt="Logo"
        className="w-10 h-10 relative z-10"
      />
    </div>
  </div>
);

export default Logo;