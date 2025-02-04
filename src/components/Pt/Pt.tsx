import React, { useState, useEffect } from "react";

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

  return (
    <div className="flex flex-col mt-[125px] md:mt-[200px] items-center overflow-x-hidden p-4 rounded-lg w-full min-h-screen">
      <h2 className="text-white text-lg z-1 font-semibold mb-4">
        Premium Tournaments
      </h2>
      <div className="flex items-center border-2 relative border-[#F94EA6] mt-5 px-3 py-2 rounded-full w-full">
        <select
          className="flex-grow appearance-none bg-transparent text-[#F94EA6] outline-none p-2 rounded-md"
          defaultValue="Cricket Catch Pro"
        >
          <option value="Cricket Catch Pro">Cricket Catch Pro</option>
          <option value="Tournament 1">Tournament 1</option>
          <option value="Tournament 2">Tournament 2</option>
        </select>
        <button className="ml-2 p-2 rounded-full bg-gradient-to-r from-[#EE49FD] via-[#F94EA6] to-[#C253F5]">
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
      </div>

      <div className="relative border-2 border-[#F94EA6] mt-7 h-[80vh] bg-black p-4 rounded-[30px] w-[109%]">
        <h1 className="text-[#F94EA6] absolute left-[33%] font-bold font-roboto text-2xl">
          January 2025
        </h1>


        <div className="flex max-[399px]:gap-5 justify-center mt-20 items-end gap-8 mb-8">
          <div className="flex flex-col w-[100px] h-[100px] items-center p-4 rounded-[80px] border-2 border-[#F94EA6]">
            <div className="text-xl text-white font-bold">
              {podiumPlayers[1]?.rank}
            </div>
            <div className="text-sm text-gray-300">{podiumPlayers[1]?.wallet}</div>
            <div className="text-lg text-[#FEA50D] font-semibold">
              {podiumPlayers[1]?.score}
            </div>
          </div>
          <div className="flex flex-col items-center w-[110px] h-[110px] p-5 rounded-full border-2 border-[#F94EA6] relative scale-125">
            <div className="absolute -top-6 text-4xl">👑</div>
            <div className="text-2xl text-white font-bold">
              {podiumPlayers[0]?.rank}
            </div>
            <div className="text-sm text-gray-300">{podiumPlayers[0]?.wallet}</div>
            <div className="text-xl text-[#FEA50D] font-semibold">
              {podiumPlayers[0]?.score}
            </div>
          </div>
          <div className="flex flex-col w-[100px] h-[100px] items-center p-4 rounded-[80px] border-2 border-[#F94EA6]">
            <div className="text-xl font-bold text-white">
              {podiumPlayers[2]?.rank}
            </div>
            <div className="text-sm text-gray-300">{podiumPlayers[2]?.wallet}</div>
            <div className="text-lg text-[#FEA50D] font-semibold">
              {podiumPlayers[2]?.score}
            </div>
          </div>
        </div>
        <div className="border border-[#565656] bg-[#3E3E3E] rounded-[30px] h-[40%] w-full overflow-hidden flex flex-col">
          <div className="grid grid-cols-3 bg-[#3E3E3E] text-[#EE49FD] rounded-2xl font-bold text-center py-3">
            <span>Rank</span>
            <span>Wallet Address</span>
            <span>Top Score</span>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {paginatedPlayers.map((player) => (
              <div
                className="grid grid-cols-3 text-center text-white py-2 border-t border-gray-600"
                key={player.rank}
              >
                <span>{player.rank}</span>
                <span className="truncate px-2">{player.wallet}</span>
                <span>{player.score}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 pb-2 relative bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-2">
          <button
            className="bg-[#1e1e1e] max-[380px]:top-[-20px] relative text-[#F94EA6] border border-[#F94EA6] px-3 py-1 text-sm rounded hover:bg-[#282828]"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            &larr; Prev
          </button>
          <span className="text-white max-[380px]:top-[-20px] relative text-sm flex items-center">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="bg-[#1e1e1e] max-[380px]:top-[-20px] relative text-[#F94EA6] border border-[#F94EA6] px-3 py-1 text-sm rounded hover:bg-[#282828]"
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
  );
};

export default PremiumTournaments;
