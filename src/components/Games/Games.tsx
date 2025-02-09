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
    <div className="px-6 mt-30 py-[90px] font-[roboto] mb-[50px] overflow-x-hidden w-full min-h-[100vh] text-white relative
    ">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-lg font-semibold text-center min-[1023px]:hidden text-[#FFFFFF] mb-10  tracking-wide transition-all duration-300 ease-in-out transform relative hover:scale-105 
        max-[370px]:left-[-1px]
        "
      >
        Games
      </motion.h1>
      <div className="grid absolute min-[1023px]:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16 w-full mx-auto justify-center
      max-[468px]:left-[15%]
      max-[400px]:left-[11%]
      max-[370px]:left-[8%]
      ">
        {games.map((game) => (
          <motion.div
            key={game.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px 4px rgba(130,227,0,0.8)" }}
            onClick={() => handleGameClick(game.id)}
            className="w-[300px] h-[200px] rounded-lg  cursor-pointer transition-transform"
          >
            <img
              src={game.svg}
              alt={`Game ${game.id}`}
              className="w-full h-full object-cover rounded-lg "
            />
          </motion.div>
        ))}
      </div>


      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-lg font-semibold text-center max-[1023px]:hidden text-[#FFFFFF] mb-10  tracking-wide transition-all duration-300 ease-in-out transform relative hover:scale-105 
        max-[370px]:left-[-1px]
        "
      >
        Games
      </motion.h1>
      <div className="grid relative max-[1023px]:hidden gap-8 pb-16 w-full mx-auto justify-center
      grid-cols-3 ml-[40px]
      ">
        {games.map((game) => (
          <motion.div
            key={game.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px 4px rgba(130,227,0,0.8)" }}
            onClick={() => handleGameClick(game.id)}
            className="w-[300px] h-[200px] rounded-lg  cursor-pointer transition-transform"
          >
            <img
              src={game.svg}
              alt={`Game ${game.id}`}
              className="w-full h-full object-cover rounded-lg "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
