import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import {
  Zap,
  Crown,
  Gamepad2,
  Trophy,
  Calendar,
  Check,
  X,
  Star,
} from "lucide-react";
import CountUp from "../../common/CountUp";
import StatCard from "../../common/StatCard";
import { useProfileData } from "../../hooks/useProfileData";
import { formatDate } from "../../utils/formatters";

const UserProfile = () => {
  const navigate = useNavigate();
  const { walletId } = useParams<{ walletId: string }>();
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  const { profileData, isLoading, error, refetch } = useProfileData(walletId || "");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const currentGameDetails = profileData.games[selectedGameIndex] || {
    name: "No Game Selected",
    score: 0,
    rank: 0,
    highestScore: 0,
    topAchieverWallet: "",
    icon: "❓",
  };

  if (isLoading) {
    return (
      <div className="z-50 min-h-screen bg-[#0f1a2a] text-white flex flex-col items-center justify-center p-6">
        <LoadingScreen loading={true} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F1A2A] to-[#050A15] text-white flex flex-col items-center justify-center p-6">
        <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to Load Profile</h2>
          <p className="mb-6">{error}</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => refetch()}
          >
            Try Again
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1A2A] to-[#050A15] text-white overflow-x-hidden">
      <div className="fixed top-20 -left-20 w-96 h-96 rounded-full bg-cyan-900 opacity-20 filter blur-3xl"></div>
      <div className="fixed bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-900 opacity-20 filter blur-3xl"></div>
      <div className="pt-24 pb-12">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-b from-[#1A2A3A] to-[#0D1A2A] rounded-3xl p-8 border border-cyan-900/40 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>


            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://img.freepik.com/free-vector/cute-alien-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology-flat_138676-13965.jpg"
                  alt="Player Avatar"
                  className="w-32 h-32 rounded-2xl border-4 border-yellow-500 shadow-xl z-10"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full p-2 shadow-lg border-2 border-gray-900">
                  <Crown size={16} className="text-white" />
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-gray-300 font-mono text-lg">{profileData.walletAddress}</p>
                  </div>
                </div>


                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-400 text-xs">TOTAL POINTS</p>
                    <div className="mt-1">
                      <CountUp
                        target={profileData.totalPoints}
                        className="text-xl text-yellow-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-400 text-xs">CULTIX BALANCE</p>
                    <div className="flex items-center mt-1">
                      <span className="text-emerald-400 mr-1">✦</span>
                      <CountUp
                        target={profileData.cultixBalance}
                        className="text-xl text-emerald-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-400 text-xs">GAMES PLAYED</p>
                    <div className="mt-1">
                      <CountUp
                        target={profileData.totalGamesPlayed}
                        className="text-xl"
                        format={(n) => n.toLocaleString()}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-400 text-xs">TOURNAMENTS</p>
                    <div className="mt-1">
                      <CountUp
                        target={profileData.tournamentsParticipated}
                        className="text-xl"
                        format={(n) => n.toLocaleString()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <StatCard
              icon="👾"
              label="Most Played Game"
              value={profileData.mostPlayedGame}
              bgGradient="from-cyan-900/40 to-cyan-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="⏱️"
              label="Hours per Week"
              value={profileData.hoursPerWeek}
              bgGradient="from-indigo-900/40 to-indigo-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="🏆"
              label="Game Diversity Score"
              value={profileData.gameDiversityScore}
              bgGradient="from-blue-900/40 to-blue-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="🔥"
              label="Gaming Streak"
              value={profileData.gamingStreak}
              bgGradient="from-cyan-900/40 to-cyan-950/80"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<Check className="text-cyan-400" />}
              label="Completion Rate"
              value={`${profileData.completionRate.toFixed(1)}%`}
              bgGradient="from-cyan-900/40 to-cyan-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<Calendar className="text-indigo-400" />}
              label="Tournament History"
              value={`${profileData.tournamentHistory.length} Months`}
              bgGradient="from-indigo-900/40 to-indigo-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<Star className="text-cyan-400" />}
              label="Game Diversity"
              value={profileData.gameDiversityScore}
              bgGradient="from-blue-900/40 to-blue-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<X className="text-red-400" />}
              label="DNF Rate"
              value={`${profileData.dnfRate.toFixed(1)}%`}
              bgGradient="from-indigo-900/40 to-indigo-950/80"
            />
          </motion.div>
        </motion.div>

        {profileData.games.length > 0 ? (
          <motion.div
            className="max-w-6xl mx-auto px-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Gamepad2 className="mr-2 text-cyan-400" /> Game Details
              </h2>
              <motion.select
                value={selectedGameIndex}
                onChange={(e) => setSelectedGameIndex(Number(e.target.value))}
                className="mt-4 sm:mt-0 w-64 appearance-none bg-[#1A2A3A] text-white px-4 py-2 rounded-xl outline-none border border-cyan-900/40 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {profileData.games.map((game, idx) => (
                  <option key={game.name} value={idx}>
                    {game.icon} {game.name}
                  </option>
                ))}
              </motion.select>
            </div>

            <motion.div
              className="bg-gradient-to-b from-[#1A2A3A] to-[#0D1A2A] p-6 rounded-2xl shadow-xl border border-cyan-900/40"
              layout
              key={currentGameDetails.name}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{currentGameDetails.icon}</span>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  {currentGameDetails.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-900/30">
                  <p className="text-gray-400 text-sm">Player's Score</p>
                  <div className="flex items-baseline">
                    <h2 className="text-4xl font-bold">
                      <CountUp
                        target={currentGameDetails.score}
                        className="text-cyan-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </h2>
                    <span className="ml-2 text-gray-400">points</span>
                  </div>

                  {currentGameDetails.score > 0 && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${(currentGameDetails.score /
                                currentGameDetails.highestScore) *
                              100
                              }%`,
                          }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-900/30">
                  <p className="text-gray-400 text-sm">Player's Rank</p>
                  <h2 className="text-4xl font-bold">
                    {currentGameDetails.rank > 0 ? (
                      <span className="text-cyan-400">
                        #{currentGameDetails.rank}
                      </span>
                    ) : (
                      <span className="text-gray-500">Unranked</span>
                    )}
                  </h2>
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-900/30">
                  <p className="text-gray-400 text-sm">Highest Global Score</p>
                  <h2 className="text-3xl font-bold text-indigo-400">
                    {currentGameDetails.highestScore.toLocaleString()}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 font-mono">
                    {currentGameDetails.topAchieverWallet.slice(0, 6)}...
                    {currentGameDetails.topAchieverWallet.slice(-4)}
                  </p>
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-900/30 flex flex-col justify-between">
                  <p className="text-gray-400 text-sm">Quick Play</p>
                  <motion.button
                    className="mt-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 15px -3px rgba(8, 145, 178, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/games/${currentGameDetails.name}`)}
                  >
                    <Zap size={20} className="mr-2" />
                    PLAY NOW
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-6xl mx-auto px-6 mt-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gradient-to-b from-[#1A2A3A] to-[#0D1A2A] p-8 rounded-2xl shadow-xl border border-cyan-900/40">
              <Gamepad2 className="mx-auto text-cyan-400 h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">No Games Played Yet</h3>
              <p className="text-gray-400 mb-6">This player hasn't played any games yet.</p>
            </div>
          </motion.div>
        )}

        {profileData.bestPerformance && profileData.bestPerformance.gameName && (
          <motion.div
            className="max-w-6xl mx-auto px-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="mr-2 text-cyan-400" /> Best Performance
              </h2>
            </div>

            <motion.div
              className="bg-gradient-to-b from-[#1A2A3A] to-[#0D1A2A] rounded-2xl shadow-xl border border-cyan-900/40 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="relative p-6">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-800/30">
                    <p className="text-gray-400 text-sm">Game</p>
                    <h2 className="text-2xl font-bold text-cyan-400 mt-1">
                      {profileData.bestPerformance.gameName}
                    </h2>
                    <p className="text-sm text-gray-400 mt-2">
                      {formatDate(profileData.bestPerformance.date)}
                    </p>
                  </div>

                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-800/30">
                    <p className="text-gray-400 text-sm">Score</p>
                    <h2 className="text-4xl font-bold text-cyan-400 mt-1">
                      <CountUp
                        target={profileData.bestPerformance.score}
                        className="text-cyan-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </h2>
                  </div>

                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-cyan-800/30 flex flex-col justify-between">
                    <p className="text-gray-400 text-sm">Try This Game</p>
                    <motion.button
                      className="mt-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 15px -3px rgba(8, 145, 178, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/games/${profileData.bestPerformance.gameName}`)}
                    >
                      <Gamepad2 size={20} className="mr-2" />
                      PLAY THIS GAME
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;