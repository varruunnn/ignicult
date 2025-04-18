import React from "react";
import { motion } from "framer-motion";
import { NavItem as NavItemType } from "../types/navigation";

interface NavItemProps {
  item: NavItemType;
  onClick: () => void;
  isActive: boolean;
  isNavigating: boolean;
  variant: 'mobile' | 'desktop';
}

const NavItem: React.FC<NavItemProps> = ({ 
  item, 
  onClick, 
  isActive, 
  isNavigating,
  variant
}) => {
  const isMobile = variant === 'mobile';
  
  const itemVariants = isMobile
    ? {
        hidden: { opacity: 0, x: -8 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0 }
      }
    : {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 }
      };

  const hoverAnimation = isMobile
    ? { x: 5, transition: { duration: 0.2 } }
    : { scale: 1.03, x: 3 };

  return (
    <motion.button
      onClick={onClick}
      disabled={isNavigating}
      className={`
        flex items-center p-3 ${isMobile ? 'mb-2' : ''}
        cursor-pointer rounded-xl 
        transition-all duration-200
        focus:outline-none focus:ring-1 focus:ring-[#fe6200]
        ${isActive 
          ? isMobile 
            ? "bg-black" 
            : "bg-[#1A1A1A] border-l-2 border-[#fe6200]" 
          : isMobile ? "" : "hover:bg-[#1A1A1A]"}
        ${item.highlight
          ? "bg-gradient-to-r from-[#3D1D1D] to-[#3D2D0D] border-l-4 border-yellow-500"
          : ""
        }
      `}
      variants={itemVariants}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.98 }}
    >
      {item.icon}
      <span className={`${item.highlight ? "font-bold" : ""}`}>
        {item.text}
      </span>
    </motion.button>
  );
};

export default NavItem;