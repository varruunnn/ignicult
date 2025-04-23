import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, Home, User } from "lucide-react";
import Logo from "../../common/Logo";
import NavMenu from "./NavMenu";
import { NavItem } from "../../types/navigation";
import { getNavbarColor } from "../../utils/getNavbarColor";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navbarColor = getNavbarColor(currentPath);

  const menuButtonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 }
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuVisible(prev => !prev);
  };

  const handleLogoClick = () => {
    handleNavigate("/")();
    closeDesktopMenu();
  };


  const closeDesktopMenu = () => {
    setIsDesktopMenuVisible(false);
  };
  const handleNavigation = (path: string) => {
    return () => {
      handleNavigate(path)();
      closeDesktopMenu();
    };
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDesktopMenuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDesktopMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopMenuVisible]);

  const homeItem = menuItems.find(item => item.path === "/");
  const profileItem = menuItems.find(item => item.path === "/profile");
  const getButtonStyle = (path: string) => {
    if (currentPath === path) {
      const baseColor = getNavbarColor(path).replace("bg-", "");
      if (baseColor.startsWith("[#")) {
        return `bg-${baseColor} bg-opacity-80 border-b-2 border-[#fe6200]`;
      }
      return `bg-[#2A2A2A] border-b-2 border-[#fe6200]`;
    }
    return "";
  };

  return (
    <div className={`hidden md:flex items-center w-full justify-between ${navbarColor} transition-colors duration-300 px-4 py-2 relative`}>
      <div className="flex items-center space-x-4">
        <motion.button
          ref={buttonRef}
          onClick={toggleDesktopMenu}
          className="p-2 rounded-lg transition-colors desktop-menu-toggle hover:bg-[#2A2A2A] relative"
          aria-label="Toggle menu"
          variants={menuButtonVariants}
          initial="initial"
          whileTap="tap"
        >
          <MenuIcon className="w-6 h-6 text-white" />
          {isDesktopMenuVisible && (
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1 h-1 bg-[#fe6200] rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
        
        {homeItem && (
          <motion.button
            onClick={handleNavigation("/")}
            className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-all duration-200 ${getButtonStyle("/")}`}
            disabled={isNavigating}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(42, 42, 42, 0.7)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            <Home className="w-5 h-5 mr-1" />
            <span>Home</span>
          </motion.button>
        )}
        
        {profileItem && (
          <motion.button
            onClick={handleNavigation("/profile")}
            className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-all duration-200 ${getButtonStyle("/profile")}`}
            disabled={isNavigating}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(42, 42, 42, 0.7)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
          >
            <User className="w-5 h-5 mr-1" />
            <span>Profile</span>
          </motion.button>
        )}
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <div onClick={handleLogoClick} className="cursor-pointer"><Logo /></div>
      </div>
      <AnimatePresence>
        {isDesktopMenuVisible && (
          <div ref={menuRef}>
            <NavMenu
              menuItems={menuItems}
              isOpen={isDesktopMenuVisible}
              closeMenu={closeDesktopMenu}
              handleNavigate={handleNavigation} 
              currentPath={currentPath}
              isNavigating={isNavigating}
              variant="desktop"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopNav;