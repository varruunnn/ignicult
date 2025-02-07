import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const rewards = [
  { 
    title: "Gameplay Rewards", 
    top: "15px", 
    infoTitle: "Earn IGNIx and CultiX by playing your favorite games!",
    infoDetails: [
      "Points Scored: Earn IGNIx for every point you score. The better your performance, the more you earn.",
      "Game Wins: Win games to receive bonus IGNIx and CultiX."
    ]
  },
  { 
    title: "Achievement Rewards", 
    top: "15px",
    infoTitle: "Unlock achievements and earn **IGNIx** and **CultiX**!",
    infoDetails: [
      "Tournaments: Participate and win in tournaments to earn **IGNIx** and **CultiX**.",
      "Challenges: Complete in-game challenges to earn both rewards."
    ]
  },
  { 
    title: "Engagement Rewards", 
    top: "15px", 
    infoTitle: "Stay engaged and earn even more rewards!",
    infoDetails: [
      "Daily Login: Earn **IGNIx** every day you log in to the platform",
      "Continuous Play: Play multiple games daily to earn extra **IGNIx** and **CultiX**."
    ]
  },
  { 
    title: "Weekly Leaderboard Rewards", 
    top: "5px", 
    isMultiline: true,
    infoTitle: "Compete on the leaderboard and earn even more rewards!",
    infoDetails: [
      "Top Performers: The top players on our weekly leaderboards will receive bonus **IGNIx** and **CultiX**.."
    ]
  },
  { 
    title: "Special Event Rewards", 
    top: "15px", 
    infoTitle: "Join special events for exclusive rewards!",
    infoDetails: [
      "Event-Based Rewards: Participate in special events to earn higher **IGNIx** and **CultiX** rewards, along with exclusive prizes."
    ]
  },
  { 
    title: "Future Rewards", 
    top: "15px", 
    infoTitle: "Be part of our exciting future!",
    infoDetails: [
      "Direct Token Rewards: Earn **CultiX** directly for your activities on the platform",
      "Staking Rewards: Stake your **CultiX** tokens to earn more rewards.",
      "Liquidity Mining: Provide liquidity on decentralized exchanges to earn additional **CultiX**."
    ]
  },
  { 
    title: "Security and Fairness", 
    top: "15px", 
    infoTitle: "We prioritize your security and ensure fair play",
    infoDetails: [
      "Activity Monitoring: We actively monitor activities to prevent fraud and abuse.",
      "KYC/AML Compliance: Large rewards will comply with KYC and AML regulations.",
      "Multi-Layered Security: Our platform employs advanced security to protect against bots and exploiters."
    ]
  },
  { 
    title: "Stay Informed", 
    top: "15px", 
    infoTitle: "Keep up with the latest updates and announcements.",
    infoDetails: [
      "In-App Announcements: Get regular updates and announcements within the app.",
      "Social Media: Follow us on social media for the latest news.",
      "Email Newsletters: Subscribe to our newsletters for periodic updates."
    ]
  },
  { 
    title: "Community Engagement", 
    top: "15px", 
    infoTitle: "Join our community and help shape the future of Ignicult.",
    infoDetails: [
      "Surveys and Polls: Participate in surveys and polls to share your feedback.",
      "Community Forums: Engage with other players and discuss suggestions on our forums.",
      "Beta Testing: Get involved in beta testing new features and reward systems."
    ]
  },
];

const RewardsPage = () => {
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  const handleRewardClick = (index: number) => {
    setSelectedReward((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-[400px]:ml-[-15px] max-[400px]:mb-[70px] max-[468px]:mb-[50%] h-[100vh] py-10 text-left left-[-20px] mt-[110px] relative min-h-screen overflow-x-hidden p-4 text-white">
      <motion.header
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[#92FF00] text-3xl font-roboto pl-10 font-semibold">
          Welcome to <br /> Ignicult Rewards
        </h1>
        <p className="text-white font-roboto pl-10 mt-[15px]">
          At Ignicult, we reward both casual players and <br /> blockchain enthusiasts.
          Here’s what you can earn <br /> by joining us:
        </p>
      </motion.header>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {rewards.map((reward, index) => (
          <div key={index} className="mb-4">

            <motion.div
              onClick={() => handleRewardClick(index)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9 cursor-pointer flex items-center"
            >
              {reward.isMultiline ? (
                <h3
                  className="text-[#92FF00] text-lg font-roboto font-medium absolute left-[25px] top-[5px]"
                >
                  {reward.title}
                  <br /> Rewards
                </h3>
              ) : (
                <h3
                  className="text-[#92FF00] text-[21px] font-roboto font-medium absolute left-[25px]"
                  style={{ top: reward.top }}
                >
                  {reward.title}
                </h3>
              )}
              <img
                src="/arrow.svg"
                alt="arrow"
                className="absolute max-[399px]:right-[35px] right-[20px] top-[20px]"
              />
            </motion.div>
            <AnimatePresence>
              {selectedReward === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black p-4 rounded-lg mt-2 w-[349px] ml-9"
                >
                  <h4 className="text-xl font-bold mb-2">
                    {reward.infoTitle}
                  </h4>
                  <ul className="list-disc ml-5">
                    {reward.infoDetails.map((detail, i) => (
                      <li key={i} className="mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default RewardsPage;
