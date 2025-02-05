import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Activity = () => {
  const games = [
    { id: 1, name: "Wave Runner", score: 0, image: "/game1.svg" },
    { id: 2, name: "Colorship", score: 0, image: "/game1.svg" },
    { id: 3, name: "Sky Dash", score: 0, image: "/game1.svg" },
    { id: 4, name: "Rocket Leap", score: 0, image: "/game1.svg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const floatingAnim = {
    y: ["0%", "-10%", "0%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 w-full text-white">
      {/* First Section – Activity Card */}
      <section className="w-full flex flex-col mt-[-300px] items-center relative">
        <div className="bg-[#1A1A1A] border  border-green-600 rounded-2xl p-4 w-11/12 max-w-md h-[129px] shadow-lg flex items-center justify-between overflow-hidden">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full flex justify-between items-center"
            >
              <div>
                <motion.h2
                  className="text-[#7FFF00] text-2xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {games[currentIndex].name}
                </motion.h2>
                <p className="text-[#FFD700] text-xl font-mono">Score</p>
                <motion.p
                  className="text-[#FFD700] text-4xl font-mono mt-1"
                  key={games[currentIndex].score}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {games[currentIndex].score}
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={games[currentIndex].image}
                  alt={games[currentIndex].name}
                  className="w-[93px] h-[93px] object-contain"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Floating Chevron */}
        <motion.div
          className="absolute left-[43%]  transform -translate-x-1/2 bg-[#7FFF00] rounded-full p-2 mt-[-25px]"
          animate={floatingAnim}
          style={{ top: "calc(50% + 70px)" }} // Adjusts based on card height and spacing
        >
          <ChevronDown className="text-black h-6 w-6" />
        </motion.div>
      </section>

      {/* Second Section – Navigation Buttons */}
      <section className="w-full flex flex-col items-center mt-10">
        <motion.div
          className="flex items-center justify-center bg-black border border-gray-500 rounded-full px-6 py-3 w-11/12 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={handlePrev}
            className="p-2 text-[#7FFF00] hover:text-green-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.div
            className="px-6 text-white text-lg"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {currentIndex + 1}/{games.length}
          </motion.div>
          <motion.button
            onClick={handleNext}
            className="p-2 text-[#7FFF00] hover:text-green-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Activity;
