import React from "react";
import Particle from "../Background/Particle";
interface Player {
  rank: number;
  wallet: string;
  score: number;
}
const PremiumTournaments = () => {
  const players: Player[] = [
    { rank: 1, wallet: "d0af8c...908e", score: 6038 },
    { rank: 2, wallet: "d0af8c...908e", score: 6038 },
    { rank: 3, wallet: "d0af8c...908e", score: 6038 },
    { rank: 4, wallet: "d0af8c...908e", score: 6038 },
    { rank: 5, wallet: "d0af8c...908e", score: 6038 },
    { rank: 6, wallet: "d0af8c...908e", score: 6038 },
    { rank: 7, wallet: "d0af8c...908e", score: 6038 },
  ];
  return (
    <div className="flex flex-col mt-[120px] items-center overflow-x-hidden p-4 rounded-lg bg-black  w-[full] h-[100vh]">
      <h2 className="text-white text-lg font-semibold mb-3">
        Premium Tournaments
      </h2>
      <div className="flex items-center border-2 border-[#F94EA6] mt-5 bg-black px-3 py-2 rounded-full w-full">
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

      <div className="relative border-2 border-[#F94EA6] mt-7 h-[80vh] p-4 rounded-[30px] w-[109%]">
              <Particle />
        <h1 className="text-[#F94EA6] absolute left-[33%] font-bold font-[roboto] text-2xl">
          January 2025
        </h1>

        <div className="flex max-[399px]:gap-5  justify-center mt-20 items-end gap-8 mb-8">
          <div className="flex flex-col w-[100px]  h-[100px] items-center p-4  rounded-[80px] border-2 border-[#F94EA6] ">
            <div className="text-xl text-white font-bold">2</div>
            <div className="text-sm text-gray-300">{players[1].wallet}</div>
            <div className="text-lg text-[#FEA50D] font-semibold">
              {players[1].score}
            </div>
          </div>

          <div className="flex flex-col items-center w-[110px] h-[110px] p-5 rounded-full  border-2 border-[#F94EA6]   relative scale-125">
            <div className="absolute -top-6 text-4xl">👑</div>
            <div className="text-2xl text-white font-bold">1</div>
            <div className="text-sm text-gray-300">{players[0].wallet}</div>
            <div className="text-xl text-[#FEA50D] font-semibold">
              {players[0].score}
            </div>
          </div>

          <div className="flex flex-col w-[100px]  h-[100px] items-center p-4  rounded-[80px] border-2 border-[#F94EA6] ">
            <div className="text-xl font-bold text-white">3</div>
            <div className="text-sm text-gray-300">{players[2].wallet}</div>
            <div className="text-lg text-[#FEA50D]  font-semibold">
              {players[2].score}
            </div>
          </div>
        </div>
        <div className="border border-[#565656] max-[399px]:mb-[20px] max-[399px]:h-[70%] bg-[#3E3E3E] ml-[8px] rounded-[30px] h-[80%] w-[96%]  overflow-hidden">
          <div className="grid grid-cols-3 bg-[#3E3E3E]  text-[#EE49FD] rounded-2xl font-bold text-center py-5">
            <span>Rank</span>
            <span>Wallet Address</span>
            <span>Top Score</span>
          </div>
          {players.slice(3).map((player) => (
            <div
              className="grid grid-cols-3 text-center text-white py-2 border-t border-gray-700"
              key={player.rank}
            >
              <span>{player.rank}</span>
              <span>{player.wallet}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumTournaments;
