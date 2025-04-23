import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import Logo from "../../common/Logo";
import { NavItem } from "../../types/navigation";
import { getNavbarColor } from "../../utils/getNavbarColor";

interface MobileNavProps {
  menuItems: NavItem[];
  handleNavigate: (path: string) => () => void;
  currentPath: string;
  isNavigating: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  menuItems,
  handleNavigate,
  currentPath,
  isNavigating
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarColor = getNavbarColor(currentPath);
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.99] }
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -15, scale: 0.95 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.07 * i, duration: 0.4, ease: "easeOut" }
    })
  };

  const handleLogoClick = () => {
    handleNavigate("/")();
    setIsMenuOpen(false);
  };


  const getMenuBgColor = () => {
    return navbarColor;
  };

  const getHoverColor = (itemPath: string) => {
    if (currentPath === itemPath) return "";

    if (currentPath.includes("profile")) {
      return "hover:bg-[#1a2d4a] transition-colors duration-300";
    }
    if (currentPath.includes("tournaments")) {
      return "hover:bg-[#1e293b] transition-colors duration-300";
    }
    return "hover:bg-[#2a2a2a] transition-colors duration-300";
  };

  return (
    <div className="md:hidden w-full">
      <div className={`flex justify-between items-center py-3 px-4 ${navbarColor} transition-colors duration-300`}>
        <div onClick={handleLogoClick}><Logo /></div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6200] transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-x-0 top-16 bottom-0 ${getMenuBgColor()} z-50 overflow-y-auto`}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-4 space-y-3">
              {menuItems.map((item, i) => {
                const isActive = currentPath === item.path;
                return (
                  <motion.button
                    key={item.path}
                    className={`
                      flex items-center p-4
                      rounded-lg text-white
                      ${isActive ? `bg-opacity-90 border-l-2 border-[#fe6200] ${getNavbarColor(item.path)}` : getHoverColor(item.path)}
                      ${item.highlight ? "bg-gradient-to-r from-[#3D1D1D] to-[#3D2D0D] border-l-4 border-yellow-500" : ""}
                      transition-all duration-300 ease-in-out
                    `}
                    onClick={() => {
                      handleNavigate(item.path)();
                      setIsMenuOpen(false);
                    }}
                    disabled={isNavigating}
                    custom={i}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="mr-3"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span
                      className={`
                        ${item.highlight ? "font-bold" : ""} 
                        ${isActive ? "font-medium" : ""}
                      `}
                    >
                      {item.text}
                    </span>

                    {isActive && (
                      <motion.div
                        className="ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#fe6200]" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;