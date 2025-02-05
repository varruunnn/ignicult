import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 py-20  text-white overflow-y-auto overflow-x-hidden">
      <div className="border-t-2 bg-[#141414] border-[#92FF00] fixed h-[80vh] w-[110%] left-[-19px] top-[24%] rounded-[80px] p-4 max-[398px]:h-[70vh] max-[398px]:w-[105%] max-[398px]:top-[25%] max-[398px]:left-[-14px] max-[398px]:rounded-[40px]">
        <div className="mt-20 absolute w-[90%] h-[50vh] rounded-[80px] p-4 max-[398px]:w-full max-[398px]:h-[45vh] max-[398px]:rounded-[40px]">
          <img
            src="/profilee.svg"
            alt="Profile"
            className="w-16 h-16 absolute left-[43%] top-[-130px] rounded-full max-[398px]:w-12 max-[398px]:h-12 max-[398px]:top-[-120px] max-[398px]:z-11 max-[398px]:left-[40%]"
          />
          <h1 className="text-lg  absolute text-[#858585] left-[35%] top-[-60px] font-bold max-[398px]:text-base max-[398px]:top-[-70px] max-[398px]:left-[32%]">
            Wallet Address
          </h1>
          <p className="text-sm absolute text-[#CACACA] left-[42%] top-[-30px] max-[398px]:text-xs max-[398px]:top-[-50px] max-[398px]:left-[38%]">
            abcd12345
          </p>
          <span className="rounded-c-right max-[370px]:h-[49px] max-[399px]:top-[-20px]  max-[399px]:left-[20px] left-[35px] bg-[#82E300] absolute text-black font-bold w-[65px] h-[65px]  py-1 rounded-l-lg ">
            <h3 className="absolute font-extrabold text-sm top-[11px] left-[9px]">Total Points</h3>
          </span>
          <span className="rounded-c-right max-[370px]:h-[49px] left-[35px] max-[399px]:left-[20px] max-[399px]:top-[70px] top-[97px] bg-[#82E300] absolute text-black max-[370px]:top-[40px] font-bold w-[65px] h-[65px]  py-1 rounded-l-lg ">
            <h3 className="absolute font-extrabold text-sm top-[11px] left-[9px]">Games Played</h3>
          </span>
          <div className="flex flex-col  left-[17px] max-[399px]:left-[2px] relative gap-4 w-full">
            <div className="flex items-center max-[370px]:top-[-36px] max-[370px]:h-[49px] max-[399px]:top-[-36px] relative w-[74vw] right-[-60px]  h-[65px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl">
              <span className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left">
                000
              </span>
              <img
                src="/100.svg"
                alt="Emoji Events"
                className="text-[#FFA500] max-[370px]:w-[38px] max-[370px]:h-[38px] w-[50px] mr-[5px] h-[50px] bg-[#FFA500] rounded-3xl text-2xl "
              />
            </div>
            <div className="flex items-center max-[370px]:top-[-41px] max-[370px]:h-[49px] relative w-[74vw] max-[399px]:top-[-27px]   right-[-60px]  h-[65px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl">
              <span className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left">
                000
              </span>
              <img
                src="/gc.svg"
                alt="Emoji Events"
                className="text-[#FFA500] max-[370px]:w-[38px] max-[370px]:h-[38px] w-[50px] mr-[5px] h-[50px] bg-[#FFA500] rounded-3xl text-2xl "
              />
            </div>
          </div>

          <div className="mt-6 left-[20px]  max-[370px]:mt-[-88px] relative max-[380px]:mt-[2px] max-[398px]:left-[-9px] max-[398px]:relative max-[398px]:top-[-30px] max-[370px]:top-[50px] max-[398px]:overflow-y-auto max-[398px]:mt-4">
            <h2 className="text-sm text-[#A3A3A3]  max-[399px]:mt-[15px] max-[399px]:top-[-6px] relative  max-[399px]:ml-[10px] mb-2 max-[398px]:text-xs max-[398px]:mb-1">
              Tournaments Participated
            </h2>
            <div className="bg-black border h-[50px]  max-[399px]:h-[48px]  w-[86vw] max-[399px]:ml-[10px] max-[399px]:w-[89vw] border-[#92FF00] rounded-2xl p-4 mb-4 max-[398px]:p-2 max-[398px]:mb-2">
              <p className="text-xl max-[399px]:top-[45px] text-[#FEA50D] text-left absolute top-[40px] font-bold max-[398px]:text-base">000</p>
            </div>

            <h2 className="text-sm max-[370px]:mt-[-6px] max-[399px]:ml-[15px] max-[399px]:mt-[17px] max-[399px]:top-[7px]  relative text-[#A3A3A3] mb-2 max-[398px]:text-xs max-[398px]:mb-1">
              Tournaments
            </h2>
            <div className="bg-[#353535]  max-[370px]:h-[21vh] max-[399px]:ml-[12px] max-[399px]:mt-[15px]  border w-[86vw] h-[19vh] border-[#92FF00] rounded-2xl p-4 max-[398px]:p-2">
              <select className="w-full h-[5vh] bg-[#353535] text-white border border-[#B3B3B3] rounded-[100px] p-2 max-[398px]:p-1">
                <option>Cricket Catch Pro</option>
                <option>Soccer Stars</option>
              </select>
              <div className="mt-4  relative max-[398px]:mt-2">
                <h3 className="text-sm text-[#A3A3A3] relative max-[399px]:left-[8px] max-[399px]:top-[8px] max-[398px]:text-xs">
                  Highest Score
                </h3>
                <p className="text-xl text-right max-[399px]:right-[8px] relative text-[#FEA50D] max-[399px]:top-[-10px] top-[-24px] font-bold max-[398px]:text-base">00000</p>
                <div className="w-full h-[55px] max-[370px]:mt-[6px] top-[30px] rounded-2xl bg-black absolute">
                <p className="absolute top-[7px] text-sm left-[18px]">Your Score</p>
                <p className="absolute top-[25px] text-[#FEA50D] text-lg left-[20px]">000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
