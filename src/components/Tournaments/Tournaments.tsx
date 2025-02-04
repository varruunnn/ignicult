import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
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
  const [selectedGame, setSelectedGame] = useState<keyof typeof mockTournamentData>(
    "Cricket Catch Pro"
  );
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
    onSwipedLeft: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)),
    onSwipedRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
    delta: 50,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="p-4 w-full min-h-screen relative text-white bg-black">
      <div className="absolute top-[-21%] left-[20%]">
        <SwipeHintOverlay />
      </div>
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-[#82E300] text-shadow-glow">
          Monthly Tournaments
        </h1>
        <div className="mt-4 flex justify-center items-center">
          <select
            className="px-4 py-2 rounded-full bg-gray-800 text-white border border-[#82E300] focus:outline-none hover:border-[#6ac100] transition-all"
            value={selectedGame}
            onChange={handleGameChange}
          >
            {Object.keys(mockTournamentData).map((game) => (
              <option key={game} value={game}>
                {game}
              </option>
            ))}
          </select>
          <button className="ml-2 px-3 py-2 rounded-full bg-[#82E300] hover:bg-[#6ac100] text-black shadow-glow transition-all">
            ⟳
          </button>
        </div>
      </div>
      <div
        {...swipeHandlers}
        className="mt-10 mx-auto w-full max-w-4xl border-4 border-[#82E300] p-4 rounded-3xl relative"
      >
        <div className="relative flex items-center justify-center mb-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="absolute left-0 ml-2 bg-[#1e1e1e] text-[#82E300] border border-[#82E300] p-2 rounded-full hover:bg-[#6ac100] hover:text-black transition-all disabled:opacity-50 max-[399px]:p-1 max-[399px]:ml-1 max-[399px]:rounded-[100px]"
          >
            &larr;
          </button>
          <h2 className="text-center text-3xl text-[#82E300] font-extrabold">
            January 2025
          </h2>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage >= totalPages - 1}
            className="absolute right-0 mr-2 bg-[#1e1e1e] text-[#82E300] border border-[#82E300] p-2 rounded-full hover:bg-[#6ac100] hover:text-black transition-all disabled:opacity-50 max-[399px]:p-1 max-[399px]:mr-1 max-[399px]:rounded-[100px]"
          >
            &rarr;
          </button>
        </div>
        <div className="w-full max-h-[60vh] mb-4 bg-[#3E3E3E] rounded-lg overflow-y-auto">
          <table className="w-full text-left text-sm text-gray-400 border-collapse">
            <thead className="bg-[#1e1e1e]">
              <tr>
                <th className="py-2 px-4 border border-gray-600">Rank</th>
                <th className="py-2 px-4 border border-gray-600">Wallet Address</th>
                <th className="py-2 px-4 border border-gray-600">Top Score</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((player) => (
                <tr key={player.rank} className="hover:bg-gray-800 transition-colors">
                  <td className="py-2 px-4 border border-gray-600">{player.rank}</td>
                  <td className="py-2 px-4 border border-gray-600">{player.wallet}</td>
                  <td className="py-2 px-4 border border-gray-600">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
