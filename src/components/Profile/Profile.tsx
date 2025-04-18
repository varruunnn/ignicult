import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import {
  Zap,
  Crown,
  Gamepad2,
  Flame,
  Loader2,
  Trophy,
  Calendar,
  Check,
  X,
  Star,
} from "lucide-react";
import { useActiveAccount } from "thirdweb/react"
interface Game {
  name: string;
  score: number;
  rank: number;
  highestScore: number;
  topAchieverWallet: string;
  icon: string;
}

interface TournamentHistoryItem {
  month: string;
  gamesPlayed: number;
  totalScore: number;
}

interface BestPerformance {
  score: number;
  gameId: number;
  gameName: string;
  date: string;
}

interface ProfileData {
  walletAddress: string;
  totalPoints: number;
  totalGamesPlayed: number;
  mostPlayedGame: string;
  hoursPerWeek: number;
  tournamentsParticipated: number;
  cultixBalance: number;
  games: Game[];
  completionRate: number;
  tournamentHistory: TournamentHistoryItem[];
  gameDiversityScore: number;
  dnfRate: number;
  bestPerformance: BestPerformance;
  gamingStreak: number;
}

const defaultProfileData: ProfileData = {
  walletAddress: "",
  totalPoints: 0,
  totalGamesPlayed: 0,
  mostPlayedGame: "Loading...",
  hoursPerWeek: 0,
  tournamentsParticipated: 0,
  cultixBalance: 0,
  games: [],
  completionRate: 0,
  tournamentHistory: [],
  gameDiversityScore: 0,
  dnfRate: 0,
  gamingStreak: 0,
  bestPerformance: {
    score: 0,
    gameId: 0,
    gameName: "",
    date: ""
  }
};

