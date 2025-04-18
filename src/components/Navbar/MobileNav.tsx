import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import Logo from "../../common/Logo";
import NavMenu from "./NavMenu";
import { NavItem } from "../../types/navigation";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const menuButtonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <div className="flex items-center space-x-4 md:hidden">
        <motion.button
          onClick={() => setMenuOpen(prev => !prev)}
          className="p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
          aria-label="Toggle menu"
          variants={menuButtonVariants}
          initial="initial"
          whileTap="tap"
        >
          <MenuIcon className="w-6 h-6 text-white" />
        </motion.button>
      </div>
      <div className="md:hidden">
        <Logo />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <NavMenu
            menuItems={menuItems}
            isOpen={menuOpen}
            closeMenu={() => setMenuOpen(false)}
            handleNavigate={(path) => {
              const navigate = handleNavigate(path);
              return () => {
                setMenuOpen(false);
                navigate();
              };
            }}
            currentPath={currentPath}
            isNavigating={isNavigating}
            variant="mobile"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;