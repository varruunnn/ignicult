import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PremiumTournament = () => {
  const [selectedTournament, setSelectedTournament] = useState('Diamond League');
  const [registrationStatus, setRegistrationStatus] = useState('Open');
  const [currentPage, setCurrentPage] = useState(0);

  const featuredPlayers = [
    { 
      position: 1, 
      name: "NightStalker", 
      wallet: "0xF7a2...b8c9", 
      winRate: "87%", 
      earnings: "$12,450", 
      avatar: "/api/placeholder/100/100" 
    },
    { 
      position: 2, 
      name: "CryptoQueen", 
      wallet: "0x3B6c...d4e5", 
      winRate: "82%", 
      earnings: "$9,780", 
      avatar: "/api/placeholder/100/100" 
    },
    { 
      position: 3, 
      name: "BlockForge", 
      wallet: "0x8D9f...a2b3", 
      winRate: "79%", 
      earnings: "$8,340", 
      avatar: "/api/placeholder/100/100" 
    },
  ];
  
  const qualifiedPlayers = [
    { position: 4, name: "MetaHunter", wallet: "0x1C2D...e3f4", winRate: "76%", earnings: "$7,120" },
    { position: 5, name: "TokenMaster", wallet: "0x5G6H...i7j8", winRate: "74%", earnings: "$6,890" },
    { position: 6, name: "ChainBreaker", wallet: "0xK9L0...m1n2", winRate: "71%", earnings: "$6,450" },
    { position: 7, name: "CryptoWolf", wallet: "0xP3Q4...r5s6", winRate: "68%", earnings: "$5,970" },
    { position: 8, name: "BlockNinja", wallet: "0xT7U8...v9w0", winRate: "66%", earnings: "$5,640" },
    { position: 9, name: "EtherPro", wallet: "0xX1Y2...z3a4", winRate: "65%", earnings: "$5,210" },
    { position: 10, name: "ByteWarrior", wallet: "0xB5C6...d7e8", winRate: "64%", earnings: "$4,980" },
    { position: 11, name: "DeFiKing", wallet: "0xF9G0...h1i2", winRate: "62%", earnings: "$4,750" },
    { position: 12, name: "HashMaster", wallet: "0xJ3K4...l5m6", winRate: "60%", earnings: "$4,520" },
  ];
  
  const tournaments = [
    'Diamond League',
    'Platinum Masters',
    'Gold Championship',
    'Silver Invitational',
    'Bronze Qualifier',
    'Emerald Cup'
  ];
  
  const registrationStatuses = ['Open', 'Closing Soon', 'Closed', 'Completed'];
  
  const playersPerPage = 5;
  const displayPlayers = qualifiedPlayers.slice(
    currentPage * playersPerPage, 
    (currentPage * playersPerPage) + playersPerPage
  );
  
  const maxPages = Math.ceil(qualifiedPlayers.length / playersPerPage);
  
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedTournament, registrationStatus]);

  const podiumVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white p-6
    ">
      <div className="max-w-5xl mx-auto">
        {/* Tournament header with glowing effect */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-500">
              PREMIUM TOURNAMENT
            </h1>
            <p className="text-teal-400 text-lg">$25,000 Prize Pool • 128 Players </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 md:mt-0 flex flex-col md:flex-row gap-4"
          >
            <div className="relative w-64">
              <select
                value={selectedTournament}
                onChange={(e) => setSelectedTournament(e.target.value)}
                className="w-full px-4 py-3 rounded-lg appearance-none bg-gray-800 border-2 border-teal-500 focus:outline-none focus:border-cyan-400 text-white"
              >
                {tournaments.map((tournament) => (
                  <option key={tournament} value={tournament}>{tournament}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tournament info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700 backdrop-filter backdrop-blur-sm">
            <h3 className="text-teal-400 text-lg mb-2">Start Date</h3>
            <p className="text-2xl font-bold">March 20, 2025</p>
            <p className="text-gray-400 mt-1">14:00 UTC</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700 backdrop-filter backdrop-blur-sm">
            <h3 className="text-teal-400 text-lg mb-2">Registration</h3>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                registrationStatus === 'Open' ? 'bg-green-500' : 
                registrationStatus === 'Closing Soon' ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}></div>
              <select
                value={registrationStatus}
                onChange={(e) => setRegistrationStatus(e.target.value)}
                className="text-2xl font-bold bg-transparent border-none focus:outline-none appearance-none"
              >
                {registrationStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <p className="text-gray-400 mt-1">42 Spots Remaining</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 rounded-xl p-6 border border-gray-700 backdrop-filter backdrop-blur-sm">
            <h3 className="text-teal-400 text-lg mb-2">Entry Fee</h3>
            <p className="text-2xl font-bold">0.5 Cultix</p>
            <p className="text-gray-400 mt-1">Premium Members: 0.3 Cultix</p>
          </div>
        </motion.div>

        {/* Champions podium */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-8 text-teal-100"
        >
          REIGNING CHAMPIONS
        </motion.h2>

        <div className="flex justify-center items-end mb-16">
          {/* Second place */}
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
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-cyan-600 rounded-full blur-md"></div>
              <img 
                // src={featuredPlayers[1].avatar} 
                src='https://img.freepik.com/free-vector/cute-astronaut-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology_138676-13977.jpg'
                alt="2nd Place" 
                className="w-20 h-20 rounded-full border-4 border-cyan-400 z-10 relative"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center border-2 border-cyan-700 text-cyan-900 font-bold">
                2
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-800 bg-opacity-80 rounded-lg w-32 text-center backdrop-filter backdrop-blur-sm border border-cyan-900
            max-[365px]:w-[116px]
            ">
              <p className="text-cyan-300 font-bold">{featuredPlayers[1].name}</p>
              <p className="text-sm text-gray-400 truncate">{featuredPlayers[1].wallet}</p>
              <p className="text-xl font-bold text-cyan-100">{featuredPlayers[1].earnings}</p>
            </div>
            <div className="h-20 w-16 bg-gradient-to-t from-cyan-900 to-cyan-600 rounded-t-lg mt-2"></div>
          </motion.div>
          
          {/* First place */}
          <motion.div 
            className="flex flex-col items-center mx-4 transform -translate-y-4"
            initial="hidden"
            animate="visible"
            variants={podiumVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 to-emerald-600 rounded-full blur-md"></div>
              <img 
                // src={featuredPlayers[0].avatar} 
                src='https://img.freepik.com/free-vector/cute-astronaut-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology_138676-13977.jpg'
                alt="1st Place" 
                className="w-24 h-24 rounded-full border-4 border-emerald-400 z-10 relative"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center border-2 border-emerald-700 text-emerald-900 font-bold">
                1
              </div>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-b from-emerald-900 to-emerald-950 rounded-lg w-36 text-center shadow-lg border border-emerald-700">
              <p className="text-emerald-300 font-bold">{featuredPlayers[0].name}</p>
              <p className="text-sm text-emerald-400 truncate">{featuredPlayers[0].wallet}</p>
              <p className="text-2xl font-bold text-emerald-100">{featuredPlayers[0].earnings}</p>
            </div>
            <div className="h-28 w-20 bg-gradient-to-t from-emerald-900 to-emerald-600 rounded-t-lg mt-2"></div>
          </motion.div>
          
          {/* Third place */}
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
              <div className="absolute inset-0 bg-gradient-to-b from-teal-300 to-teal-600 rounded-full blur-md"></div>
              <img 
                // src={featuredPlayers[2].avatar}
                src='https://img.freepik.com/free-vector/cute-astronaut-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology_138676-13977.jpg'
                alt="3rd Place" 
                className="w-16 h-16 rounded-full border-4 border-teal-500 z-10 relative"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center border-2 border-teal-700 text-teal-900 font-bold">
                3
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-800 bg-opacity-80 rounded-lg w-28 text-center backdrop-filter backdrop-blur-sm border border-teal-900
            max-[365px]:w-[110px]
            ">
              <p className="text-teal-300 font-bold">{featuredPlayers[2].name}</p>
              <p className="text-sm text-gray-400 truncate">{featuredPlayers[2].wallet}</p>
              <p className="text-lg font-bold text-teal-100">{featuredPlayers[2].earnings}</p>
            </div>
            <div className="h-14 w-12 bg-gradient-to-t from-teal-900 to-teal-600 rounded-t-lg mt-2"></div>
          </motion.div>
        </div>

        {/* Qualified players table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-800 bg-opacity-60 rounded-xl p-6 backdrop-filter backdrop-blur-sm border border-gray-700 mx-4 md:mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Qualified Players</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4">Position</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Wallet</th>
                  <th className="py-2 px-4">Win Rate</th>
                  <th className="py-2 px-4">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {displayPlayers.map((player) => (
                  <tr key={player.position} className="border-t border-gray-700">
                    <td className="py-2 px-4">{player.position}</td>
                    <td className="py-2 px-4">{player.name}</td>
                    <td className="py-2 px-4">{player.wallet}</td>
                    <td className="py-2 px-4">{player.winRate}</td>
                    <td className="py-2 px-4">{player.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage + 1} of {maxPages}
            </span>
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, maxPages - 1))}
              disabled={currentPage >= maxPages - 1}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumTournament;