const CountUp = ({
  target,
  duration = 2,
  format = (n: number) => n.toFixed(0),
  className = "",
}: {
  target: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      type: "spring",
      stiffness: 50,
      damping: 15,
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [target, duration]);

  return (
    <motion.span className={`font-bold ${className}`}>
      {format(value)}
    </motion.span>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  bgGradient = "from-[#2A2A2A] to-[#202020]",
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bgGradient?: string;
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-b ${bgGradient} p-5 rounded-2xl shadow-lg border border-gray-800 relative overflow-hidden`}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="absolute top-0 right-0 opacity-10 text-6xl p-2">
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
        </div>
      </div>
    </motion.div>
  );
};

const mapApiDataToProfileData = (apiData: any): ProfileData => {
  const games = apiData.games?.map((game: any) => ({
    name: game.name || "Unknown Game",
    score: game.score || 0,
    rank: game.rank || 0,
    highestScore: game.highestScore || 0,
    topAchieverWallet: game.topAchieverWallet || "0x0000000000",
    icon: getGameIcon(game.name), 
  })) || [];
  
  const hoursPerWeek = 8; // Hardcoded value since it's not in the API
  
  return {
    walletAddress: apiData.walletAddress || "",
    totalPoints: apiData.totalPoints?.value || 0,
    totalGamesPlayed: apiData.totalGamesPlayed?.value || 0,
    mostPlayedGame: apiData.mostPlayedGame?.name || "No Games",
    hoursPerWeek: hoursPerWeek,
    tournamentsParticipated: apiData.tournamentsParticipated?.value || 0,
    cultixBalance: apiData.cultixBalance?.value || 0,
    games: games,
    completionRate: apiData.completionRate?.value || 0,
    tournamentHistory: apiData.tournamentStats?.tournamentHistory?.value || [],
    gameDiversityScore: apiData.gameDiversityScore?.value || 0,
    dnfRate: apiData.dnfRate?.value || 0,
    gamingStreak: apiData.gamingStreak?.value || 0,
    bestPerformance: apiData.bestPerformance?.value || {
      score: 0,
      gameId: 0,
      gameName: "",
      date: ""
    }
  };
};

const getGameIcon = (gameName: string): string => {
  const gameIcons: {[key: string]: string} = {
    "Number Snake": "🐍",
    "Tic Tac Toe": "❌",
    "Color Ship Shooter": "👾",
    "Color puzzle": "⚔️",
    "Cricket Catch Pro": "🚀",
  };
  
  return gameIcons[gameName] || "🎮";
};

const Profile = () => {
  const navigate = useNavigate();
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hardcodedUserId = "0324dfa6-3d7f-4502-9eb3-a2ecb5743493";
  
  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://ignicult.com/api/metrics/user/${hardcodedUserId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch profile data: ${response.status}`);
        }
        
        const data = await response.json();
        const formattedData = mapApiDataToProfileData(data);
        
        setProfileData(formattedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const currentGameDetails = profileData.games[selectedGameIndex] || {
    name: "No Game Selected",
    score: 0,
    rank: 0,
    highestScore: 0,
    topAchieverWallet: "",
    icon: "❓",
  };

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
  
  if (isLoading) {
    return (
      <div className="z-50 min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#050505] text-white flex flex-col items-center justify-center p-6">
              <LoadingScreen loading={true}/>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#050505] text-white flex flex-col items-center justify-center p-6">
        <div className="bg-blue-900/30 border border-blue-800 rounded-xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to Load Profile</h2>
          <p className="mb-6">{error}</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Format date for best performance section
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#050505] text-white overflow-x-hidden">
      <div className="fixed top-20 -left-20 w-96 h-96 rounded-full bg-purple-900 opacity-20 filter blur-3xl"></div>
      <div className="fixed bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-900 opacity-20 filter blur-3xl"></div>

      <div className="pt-24 pb-12">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-3xl p-8 border border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://img.freepik.com/free-vector/cute-alien-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology-flat_138676-13965.jpg"
                  alt="Default Player Avatar"
                  className="w-32 h-32 rounded-2xl border-4 border-yellow-500 shadow-xl z-10"
                />
                <div className="mt-4 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-300 font-mono text-lg break-all">
                    {profileData.walletAddress}
                  </p>
                </div>
              </motion.div>

              <div className="flex-1">
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

        {/* First row of stat cards */}
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
              bgGradient="from-indigo-900/40 to-indigo-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="⏱️"
              label="Hours per Week"
              value={profileData.hoursPerWeek}
              bgGradient="from-purple-900/40 to-purple-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="🏆"
              label="Game Diversity Score"
              value={profileData.gameDiversityScore}
              bgGradient="from-amber-900/40 to-amber-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="🔥"
              label="Gaming Streak"
              value={profileData.gamingStreak}
              bgGradient="from-red-900/40 to-red-950/80"
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
              icon={<Check className="text-green-400" />}
              label="Completion Rate"
              value={`${profileData.completionRate.toFixed(1)}%`}
              bgGradient="from-green-900/40 to-green-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<Calendar className="text-blue-400" />}
              label="Tournament History"
              value={`${profileData.tournamentHistory.length} Months`}
              bgGradient="from-blue-900/40 to-blue-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<Star className="text-yellow-400" />}
              label="Game Diversity"
              value={profileData.gameDiversityScore}
              bgGradient="from-yellow-900/40 to-yellow-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<X className="text-red-400" />}
              label="DNF Rate"
              value={`${profileData.dnfRate.toFixed(1)}%`}
              bgGradient="from-pink-900/40 to-pink-950/80"
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
                <Gamepad2 className="mr-2 text-blue-400" /> Game Details
              </h2>
              <motion.select
                value={selectedGameIndex}
                onChange={(e) => setSelectedGameIndex(Number(e.target.value))}
                className="mt-4 sm:mt-0 w-64 appearance-none bg-[#1A1A1A] text-white px-4 py-2 rounded-xl outline-none border border-gray-700 shadow-lg"
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
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] p-6 rounded-2xl shadow-xl border border-gray-800"
              layout
              key={currentGameDetails.name}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{currentGameDetails.icon}</span>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {currentGameDetails.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-400 text-sm">Your Score</p>
                  <div className="flex items-baseline">
                    <h2 className="text-4xl font-bold">
                      <CountUp
                        target={currentGameDetails.score}
                        className="text-yellow-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </h2>
                    <span className="ml-2 text-gray-400">points</span>
                  </div>

                  {currentGameDetails.score > 0 && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${
                              (currentGameDetails.score /
                                currentGameDetails.highestScore) *
                              100
                            }%`,
                          }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>
                          {Math.round(
                            (currentGameDetails.score /
                              currentGameDetails.highestScore) *
                              100
                          )}
                          % of top score
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-400 text-sm">Your Rank</p>
                  <h2 className="text-4xl font-bold">
                    {currentGameDetails.rank > 0 ? (
                      <span className="text-blue-400">
                        #{currentGameDetails.rank}
                      </span>
                    ) : (
                      <span className="text-gray-500">Unranked</span>
                    )}
                  </h2>
                  {currentGameDetails.rank > 0 && (
                    <p className="text-sm text-gray-400 mt-1">
                      Top {((currentGameDetails.rank / 1000) * 100).toFixed(1)}%
                      of players
                    </p>
                  )}
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-gray-800">
                  <p className="text-gray-400 text-sm">Highest Global Score</p>
                  <h2 className="text-3xl font-bold text-purple-400">
                    {currentGameDetails.highestScore.toLocaleString()}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 font-mono">
                    {currentGameDetails.topAchieverWallet.slice(0, 6)}...
                    {currentGameDetails.topAchieverWallet.slice(-4)}
                  </p>
                </div>

                <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-gray-800 flex flex-col justify-between">
                  <p className="text-gray-400 text-sm">Quick Play</p>
                  <motion.button
                    className="mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
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
            <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl shadow-xl border border-gray-800">
              <Gamepad2 className="mx-auto text-blue-400 h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">No Games Played Yet</h3>
              <p className="text-gray-400 mb-6">Start playing to see your game statistics here!</p>
              <motion.button
                className="py-3 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg mx-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/games")}
              >
                <Zap size={20} className="mr-2" />
                BROWSE GAMES
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* New Best Performance Section */}
        {profileData.bestPerformance && profileData.bestPerformance.gameName && (
          <motion.div
            className="max-w-6xl mx-auto px-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="mr-2 text-yellow-400" /> Best Performance
              </h2>
            </div>

            <motion.div
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl shadow-xl border border-gray-800 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="relative p-6">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-yellow-800">
                    <p className="text-gray-400 text-sm">Game</p>
                    <h2 className="text-2xl font-bold text-yellow-400 mt-1">
                      {profileData.bestPerformance.gameName}
                    </h2>
                    <p className="text-sm text-gray-400 mt-2">
                      {formatDate(profileData.bestPerformance.date)}
                    </p>
                  </div>
                  
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-yellow-800">
                    <p className="text-gray-400 text-sm">Score</p>
                    <h2 className="text-4xl font-bold text-yellow-400 mt-1">
                      <CountUp
                        target={profileData.bestPerformance.score}
                        className="text-yellow-400"
                        format={(n) => n.toLocaleString()}
                      />
                    </h2>
                  </div>
                  
                  <div className="bg-black bg-opacity-30 p-4 rounded-xl border border-yellow-800 flex flex-col justify-between">
                    <p className="text-gray-400 text-sm">Play Again</p>
                    <motion.button
                      className="mt-4 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 15px -3px rgba(234, 179, 8, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/games/${profileData.bestPerformance.gameName}`)}
                    >
                      <Trophy size={20} className="mr-2" />
                      BEAT YOUR BEST
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

export default Profile;