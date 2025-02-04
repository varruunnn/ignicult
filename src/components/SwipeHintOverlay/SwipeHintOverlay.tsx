import { useState, useEffect } from 'react';

const SwipeHintOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute max-[468px]:hidden max-[399px]:block top-[550px] left-[140px] z-50 pointer-events-none">
      <div className="flex flex-col items-center animate-pulse opacity-80">
        <span className="text-xl font-semibold text-white mb-4">Swipe</span>
        <div className="relative w-16 h-16">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="w-16 h-16 text-white absolute animate-[swipe_2s_ease-in-out_infinite]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 13l-4 4m0 0l-4-4m4 4V3"></path>
            <path d="M20 6h-8a2 2 0 00-2 2v12"></path>
          </svg>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-30 transform translate-x-8 translate-y-8 animate-[trail_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes swipe {
          0%, 100% { transform: translateX(0) rotate(-45deg); opacity: 0.8; }
          50% { transform: translateX(-50px) rotate(-45deg); opacity: 0.4; }
        }
        @keyframes trail {
          0%, 100% { transform: translateX(0) translateY(8px); opacity: 0.3; }
          50% { transform: translateX(-50px) translateY(8px); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default SwipeHintOverlay;