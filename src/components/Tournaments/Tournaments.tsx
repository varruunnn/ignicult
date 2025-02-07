import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import SwipeHintOverlay from "../SwipeHintOverlay/SwipeHintOverlay";

type Player = {
  rank: number;
  wallet: string;
  score: number;
};

type TournamentData = {
  [key: string]: Player[];
};

const mockTournamentData: TournamentData = {
  "Cricket Catch Pro": [
    { rank: 1, wallet: "a1b2c3...908e", score: 10000 },
    { rank: 2, wallet: "d4e5f6...123a", score: 9500 },
    { rank: 3, wallet: "g7h8i9...456b", score: 9200 },
    { rank: 4, wallet: "d0af8c...908e", score: 6038 },
    { rank: 5, wallet: "j1k2l3...789c", score: 5900 },
    { rank: 6, wallet: "a1b2c3...908e", score: 10000 },
    { rank: 7, wallet: "d4e5f6...123a", score: 9500 },
    { rank: 8, wallet: "g7h8i9...456b", score: 9200 },
    { rank: 9, wallet: "d0af8c...908e", score: 6038 },
    { rank: 10, wallet: "j1k2l3...789c", score: 5900 },
    { rank: 11, wallet: "a1b2c3...908e", score: 10000 },
    { rank: 12, wallet: "d4e5f6...123a", score: 9500 },
    { rank: 13, wallet: "c9d8e7...456b", score: 8600 },
    { rank: 14, wallet: "l2m3n4...789c", score: 7800 },
    { rank: 15, wallet: "o5p6q7...111f", score: 7200 },
    { rank: 16, wallet: "r9s8t7...224g", score: 6900 },
    { rank: 17, wallet: "h2u3v4...555d", score: 6600 },
    { rank: 18, wallet: "k8w7x6...333a", score: 6400 },
    { rank: 19, wallet: "z9y8x7...000e", score: 6200 },
    { rank: 20, wallet: "c1b2a3...678d", score: 6100 },
    { rank: 21, wallet: "v4w5x6...910f", score: 6000 },
    { rank: 22, wallet: "s7t8u9...654g", score: 5900 },
    { rank: 23, wallet: "p3q4r5...123b", score: 5800 },
    { rank: 24, wallet: "n9m8l7...456c", score: 5700 },
    { rank: 25, wallet: "j0k9i8...789e", score: 5600 },
    { rank: 26, wallet: "e5f6g7...123d", score: 5500 },
    { rank: 27, wallet: "d2c3b4...000f", score: 5400 },
    { rank: 28, wallet: "a7b8c9...111e", score: 5300 },
    { rank: 29, wallet: "t0u1v2...234g", score: 5200 },
    { rank: 30, wallet: "z4x5y6...789h", score: 5100 },
  ],
  "Color Circle Puzzle": [
    { rank: 1, wallet: "p1q2r3...123d", score: 10500 },
    { rank: 2, wallet: "s4t5u6...456e", score: 10100 },
    { rank: 3, wallet: "v7w8x9...789f", score: 9500 },
    { rank: 4, wallet: "d0af8c...908e", score: 6038 },
    { rank: 5, wallet: "y1z2a3...012g", score: 5400 },
    { rank: 6, wallet: "a1b2c3...908e", score: 10000 },
    { rank: 7, wallet: "d4e5f6...123a", score: 9500 },
    { rank: 8, wallet: "g7h8i9...456b", score: 9200 },
    { rank: 9, wallet: "d0af8c...908e", score: 6038 },
    { rank: 10, wallet: "j1k2l3...789c", score: 5900 },
  ],
};

export default function Tournaments() {
  const [selectedGame, setSelectedGame] =
    useState<keyof typeof mockTournamentData>("Cricket Catch Pro");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(0);
  }, [selectedGame]);

  const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(event.target.value as keyof typeof mockTournamentData);
  };

  const tournamentData = mockTournamentData[selectedGame];
  const totalPages = Math.ceil(tournamentData.length / itemsPerPage);
  const paginatedData = tournamentData.slice(
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
    <div className="p-4 w-full mt-[-40px] min-h-screen relative text-white">
      <div className="absolute top-[-21%] left-[20%]">
        <SwipeHintOverlay />
      </div>

      {/* Header & Game Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <motion.h1
          className="ml-[-20px] text-white text-lg font-semibold text-center text-shadow-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Monthly Tournaments
        </motion.h1>
        <div className="mt-4 flex justify-center items-center">
          <motion.select
            className="px-4 py-2 w-[70vw] rounded-full h-[5.9vh] bg-gray-900 appearance-none pl-4 pr-8 text-white border-[1px] border-[#82E300] focus:outline-none hover:border-[#6ac100] transition-all"
            value={selectedGame}
            onChange={handleGameChange}
            style={{
              backgroundImage: 'url("/down.svg")',
              backgroundPosition: "right 10px center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {Object.keys(mockTournamentData).map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </motion.select>

          <motion.button
            className="ml-2 px-3 py-2 rounded-full bg-[#82E300] hover:bg-[#6ac100] text-black shadow-glow transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[25px]"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        {...swipeHandlers}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 mx-auto w-[108%] left-[-15px] max-w-4xl bg-[#141414] border-t-2 border-t-[#82E300] p-4 rounded-3xl relative"
      >
        <div className="relative flex items-center justify-center mb-4">
          <motion.h2
            className="text-center text-xl text-[#82E300] font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            January 2025
          </motion.h2>
        </div>
        <div className="w-full max-h-[50vh] mb-4 max-[378px]:h-[40vh] max-[378px]:mb-[60px] bg-[#3E3E3E] rounded-lg overflow-y-auto">
          <table className="w-full text-left text-sm text-gray-400 border-collapse">
            <thead className="bg-[#3E3E3E]">
              <tr>
                <th className="py-2 px-4 border text-[#82E300] border-gray-600">
                  Rank
                </th>
                <th className="py-2 px-4 border text-[#82E300] border-gray-600">
                  Wallet Address
                </th>
                <th className="py-2 px-4 border text-[#82E300] border-gray-600">
                  Top Score
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((player, index) => (
                <motion.tr
                  key={player.rank}
                  className="hover:bg-gray-800 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                >
                  <td className="py-2 px-4 border border-gray-600">
                    {player.rank}
                  </td>
                  <td className="py-2 px-4 border border-gray-600">
                    {player.wallet}
                  </td>
                  <td className="py-2 px-4 border border-gray-600">
                    {player.score}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-10">
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 rounded-full relative bg-[#1e1e1e] text-[#82E300] border border-[#82E300] hover:bg-[#6ac100] hover:text-black transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            &larr; Prev
          </motion.button>
          <motion.button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 rounded-full relative bg-[#1e1e1e] text-[#82E300] border border-[#82E300] hover:bg-[#6ac100] hover:text-black transition-all disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            Next &rarr;
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
