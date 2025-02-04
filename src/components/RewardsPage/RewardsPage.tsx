import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
};

const rewards = [
  { title: "Gameplay Rewards", top: "15px" },
  { title: "Achievement Rewards", top: "15px" },
  { title: "Engagement Rewards", top: "15px" },
  { title: "Weekly Leaderboard Rewards", top: "5px", isMultiline: true },
  { title: "Special Event Rewards", top: "15px" },
  { title: "Future Rewards", top: "15px" },
  { title: "Security and Fairness", top: "15px" },
];

const RewardsPage = () => {
  return (
    <div className="max-[400px]:ml-[-15px] max-[400px]:mb-[70px] py-10 text-left left-[-20px] mt-[110px] relative min-h-screen overflow-x-hidden p-4 text-white">
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-[#92FF00] text-3xl font-roboto pl-10 font-semibold">
          Welcome to <br /> Ignicult Rewards
        </h1>
        <p className="text-white font-roboto pl-10 mt-[15px]">
          At Ignicult, we reward both casual players and <br /> blockchain enthusiasts.
          Here’s what you can earn <br /> by joining us:
        </p>
      </motion.header>

      {/* Animated Rewards Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {rewards.map((reward, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#363636] relative w-[349px] h-[67px] pl-10 mt-[10px] ml-9"
          >
            {reward.isMultiline ? (
              <h3 className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px] top-[5px]">
                Weekly Leaderboard <br /> Rewards
              </h3>
            ) : (
              <h3
                className="text-[#92FF00] text-2xl font-roboto font-medium absolute left-[25px]"
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
        ))}
      </motion.section>
    </div>
  );
};

export default RewardsPage;
