import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigate = useCallback((path: string) => () => {
    if (isNavigating || path === location.pathname) {
      return;
    }
    
    setIsNavigating(true);
    
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setIsNavigating(false), 100);
    }, 10);
  }, [navigate, location.pathname, isNavigating]);

  return {
    handleNavigate,
    isNavigating,
    currentPath: location.pathname
  };
};