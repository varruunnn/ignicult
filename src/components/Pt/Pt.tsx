import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
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
      <div className="flex items-center border-2 border-[#F94EA6] mt-5  py-2 left-[-20px] relative rounded-full w-[80vw] max-w-md mx-auto">
        <select
          className="flex-grow  bg-transparent appearance-none text-[#F94EA6] outline-none p-2 rounded-md"
          defaultValue="Cricket Catch Pro"
          style={{
            backgroundImage:
              'url("/downpt.svg")',
              backgroundPosition: "right 10px center",
              backgroundRepeat: "no-repeat",
          }}
        >
          <option value="Cricket Catch Pro">Cricket Catch Pro</option>
          <option value="Tournament 1">Tournament 1</option>
          <option value="Tournament 2">Tournament 2</option>
        </select>
      </div>
      <button className="ml-2 p-2 right-[10px] top-[196px] absolute rounded-full bg-gradient-to-r from-[#EE49FD] via-[#F94EA6] to-[#C253F5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </button>
      <div className="border-2 max-[361px]:w-[108%] border-[#F94EA6] mt-7 bg-black  rounded-[30px] w-[107%] ml-[-12px]">
        <div className="flex max-[399px]:gap-5 max-[361px]:gap-4 justify-center mt-10 items-end gap-8 mb-8">
          <div className="flex flex-col w-[100px] h-[100px] items-center p-4 rounded-[80px] border-2 border-[#F94EA6]">
            <div className="text-xl text-white font-bold">
              {podiumPlayers[1]?.rank}
            </div>
            <div className="text-sm text-gray-300">
              {podiumPlayers[1]?.wallet}
            </div>
            <div className="text-lg text-[#FEA50D] font-semibold">
              {podiumPlayers[1]?.score}
            </div>
          </div>
          <div className="flex flex-col items-center w-[110px] h-[110px] p-5 rounded-full border-2 border-[#F94EA6] relative scale-125">
            <div className="absolute -top-6 text-4xl">👑</div>
            <div className="text-2xl text-white font-bold">
              {podiumPlayers[0]?.rank}
            </div>
            <div className="text-sm text-gray-300">
              {podiumPlayers[0]?.wallet}
            </div>
            <div className="text-xl text-[#FEA50D] font-semibold">
              {podiumPlayers[0]?.score}
            </div>
          </div>
          <div className="flex flex-col w-[100px] h-[100px] items-center p-4 rounded-[80px] border-2 border-[#F94EA6]">
            <div className="text-xl font-bold text-white">
              {podiumPlayers[2]?.rank}
            </div>
            <div className="text-sm text-gray-300">
              {podiumPlayers[2]?.wallet}
            </div>
            <div className="text-lg text-[#FEA50D] font-semibold">
              {podiumPlayers[2]?.score}
            </div>
          </div>
        </div>
        <div
          className="border border-[#565656] bg-[#3E3E3E] rounded-lg w-full overflow-hidden"
          {...swipeHandlers}
        >
          <div className="grid grid-cols-3 bg-[#3E3E3E] text-[#EE49FD] font-bold text-center py-3">
            <span>Rank</span>
            <span>Wallet Address</span>
            <span>Top Score</span>
          </div>
          {paginatedPlayers.map((player) => (
            <div
              className="grid grid-cols-3 text-center text-white py-2 border-t border-gray-600"
              key={player.rank}
            >
              <span>{player.rank}</span>
              <span className="truncate">{player.wallet}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
        <div className="flex relative  top-[-17px] mb-[100px] justify-center mt-6 gap-4">
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
      </div>
    </div>
  );
};

export default PremiumTournaments;
