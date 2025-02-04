import React, { useState, useEffect } from "react";

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

  return (
    <div className="relative min-h-screen w-full py-20 overflow-x-hidden text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h3 className="text-white text-2xl font-semibold">Leaderboard</h3>
        <select
          className="bg-[#1e1e1e] text-[#92FF00] border-2 border-[#92FF00] p-2 rounded-full w-[270px] text-center"
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

      {/* Main Content Container */}
      <div className="w-[103%] bg-[black] relative left-[-10px] h-[63vh] rounded-[30px] border-2 border-[#92FF00]">
        <div className="flex gap-[30px] p-[20px] items-center max-[398px]:gap-[20px] mb-4">
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

        {/* Podium Section */}
        {currentPage === 0 && (
          <div className="flex justify-center ml-[20px] items-end gap-0 p-4">
            {/* Second Position */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-36 p-4 rounded-t-lg w-32">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                      <span className="transform -rotate-45 text-white font-bold">
                        {podiumData[1]?.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm mb-1">
                    {podiumData[1]?.wallet}
                  </div>
                  <div className="text-yellow-500 text-2xl font-bold">
                    {podiumData[1]?.score}
                  </div>
                </div>
              </div>
            </div>
            {/* First Position */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-44 p-4 rounded-t-lg w-32">
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
                      className="w-11 max-[398px]:top-[60px] absolute left-[23px] top-[90px] h-11"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Third Position */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-[#535353] to-[#282828] h-32 p-4 rounded-t-lg w-32">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 w-8 h-8 flex items-center justify-center rounded-lg transform rotate-45">
                      <span className="transform -rotate-45 text-white font-bold">
                        {podiumData[2]?.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm mb-1">
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

        {/* Leaderboard Table */}
        <div className="overflow-y-auto">
          {" "}
          {/* Added this class to enable horizontal scrolling */}
          <table className="min-w-full overflow-y-auto bg-[#3E3E3E] rounded-lg">
            <thead className="bg-[#1e1e1e]">
              <tr>
                <th className="py-3 px-4 text-[#92FF00] font-semibold">Rank</th>
                <th className="py-3 px-4 text-[#92FF00] font-semibold">
                  Wallet Address
                </th>
                <th className="py-3 px-4 text-[#92FF00] font-semibold">
                  Total Score
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((entry) => (
                <tr
                  key={entry.rank}
                  className="hover:bg-[#535353] transition-colors"
                >
                  <td className="py-3 px-4 border-b border-gray-600 text-center">
                    {entry.rank}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600 text-center truncate max-w-[150px]">
                    {entry.wallet}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600 text-center">
                    {entry.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            className="bg-[#1e1e1e] text-[#92FF00] border border-[#92FF00] px-4 py-2 rounded-full hover:bg-[#92FF00] hover:text-black transition-all disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            &larr; Prev
          </button>
          <span className="text-gray-300">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="bg-[#1e1e1e] text-[#92FF00] border border-[#92FF00] px-4 py-2 rounded-full hover:bg-[#92FF00] hover:text-black transition-all disabled:opacity-50"
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

export default Leaderboard;
