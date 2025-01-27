import React, { useState } from "react"; 

// Mock data for monthly tournaments
const mockTournamentData = {
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
  const [selectedGame, setSelectedGame] = useState("Cricket Catch Pro");

  const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="p-4 mt-30 w-full min-h-[100vh] bg-black text-white">
      <div className="text-center mt-20 max-[399px]:mt-[10px] ">
        <h1 className="text-2xl font-bold text-[#82E300] text-shadow-glow">Monthly Tournaments</h1>
        <div className="mt-4 flex justify-center items-center">
          <select
            className="px-4 py-2 rounded-[50px] bg-gray-800 text-white border border-[#82E300] focus:outline-none hover:border-[#6ac100] transition-all"
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
      <div className="bg-black mt-10 border-4 border-[#82E300] p-4 rounded-[50px] shadow-xl">
        <h2 className="text-center text-3xl text-[#82E300] font-extrabold mb-4 text-shadow-glow">
          January 2025
        </h2>
        <div className="w-full max-h-[60vh] max-[399px]:mb-[40px] bg-[#3E3E3E] rounded-[20px] overflow-y-auto">
          <table className="w-full text-left  text-sm text-gray-400 border-collapse border border-gray-600">
            <thead>
              <tr className="text-[#82E300]">
                <th className="py-2 px-4 border border-gray-600">Rank</th>
                <th className="py-2 px-4 border border-gray-600">Wallet Address</th>
                <th className="py-2 px-4 border border-gray-600">Top Score</th>
              </tr>
            </thead>
            <tbody>
              {mockTournamentData[selectedGame].map((player) => (
                <tr
                  key={player.rank}
                  className="hover:bg-gray-800 transition-colors"
                >
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
