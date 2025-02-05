import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="h-[120vh] p-4 py-20 mt-[170px] text-white overflow-y-auto overflow-x-hidden ">
      <div className="border-t-2  bg-[#141414] border-[#92FF00] relative h-[120vh] w-[109%] left-[-16px] max-w-4xl mx-auto rounded-t-[20px] p-4 max-[399px]:h-[140vh] max-[399px]:rounded-t-[40px]">
        <div className="absolute left-[0px] w-[100%]  top-[100px] h-[100vh] rounded-[80px] p-4 mx-auto max-[399px]:w-full max-[399px]:h-[100vh] max-[399px]:rounded-[40px]">
          <img
            src="/profilee.svg"
            alt="Profile"
            className="w-16 h-16 absolute left-[43%] top-[-130px] rounded-full max-[399px]:w-12 max-[399px]:h-12 max-[399px]:top-[-120px] max-[399px]:left-[40%]"
          />
          <h1 className="text-lg absolute text-[#858585] left-[35%] top-[-60px] font-bold max-[399px]:text-base max-[399px]:top-[-70px] max-[399px]:left-[32%]">
            Wallet Address
          </h1>
          <p className="text-sm absolute text-[#CACACA] left-[42%] top-[-30px] max-[399px]:text-xs max-[399px]:top-[-50px] max-[399px]:left-[38%]">
            abcd12345
          </p>
          <span className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[66px] py-1 left-[35px] top-[16px] rounded-l-lg flex items-center justify-center max-[399px]:w-[55px] max-[399px]:h-[65px] max-[399px]:left-[20px] max-[399px]:top-[8px]">
            <h3 className="font-semibold leading-tight tracking-tighter text-black text-center text-sm max-[399px]:text-xs"
            >
              Total Points
            </h3>
          </span>
          <span className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[68px] py-1 left-[35px] top-[105px] rounded-l-lg flex items-center justify-center  max-[399px]:w-[55px] max-[399px]:h-[55px] max-[399px]:left-[20px] max-[399px]:top-[110px]">
            <h3 className="font-semibold leading-tight tracking-tighter  text-center text-sm max-[399px]:text-xs">
              Games Played
            </h3>
          </span>
          <div className="flex flex-col relative gap-4 h-[150px] w-full left-[17px] max-[399px]:left-[2px]">
            <div className="flex items-center relative w-[74vw] h-[95px] right-[-60px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] max-[399px]:top-[-9px] rounded-lg rounded-r-3xl max-[399px]:w-[65vw] max-[399px]:h-[55px] max-[399px]:right-[-10px]">
              <span className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left max-[399px]:text-base">
                000
              </span>
              <img
                src="/100.svg"
                alt="Emoji Events"
                className="w-[50px] h-[50px] mr-[5px] bg-[#FFA500] rounded-3xl text-2xl max-[370px]:w-[38px] max-[370px]:h-[38px]"
              />
            </div>
            <div className="flex items-center top-[7px]  relative w-[74vw] h-[97px] right-[-60px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl max-[399px]:w-[65vw] max-[399px]:h-[55px] max-[399px]:right-[-10px] max-[399px]:top-[7px] ">
              <span className="text-[#FEA50D] ml-[10px] font-bold text-xl flex-grow text-left max-[399px]:text-base">
                000
              </span>
              <img
                src="/gc.svg"
                alt="Emoji Events"
                className="w-[50px] h-[50px] mr-[5px] bg-[#FFA500] rounded-3xl text-2xl max-[370px]:w-[38px] max-[370px]:h-[38px] max-[399px]:h-[40px] max-[399px]:w-[40px]"
              />
            </div>
          </div>
          <div className="mt-10 relative left-[20px] w-[100%] h-[55vh] max-[399px]:left-[-10px] max-[399px]:mt-[100px]">
            <h2 className="text-sm relative text-[#A3A3A3] mb-2 max-[399px]:text-xs max-[399px]:ml-[20px]">
              Tournaments Participated
            </h2>
            <div className="bg-[#141414] border h-[50px] w-[86vw] border-[#92FF00] rounded-2xl p-4 mb-4 max-[399px]:w-[89vw] max-[399px]:ml-[10px]  max-[399px]:p-2 max-[399px]:mb-2">
              <p className="text-xl text-[#FEA50D] absolute top-[40px] font-bold max-[399px]:text-base max-[399px]:top-[35px]">
                000
              </p>
            </div>
            <h2 className="text-sm relative mt-7 text-[#A3A3A3] mb-2 max-[399px]:text-xs max-[399px]:ml-[20px]">
              Tournaments
            </h2>
            <div
              className="bg-[#353535]  max-[440px]:h-[10vh] w max-[370px]:h-[10vh]
            border w-[86vw] h-[23vh] border-[#92FF00] rounded-2xl p-4 max-[399px]:w-[89vw]   max-[399px]:left-[10px] max-[399px]:bg-red-400 relative max-[399px]:p-2"
            >
              <select className="w-full h-[5vh] bg-[#353535] text-white border border-[#B3B3B3] rounded-[100px] p-2 max-[399px]:p-1">
                <option>Cricket Catch Pro</option>
                <option>Soccer Stars</option>
              </select>
              <div className="mt-4 relative">
                <h3 className="text-sm text-[#A3A3A3] max-[399px]:text-xs">
                  Highest Score
                </h3>
                <p className="text-xl top-[-22px]  relative text-right text-[#FEA50D] font-bold max-[399px]:text-base">
                  00000
                </p>
                <div className="w-full h-[55px] rounded-2xl bg-[#141414] absolute top-[30px]">
                  <p className="absolute top-[7px] font-light italic text-sm left-[18px]">
                    Your Score
                  </p>
                  <p className="absolute top-[25px] text-[#FEA50D] text-lg left-[20px]">
                    000
                  </p>
                </div>
                <div className="mx-auto max-w-4xl absolute left-[-16px] grid grid-cols-2 w-[106%] gap-1 p-4"
                style={
                  {
                    marginTop: window.innerWidth > 378 ? "70px" : ""
                  }
                }>
                  <div
                    className="w-[185px] relative left-[-30px] h-[106px] p-4 text-center rounded-3xl"
                    style={{
                      top: window.innerWidth <= 378 ? "-60px" : "",
                    }}
                  >
                    <img
                      src="/d1.svg"
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-sm font-normal top-[-30px] left-[5px] text-[#FEA50D]">
                      Color ship shooter
                    </p>
                  </div>
                  <div
                    className="p-4 w-[185px] h-[106px] relative  text-center rounded-3xl"
                    style={{
                      top: window.innerWidth <= 378 ? "-60px" : "",
                    }}
                  >
                    <img
                      src="/d2.svg"
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative  text-sm font-normal top-[-30px] left-[40px] text-[#FEA50D]">
                      48 Hr
                    </p>
                  </div>
                  <div
                    className="p-4 w-[185px] h-[106px] left-[-30px] top-[-20px] relative text-center rounded-3xl"
                    style={{
                      top: window.innerWidth <= 378 ? "-80px" : "",
                    }}
                  >
                    <img
                      src="/d3.svg"
                      alt="Image 3"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative  text-sm font-normal top-[-30px] left-[40px] text-[#FEA50D]">
                      -98 IGNIX
                    </p>
                  </div>
                  <div
                    className="p-4 w-[185px] h-[106px] top-[-20px] relative  text-center rounded-3xl"
                    style={{
                      top: window.innerWidth <= 378 ? "-80px" : "",
                    }}
                  >
                    <img
                      src="/d4.svg"
                      alt="Image 4"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative  text-sm font-normal top-[-30px] left-[10px] text-[#FEA50D]">
                      Color ship shooter
                    </p>
                  </div>
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
