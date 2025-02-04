import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
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
    <div className="min-h-screen w-full mt-[93px] text-white overflow-y-auto">
      <SwipeHintOverlay />
      <div className="w-full py-8 px-4 flex flex-col items-center">
        <h3 className="text-3xl font-semibold mb-4">Leaderboard</h3>
        <select
          className="bg-[#1e1e1e] text-[#92FF00] border-2 border-[#92FF00] p-2 rounded-full w-64"
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

      <div className="mx-0 mb-8 bg-black min-[400px]:h-[60vh]  rounded-2xl border-2 border-[#92FF00]">
        <div className="flex gap-[0px] max-[369px]:gap-[15px]  p-[5px] items-center max-[468px]:ml-[10px] max-[468px]:gap-[33px] max-[398px]:gap-[20px] mb-4">
          {["Daily", "Weekly", "Monthly", "Overall"].map((period) => (
            <a
              key={period}
              className={`px-4 py-2 mr-[-9px] text-md font-semibold cursor-pointer ${
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
        {currentPage === 0 && (
          <div className="flex justify-center items-end gap-0 ">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b max-[369px]:w-[100px] max-[399px]:w-[120px] max-[379px]:w-[110px] from-[#535353] to-[#282828] h-36 p-4 rounded-t-lg w-32">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500  w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                      <span className="transform -rotate-45 text-white font-bold">
                        {podiumData[1]?.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 max-[369px]:left-[-10px] relative text-sm mb-1">
                    {podiumData[1]?.wallet}
                  </div>
                  <div className="text-yellow-500 text-2xl font-bold">
                    {podiumData[1]?.score}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b max-[369px]:w-[120px]  from-[#535353] to-[#282828] h-44 p-4 rounded-t-lg w-32">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                      <span className="transform -rotate-45 text-white font-bold">
                        {podiumData[0]?.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 absolute top-[40px] text-sm mb-1">
                    {podiumData[0]?.wallet}
                  </div>
                  <div className="text-yellow-500 text-2xl font-bold flex items-center justify-center">
                    {podiumData[0]?.score}
                  </div>
                  <div className="relative">
                    <img
                      src="/trophy1.svg"
                      alt="Crown"
                      className="w-11 max-[398px]:top-[60px] absolute left-[23px] top-[70px] h-11"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b max-[369px]:w-[100px]  from-[#535353] to-[#282828] h-32 p-4 rounded-t-lg w-32">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                      <span className="transform -rotate-45 text-white font-bold">
                        {podiumData[2]?.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 max-[369px]:left-[-10px] relative text-sm mb-1">
                    {podiumData[2]?.wallet}
                  </div>
                  <div className="text-yellow-500 text-2xl font-bold">
                    {podiumData[2]?.score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="p-4" {...swipeHandlers}>
          <table className="w-full border-collapse bg-[#3E3E3E] text-center">
            <thead>
              <tr>
                <th className="border-b border-gray-600 py-2 text-[#92FF00] font-semibold">
                  Rank
                </th>
                <th className="border-b border-gray-600 py-2 text-[#92FF00] font-semibold">
                  Wallet Address
                </th>
                <th className="border-b border-gray-600 py-2 text-[#92FF00] font-semibold">
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
