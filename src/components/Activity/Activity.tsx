import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

const GamesActivitySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const games = [
    {
      id: 1,
      name: "Wave Runner",
      score: 0,
      image: "/game10.svg",
      info: {
        ignixEarned: 1,
        acceptedAt: "06/01/2025, 0 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 2,
      name: "Colorship",
      score: 0,
      image: "/game2.svg",
      info: {
        ignixEarned: 2,
        acceptedAt: "06/01/2025, 1 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 3,
      name: "Cricket Catch Pro",
      score: 0,
      image: "/game3.svg",
      info: {
        ignixEarned: 3,
        acceptedAt: "06/01/2025, 2 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    // ... add the remaining games as needed
  ];

  // Re-implemented nextGame and prevGame logic with console.log for debugging
  const nextGame = () => {
    console.log("Next game clicked");
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= games.length ? 0 : newIndex;
    });
    setIsExpanded(false);
  };

  const prevGame = () => {
    console.log("Prev game clicked");
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? games.length - 1 : newIndex;
    });
    setIsExpanded(false);
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const currentGame = games[currentIndex];

  // Framer Motion variants for card and info animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  const infoVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="w-full min-h-screen p-6 bg-gradient-to-b from-[#1D1D1D] to-[#0D0D0D] text-amber-50 shadow-xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with left/right buttons */}
      <div className="flex items-center relative justify-between mt-[15vh] mb-[1.5vh]">
        <h2 className="text-4xl relative left-[50%] translate-x-[-50%] font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 tracking-tight">Game Activity</h2>
        <div className="flex space-x-2">
          <motion.button 
            className="p-2 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-full text-amber-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevGame}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button 
            className="p-2 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-full text-amber-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextGame}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentGame.id}
          className="relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div 
            className="bg-gradient-to-b md:w-[60%] mt-[30px] mx-auto from-[#1A1A1A] to-[#0D0D0D] backdrop-blur-sm rounded-xl overflow-hidden border border-amber-700/50 shadow-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div 
              className="p-5 flex items-center justify-between cursor-pointer"
              onClick={toggleExpand}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-lg flex items-center justify-center shadow-inner">
                  <img src={currentGame.image} alt={currentGame.name} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">{currentGame.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-amber-300 font-medium">Score:</span>
                    <span className="ml-2 bg-amber-950/50 px-3 py-1 rounded-full text-amber-200 text-sm font-medium">{currentGame.score}</span>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-amber-300"
              >
                <ChevronDown size={24} />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  variants={infoVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-5 pb-5"
                >
                  <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] p-5 rounded-lg grid grid-cols-2 gap-4 border border-amber-700/50">
                    <div className="flex flex-col">
                      <p className="text-amber-400 text-sm font-medium mb-1">Ignix Earned</p>
                      <p className="font-bold text-lg text-amber-100">{currentGame.info.ignixEarned}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-amber-400 text-sm font-medium mb-1">Accepted At</p>
                      <p className="text-amber-100">{currentGame.info.acceptedAt}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-amber-400 text-sm font-medium mb-1">Completed At</p>
                      <p className="text-amber-100">{currentGame.info.completedAt}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-amber-400 text-sm font-medium mb-1">Quit At</p>
                      <p className="text-amber-100">{currentGame.info.quitAt}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-amber-400 text-sm font-medium mb-1">DNF</p>
                      <p className="text-amber-100">{currentGame.info.dnf}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-amber-300' : 'bg-amber-700/50'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={() => {
              setCurrentIndex(index);
              setIsExpanded(false);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GamesActivitySection;
