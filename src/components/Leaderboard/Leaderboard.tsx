import React, { useState } from "react";

const Leaderboard: React.FC = () => {
  // Define the possible games as a type
  type GameName = "Cricket Catch Pro" | "Soccer Stars" | "Basketball Blitz";

  // Define the mock data structure
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

  const postion2 = mockData[selectedGame][timeframe][1];
  const postion1 = mockData[selectedGame][timeframe][0];
  const postion3 = mockData[selectedGame][timeframe][2];

  return (
    <div className="relative min-h-screen w-full bg-black py-40 overflow-x-hidden text-white">
      <div className="relative w-full h-[15vh] bg-black">
        <h3 className="text-white text-2xl font-semibold absolute left-[32%]">
          Leaderboard
        </h3>
        <select
          className="bg-[#1e1e1e] text-[#92FF00] border-2 border-[#92FF00] p-2 rounded-[100px] w-[270px] absolute left-[18%] top-[50px]"
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value as GameName)}
        >
          {Object.keys(mockData).map((game) => (
            <option key={game} value={game}>
              {game}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-black w-[103%] relative left-[-10px] h-[63vh] rounded-[30px] border-3 border-[#92FF00]">
        <div className="flex gap-[30px] p-[20px] items-center mb-4">
          {["Daily", "Weekly", "Monthly", "Overall"].map((period) => (
            <a
              key={period}
              className={`px-4 py-2 mr-[-9px] text-md font-semibold ${
                timeframe === period
                  ? "text-white border-b-2 border-green-500"
                  : "text-gray-300 border-b-2 border-transparent"
              }`}
              onClick={() =>
                setTimeframe(
                  period as "Daily" | "Weekly" | "Monthly" | "Overall"
                )
              }
            >
              {period}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-end gap-0 p-4">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-36 p-4 rounded-t-lg w-32">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                    <span className="transform -rotate-45 text-white font-bold">
                      2
                    </span>
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-1">
                  {postion2.wallet}
                </div>
                <div className="text-yellow-500 text-2xl font-bold">
                  {postion2.score}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-44 p-4 rounded-t-lg w-32">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                    <span className="transform -rotate-45 text-white font-bold">
                      1
                    </span>
                  </div>
                </div>
                <div className="text-gray-300 absolute top-[40px] text-sm mb-1">
                  {postion1.wallet}
                </div>
                <div className="text-yellow-500 text-2xl font-bold flex items-center justify-center">
                  {postion1.score}
                </div>
                <div className="relative">
                  <img src="/trophy1.svg" alt="Crown" className="w-11 absolute left-[23px] top-[90px] h-11" /> 
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-32 p-4 rounded-t-lg w-32">
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                    <span className="transform -rotate-45 text-white font-bold">
                      3
                    </span>
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-1">
                  {postion3.wallet}
                </div>
                <div className="text-yellow-500 text-2xl font-bold">
                  {postion3.score}
                </div>
              </div>
            </div>
          </div>

          {/* {mockData[selectedGame][timeframe].slice(0, 3).map((entry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-linear-to-r from-[#535353] to-[#282828] rounded-lg p-4 relative`}
              style={{
                marginTop: index === 0 ? "20px" : index === 1 ? "0px" : "10px",
                transform: index === 0 ? "scale(1.1)" : index === 1 ? "scale(1.2)" : "scale(1)",
              }}
            >
              <div
                className={`text-xl font-bold ${
                  index === 1 ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                {index === 0 ? 2 : index === 1 ? 1 : 3}
              </div>
              <div className="text-sm text-gray-400">{entry.wallet}</div>
              <div className="text-2xl font-bold">{entry.score}</div>
            </div>
          ))} */}
        </div>
        <div>
          <table className="w-full border-collapse bg-[#3E3E3E] text-center">
            <thead>
              <tr>
                <th className="border-b text-[#92FF00] text-semibold border-gray-600 py-2">
                  Rank
                </th>
                <th className="border-b text-[#92FF00] text-semibold border-gray-600 py-2">
                  Wallet Address
                </th>
                <th className="border-b text-[#92FF00] text-semibold border-gray-600 py-2">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData[selectedGame][timeframe]
                .slice(3)
                .map((entry, index) => (
                  <tr key={index}>
                    <td className="border-b text-[#B9B9B9]  border-gray-600 py-2">
                      {entry.rank}
                    </td>
                    <td className="border-b text-[#B9B9B9]  border-gray-600 py-2">
                      {entry.wallet}
                    </td>
                    <td className="border-b text-[#B9B9B9]  border-gray-600 py-2">
                      {entry.score}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;