import React, { useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = useCallback((path: string) => () => {
    if (isNavigating || path === location.pathname) {
      setMenuOpen(false);
      return;
    }
    
    setIsNavigating(true);
    setMenuOpen(false);
    

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
      if (menuOpen && !(e.target as Element).closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);


  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
              <button
                onClick={() => setMenuOpen(prev => !prev)}
                className="p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-6 h-6 text-white" />
              </button>

              <div className="hidden md:grid grid-cols-5 gap-4 px-4">
                <button
                  onClick={handleNavigate("/")}
                  className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white  transition-colors ${location.pathname === "/" ? "bg-[#2A2A2A]" : ""}`}
                  disabled={isNavigating}
                >
                  <Home className="w-5 h-5 mr-1" />
                  <span>Home</span>
                </button>
                <button
                  onClick={handleNavigate("/profile")}
                  className={`flex items-center px-3 cursor-pointer py-2 rounded-lg text-white  transition-colors ${location.pathname === "/profile" ? "bg-[#2A2A2A]" : ""}`}
                  disabled={isNavigating}
                >
                  <User className="w-5 h-5 mr-1" />
                  <span>Profile</span>
                </button>
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
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-[60] transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          />

          <div className="menu-container fixed inset-0 text-white md:w-[70%] md:h-[50%] md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] bg-black/95 z-[70] flex flex-col overflow-y-auto border border-[#fe6200] border-[0.7px] shadow-[0_0_100px_rgba(254,98,0,0.4)] rounded-xl transition-all duration-200 ease-out">
            <div className="flex justify-between items-center p-6">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full  transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-[#fe6200]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col md:relative md:top-[50%] md:translate-y-[-90%] md:grid md:grid-cols-5 md:gap-8 md:px-10 py-8 gap-3 mx-auto md:max-w-[90%]">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={handleNavigate(item.path)}
                  disabled={isNavigating}
                  className={`flex items-center p-4 md:p-0 md:w-full cursor-pointer rounded-xl transition-all duration-200 hover:pl-6  focus:outline-none focus:ring-1 focus:ring-[#fe6200]
                    ${location.pathname === item.path ? "bg-black" : ""}
                    ${item.highlight
                      ? "bg-gradient-to-r from-[#3D1D1D] to-[#3D2D0D] border-l-4 border-yellow-500"
                      : ""
                    }`}
                >
                  {item.icon}
                  <span className={`${item.highlight ? "font-bold" : ""}`}>
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;