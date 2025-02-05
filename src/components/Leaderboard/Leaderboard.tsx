import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import SwipeHintOverlay from "../SwipeHintOverlay/SwipeHintOverlay";

const Leaderboard: React.FC = () => {
  type GameName = "Cricket Catch Pro" | "Soccer Stars" | "Basketball Blitz";
  const mockData: Record<
    GameName,
    Record<
      "Daily" | "Weekly" | "Monthly" | "Overall",
      { rank: number; wallet: string; score: number }[]
    >
  > = {
    "Cricket Catch Pro": {
      Daily: [
        { rank: 1, wallet: "d0af8c...908e", score: 7055 },
        { rank: 2, wallet: "d0af8c...908e", score: 7055 },
        { rank: 3, wallet: "d0af8c...908e", score: 7055 },
        { rank: 4, wallet: "d0af8c...908e", score: 7055 },
        { rank: 5, wallet: "d0af8c...908e", score: 7055 },
        { rank: 6, wallet: "d0af8c...908e", score: 7055 },
        { rank: 7, wallet: "d0af8c...908e", score: 7055 },
        { rank: 8, wallet: "d0af8c...908e", score: 7055 },
        { rank: 9, wallet: "d0af8c...908e", score: 7055 },
        { rank: 10, wallet: "d0af8c...908e", score: 7055 },
        { rank: 11, wallet: "d0af8c...908e", score: 7055 },
      ],
      Weekly: [
        { rank: 1, wallet: "d0af8c...908e", score: 7055 },
        { rank: 2, wallet: "d0af8c...908e", score: 7055 },
        { rank: 3, wallet: "d0af8c...908e", score: 7055 },
      ],
      Monthly: [
        { rank: 1, wallet: "d0af8c...908e", score: 7055 },
        { rank: 2, wallet: "d0af8c...908e", score: 7055 },
        { rank: 3, wallet: "d0af8c...908e", score: 7055 },
      ],
      Overall: [
        { rank: 1, wallet: "d0af8c...908e", score: 7055 },
        { rank: 2, wallet: "d0af8c...908e", score: 7055 },
        { rank: 3, wallet: "d0af8c...908e", score: 7055 },
      ],
    },
    "Soccer Stars": {
      Daily: [
        { rank: 1, wallet: "abcd12...ef34", score: 6500 },
        { rank: 2, wallet: "abcd12...ef34", score: 6400 },
        { rank: 3, wallet: "abcd12...ef34", score: 6300 },
      ],
      Weekly: [
        { rank: 1, wallet: "abcd12...ef34", score: 6500 },
        { rank: 2, wallet: "abcd12...ef34", score: 6400 },
        { rank: 3, wallet: "abcd12...ef34", score: 6300 },
      ],
      Monthly: [
        { rank: 1, wallet: "abcd12...ef34", score: 6500 },
        { rank: 2, wallet: "abcd12...ef34", score: 6400 },
        { rank: 3, wallet: "abcd12...ef34", score: 6300 },
      ],
      Overall: [
        { rank: 1, wallet: "abcd12...ef34", score: 6500 },
        { rank: 2, wallet: "abcd12...ef34", score: 6400 },
        { rank: 3, wallet: "abcd12...ef34", score: 6300 },
      ],
    },
    "Basketball Blitz": {
      Daily: [
        { rank: 1, wallet: "xyza34...gh56", score: 7200 },
        { rank: 2, wallet: "xyza34...gh56", score: 7100 },
        { rank: 3, wallet: "xyza34...gh56", score: 7000 },
      ],
      Weekly: [
        { rank: 1, wallet: "xyza34...gh56", score: 7200 },
        { rank: 2, wallet: "xyza34...gh56", score: 7100 },
        { rank: 3, wallet: "xyza34...gh56", score: 7000 },
      ],
      Monthly: [
        { rank: 1, wallet: "xyza34...gh56", score: 7200 },
        { rank: 2, wallet: "xyza34...gh56", score: 7100 },
        { rank: 3, wallet: "xyza34...gh56", score: 7000 },
      ],
      Overall: [
        { rank: 1, wallet: "xyza34...gh56", score: 7200 },
        { rank: 2, wallet: "xyza34...gh56", score: 7100 },
        { rank: 3, wallet: "xyza34...gh56", score: 7000 },
      ],
    },
  };

  const [selectedGame, setSelectedGame] =
    useState<GameName>("Cricket Catch Pro");
  const [timeframe, setTimeframe] = useState<
    "Daily" | "Weekly" | "Monthly" | "Overall"
  >("Daily");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedGame, timeframe]);

  const podiumData = mockData[selectedGame][timeframe].slice(0, 3);
  const regularData = mockData[selectedGame][timeframe].slice(3);
  const totalPages = Math.ceil(regularData.length / itemsPerPage);
  const paginatedData = regularData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)),
    onSwipedRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
    delta: 20,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="min-h-screen w-full mt-[93px] text-white overflow-x-hidden overflow-y-auto">
      <SwipeHintOverlay />
      <div className="w-full py-8 px-4 flex flex-col items-center">
        <h3 className="text-3xl font-semibold mb-4">Leaderboard</h3>
        <select
          className="bg-[#1e1e1e] text-[#92FF00] border-[1px] border-[#92FF00] relative left-[-20px] p-2 rounded-full w-[75vw] h-[50px] appearance-none pl-4 pr-8"
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value as GameName)}
          style={{
            backgroundImage: 'url("/down.svg")',
            backgroundPosition: "right 10px center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {Object.keys(mockData).map((game) => (
            <option key={game} value={game}>
              {game}
            </option>
          ))}
        </select>

        <button className="ml-2 px-3 py-2 absolute left-[82%] top-[182px] rounded-full bg-[#82E300] hover:bg-[#6ac100] text-black shadow-glow transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 "
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </button>
      </div>

      <div className="mx-0 mb-8 bg-[#141414] min-[400px]:h-[60vh] rounded-3xl border-t-2 border-[#92FF00]">
        {/* Podium Section */}
        {currentPage === 0 && (
          <div className="flex justify-center items-end gap-0 mb-4">
            {/* Second Place */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <div className="bg-gradient-to-b max-[369px]:w-[100px] max-[399px]:w-[120px] max-[379px]:w-[110px] from-[#535353] to-[#121212] p-4 rounded-t-lg w-[103px] h-[154px]">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <img
                      src="/two.svg"
                      alt="2nd Place"
                      className="mx-auto w-[69px] h-[69px]"
                    />
                  </div>
                  <div className="text-[#70C200] left-[-5px] top-[30px] max-[369px]:left-[-10px] relative text-sm mb-1">
                    {podiumData[1]?.wallet}
                  </div>
                  <div className="text-yellow-500 mt-[30px] ml-[6px] text-2xl font-bold">
                    {podiumData[1]?.score}
                  </div>
                </div>
              </div>
            </motion.div>
            {/* First Place */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <div className="bg-gradient-to-b max-[369px]:w-[120px] from-[#535353] to-[#121212] p-4 rounded-t-lg w-[103px] h-[184px]">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img src="/one.svg" alt="1st Place" className="mx-auto" />
                  </div>
                  <div className="text-[#70C200] left-[-5px] absolute top-[40px] text-sm mb-1">
                    {podiumData[0]?.wallet}
                  </div>
                  <div className="text-yellow-500 text-2xl relative top-[57px] font-bold flex items-center justify-center">
                    {podiumData[0]?.score}
                  </div>
                  <div className="relative">
                    <img
                      src="/trophy1.svg"
                      alt="Crown"
                      className="w-11 absolute left-[16px] top-[70px] h-11 max-[398px]:top-[60px]"
                      style={{
                        left: window.innerWidth < 369 ? "20px" : "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Third Place */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center"
            >
              <div className="bg-gradient-to-b max-[369px]:w-[100px] from-[#535353] to-[#121212] p-4 rounded-t-lg w-[103px] h-[140px]">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img src="/three.svg" alt="3rd Place" className="mx-auto" />
                  </div>
                  <div className="text-[#70C200] top-[30px] max-[369px]:left-[-10px] relative text-sm mb-1">
                    {podiumData[2]?.wallet}
                  </div>
                  <div className="text-yellow-500 relative top-[30px] left-[10px] text-2xl font-bold">
                    {podiumData[2]?.score}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Regular Leaderboard Table */}
        <div className="p-5 mt-[-20px]" {...swipeHandlers}>
          <table className="w-[115%] left-[-25px] mx-auto relative border-collapse bg-[#3E3E3E] text-center">
            <thead>
              <tr>
                <th className="border-b border-gray-600 py-2 px-3 text-[#92FF00] font-light">
                  Rank
                </th>
                <th className="border-b border-gray-600 py-2 text-[#92FF00] font-light">
                  Wallet Address
                </th>
                <th className="border-b border-gray-600 py-2 mr-[-113px] text-[#92FF00] font-light">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((entry, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-600 py-2 text-[#B9B9B9]">
                    {entry.rank}
                  </td>
                  <td className="border-b border-gray-600 py-2 text-[#B9B9B9]">
                    {entry.wallet}
                  </td>
                  <td className="border-b border-gray-600 py-2 text-[#B9B9B9]">
                    {entry.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6 mb-[55px] gap-4">
            <button
              className="bg-[#1e1e1e] text-[#92FF00] border border-[#92FF00] px-4 py-2 rounded-[100px] hover:bg-[#282828]"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
            >
              &larr; Prev
            </button>
            <button
              className="bg-[#1e1e1e] text-[#92FF00] border border-[#92FF00] px-4 py-2 rounded-[100px] hover:bg-[#282828]"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage >= totalPages - 1}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
