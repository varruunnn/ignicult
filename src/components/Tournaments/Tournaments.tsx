import React, { useState } from 'react';

// Type definitions
interface PlayerData {
  rank: number;
  wallet: string;
  score: number;
}

interface TournamentData {
  [gameName: string]: PlayerData[];
}

const TournamentsPage = () => {
  // Mock tournament data
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

  // State for selected game and pagination
  const [selectedGame, setSelectedGame] = useState<string>(Object.keys(mockTournamentData)[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10;

  // Get current players for pagination
  const currentPlayers = mockTournamentData[selectedGame];
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPagePlayers = currentPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
  const totalPages = Math.ceil(currentPlayers.length / playersPerPage);

  // Handle game change
  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(e.target.value);
    setCurrentPage(1); // Reset to first page when changing games
  };

  // Pagination controls
  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6
    max-[365px]:mt-[64px]
    ">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-gray-700 pb-6">
          <h1 className="text-3xl font-bold text-purple-500 mb-4 md:mb-0">TOURNAMENTS</h1>
          <div className="w-full md:w-64">
            <select 
              value={selectedGame}
              onChange={handleGameChange}
              className="w-full bg-gray-800 border border-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {Object.keys(mockTournamentData).map((game) => (
                <option key={game} value={game}>
                  {game}
                </option>
              ))}
            </select>
          </div>
        </header>
        <main>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{selectedGame} Leaderboard</h2>
            <p className="text-gray-400">Top players ranked by score</p>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <div className="grid grid-cols-12 bg-gray-700 py-3 px-4 text-sm font-medium">
              <div className="col-span-2 text-center">#</div>
              <div className="col-span-6">WALLET</div>
              <div className="col-span-4 text-center">SCORE</div>
            </div>
            
            {currentPagePlayers.map((player) => (
              <div 
                key={player.rank}
                className="grid grid-cols-12 py-4 px-4 items-center border-b border-gray-700 last:border-0 hover:bg-gray-700 transition-colors"
              >
                <div className="col-span-2 text-center">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                    player.rank === 1 ? 'bg-yellow-500' :
                    player.rank === 2 ? 'bg-gray-400' :
                    player.rank === 3 ? 'bg-yellow-700' : 'bg-gray-600'
                  } text-black font-bold text-sm`}>
                    {player.rank}
                  </span>
                </div>
                
                <div className="col-span-6 font-mono text-sm">
                  {player.wallet}
                </div>
                
                <div className="col-span-4 text-center font-mono text-purple-400 font-medium">
                  {player.score.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-400">
              Showing {indexOfFirstPlayer + 1}-{Math.min(indexOfLastPlayer, currentPlayers.length)} of {currentPlayers.length}
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Prev
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(pageNum => 
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                )
                .map((pageNum, index, array) => {
                  if (index > 0 && pageNum - array[index - 1] > 1) {
                    return (
                      <React.Fragment key={`ellipsis-${pageNum}`}>
                        <span className="px-2 py-1 text-gray-500">...</span>
                        <button
                          key={pageNum}
                          onClick={() => goToPage(pageNum)}
                          className={`w-8 h-8 flex items-center justify-center rounded-md ${
                            currentPage === pageNum ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                          }`}
                        >
                          {pageNum}
                        </button>
                      </React.Fragment>
                    );
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${
                        currentPage === pageNum ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })
              }
              
              <button 
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TournamentsPage;