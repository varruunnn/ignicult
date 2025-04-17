import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import game1Image from '../../assets/gameImages/game1.jpg';
import game2Image from '../../assets/gameImages/game2.jpg';
import game3Image from '../../assets/gameImages/game3.jpg';
const GamesActivitySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);
  
  const activities = [
    {
      id: 1,
      name: "Cricket Catch Pro",
      score: 250,
      image: game1Image,
      info: {
        ignixEarned: 25,
        acceptedAt: "06/01/2025, 0 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 2,
      name: "Cricket Power Play",
      score: 380,
      image: game2Image,
      info: {
        ignixEarned: 38,
        acceptedAt: "06/01/2025, 1 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 3,
      name: "Wave Run",
      score: 190,
      image: game3Image,
      info: {
        ignixEarned: 19,
        acceptedAt: "06/01/2025, 2 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
  ];

  const ACTIVITIES_PER_PAGE = 4;
  const totalPages = Math.ceil(activities.length / ACTIVITIES_PER_PAGE);
  
  const activitiesOnCurrentPage = activities.slice(
    currentPage * ACTIVITIES_PER_PAGE, 
    (currentPage + 1) * ACTIVITIES_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setExpandedActivity(null);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setExpandedActivity(null);
  };

  const toggleExpand = (id: number) => {
    setExpandedActivity((prev) => (prev === id ? null : id));
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  const infoVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="bg-gradient-to-br from-black via-[#050505] to-[#050505] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="text-5xl font-bold font-rubik text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 inline-block">
            Game Activity
          </motion.span>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Track your gaming progress and achievements
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activitiesOnCurrentPage.map((activity) => (
            <motion.div
              key={activity.id}
              variants={cardVariants}
              className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <motion.div 
                className="p-5 flex items-center justify-between cursor-pointer"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                onClick={() => toggleExpand(activity.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-inner border border-gray-700">
                    <img src={activity.image} alt={activity.name} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">{activity.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400 font-medium">Score:</span>
                      <span className="ml-2 bg-yellow-900/30 px-3 py-1 rounded-full text-yellow-300 text-sm font-medium">{activity.score}</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedActivity === activity.id ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-yellow-400"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </motion.div>
              
              <AnimatePresence>
                {expandedActivity === activity.id && (
                  <motion.div
                    variants={infoVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-5 pb-5"
                  >
                    <div className="bg-gray-800/70 p-5 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4 border border-gray-700">
                      <div className="flex flex-col">
                        <p className="text-yellow-400 text-sm font-medium mb-1">Ignix Earned</p>
                        <p className="font-bold text-lg text-yellow-200">{activity.info.ignixEarned}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-yellow-400 text-sm font-medium mb-1">Accepted At</p>
                        <p className="text-gray-200">{activity.info.acceptedAt}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-yellow-400 text-sm font-medium mb-1">Completed At</p>
                        <p className="text-gray-200">{activity.info.completedAt}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-yellow-400 text-sm font-medium mb-1">Quit At</p>
                        <p className="text-gray-200">{activity.info.quitAt}</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-yellow-400 text-sm font-medium mb-1">DNF</p>
                        <p className="text-gray-200">{activity.info.dnf}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination controls */}
        <div className="mt-10 flex justify-center items-center space-x-6">
          <motion.button 
            className="p-2 bg-gray-800 rounded-full text-yellow-400 shadow-lg border border-gray-700"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentPage 
                    ? 'bg-gradient-to-r from-red-600 via-yellow-500 to-red-600' 
                    : 'bg-gray-700'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentPage(index);
                  setExpandedActivity(null);
                }}
              />
            ))}
          </div>
          
          <motion.button 
            className="p-2 bg-gray-800 rounded-full text-yellow-400 shadow-lg border border-gray-700"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default GamesActivitySection;