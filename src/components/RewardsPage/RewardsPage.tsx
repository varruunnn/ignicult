import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rewards = [
  {
    title: "Gameplay Rewards",
    infoTitle: "Earn IGNIx and CultiX by playing your favorite games!",
    infoDetails: [
      "Points Scored: Earn IGNIx for every point you score. The better your performance, the more you earn.",
      "Game Wins: Win games to receive bonus IGNIx and CultiX.",
    ],
  },
  {
    title: "Achievement Rewards",
    infoTitle: "Unlock achievements and earn IGNIx and CultiX!",
    infoDetails: [
      "Tournaments: Participate and win in tournaments to earn IGNIx and CultiX.",
      "Challenges: Complete in-game challenges to earn both rewards.",
    ],
  },
  {
    title: "Engagement Rewards",
    infoTitle: "Stay engaged and earn even more rewards!",
    infoDetails: [
      "Daily Login: Earn IGNIx every day you log in to the platform",
      "Continuous Play: Play multiple games daily to earn extra IGNIx and CultiX.",
    ],
  },
  {
    title: "Weekly Leaderboard Rewards",
    infoTitle: "Compete on the leaderboard and earn even more rewards!",
    infoDetails: [
      "Top Performers: The top players on our weekly leaderboards will receive bonus IGNIx and CultiX.",
    ],
  },
  {
    title: "Special Event Rewards",
    infoTitle: "Join special events for exclusive rewards!",
    infoDetails: [
      "Event-Based Rewards: Participate in special events to earn higher IGNIx and CultiX rewards, along with exclusive prizes.",
    ],
  },
  {
    title: "Future Rewards",
    infoTitle: "Be part of our exciting future!",
    infoDetails: [
      "Direct Token Rewards: Earn CultiX directly for your activities on the platform",
      "Staking Rewards: Stake your CultiX tokens to earn more rewards.",
      "Liquidity Mining: Provide liquidity on decentralized exchanges to earn additional CultiX.",
    ],
  },
  {
    title: "Security and Fairness",
    infoTitle: "We prioritize your security and ensure fair play",
    infoDetails: [
      "Activity Monitoring: We actively monitor activities to prevent fraud and abuse.",
      "KYC/AML Compliance: Large rewards will comply with KYC and AML regulations.",
      "Multi-Layered Security: Our platform employs advanced security to protect against bots and exploiters.",
    ],
  },
  {
    title: "Stay Informed",
    infoTitle: "Keep up with the latest updates and announcements.",
    infoDetails: [
      "In-App Announcements: Get regular updates and announcements within the app.",
      "Social Media: Follow us on social media for the latest news.",
      "Email Newsletters: Subscribe to our newsletters for periodic updates.",
    ],
  }, 
  {
    title: "Community Engagement",
    infoTitle: "Join our community and help shape the future of Ignicult.",
    infoDetails: [
      "Surveys and Polls: Participate in surveys and polls to share your feedback.",
      "Community Forums: Engage with other players and discuss suggestions on our forums.",
      "Beta Testing: Get involved in beta testing new features and reward systems.",
    ],
  },
];

const RewardsPage = () => {
  const [selectedReward, setSelectedReward] = useState<number | null>(null);

  const handleRewardClick = (index: number) => {
    setSelectedReward((prev) => (prev === index ? null : index));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 py-12 px-4
    ">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-sarpanch font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            REWARDS
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >

              <motion.div
                onClick={() => handleRewardClick(index)}
                className="bg-[#1A1A1A] border-l-2 border-red-500 p-4 rounded-sm flex items-center justify-between cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <h2 className="text-lg font-sarpanch font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                  {reward.title}
                </h2>
                <motion.div
                  animate={{ rotate: selectedReward === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {selectedReward === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#232323] rounded-sm"
                  >
                    <div className="p-4 border-l-2 border-yellow-500 ml-4">
                      <p className="font-sarpanch font-medium text-gray-300 mb-3">
                        {reward.infoTitle}
                      </p>
                      <ul className="space-y-2">
                        {reward.infoDetails.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start text-sm text-gray-400"
                          >
                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                            <span className="font-sarpanch">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RewardsPage;