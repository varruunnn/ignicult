import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
const TrendingGamesCarousel = React.lazy(
  () => import("./TrendingGamesCarousel")
);
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { client } from "../../client";
import { Trophy, Award, Star, Activity } from "lucide-react";

const Button = ({
  children,
  primary = false,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-colors ${
        primary
          ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg shadow-amber-900/20"
          : "border border-[#FFB000] bg-[#1D1D1D] hover:bg-gray-800"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "twitch",
        "apple",
        "guest",
      ],
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.metamask"),
];

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Competitive Tournaments",
      description:
        "Join high-stakes tournaments with players from around the world and compete for massive prizes.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Exclusive Rewards",
      description:
        "Earn unique rewards, achievements, and digital collectibles as you play and win.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Premium Experiences",
      description:
        "Access VIP tournaments, special events, and customized gaming experiences.",
    },
    {
      icon: <Activity className="w-8 h-8 text-yellow-500" />,
      title: "Real-time Statistics",
      description:
        "Track your performance with detailed analytics and see how you rank against global players.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1D1D] to-[#0D0D0D] text-white">
      <main>
        <section className="relative">
          <div className="relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D]/90 via-[#0D0D0D] to-[#151515]"></div>
          </div>
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <div>
                  <h1 className="text-5xl sm:text-5xl font-extrabold mb-6 tracking-tight">
                    <span className="font-rubik text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 inline-block">
                      Welcome to <br /> IGNICULT
                    </span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                  The ultimate competitive gaming platform for{" "}
                  <span className="text-yellow-400">serious players</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button primary className="text-sm sm:text-base w-64 mx-auto sm:mx-0 sm:w-auto">
                    Play Now
                  </Button>
                  <Button
                    onClick={() => navigate("/games")}
                    className="text-sm sm:text-base w-64 mx-auto sm:mx-0 sm:w-auto"
                  >
                    Explore Games
                  </Button>
                  <div className="custom-connect-button border-[1px] sm:border-[2px] border-[#b08205] rounded-xl w-64 mx-auto sm:mx-0 sm:w-auto shadow-sm">
                    <ConnectButton
                      client={client}
                      wallets={wallets}
                      theme={darkTheme({
                        colors: {
                          primaryButtonBg: "",
                          primaryButtonText: "#FFFFFF",
                          connectedButtonBg: "hsl(240, 9%, 3%)",
                          connectedButtonBgHover: "hsl(231, 11%, 12%)",
                        },
                      })}
                      connectModal={{ size: "compact" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1D1D1D] to-transparent z-10"></div>
        </section>
        <TrendingGamesCarousel />
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#151515] relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div>
                <h2 className="text-4xl sm:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r font-inter font-semibold from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent inline-block">
                    <span className="text-3xl sm:text-4xl tracking-wider">Why Choose </span>{" "}
                    <br />
                    <span className="text-5xl sm:text-7xl tracking-tighter">
                      IGNICULT ?
                    </span>
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mt-4 sm:mt-6">
                Experience the ultimate gaming platform designed for competitive
                players and esports enthusiasts
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {features.map((feature, index) => (
                <div key={feature.title}>
                  <div className="bg-gradient-to-b from-[#2A2A2A] to-[#202020] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl relative overflow-hidden h-full hover:-translate-y-2 transition-transform duration-300">
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="p-3 sm:p-5 rounded-xl">
                          {React.cloneElement(feature.icon, {
                            className: "w-8 h-8 sm:w-10 sm:h-10 text-yellow-500",
                          })}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-center text-white mb-2 sm:mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-400 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r font-inter font-semibold from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent inline-block">
                  <span className="text-4xl sm:text-5xl font-inter tracking-tigher">
                    What We Provide?
                  </span>
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Cutting-edge gaming experiences with rewards, tournaments, and
                community
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#202020] rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-500">
                  Competitive Gaming
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Daily tournaments with cash prizes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Skill-based matchmaking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Global leaderboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#202020] rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-500">
                  Premium Tournaments
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Exclusive high-stake competitions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Professional tournament structure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Live streaming and commentary</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#2A2A2A] to-[#202020] rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-500">
                  Community & Rewards
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Exclusive in-game rewards</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Community events and challenges</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm sm:text-base">Discord integration and social features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;