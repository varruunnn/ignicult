import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Zap,
  Star,
  Gift,
  Ticket,
  ChevronRight,
  Crown,
  Gamepad2,
  Flame,
  Sparkles,
} from "lucide-react";

const profileData = {
  playerName: "CryptoGamer",
  playerImage: "/player-avatar.jpg",
  walletAddress: "0x1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0",
  totalPoints: 45680,
  totalGamesPlayed: 287,
  mostPlayedGame: "Color Ship Shooter",
  hoursPerWeek: 24,
  tournamentsParticipated: 18,
  cultixBalance: 1250,
  level: 1,
  experience: 78,
  games: [
    {
      name: "Color Ship Shooter",
      score: 24350,
      rank: 42,
      highestScore: 41200,
      topAchieverWallet: "0x7B423F5E6F7G89H0I1J2K3L4M5N6O7P8",
      icon: "👾",
    },
    {
      name: "Color puzzle",
      score: 18650,
      rank: 89,
      highestScore: 31500,
      topAchieverWallet: "0xCD923F5E6F7G89H0I1J2K3L4M5N6O7P8",
      icon: "⚔️",
    },
    {
      name: "Cricket Catch Pro",
      score: 2680,
      rank: 543,
      highestScore: 28750,
      topAchieverWallet: "0xEF113F5E6F7G89H0I1J2K3L4M5N6O7P8",
      icon: "🚀",
    },
    {
      name: "tic tak toe",
      score: 0,
      rank: 0,
      highestScore: 22400,
      topAchieverWallet: "0x5A423F5E6F7G89H0I1J2K3L4M5N6O7P8",
      icon: "🐉",
    },
  ],
  achievements: [
    {
      id: "first-win",
      title: "First Victory",
      description: "Win your first game",
      icon: <Trophy size={24} />,
      date: "2024-12-15",
      rarity: "Common",
      completed: true,
    },
    {
      id: "tournament-pro",
      title: "Tournament Pro",
      description: "Participate in 10+ tournaments",
      icon: <Crown size={24} />,
      date: "2025-01-22",
      rarity: "Rare",
      completed: true,
    },
    {
      id: "high-score",
      title: "High Roller",
      description: "Score over 20,000 in any game",
      icon: <Star size={24} />,
      date: "2025-02-05",
      rarity: "Epic",
      completed: true,
    },
    {
      id: "master-strategist",
      title: "Master Strategist",
      description: "Win 5 consecutive games",
      icon: <Zap size={24} />,
      date: null,
      rarity: "Legendary",
      completed: false,
      progress: 60,
    },
  ],
  coupons: [
    {
      id: "coupon-1",
      title: "50% Off Next Tournament",
      description: "Half price entry to any tournament",
      code: "CRYPTO50",
      validUntil: "2025-04-12",
      icon: <Ticket size={24} />,
      redeemed: false,
      backgroundColor: "from-purple-600 to-indigo-700",
    },
    {
      id: "coupon-2",
      title: "Free Legendary Skin",
      description: "Redeem for any legendary skin in the marketplace",
      code: "LEGENDARYSKIN",
      validUntil: "2025-03-30",
      icon: <Sparkles size={24} />,
      redeemed: false,
      backgroundColor: "from-amber-500 to-orange-600",
    },
    {
      id: "coupon-3",
      title: "Double XP Weekend",
      description: "Earn 2x XP for an entire weekend",
      code: "DOUBLEXP",
      validUntil: "2025-04-05",
      icon: <Flame size={24} />,
      redeemed: false,
      backgroundColor: "from-emerald-500 to-teal-700",
    },
    {
      id: "coupon-4",
      title: "Free Game Access",
      description: "One week access to premium game title",
      code: "FREEGAME",
      validUntil: "2025-03-20",
      icon: <Gamepad2 size={24} />,
      redeemed: true,
      backgroundColor: "from-rose-600 to-pink-700",
    },
  ],
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

interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  validUntil: string;
  icon: React.ReactNode;
  redeemed: boolean;
  backgroundColor: string;
}

const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective"
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-48 cursor-pointer"
        // initial={false}
        // animate={{ rotateY: isFlipped ? 180 : 0 }}
        // transition={{
        //   duration: 0.6,
        //   type: "spring",
        //   stiffness: 300,
        //   damping: 20,
        // }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className={`absolute w-full h-full bg-gradient-to-br ${coupon.backgroundColor} rounded-xl p-6 shadow-xl flex flex-col justify-between backface-hidden border-2 border-gray-800`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                {coupon.icon}
              </div>
              <h3 className="font-bold text-lg">{coupon.title}</h3>
            </div>
            {coupon.redeemed && (
              <div className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-xs font-bold">
                REDEEMED
              </div>
            )}
          </div>

          <div className="mt-2">
            <p className="text-sm text-white text-opacity-80">
              {coupon.description}
            </p>
            <p className="text-xs mt-2 text-white text-opacity-70">
              Valid until: {coupon.validUntil}
            </p>
          </div>

          <div className="flex justify-end mt-2">
            <motion.div
              className="p-1 rounded-full bg-white bg-opacity-20"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={16} />
            </motion.div>
          </div>
        </motion.div>

        {/* Back side */}
        <motion.div
          className={`absolute w-full h-full bg-gradient-to-br ${coupon.backgroundColor} rounded-xl p-6 shadow-xl flex flex-col justify-between backface-hidden border-2 border-gray-800`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center flex flex-col items-center justify-center h-full">
            <div className="text-sm mb-2">COUPON CODE</div>
            <div className="font-mono text-xl font-bold p-3 bg-white bg-opacity-20 rounded-lg w-full text-center">
              {coupon.code}
            </div>
            {!coupon.redeemed ? (
              <motion.button
                className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                REDEEM NOW
              </motion.button>
            ) : (
              <div className="mt-4 px-4 py-2 bg-gray-800 text-gray-400 font-bold rounded-lg cursor-not-allowed">
                ALREADY REDEEMED
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface Achievement {
  completed: boolean;
  icon: React.ReactNode;
  title: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  description: string;
  date?: string;
  progress?: number;
}

const Profile = () => {
  const navigate = useNavigate();
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("achievements");
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  const currentGameDetails = profileData.games[selectedGameIndex];

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#050505] text-white overflow-x-hidden">
      <div className="fixed top-20 -left-20 w-96 h-96 rounded-full bg-purple-900 opacity-20 filter blur-3xl"></div>
      <div className="fixed bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-900 opacity-20 filter blur-3xl"></div>

      <div className="pt-24 pb-12">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          // initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-3xl p-8 border border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div className="relative" whileHover={{ scale: 1.03 }}>
                <img
                  //   src={profileData.playerImage}
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
                    <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
                      {profileData.playerName}
                    </h1>
                    <p className="text-gray-400 font-mono text-sm mt-1">
                      {profileData.walletAddress.slice(0, 10)}...
                      {profileData.walletAddress.slice(-6)}
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:items-end">
                    <div className="flex items-center">
                      <Flame className="text-orange-500 mr-2" size={20} />
                      <span className="text-xl font-bold mr-1">Level</span>
                      <CountUp
                        target={profileData.level}
                        className="text-yellow-400 text-2xl"
                      />
                    </div>
                    <div className="w-full max-w-xs mt-2">
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${profileData.experience}%` }}
                          transition={{ duration: 1.5, type: "spring" }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>XP</span>
                        <span>{profileData.experience}%</span>
                      </div>
                    </div>
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
              label="Tournament Rank"
              value="#289"
              bgGradient="from-amber-900/40 to-amber-950/80"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard
              icon="🔥"
              label="Win Streak"
              value="3 Games"
              bgGradient="from-red-900/40 to-red-950/80"
            />
          </motion.div>
        </motion.div>

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
      </div>
    </div>
  );
};

export default Profile;
