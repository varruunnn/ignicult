import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Activity = () => {
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
    {
      id: 4,
      name: "Cricket PowerPlay",
      score: 0,
      image: "/game4.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 5,
      name: "Fire Number Up",
      score: 0,
      image: "/game8.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 6,
      name: "Drop The Number",
      score: 0,
      image: "/game5.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 7,
      name: "Snake Color Break",
      score: 0,
      image: "/game6.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 8,
      name: "Number Snake",
      score: 0,
      image: "/game7.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
    {
      id: 9,
      name: "Two Colors",
      score: 0,
      image: "/game9.svg",
      info: {
        ignixEarned: 4,
        acceptedAt: "06/01/2025, 3 GMT",
        completedAt: "06/01/2025, GMT",
        quitAt: "N/A",
        dnf: "No",
      },
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    setShowInfo(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
    setShowInfo(false);
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
      duration: 1,
      repeat: 1,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-8 w-full text-white">
      <section className="w-full flex flex-col mt-[-300px] items-center relative">
        <div className="bg-[#1A1A1A] border border-green-600 rounded-2xl p-4 w-11/12 max-w-md h-[129px] shadow-lg flex items-center justify-between overflow-hidden">
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
        <motion.div
          onClick={() => setShowInfo((prev) => !prev)}
          className="absolute bottom-0 transform -translate-x-1/2 cursor-pointer"
          initial={{ rotate: 0, y: 0 }}
          animate={{
            rotate: showInfo ? 180 : 0,
            ...floatingAnim,
          }}
        >
          <img
            src="/activityy.svg"
            alt="Toggle Activity Info"
            className="w-8 h-8"
          />
        </motion.div>

        <div
          className="flex flex-col bg-blue items-center mt-4
        "
        >
          <AnimatePresence>
            {showInfo && (
              <motion.div
                className="bg-black p-4 rounded-lg mt-2 w-11/12 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  <span className="font-semibold">IGNIx Earned:</span>{" "}
                  {games[currentIndex].info.ignixEarned}
                </p>
                <p>
                  <span className="font-semibold">Accepted At:</span>{" "}
                  {games[currentIndex].info.acceptedAt}
                </p>
                <p>
                  <span className="font-semibold">Completed At:</span>{" "}
                  {games[currentIndex].info.completedAt}
                </p>
                <p>
                  <span className="font-semibold">Quit At:</span>{" "}
                  {games[currentIndex].info.quitAt}
                </p>
                <p>
                  <span className="font-semibold">DNF:</span>{" "}
                  {games[currentIndex].info.dnf}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
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
