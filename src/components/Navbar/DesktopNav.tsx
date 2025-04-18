import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, Home, User } from "lucide-react";
import Logo from "../../common/Logo";
import NavMenu from "./NavMenu";
import { NavItem } from "../../types/navigation";

interface DesktopNavProps {
  menuItems: NavItem[];
  handleNavigate: (path: string) => () => void;
  currentPath: string;
  isNavigating: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  menuItems,
  handleNavigate,
  currentPath,
  isNavigating
}) => {
  const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState(false);

  const menuButtonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 }
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuVisible(prev => !prev);
  };

  const closeDesktopMenu = () => {
    setIsDesktopMenuVisible(false);
  };

  // Get the home and profile menu items for the quick access buttons
  const homeItem = menuItems.find(item => item.path === "/");
  const profileItem = menuItems.find(item => item.path === "/profile");

  return (
    <div className="hidden md:flex items-center w-full justify-between">
      <div className="grid grid-cols-5 gap-4 px-4">
        <motion.button
          onClick={toggleDesktopMenu}
          className="p-2 rounded-lg transition-colors desktop-menu-toggle"
          aria-label="Toggle menu"
          variants={menuButtonVariants}
          initial="initial"
          whileTap="tap"
        >
          <MenuIcon className="w-6 h-6 text-white" />
        </motion.button>
        
        {homeItem && (
          <motion.button
            onClick={handleNavigate("/")}
            className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-colors ${currentPath === "/" ? "bg-[#2A2A2A]" : ""}`}
            disabled={isNavigating}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            <Home className="w-5 h-5 mr-1" />
            <span>Home</span>
          </motion.button>
        )}
        
        {profileItem && (
          <motion.button
            onClick={handleNavigate("/profile")}
            className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-colors ${currentPath === "/profile" ? "bg-[#2A2A2A]" : ""}`}
            disabled={isNavigating}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            <User className="w-5 h-5 mr-1" />
            <span>Profile</span>
          </motion.button>
        )}
      </div>
      
      <Logo />

      <AnimatePresence>
        {isDesktopMenuVisible && (
          <NavMenu
            menuItems={menuItems}
            isOpen={isDesktopMenuVisible}
            closeMenu={closeDesktopMenu}
            handleNavigate={handleNavigate}
            currentPath={currentPath}
            isNavigating={isNavigating}
            variant="desktop"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNav;