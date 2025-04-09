import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const Games = () => {
  const games = Array.from({ length: 15 }, (_, i) => i + 1);

  const handleGameClick = (gameNumber: number) => {
    console.log(`Game ${gameNumber} clicked`);
    alert(`Game ${gameNumber} clicked`);
  };

  return (
    <div
      className="bg-gradient-to-br from-black via-[#050505] to-[#050505] min-h-screen p-8
    max-[365px]:mt-[64px]
    "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span className=" text-5xl font-bold font-rubik text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 inline-block">
          Game Collection
          </motion.span>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our selection of premium games and embark on epic adventures
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate="show"
        >
          {games.map((gameNumber) => (
            <motion.div
              key={gameNumber}
              variants={itemVariants}
              className="relative group"
            >
              <motion.button
                onClick={() => handleGameClick(gameNumber)}
                className="w-full bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-lg group-hover:shadow-purple-500/20 transition duration-300"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <motion.img
                    src={`/game${gameNumber}.jpg`}
                    alt={`Game ${gameNumber}`}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

                  <motion.div
                    className="absolute bottom-0 left-0 w-full p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Adventure
                      </span>
                      <span className="text-gray-300 text-sm">4.8 ★</span>
                    </div>
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Games;
