import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Menu as MenuIcon,
  Home,
  User,
  Trophy,
  Award,
  Star,
  Activity,
  Gift,
  HelpCircle,
  GamepadIcon,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Logo = () => (
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

const menuItems = [
  { icon: <Home className="w-5 h-5 mr-2" />, text: "Home", path: "/" },
  {
    icon: <User className="w-5 h-5 mr-2" />,
    text: "Profile",
    path: "/profile",
  },
  {
    icon: <GamepadIcon className="w-5 h-5 mr-2" />,
    text: "Games",
    path: "/games",
  },
  {
    icon: <Trophy className="w-5 h-5 mr-2" />,
    text: "Leaderboard",
    path: "/leaderboard",
  },
  {
    icon: <Award className="w-5 h-5 mr-2" />,
    text: "Tournaments",
    path: "/tournaments",
  },
  {
    icon: <Star className="w-5 h-5 mr-2 text-yellow-400" />,
    text: "Premium Tournaments",
    path: "/premium-tournaments",
    highlight: true,
  },
  {
    icon: <Activity className="w-5 h-5 mr-2" />,
    text: "Activity",
    path: "/activity",
  },
  {
    icon: <Gift className="w-5 h-5 mr-2" />,
    text: "Rewards",
    path: "/rewards",
  },
  {
    icon: <HelpCircle className="w-5 h-5 mr-2" />,
    text: "Support",
    path: "/support",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = useCallback((path: string) => () => {
    if (isNavigating || path === location.pathname) {
      setMenuOpen(false);
      setIsDesktopMenuVisible(false);
      return;
    }
    
    setIsNavigating(true);
    setMenuOpen(false);
    setIsDesktopMenuVisible(false);
    
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setIsNavigating(false), 100);
    }, 10);
  }, [navigate, location.pathname, isNavigating]);

  const getNavbarColor = useCallback(() => {
    switch (location.pathname) {
      case "/":
        return "bg-[#1e1d1d]";
      case "/profile":
        return "bg-[#0d0d0d]";
      case "/games":
        return "bg-[#040404]";
      case "/leaderboard":
        return "bg-[#000001]";
      case "/support":
        return "bg-[#1c0b0b]";
      case "/rewards":
        return "bg-[#111111]";
      case "/activity":
        return "bg-[#1c1c1c]";
      case "/tournaments":
        return "bg-[#111827]";
      case "/premium-tournaments":
        return "bg-[#111827]";
      default:
        return "bg-[#0d0d0d]";
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((menuOpen || isDesktopMenuVisible) && 
          e.target && 
          !(e.target as HTMLElement).closest('.menu-container') && 
          !(e.target as HTMLElement).closest('.desktop-menu-toggle')) {
        setMenuOpen(false);
        setIsDesktopMenuVisible(false);
      }
    };

    if (menuOpen || isDesktopMenuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, isDesktopMenuVisible]);

  useEffect(() => {
    setMenuOpen(false);
    setIsDesktopMenuVisible(false);
  }, [location.pathname]);

  const menuButtonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 }
  };

  const menuContainerVariants = {
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
  };

  const desktopMenuContainerVariants = {
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

  const menuItemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0 }
  };

  const desktopMenuItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 }
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

  const toggleDesktopMenu = () => {
    setIsDesktopMenuVisible(prev => !prev);
  };
  return (
    <div>
      <header
        className={`w-full z-50 backdrop-blur-lg ${getNavbarColor()} transition-all duration-200
          ${isScrolled ? 'fixed top-0 shadow-md' : 'sticky top-0'}
          ${location.pathname === "/" ? "" : "w-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setMenuOpen(prev => !prev)}
                className="p-2 md:hidden rounded-lg  transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
                aria-label="Toggle menu"
                variants={menuButtonVariants}
                initial="initial"
                whileTap="tap"
              >
                <MenuIcon className="w-6 h-6 text-white" />
              </motion.button>
              

              <div className="hidden md:grid grid-cols-5 gap-4 px-4">
              <motion.button
                onClick={toggleDesktopMenu}
                className="p-2  rounded-lg  transition-colors "
                aria-label="Toggle menu"
                variants={menuButtonVariants}
                initial="initial"
                whileTap="tap"
              >
                <MenuIcon className="w-6 h-6 text-white" />
              </motion.button>
                <motion.button
                  onClick={handleNavigate("/")}
                  className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-colors ${location.pathname === "/" ? "bg-[#2A2A2A]" : ""}`}
                  disabled={isNavigating}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                >
                  <Home className="w-5 h-5 mr-1" />
                  <span>Home</span>
                </motion.button>
                <motion.button
                  onClick={handleNavigate("/profile")}
                  className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white transition-colors ${location.pathname === "/profile" ? "bg-[#2A2A2A]" : ""}`}
                  disabled={isNavigating}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.1 }}
                >
                  <User className="w-5 h-5 mr-1" />
                  <span>Profile</span>
                </motion.button>
              </div>
            </div>

            <div className="md:hidden">
              <Logo />
            </div>
            <div className="hidden md:block">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-[60]"
              onClick={() => setMenuOpen(false)}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <motion.div
              className="menu-container fixed z-[70] bg-black/95 border border-[#fe6200] border-[0.7px] shadow-[0_0_100px_rgba(254,98,0,0.4)] rounded-xl text-white"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                top: '0',
                left: '0',
                overflow: 'auto'
              }}
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId="mobileMenuContainer"
            >
              <div className="flex justify-between items-center p-6">
                <Logo />
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
                  aria-label="Close menu"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              <div className="flex flex-col p-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.path}
                    onClick={handleNavigate(item.path)}
                    disabled={isNavigating}
                    className={`
                      flex items-center p-3 mb-2 
                      cursor-pointer rounded-xl 
                      transition-all duration-200
                      focus:outline-none focus:ring-1 focus:ring-[#fe6200]
                      ${location.pathname === item.path ? "bg-black" : ""}
                      ${item.highlight
                        ? "bg-gradient-to-r from-[#3D1D1D] to-[#3D2D0D] border-l-4 border-yellow-500"
                        : ""
                      }
                    `}
                    variants={menuItemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span className={`${item.highlight ? "font-bold" : ""}`}>
                      {item.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDesktopMenuVisible && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[60] hidden md:block"
              onClick={() => setIsDesktopMenuVisible(false)}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <motion.div
              className="menu-container fixed z-[70] hidden md:block bg-black/95 border border-[#fe6200] border-[0.7px] rounded-xl text-white left-[28%] min-[1556px]:left-[35%]"
              style={{
                width: '50%',
                maxWidth: '800px',
                maxHeight: '80vh',
                top: '5rem',
                transform: 'translateX(-50%)',
                overflow: 'auto'
              }}
              variants={desktopMenuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId="desktopMenuContainer"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white">Navigation</h2>
                <motion.button
                  onClick={() => setIsDesktopMenuVisible(false)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
                  aria-label="Close menu"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="grid grid-cols-3 gap-3 p-6">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.path}
                    onClick={handleNavigate(item.path)}
                    disabled={isNavigating}
                    className={`
                      flex items-center p-3
                      cursor-pointer rounded-xl 
                      transition-all duration-200
                      focus:outline-none focus:ring-1 focus:ring-[#fe6200]
                      ${location.pathname === item.path 
                        ? "bg-[#1A1A1A] border-l-2 border-[#fe6200]" 
                        : "hover:bg-[#1A1A1A]"}
                      ${item.highlight
                        ? "bg-gradient-to-r from-[#3D1D1D] to-[#3D2D0D] border-l-4 border-yellow-500"
                        : ""
                      }
                    `}
                    variants={desktopMenuItemVariants}
                    whileHover={{ scale: 1.03, x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span className={`${item.highlight ? "font-bold" : ""}`}>
                      {item.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;