import React from "react";
import { motion } from "framer-motion";

const games = [
  { id: 1, svg: "/game0.svg" },
  { id: 2, svg: "/game2.svg" },
  { id: 3, svg: "/game3.svg" },
  { id: 4, svg: "/game4.svg" },
  { id: 5, svg: "/game5.svg" },
  { id: 6, svg: "/game6.svg" },
  { id: 7, svg: "/game7.svg" },
  { id: 8, svg: "/game8.svg" },
  { id: 9, svg: "/game9.svg" },
  { id: 10, svg: "/game10.svg" },
];

export default function GamingSection() {
  const handleGameClick = (id: number) => {
    alert(`Game ID: ${id} clicked!`);
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    },
  };

  return (
    <div className="px-6 mt-30 py-[90px] font-[roboto] w-full h-[100vh] text-white overflow-y-auto relative">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-5xl font-extrabold text-center text-[#82E300] mb-10 shadow-lg shadow-[#82E300]/50 tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#66b300]"
      >
        Games
      </motion.h1>
      <div className="grid absolute max-[399px]:left-[9%] left-[14%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {games.map((game) => (
          <motion.div
            key={game.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px 4px rgba(130,227,0,0.8)" }}
            onClick={() => handleGameClick(game.id)}
            className="w-[300px] h-[200px] rounded-lg shadow-lg cursor-pointer transition-transform"
          >
            <img
              src={game.svg}
              alt={`Game ${game.id}`}
              className="w-full h-full object-cover rounded-lg shadow-[0_0_20px_4px_rgba(130,227,0,0.8)]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
