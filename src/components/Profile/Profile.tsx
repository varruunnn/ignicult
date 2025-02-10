import React from "react";
import { motion } from "framer-motion";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <div
        className="h-[120vh] p-4 py-20 mt-[170px] text-white overflow-x-hidden min-[1023px]:hidden
      max-[468px]:mt-[150px]
      max-[400px]:mt-[140px]
      max-[375px]:mt-[130px]
      max-[370px]:mt-[120px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white relative  text-lg font-semibold text-center text-shadow-glow mt-[-35px]
          max-[468px]:left-[-2px] max-[468px]:top-[-16px]
          max-[400px]:left-[-4px]
          max-[370px]:left-[-3px]
        "
        >
          Profile
        </motion.h1>

        <div
          className="border-t-[1px] mt-[30px] bg-[#141414] border-[#92FF00] relative h-[100vh] w-[100%] left-[-16px] max-w-4xl mx-auto rounded-t-[20px] p-4
        max-[468px]:w-[109%]
        max-[400px]:w-[109%]
        max-[375px]:w-[109%]
        max-[370px]:w-[109%]
        max-[468px]:h-[120vh]
        max-[400px]:h-[130vh]
        max-[375px]:h-[140vh]
        max-[370px]:h-[150vh]
        max-[468px]:rounded-t-[20px]
        max-[400px]:rounded-t-[20px]
        max-[375px]:rounded-t-[20px]
        max-[370px]:rounded-t-[20px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 w-full top-[100px] h-[100vh] rounded-[80px] p-4 mx-auto
          max-[468px]:rounded-[70px]
          max-[400px]:rounded-[60px]
          max-[375px]:rounded-[50px]
          max-[370px]:rounded-[40px]"
          >
            <motion.img
              src="/profilee.svg"
              alt="Profile"
              className="w-16 h-16 absolute left-[43%] top-[-130px] rounded-full border-[1px] border-[#82E300]
              max-[468px]:w-[80px] max-[468px]:h-[80px] max-[468px]:top-[-140px] max-[468px]:left-[40%]
              max-[400px]:w-[70px] max-[400px]:h-[70px] max-[400px]:top-[-135px] max-[400px]:left-[40%]
              max-[375px]:w-12 max-[375px]:h-12 max-[375px]:top-[-120px] max-[375px]:left-[41%]
              max-[370px]:w-[70px] max-[370px]:h-[70px] max-[370px]:top-[-135px] max-[370px]:left-[39.5%]"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.h1
              className="text-lg absolute text-[#858585] left-[35%] top-[-60px] font-bold
              max-[468px]:text-lg max-[468px]:top-[-50px] max-[468px]:left-[35%]
              max-[400px]:text-base max-[400px]:top-[-55px] max-[400px]:left-[34%]
              max-[375px]:text-base max-[375px]:top-[-30x] max-[375px]:left-[33%]
              max-[370px]:text-sm max-[370px]:top-[-50px] max-[370px]:left-[36%]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Wallet Address
            </motion.h1>
            <motion.p
              className="text-sm absolute text-[#CACACA] left-[42%] top-[-30px]
              max-[468px]:text-sm max-[468px]:top-[-24px] max-[468px]:left-[42%]
              max-[400px]:text-xs max-[400px]:top-[-28px] max-[400px]:left-[41%]
              max-[375px]:text-xs max-[375px]:top-[-26px] max-[375px]:left-[40%]
              max-[370px]:text-xs max-[370px]:top-[-32px] max-[370px]:left-[41%]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              abcd12345
            </motion.p>
            <motion.span
              className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[66px] py-1 left-[35px] top-[16px] rounded-l-lg flex items-center justify-center
              max-[468px]:w-[65px] max-[468px]:h-[66px] 
              max-[400px]:w-[60px] max-[400px]:h-[68px] max-[400px]:left-[30px] max-[400px]:top-[11px]
              max-[375px]:w-[55px] max-[375px]:h-[60px] max-[375px]:left-[25px] max-[375px]:top-[12px]
              max-[370px]:w-[50px] max-[370px]:h-[67px] max-[370px]:left-[20px] max-[370px]:top-[11px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3
                className="font-medium leading-tight tracking-tighter text-black text-center text-sm
                max-[468px]:text-sm
                max-[400px]:text-sm
                max-[375px]:text-xs
                max-[370px]:text-xs"
              >
                Total Points
              </h3>
            </motion.span>
            <motion.span
              className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[68px] py-1 left-[35px] top-[105px] rounded-l-lg flex items-center justify-center
              max-[468px]:w-[65px] max-[468px]:h-[68px] 
              max-[400px]:w-[60px] max-[400px]:h-[68px] max-[400px]:left-[30px] max-[400px]:top-[98px]
              max-[375px]:w-[55px] max-[375px]:h-[60px] max-[375px]:left-[25px] max-[375px]:top-[95px]
              max-[370px]:w-[50px] max-[370px]:h-[67px] max-[370px]:left-[20px] max-[370px]:top-[99px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <h3
                className="font-medium leading-tight tracking-tighter text-center text-sm
                max-[468px]:text-sm 
                max-[400px]:text-sm
                max-[375px]:text-xs
                max-[370px]:text-xs"
              >
                Games Played
              </h3>
            </motion.span>
            <motion.div
              className="flex flex-col relative gap-4 h-[150px] w-full left-[17px]
              max-[468px]:left-[15px]
              max-[400px]:left-[10px]
              max-[375px]:left-[5px]
              max-[370px]:left-[2px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div
                className="flex items-center relative w-[74vw] h-[95px] right-[-60px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl
                max-[468px]:w-[74vw] max-[468px]:h-[95px] max-[468px]:right-[-60px]
                max-[400px]:w-[74vw] max-[400px]:h-[90px] max-[400px]:right-[-55px] max-[400px]:top-[-5px]
                max-[375px]:w-[75vw] max-[375px]:h-[85px] max-[375px]:right-[-50px]
                max-[370px]:w-[78vw] max-[370px]:h-[80px] max-[370px]:right-[-45px]"
                style={{
                  width: window.innerHeight < 700 ? "75vw" : "",
                }}
              >
                <span
                  className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left
                max-[468px]:text-xl
                max-[400px]:text-lg
                max-[375px]:text-base
                max-[370px]:text-base"
                >
                  000
                </span>
                <img
                  src="/100.svg"
                  alt="Emoji Events"
                  className="w-[50px] h-[50px] mr-[5px] bg-[#FFA500] rounded-3xl
                max-[468px]:w-[50px] max-[468px]:h-[50px]
                max-[400px]:w-[45px] max-[400px]:h-[45px]
                max-[375px]:w-[40px] max-[375px]:h-[40px]
                max-[370px]:w-[38px] max-[370px]:h-[38px]"
                />
              </div>
              <div
                className="flex items-center relative w-[74vw] h-[97px] right-[-60px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl
                max-[468px]:w-[74vw] max-[468px]:h-[97px] max-[468px]:right-[-60px] max-[468px]:top-[6px]
                max-[400px]:w-[74vw] max-[400px]:h-[90px] max-[400px]:right-[-55px] max-[400px]:top-[0px]
                max-[375px]:w-[65vw] max-[375px]:h-[85px] max-[375px]:right-[-50px]
                max-[370px]:w-[78vw] max-[370px]:h-[80px] max-[370px]:right-[-45px]"
                style={{
                  width: window.innerHeight < 700 ? "75vw" : "",
                }}
              >
                <span
                  className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left
                max-[468px]:text-xl
                max-[400px]:text-lg
                max-[375px]:text-base
                max-[370px]:text-base"
                >
                  000
                </span>
                <img
                  src="/gc.svg"
                  alt="Emoji Events"
                  className="w-[50px] h-[50px] mr-[5px] bg-[#FFA500] rounded-3xl
                max-[468px]:w-[50px] max-[468px]:h-[50px]
                max-[400px]:w-[45px] max-[400px]:h-[45px]
                max-[375px]:w-[40px] max-[375px]:h-[40px]
                max-[370px]:w-[38px] max-[370px]:h-[38px]"
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-[30px] relative w-full h-[55vh]
              max-[468px]:left-[20px]
              max-[400px]:left-[10px]
              max-[375px]:
              max-[370px]:left-[3px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2
                className="text-sm relative text-[#A3A3A3] mb-1
              max-[468px]:text-sm
              max-[400px]:text-xs
              max-[375px]:text-xs
              max-[370px]:text-xs"
              >
                Tournaments Participated
              </h2>
              <div
                className="bg-[#141414] border h-[50px] w-[86vw] border-[#92FF00] rounded-2xl p-4 mb-4
              max-[468px]:w-[86vw]
              max-[400px]:w-[88vw]
              max-[375px]:w-[89vw]
              max-[370px]:w-[90vw]
              max-[468px]:p-4
              max-[400px]:p-3
              max-[375px]:p-2
              max-[370px]:p-2"
              >
                <p
                  className="text-xl text-[#FEA50D] absolute top-[40px] font-bold
                max-[468px]:text-xl max-[468px]:top-[36px]
                max-[400px]:text-lg max-[400px]:top-[32px]
                max-[375px]:text-base max-[375px]:top-[32px]
                max-[370px]:text-base max-[370px]:top-[35px]"
                >
                  000
                </p>
              </div>
              <h2
                className="text-sm relative mt-7 text-[#A3A3A3] mb-1
              max-[468px]:text-sm
              max-[400px]:text-xs
              max-[375px]:text-xs
              max-[370px]:text-xs"
              >
                Tournaments
              </h2>
              <div
                className="bg-[#353535] border w-[86vw] border-[#92FF00] rounded-2xl p-4 relative
                max-[468px]:w-[86vw] max-[468px]:h-[23vh] max-[468px]:p-4
                max-[400px]:w-[88vw] max-[400px]:h-[22vh] max-[400px]:p-3
                max-[370px]:w-[90vw] max-[370px]:h-[22vh] max-[370px]:p-2"
                style={{
                  height: window.innerWidth === 375 ? "30vh" : "23vh",
                }}
              >
                <select
                  className="w-full h-[6.5vh] mt-[1px]  appearance-none bg-[#353535] text-[#B3B3B3] border border-[#B3B3B3] rounded-[100px] p-2
                max-[468px]:p-2
                max-[400px]:p-1
                max-[375px]:p-1
                max-[370px]:p-1"
                >
                  <option>Cricket Catch Pro</option>
                  <option>Cricket Powerplay</option>
                  <option>Color Ship Shooter</option>
                  <option>Color Circle Puzzle</option>
                  <option>Wave Run</option>
                  <option>Number Snake</option>
                  <option>Fire Number Up</option>
                  <option>Two Colors</option>
                  <option>Drop The Number</option>
                  <option>Snake Color Break</option>
                </select>
                <div className="absolute top-[-30%]  max-[370px]:top-[-30%] max-[370px]:right-[20px] flex items-center justify-center h-full pointer-events-none
              max-[468px]:right-[30px] max-[468px]:top-[-28%]
              ">
                  <svg
                    width="12"
                    height="12"
                    fill="#B3B3B3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3L6 9L12 3H0Z" />
                  </svg>
                </div>
                <div className="mt-4 relative">
                  <h3
                    className="text-sm text-[#A3A3A3] relative
                  max-[468px]:text-sm max-[468px]:top-[24px]
                  max-[400px]:text-xs
                  max-[375px]:text-xs max-[375px]:top-[20px]
                  max-[370px]:text-xs max-[370px]:top-[7px]"
                  >
                    Highest Score
                  </h3>
                  <p
                    className="text-xl relative text-right text-[#FEA50D] font-bold
                  max-[468px]:text-xl
                  max-[400px]:text-lg
                  max-[375px]:text-base
                  max-[370px]:text-base max-[370px]:top-[-11px]"
                  >
                    00000
                  </p>
                  <div
                    className="w-full h-[55px] rounded-2xl max-[468px]:top-[55px] bg-[#141414] absolute top-[30px]
                  max-[370px]:top-[34px] 
                  max-[400px]:top-[44px]"
                  >
                    <p className="absolute top-[7px] font-light italic text-sm left-[18px]">
                      Your Score
                    </p>
                    <p className="absolute top-[25px] text-[#FEA50D] text-lg left-[20px]">
                      000
                    </p>
                  </div>
                  <div
                    className="mx-auto max-w-4xl relative left-[-16px] grid grid-cols-2 w-[106%] gap-2 p-4 mt-[70px]
                    max-[370px]:mt-[110px]
                    max-[370px]:w-full
                    max-[370px]:h-auto
                    max-[370px]:gap-4
                    max-[370px]:left-[-22px]"
                  >
                    <div
                      className="w-[210px] h-[140px] relative left-[-30px] p-4 text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]"
                    >
                      <img
                        src="/d1.svg"
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <p className="relative text-lg font-normal top-[-42px] left-[2px] text-[#FEA50D]">
                        Color ship shooter
                      </p>
                    </div>
                    <div
                      className="p-4 w-[210px] h-[140px] relative text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]"
                    >
                      <img
                        src="/d2.svg"
                        alt="Image 2"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <p className="relative text-lg font-normal top-[-42px] left-[40px] text-[#FEA50D]">
                        48
                      </p>
                      <p className="absolute text-sm font-normal top-[63%] right-[14%] text-[#FEA50D]">
                        HR
                      </p>
                    </div>
                    <div
                      className="p-4 w-[210px] h-[140px] relative left-[-30px] rounded-3xl text-center
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]
                    max-[378px]:mt-[-30px]"
                    >
                      <img
                        src="/d3.svg"
                        alt="Image 3"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <p className="relative text-lg font-normal top-[-40px] left-[40px] text-[#FEA50D]">
                        -98 IGNIx
                      </p>
                    </div>
                    <div
                      className="p-4 w-[210px] h-[140px] relative text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]
                    max-[378px]:mt-[-30px]"
                    >
                      <img
                        src="/d4.svg"
                        alt="Image 4"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      <p className="relative text-lg font-normal top-[-43px] left-[5px] text-[#FEA50D]">
                        Color ship shooter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>



      <div className="p-4 py-20 mt-[170px] text-white overflow-x-hidden max-[1023px]:hidden
    
    "
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-lg font-semibold text-center text-shadow-glow mb-8
        top-[25%] left-[13%] absolute
        "
        >
          Profile
        </motion.h1>
        <div className="bg-[#92FF00] w-full mt-[10px] left-[0px] relative h-[2px]"></div>
        <div className=" absolute w-full max-w-4xl mx-auto  p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 w-full top-[100px] h-[100vh] rounded-[80px] p-4 mx-auto"
          >
            <motion.img
              src="/profilee.svg"
              alt="Profile"
              className="w-[80px] h-[80px]  left-[4%] top-[-30%] absolute rounded-full border-[1px] border-[#82E300]
        
            "
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.h1
              className="text-sm absolute text-[#858585] left-[17.6%] top-[-25%] font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Wallet Address
            </motion.h1>
            <motion.p
              className="text-md absolute text-[#CACACA] left-[17.6%] top-[-22%]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              abcd12345
            </motion.p>

            <motion.span
              className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[66px] py-1 left-[8.5%] top-[-10%] rounded-l-lg flex items-center justify-center

            "
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3
                className="font-medium leading-tight tracking-tighter text-black text-center text-sm
"
              >
                Total Points
              </h3>
            </motion.span>
            <motion.span
              className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[68px] py-1 right-[-39%] top-[-10%] rounded-r-lg flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <h3
                className="font-medium leading-tight tracking-tighter text-center text-sm
                max-[468px]:text-sm 
                max-[400px]:text-sm
                max-[375px]:text-xs
                max-[370px]:text-xs"
              >
                Games Played
              </h3>
            </motion.span>
            <motion.div
              className="flex flex-col relative gap-4 h-[150px] w-full left-[17px]
              max-[468px]:left-[15px]
              max-[400px]:left-[10px]
              max-[375px]:left-[5px]
              max-[370px]:left-[2px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div
                className="flex items-center relative w-[38vw] h-[95px] top-[-54%] left-[11.8%] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl"
              >
                <span
                  className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left
                max-[468px]:text-xl
                max-[400px]:text-lg
                max-[375px]:text-base
                max-[370px]:text-base"
                >
                  000
                </span>
                <img
                  src="/100.svg"
                  alt="Emoji Events"
                  className="w-[50px] h-[50px] mr-[5px] bg-[#FFA500] rounded-3xl
                max-[468px]:w-[50px] max-[468px]:h-[50px]
                max-[400px]:w-[45px] max-[400px]:h-[45px]
                max-[375px]:w-[40px] max-[375px]:h-[40px]
                max-[370px]:w-[38px] max-[370px]:h-[38px]"
                />
              </div>
              <div
                className="flex items-center relative w-[38vw] h-[97px] right-[-73.5%] top-[-109%] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-l-3xl
                max-[468px]:w-[74vw] max-[468px]:h-[97px] max-[468px]:right-[-60px] max-[468px]:top-[6px]
                max-[400px]:w-[74vw] max-[400px]:h-[90px] max-[400px]:right-[-55px] max-[400px]:top-[0px]
                max-[375px]:w-[65vw] max-[375px]:h-[85px] max-[375px]:right-[-50px]
                max-[370px]:w-[78vw] max-[370px]:h-[80px] max-[370px]:right-[-45px]"
              >
                <span
                  className="text-[#FEA50D] mr-[10px] font-bold text-xl flex-grow text-right
                max-[468px]:text-xl
                max-[400px]:text-lg
                max-[375px]:text-base
                max-[370px]:text-base"
                >
                  000
                </span>
                <img
                  src="/gc.svg"
                  alt="Emoji Events"
                  className="w-[50px] h-[50px] absolute left-[1.5%] bg-[#FFA500] rounded-3xl"
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-[-100px] relative w-full h-[55vh]
              max-[468px]:left-[20px]
              max-[400px]:left-[10px]
              max-[375px]:
              max-[370px]:left-[3px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2
                className="text-sm relative left-[7.5%] text-[#A3A3A3] top-[-10%] mb-1
              max-[468px]:text-sm
              max-[400px]:text-xs
              max-[375px]:text-xs
              max-[370px]:text-xs"
              >
                Tournaments Participated
              </h2>
              <div
                className="bg-[#141414] border h-[50px] relative left-[7%] top-[-9%] w-[42vw] border-[#92FF00] rounded-2xl p-4 mb-4"
              >
                <p
                  className="text-xl text-[#FEA50D] absolute top-[12px] font-bold
                max-[468px]:text-xl max-[468px]:top-[36px]
                max-[400px]:text-lg max-[400px]:top-[32px]
                max-[375px]:text-base max-[375px]:top-[32px]
                max-[370px]:text-base max-[370px]:top-[35px]"
                >
                  000
                </p>
              </div>
              <div
                className="bg-[#353535]  w-[42vw] left-[76.5%] top-[-27.5%] h-[45vh]  rounded-xl p-4 relative
                max-[468px]:w-[86vw] max-[468px]:h-[23vh] max-[468px]:p-4
                max-[400px]:w-[88vw] max-[400px]:h-[22vh] max-[400px]:p-3
                max-[370px]:w-[90vw] max-[370px]:h-[22vh] max-[370px]:p-2"

              >
                <h2
                  className="text-sm relative mt-7 left-[6%] text-[#A3A3A3] mb-1
              max-[468px]:text-sm
              max-[400px]:text-xs
              max-[375px]:text-xs
              max-[370px]:text-xs"
                >
                  Tournaments
                </h2>
                <select
                  className="w-[20vw] h-[6.5vh] mt-[1px]  appearance-none bg-[#353535] text-[#B3B3B3] border border-[#92FF00] rounded-lg p-2 relative left-[6%]
                max-[468px]:p-2
                max-[400px]:p-1
                max-[375px]:p-1
                max-[370px]:p-1"
                >
                  <option>Cricket Catch Pro</option>
                  <option>Cricket Powerplay</option>
                  <option>Color Ship Shooter</option>
                  <option>Color Circle Puzzle</option>
                  <option>Wave Run</option>
                  <option>Number Snake</option>
                  <option>Fire Number Up</option>
                  <option>Two Colors</option>
                  <option>Drop The Number</option>
                  <option>Snake Color Break</option>
                </select>
                <div className="absolute top-[-19%] left-[44%]  max-[370px]:top-[-30%] max-[370px]:right-[20px] flex items-center justify-center h-full pointer-events-none
              ">
                  <svg
                    width="12"
                    height="12"
                    fill="#B3B3B3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3L6 9L12 3H0Z" />
                  </svg>
                </div>
                <div className="mt-7 relative left-[6%]">
                  <h3
                    className="text-sm text-[#A3A3A3] relative
                  max-[468px]:text-sm max-[468px]:top-[24px]
                  max-[400px]:text-xs
                  max-[375px]:text-xs max-[375px]:top-[20px]
                  max-[370px]:text-xs max-[370px]:top-[7px]"
                  >
                    Highest Score
                  </h3>
                  <p
                    className="text-xl relative left-[76%] top-[-28px] text-[#FEA50D] font-bold"
                  >
                    00000
                  </p>
                  <div
                    className="w-[35vw] h-[55px] rounded-2xl max-[468px]:top-[55px] bg-[#141414] absolute top-[30px]
                  max-[370px]:top-[34px] 
                  max-[400px]:top-[44px]"
                  >
                    <p className="absolute top-[7px] font-light italic text-sm left-[18px]">
                      Your Score
                    </p>
                    <p className="absolute top-[25px] text-[#FEA50D] text-lg left-[20px]">
                      000
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-[210px] h-[140px] relative top-[-90%] left-[40px] p-4 text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]"
              >
                <img
                  src="/d1.svg"
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <p className="relative text-lg font-normal top-[-42px] left-[2px] text-[#FEA50D]">
                  Color ship shooter
                </p>
              </div>
              
              <div
                    className="p-4 w-[210px] h-[140px] left-[40px] relative top-[-90%] text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]"
                  >
                    <img
                      src="/d2.svg"
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-lg font-normal top-[-42px] left-[40px] text-[#FEA50D]">
                      48
                    </p>
                    <p className="absolute text-sm font-normal top-[63%] right-[14%] text-[#FEA50D]">
                      HR
                    </p>
                  </div>
                  
                  <div
                    className="p-4 w-[210px] h-[140px] left-[300px] absolute top-[17%] rounded-3xl text-center
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]
                    max-[378px]:mt-[-30px]"
                  >
                    <img
                      src="/d3.svg"
                      alt="Image 3"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-lg font-normal top-[-40px] left-[40px] text-[#FEA50D]">
                      -98 IGNIx
                    </p>
                  </div>
                  <div
                    className="p-4 w-[210px] h-[140px] left-[300px] absolute top-[56.5%] text-center rounded-3xl
                    max-[370px]:top-[-60px]
                    max-[370px]:w-[200px]
                    max-[400px]:w-[200px]
                    max-[378px]:mt-[-30px]"
                  >
                    <img
                      src="/d4.svg"
                      alt="Image 4"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-lg font-normal top-[-43px] left-[5px] text-[#FEA50D]">
                      Color ship shooter
                    </p>
                  </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
/*
                <div
                  className="mx-auto max-w-4xl relative left-[-16px] grid grid-cols-2 w-[106%] gap-2 p-4 mt-[70px]
                    max-[370px]:mt-[110px]
                    max-[370px]:w-full
                    max-[370px]:h-auto
                    max-[370px]:gap-4
                    max-[370px]:left-[-22px]"
                >



                  */