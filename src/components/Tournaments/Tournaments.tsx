import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../LoadingScreen';
import { GameData } from '../../types/tournament.types';
import { useTournament } from '../../hooks/useTournament';
import { usePagination } from '../../utils/pagination';

const TournamentsPage = () => {
  const navigate = useNavigate();
  const { games, selectedGame, loading, error, setSelectedGame } = useTournament();
  const {
    currentItems: currentPagePlayers,
    currentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    totalItems: totalPlayers,
    goToPage
  } = usePagination(selectedGame?.topTotalScorers || [], 1, 10);

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const game = games.find((g) => g.title === e.target.value);
    setSelectedGame(game || null);
  };

  const navigateToUserProfile = (walletAddress: string) => {
    navigate(`/profile/${walletAddress}`);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex items-center justify-center">
        <div className="bg-red-900 p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Error Loading Tournament Data</h2>
          <p>{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-700 hover:bg-red-600 px-4 py-2 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 p-6">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <LoadingScreen loading={true} />
        </div>
      )}

      <div className={`max-w-4xl mx-auto transition-opacity duration-300 ${loading ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        <header className="flex flex-col md:flex-row items-center justify-between mb-10 border-b border-gray-700 pb-6">
          <h1 className="text-3xl font-bold text-purple-500 mb-4 md:mb-0">TOURNAMENTS</h1>
          <div className="w-full md:w-64">
            <select
              value={selectedGame?.title || ''}
              onChange={handleGameChange}
              className="w-full bg-gray-800 border border-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {games.map((game) => (
                <option key={game.gameId} value={game.title}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>
        </header>

        <main>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{selectedGame?.title} Leaderboard</h2>
            <p className="text-gray-400">Top players ranked by total score</p>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <div className="grid grid-cols-12 bg-gray-700 py-3 px-4 text-sm font-medium">
              <div className="col-span-2 text-center">#</div>
              <div className="col-span-6">WALLET</div>
              <div className="col-span-4 text-center">SCORE</div>
            </div>

            {currentPagePlayers.map((player, index) => (
              <div
                key={player.walletAddress}
                className="grid grid-cols-12 py-4 px-4 items-center border-b border-gray-700 last:border-0 hover:bg-gray-700 transition-colors"
              >
                <div className="col-span-2 text-center">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${indexOfFirstItem + index + 1 === 1 ? 'bg-yellow-500' :
                      indexOfFirstItem + index + 1 === 2 ? 'bg-gray-400' :
                        indexOfFirstItem + index + 1 === 3 ? 'bg-yellow-700' : 'bg-gray-600'
                    } text-black font-bold text-sm`}>
                    {indexOfFirstItem + index + 1}
                  </span>
                </div>
                <div
                  className="col-span-6 font-mono text-sm truncate cursor-pointer hover:text-purple-400"
                  onClick={() => navigateToUserProfile(player.walletAddress)}
                  title="View player profile"
                >
                  {player.walletAddress}
                </div>
                <div className="col-span-4 text-center font-mono text-purple-400 font-medium">
                  {player.totalScore.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-400">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalPlayers)} of {totalPlayers}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'
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