import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GamingLeaderboard = () => {
  const [selectedGame, setSelectedGame] = useState('Color Cath Pro');
  const [timePeriod, setTimePeriod] = useState('Daily');
  const [currentPage, setCurrentPage] = useState(0);

  const topThreePlayers = [
    { rank: 1, wallet: "0x8F21...a7b9", score: 2850, avatar: "https://img.freepik.com/free-vector/cute-alien-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology-flat_138676-13965.jpg" },
    { rank: 2, wallet: "0x3E67...c4d2", score: 2420, avatar: "https://cdn1.iconfinder.com/data/icons/video-games-flat-design-video-game-icon-with-simpl/114/gaming-boy-512.png" },
    { rank: 3, wallet: "0x9D45...e8f1", score: 2180, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCs4cyMZSfKQQeO36dwVp7BQcKEimQP6Kkg&s" },
  ];
  
  const otherPlayers = [
    { rank: 4, wallet: "0x1A2B...c3d4", score: 1950 },
    { rank: 5, wallet: "0x5E6F...g7h8", score: 1820 },
    { rank: 6, wallet: "0xJ9K0...l1m2", score: 1760 },
    { rank: 7, wallet: "0xN3O4...p5q6", score: 1690 },
    { rank: 8, wallet: "0xR7S8...t9u0", score: 1650 },
    { rank: 9, wallet: "0xV1W2...x3y4", score: 1610 },
    { rank: 10, wallet: "0xZ5A6...b7c8", score: 1580 },
    { rank: 11, wallet: "0xD9E0...f1g2", score: 1550 },
    { rank: 12, wallet: "0xH3I4...j5k6", score: 1520 },
  ];
  
  const games = [
    'Color Cath Pro',
    'Crypto Racers',
    'NFT Hunters',
    'Blockchain Battles',
    'Meta Miners',
    'Token Defenders'
  ];
  
  const timePeriods = ['Daily', 'Weekly', 'Monthly', 'Overall'];
  

  const playersPerPage = 5;
  const displayPlayers = otherPlayers.slice(
    currentPage * playersPerPage, 
    (currentPage * playersPerPage) + playersPerPage
  );
  
  const maxPages = Math.ceil(otherPlayers.length / playersPerPage);
  

  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedGame, timePeriod]);


  const podiumVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white p-6
    ">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"
          >
            LEADERBOARD
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-64"
          >
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="w-full px-4 py-3 rounded-lg appearance-none bg-gray-800 border-2 border-[#fe9400] focus:outline-none focus:[#fe4700] text-white"
            >
              {games.map((game) => (
                <option key={game} value={game}>{game}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg className="h-5 w-5 text-[#fe4700]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-2 bg-gray-800 rounded-lg">
            {timePeriods.map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  timePeriod === period 
                    ? 'bg-gradient-to-r from-[#fe7500] to-pink-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center items-end mb-16">

          <motion.div 
            className="flex flex-col items-center mx-4 transform translate-y-8
            max-[365px]:relative max-[365px]:left-[29px]
            max-[392px]:relative max-[392px]:left-[29px]
            "
            initial="hidden"
            animate="visible"
            variants={podiumVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full blur-md"></div>
              <img 
                src={topThreePlayers[1].avatar} 
                alt="2nd Place" 
                className="w-20 h-20 rounded-full border-2 border-yellow-400  z-10 relative"
              />
              <div className="absolute -bottom-2 z-10 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-700 text-yellow-800 font-bold">
                2
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg w-32 text-center
            max-[365px]:w-[110px]
            ">
              <p className="text-sm text-gray-400 truncate">{topThreePlayers[1].wallet}</p>
              <p className="text-xl font-bold text-yellow-300">{topThreePlayers[1].score}</p>
            </div>
            <div className="h-20 w-16 bg-[linear-gradient(to_top,_rgba(285,_150,_10,_0.4),_rgba(285,_221,_51,_0.7))] rounded-t-lg mt-2"></div>
          </motion.div>
          

          <motion.div 
            className="flex flex-col items-center mx-4 transform -translate-y-4"
            initial="hidden"
            animate="visible"
            variants={podiumVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-800 rounded-full blur-md"></div>
              <img 
                src={topThreePlayers[0].avatar} 
                alt="1st Place" 
                className="w-24 h-24 rounded-full border-4 border-yellow-300 z-10 relative"
              />
              <div className="absolute -bottom-2 z-10  -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-700 text-yellow-900 font-bold">
                1
              </div>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-b from-yellow-700 to-yellow-900 rounded-lg w-36 text-center shadow-lg">
              <p className="text-sm text-yellow-300 truncate">{topThreePlayers[0].wallet}</p>
              <p className="text-2xl font-bold text-yellow-100">{topThreePlayers[0].score}</p>
            </div>
            <div className="h-28 w-20 bg-gradient-to-t from-yellow-800 to-yellow-500 rounded-t-lg mt-2"></div>
          </motion.div>
          

          <motion.div 
            className="flex flex-col items-center mx-4 transform translate-y-12
            max-[365px]:relative max-[365px]:left-[-29px]
            max-[392px]:relative max-[392px]:left-[-29px]
            "
            initial="hidden"
            animate="visible"
            variants={podiumVariants}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full blur-md
            
              "></div>
              <img 
                src={topThreePlayers[2].avatar} 
                alt="3rd Place" 
                className="w-16 h-16 rounded-full border-4 border-yellow-500 z-10 relative"
              />
              <div className="absolute z-10  -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-700 text-yellow-900 font-bold">
                3
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg w-28 text-center
            max-[365px]:w-[110px]
            ">
              <p className="text-sm text-gray-400 truncate">{topThreePlayers[2].wallet}</p>
              <p className="text-lg font-bold text-orange-300">{topThreePlayers[2].score}</p>
            </div>
            <div className="h-14 w-12 bg-[linear-gradient(to_top,_rgba(285,_150,_10,_0.4),_rgba(285,_221,_51,_0.6))] rounded-t-lg mt-2"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-800 bg-opacity-60 rounded-xl p-6 backdrop-filter backdrop-blur-sm border border-gray-700 mx-8 md:mx-16
          max-[365px]:w-[325px] max-[365px]:relative max-[365px]:left-[-37px]
          max-[392px]:w-[325px] max-[392px]:relative max-[392px]:left-[-23px]
          "
        >
          <table className="w-full
          max-[365px]:w-[165px]
          max-[392px]:w-[165px]

          ">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-3 text-left">RANK</th>
                <th className="p-3 text-left">WALLET ADDRESS</th>
                <th className="p-3 text-right">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {displayPlayers.map((player, idx) => (
                <motion.tr 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + (idx * 0.1) }}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="p-3 font-mono">#{player.rank}</td>
                  <td className="p-3 text-gray-300">{player.wallet}</td>
                  <td className="p-3 text-right font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {player.score}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`px-4 py-2 rounded-md ${
                currentPage === 0 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              Previous
            </motion.button>
            
            <p className="text-gray-400">
              Page {currentPage + 1} of {maxPages}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(maxPages - 1, prev + 1))}
              disabled={currentPage >= maxPages - 1}
              className={`px-4 py-2 rounded-md ${
                currentPage >= maxPages - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamingLeaderboard;