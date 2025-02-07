import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import SwipeHintOverlay from "../SwipeHintOverlay/SwipeHintOverlay";

interface Player {
  rank: number;
  wallet: string;
  score: number;
}

const PremiumTournaments = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;
  const players: Player[] = [
    { rank: 1, wallet: "d0af8c...908e", score: 6038 },
    { rank: 2, wallet: "d0af8c...908e", score: 6038 },
    { rank: 3, wallet: "d0af8c...908e", score: 6038 },
    { rank: 4, wallet: "d0af8c...908e", score: 6038 },
    { rank: 5, wallet: "d0af8c...908e", score: 6038 },
    { rank: 6, wallet: "d0af8c...908e", score: 6038 },
    { rank: 8, wallet: "d0af8c...908e", score: 6038 },
    { rank: 9, wallet: "d0af8c...908e", score: 6038 },
    { rank: 10, wallet: "d0af8c...908e", score: 6038 },
  ];

  useEffect(() => {
    setCurrentPage(0);
  }, []);

  const podiumPlayers = players.slice(0, 3);
  const regularPlayers = players.slice(3);
  const totalPages = Math.ceil(regularPlayers.length / itemsPerPage);
  const paginatedPlayers = regularPlayers.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)),
    onSwipedRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="min-h-screen w-full mt-[120px] text-white overflow-y-auto overflow-x-hidden p-4">
      <SwipeHintOverlay />
      <h2 className="text-white text-lg font-semibold mb-4 text-center">
        Premium Tournaments
      </h2>
      <div className="flex items-center bg-black border-[1px] border-[#F94EA6] mt-5 py-2 left-[-20px] relative rounded-full h-[47px] w-[80vw] max-w-md mx-auto">
        <select
          className="flex-grow bg-transparent appearance-none text-[#F94EA6] outline-none p-2 rounded-md"
          defaultValue="Cricket Catch Pro"
          style={{
            backgroundImage: 'url("/downpt.svg")',
            backgroundPosition: "right 10px center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <option value="Cricket Catch Pro">Cricket Catch Pro</option>
          <option value="Tournament 1">Tournament 1</option>
          <option value="Tournament 2">Tournament 2</option>
        </select>
      </div>
      <button className="ml-2 p-2 right-[10px] top-[186px] absolute rounded-full bg-gradient-to-r from-[#EE49FD] via-[#F94EA6] to-[#C253F5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[23px] h-[25px]"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="border-t-[1.8px] max-[361px]:w-[115%] border-[#F94EA6] mt-7 bg-black rounded-[30px] w-[107%] ml-[-22px]"
      >
        <h2 className="relative mt-[10px] text-center text-xl text-[#F94EA6] font-extrabold">
          January 2025
        </h2>
        <div
          className="flex justify-center items-end gap-8 mt-10 mb-8 
                     max-[468px]:gap-7 max-[400px]:gap-6 max-[375px]:gap-5 max-[370px]:gap-4"
        >
          <div className="mt-[-28px] relative">
            {/* Second Place */}
            <div className="absolute text-center top-[47%] left-[26%] max-[468px]:left-[-4%] max-[468px]:top-[88%] max-[400px]:left-[-3%] max-[375px]:left-[-3%]">
              <div className="text-[12px] text-[#B9B9B9]">
                {podiumPlayers[1]?.wallet}
              </div>
              <div className="text-sm text-[#FEA50D] font-semibold">
                {podiumPlayers[1]?.score}
              </div>
            </div>
            <div className="absolute text-center top-[47%] left-[69%] max-[468px]:left-[73%] max-[468px]:top-[88%] max-[400px]:left-[73%] max-[375px]:left-[73%]">
              <div className="text-[12px] text-[#B9B9B9]">
                {podiumPlayers[2]?.wallet}
              </div>
              <div className="text-sm text-[#FEA50D] font-semibold">
                {podiumPlayers[2]?.score}
              </div>
            </div>
            <img src="/threee.svg" alt="podium" />
            <div className="absolute text-center top-[42%] left-[41%] max-[468px]:left-[36%] max-[468px]:top-[58%] max-[400px]:left-[35%] max-[375px]:left-[35%]">
              <div className="text-[12px] text-[#B9B9B9]">
                {podiumPlayers[0]?.wallet}
              </div>
              <div className="text-sm text-[#FEA50D] font-semibold">
                {podiumPlayers[0]?.score}
              </div>
            </div>
            <div
              className="bg-[#FFCA28] font-semibold text-black justify-center w-[30px] text-center rounded-3xl h-[30px] 
                         absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[-58px]"
            >
              1
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[20px] items-center w-full h-full">
          <div
            className="border border-[#565656] bg-[#3E3E3E] rounded-lg w-[80%] max-w-[90%] overflow-hidden"
            {...swipeHandlers}
          >
            <div className="grid grid-cols-3 bg-[#3E3E3E] text-[#EE49FD] font-bold text-center py-3">
              <span className="px-2">Rank</span>
              <span className="px-2">Wallet Address</span>
              <span className="px-2">Top Score</span>
            </div>
            {paginatedPlayers.map((player) => (
              <div
                key={player.rank}
                className="grid grid-cols-3 text-center text-[#B9B9B9] py-2 border-t border-gray-600"
              >
                <span className="px-2">{player.rank}</span>
                <span className="truncate px-2">{player.wallet}</span>
                <span className="px-2">{player.score}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex relative top-[-17px] mb-[100px] justify-center mt-6 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="bg-[#1e1e1e] text-[#F94EA6] border border-[#F94EA6] px-4 py-2 rounded hover:bg-[#F94EA6] hover:text-black transition-all disabled:opacity-50"
          >
            &larr; Prev
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage >= totalPages - 1}
            className="bg-[#1e1e1e] text-[#F94EA6] border border-[#F94EA6] px-4 py-2 rounded hover:bg-[#F94EA6] hover:text-black transition-all disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumTournaments;
