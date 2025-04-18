import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
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
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useNavigation } from "../../hooks/useNavigation";
import { getNavbarColor } from "../../utils/getNavbarColor";
import { NavItem } from "../../types/navigation";

// Menu items configuration
const menuItems: NavItem[] = [
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

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleNavigate, isNavigating, currentPath } = useNavigation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target && 
          !(e.target as HTMLElement).closest('.menu-container') && 
          !(e.target as HTMLElement).closest('.desktop-menu-toggle')) {
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header
        className={`w-full z-50 backdrop-blur-lg ${getNavbarColor(location.pathname)} transition-all duration-200
          ${isScrolled ? 'fixed top-0 shadow-md' : 'sticky top-0'}
          ${location.pathname === "/" ? "" : "w-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Navigation */}
            <MobileNav 
              menuItems={menuItems}
              handleNavigate={handleNavigate}
              currentPath={currentPath}
              isNavigating={isNavigating}
            />
            <DesktopNav 
              menuItems={menuItems}
              handleNavigate={handleNavigate}
              currentPath={currentPath}
              isNavigating={isNavigating}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;