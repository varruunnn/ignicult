import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import NavItem from "../../common/NavItem";
import Logo from "../../common/Logo";
import { NavMenuProps } from "../../types/navigation";

const NavMenu: React.FC<NavMenuProps> = ({
  menuItems,
  isOpen,
  closeMenu,
  handleNavigate,
  currentPath,
  isNavigating,
  variant
}) => {
  const isMobile = variant === 'mobile';

  const menuContainerVariants = isMobile
    ? {
        hidden: {
          opacity: 0,
          scale: 0.98,
          y: -10
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { 
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1], 
            staggerChildren: 0.03,
            delayChildren: 0.1
          }
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          y: -10,
          transition: { 
            duration: 0.15,
            ease: "easeInOut"
          }
        }
      }
    : {
        hidden: {
          opacity: 0,
          scale: 0.98,
          y: 10
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { 
            duration: 0.2,
            ease: "easeOut",
            staggerChildren: 0.02,
            delayChildren: 0.05
          }
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          y: 10,
          transition: { 
            duration: 0.15,
            ease: "easeInOut"
          }
        }
      };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.2 } 
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.15 } 
    }
  };

  const containerStyles = isMobile
    ? {
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        top: '0',
        left: '0',
        overflow: 'auto'
      }
    : {
        width: '50%',
        maxWidth: '800px',
        maxHeight: '80vh',
        top: '5rem',
        left: '28%',
        transform: 'translateX(-50%)',
        overflow: 'auto'
      };

  const layoutId = isMobile ? "mobileMenuContainer" : "desktopMenuContainer";

  return (
    <>
      <motion.div
        className={`fixed inset-0 bg-black/${isMobile ? '70' : '50'} z-[60] ${!isMobile && 'hidden md:block'}`}
        onClick={closeMenu}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      />

      <motion.div
        className={`menu-container fixed z-[70] ${!isMobile && 'hidden md:block'} bg-black/95 border border-[#fe6200] border-[0.7px] ${isMobile ? '' : 'min-[1556px]:left-[35%]'} ${isMobile ? 'shadow-[0_0_100px_rgba(254,98,0,0.4)]' : ''} rounded-xl text-white`}
        style={containerStyles}
        variants={menuContainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layoutId={layoutId}
      >
        <div className={`flex justify-between items-center p-${isMobile ? '6' : '4'} ${!isMobile && 'border-b border-gray-800'}`}>
          {isMobile ? <Logo /> : <h2 className="text-xl font-bold text-white">Navigation</h2>}
          <motion.button
            onClick={closeMenu}
            className={`p-2 rounded-full ${!isMobile && 'hover:bg-gray-800'} transition-transform focus:outline-none focus:ring-2 focus:ring-[#fe6200]`}
            aria-label="Close menu"
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <X className={`w-${isMobile ? '6' : '5'} h-${isMobile ? '6' : '5'} text-white`} />
          </motion.button>
        </div>

        <div className={isMobile ? "flex flex-col p-4" : "grid grid-cols-3 gap-3 p-6"}>
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              onClick={handleNavigate(item.path)}
              isActive={currentPath === item.path}
              isNavigating={isNavigating}
              variant={variant}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavMenu;