import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../LoadingScreen';

interface Player {
  walletAddress: string;
  totalScore: number;
}

interface GameData {
  gameId: number;
  title: string;
  topTotalScorers: Player[];
}

const TournamentsPage = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState<GameData[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const playersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://ignicult.com/api/trending-games');
        const json = await res.json();
        const gameList: GameData[] = json.data;
        setGames(gameList);
        setSelectedGame(gameList[0]);
      } catch (error) {
        console.error('Error fetching tournament data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const game = games.find((g) => g.title === e.target.value);
    setSelectedGame(game || null);
    setCurrentPage(1);
  };

  const navigateToUserProfile = (walletAddress: string) => {
    navigate(`/profile/${walletAddress}`);
  };

  const currentPlayers = selectedGame?.topTotalScorers || [];
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPagePlayers = currentPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
  const totalPages = Math.ceil(currentPlayers.length / playersPerPage);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                    index + 1 === 1 ? 'bg-yellow-500' :
                    index + 1 === 2 ? 'bg-gray-400' :
                    index + 1 === 3 ? 'bg-yellow-700' : 'bg-gray-600'
                  } text-black font-bold text-sm`}>
                    {indexOfFirstPlayer + index + 1}
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    currentPage === page ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {page}
                </button>
              ))}
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