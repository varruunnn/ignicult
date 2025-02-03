import React from "react";
import styled, { keyframes } from "styled-components";
import { motion, Variants } from "framer-motion";
const LandingPage: React.FC = () => {
  const glow = keyframes`
    0%, 100% { filter: drop-shadow(0 0 0px #92FF00); }
    50% { filter: drop-shadow(0 0 15px #92FF00); }
  `;

  const GlowingSVG = styled(motion.img)`
    max-width: 100%;
    height: auto;
    position: relative;
    top: -22px;
    right: 1px;
    width: 390px;
    height: 168px;
    animation: ${glow} 2s infinite;
    cursor: pointer;
  `;

  const handleClick = () => {
    alert("I am Glowing dv");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const cardHover = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300 }
  };

  const rocketFloat: Variants = {
    float: {
      y: ["0%", "-20%", "0%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <div className=" overflow-x-hidden font-roboto text-white min-h-screen">
      <section className="text-center py-[100px] bg-gradient-to-r from-black-800 to-black-600 max-w-md mx-auto">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-4 text-white p-4 shadow-lg relative"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <GlowingSVG
            onClick={handleClick}
            src="/component41.svg"
            alt="Trending Game"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.h1
            className="absolute left-[51%] text-[#D9FFA6] font-semibold top-[75px]"
            style={{
              textShadow: `
                -2px -2px 0 #000, 
                2px -2px 0 #000,  
                -2px 2px 0 #000, 
                2px 2px 0 #000,   
                0px -2px 0 #000,
                0px 2px 0 #000, 
                -2px 0px 0 #000, 
                2px 0px 0 #000    
              `,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Trending Game
          </motion.h1>
          <motion.p 
            className="absolute left-[49%] text-[#D9FFA6] font-semibold top-[93px]"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Drop The Number
          </motion.p>
          <motion.img
            src="/rocket.png"
            alt="rocket"
            className="absolute max-[398px]:left-[55%] max-w-full h-auto"
            style={{
              top: "-3px",
              right: "110px",
              width: "88px",
              height: "88px",
            }}
            variants={rocketFloat}
            animate="rocketFloat"
          />
        </motion.div>
      </section>
      <section className="mt-[-100px] relative px-6 max-w-md mx-auto">
        <motion.h2 
          className="text-center text-3xl text-[#82E300] font-bold mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to Ignicult
        </motion.h2>
        <motion.div 
          className="grid gap-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#363636] p-4 w-[308px] h-[136px] flex items-center text-left mx-auto"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <img
                src={index === 0 ? "/fire.svg" : 
                     index === 1 ? "/joystick.svg" : 
                     index === 2 ? "/trophy.svg" : "/Group.svg"}
                alt="Icon"
                className="w-[34px] h-[36px] mr-4"
              />
              <p className="">
                {index === 0 ? "Ignicult is a revolutionary hyper-casual gaming platform where you can play, earn, and enjoy with both off-chain and on-chain rewards!" : 
                 index === 1 ? "Discover a variety of exciting games that cater to all types of players." : 
                 index === 2 ? "Earn IGNix points for real-world rewards and use Cultix to unlock on-chain benefits and ownership." : "Create your profile and showcase your achievements to the community."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-6 px-6 relative max-w-md mx-auto mb-24">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.5}} className="text-center text-3xl text-[#82E300] font-bold mb-4">
        Why choose ignicult?
      </motion.h2>
      <motion.div 
          className="flex flex-wrap justify-center gap-1 p-4 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {[
          { img: "/rockett.svg", title: "Fast", subtitle: "and seamless", desc: "gaming experience with web3 integration" },
          { img: "/money.svg", title: "Earn", subtitle: "points", desc: "for real-world rewards and use cultix to unlock on-chain benefits and ownership" },
          { img: "/trust.svg", title: "Secure", subtitle: "and transparent", desc: "transactions powered by blockchain technology" },
          { img: "/earth.svg", title: "Join", subtitle: "global Community", desc: "of gamers and blockchain enthusiasts" }
        ].map((item, index) => (
          <motion.div
          key={index}
          className="bg-[#363636] w-[308px] h-[136px] flex items-center p-4 text-left mx-auto"
          variants={itemVariants}
          whileHover={cardHover}
        >
            <img src={item.img} alt={item.title} className="h-12 w-12 mr-4" />
            <div>
              <h3 className="text-[#82E300] text-lg font-bold">{item.title}</h3>
              <h3 className="text-white text-lg mt-[-5px] font-bold tracking-tight" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)", whiteSpace: "nowrap" }}>
                {item.subtitle}
              </h3>
              <p className="text-sm leading-tight">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </div>
  );
};

export default LandingPage;
