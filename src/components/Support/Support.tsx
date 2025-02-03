import { motion } from "framer-motion";

const Support = () => {
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
      transition: { duration: 0.5 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-[100px] h-[100vh] text-white max-w-md overflow-y-auto mx-auto relative px-6">
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-3xl font-roboto text-[#82E300] font-bold mb-16"
      >
        Happy To Help You
      </motion.h2>
      <motion.div
        className="grid gap-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={cardVariants}
          className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-left mx-auto"
        >
          <img
            src="/chat.svg"
            alt="Chat Icon"
            className="w-[34px] h-[36px] mr-4"
          />
          <p className="font-roboto">
            Ignicult is a revolutionary hyper-casual gaming platform where you can play, earn, and enjoy with both off-chain and on-chain rewards!
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-left mx-auto"
        >
          <img
            src="/mail.svg"
            alt="Mail Icon"
            className="w-[34px] h-[36px] mr-4"
          />
          <p className="font-roboto">
            Discover a variety of exciting games that cater to all types of players.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-left mx-auto"
        >
          <img
            src="/web.svg"
            alt="Web Icon"
            className="w-[34px] h-[36px] mr-4"
          />
          <p className="font-roboto">
            Earn IGNix points for real-world rewards and use Cultix to unlock on-chain benefits and ownership.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Support;
