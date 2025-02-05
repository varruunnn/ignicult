import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div
      className="h-[120vh] p-4 py-20 mt-[170px] text-white overflow-y-auto overflow-x-hidden
      max-[468px]:mt-[150px]
      max-[400px]:mt-[140px]
      max-[375px]:mt-[130px]
      max-[370px]:mt-[120px]"
    >
      <div
        className="border-t-2 bg-[#141414] border-[#92FF00] relative h-[120vh] w-[105%] left-[-16px] max-w-4xl mx-auto rounded-t-[20px] p-4
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
        <div
          className="absolute left-0 w-full top-[100px] h-[100vh] rounded-[80px] p-4 mx-auto
          max-[468px]:rounded-[70px]
          max-[400px]:rounded-[60px]
          max-[375px]:rounded-[50px]
          max-[370px]:rounded-[40px]"
        >
          <img
            src="/profilee.svg"
            alt="Profile"
            className="w-16 h-16 absolute left-[43%] top-[-130px] rounded-full
            max-[468px]:w-16 max-[468px]:h-16 max-[468px]:top-[-130px] max-[468px]:left-[43%]
            max-[400px]:w-14 max-[400px]:h-14 max-[400px]:top-[-125px] max-[400px]:left-[42%]
            max-[375px]:w-12 max-[375px]:h-12 max-[375px]:top-[-120px] max-[375px]:left-[41%]
            max-[370px]:w-12 max-[370px]:h-12 max-[370px]:top-[-115px] max-[370px]:left-[40%]"
          />

          <h1
            className="text-lg absolute text-[#858585] left-[35%] top-[-60px] font-bold
            max-[468px]:text-lg max-[468px]:top-[-60px] max-[468px]:left-[35%]
            max-[400px]:text-base max-[400px]:top-[-55px] max-[400px]:left-[34%]
            max-[375px]:text-base max-[375px]:top-[-30x] max-[375px]:left-[33%]
            max-[370px]:text-sm max-[370px]:top-[-60px] max-[370px]:left-[34%]"
          >
            Wallet Address
          </h1>

          <p
            className="text-sm absolute text-[#CACACA] left-[42%] top-[-30px]
            max-[468px]:text-sm max-[468px]:top-[-30px] max-[468px]:left-[42%]
            max-[400px]:text-xs max-[400px]:top-[-28px] max-[400px]:left-[41%]
            max-[375px]:text-xs max-[375px]:top-[-26px] max-[375px]:left-[40%]
            max-[370px]:text-xs max-[370px]:top-[-40px] max-[370px]:left-[39%]"
          >
            abcd12345
          </p>

          <span
            className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[66px] py-1 left-[35px] top-[16px] rounded-l-lg flex items-center justify-center
            max-[468px]:w-[65px] max-[468px]:h-[66px] 
            max-[400px]:w-[60px] max-[400px]:h-[68px] max-[400px]:left-[30px] max-[400px]:top-[11px]
            max-[375px]:w-[55px] max-[375px]:h-[60px] max-[375px]:left-[25px] max-[375px]:top-[12px]
            max-[370px]:w-[50px] max-[370px]:h-[67px] max-[370px]:left-[20px] max-[370px]:top-[11px]"
          >
            <h3
              className="font-semibold leading-tight tracking-tighter text-black text-center text-sm
              max-[468px]:text-sm
              max-[400px]:text-sm
              max-[375px]:text-xs
              max-[370px]:text-xs"
            >
              Total Points
            </h3>
          </span>

          <span
            className="bg-[#82E300] absolute text-black font-bold w-[65px] h-[68px] py-1 left-[35px] top-[105px] rounded-l-lg flex items-center justify-center
            max-[468px]:w-[65px] max-[468px]:h-[68px] 
            max-[400px]:w-[60px] max-[400px]:h-[68px] max-[400px]:left-[30px] max-[400px]:top-[98px]
            max-[375px]:w-[55px] max-[375px]:h-[60px] max-[375px]:left-[25px] max-[375px]:top-[95px]
            max-[370px]:w-[50px] max-[370px]:h-[67px] max-[370px]:left-[20px] max-[370px]:top-[99px]"
          >
            <h3
              className="font-semibold leading-tight tracking-tighter text-center text-sm
              max-[468px]:text-sm 
              max-[400px]:text-sm
              max-[375px]:text-xs
              max-[370px]:text-xs"
            >
              Games Played
            </h3>
          </span>

          <div
            className="flex flex-col relative gap-4 h-[150px] w-full left-[17px]
            max-[468px]:left-[15px]
            max-[400px]:left-[10px]
            max-[375px]:left-[5px]
            max-[370px]:left-[2px]"
          >
            <div
              className="flex items-center relative w-[74vw] h-[95px] right-[-60px] justify-between bg-[#1E1E1E] border-2 border-[#82E300] rounded-lg rounded-r-3xl
              max-[468px]:w-[74vw] max-[468px]:h-[95px] max-[468px]:right-[-60px]
              max-[400px]:w-[70vw] max-[400px]:h-[90px] max-[400px]:right-[-55px] max-[400px]:top-[-5px]
              max-[375px]:w-[75vw] max-[375px]:h-[85px] max-[375px]:right-[-50px]
              max-[370px]:w-[78vw] max-[370px]:h-[80px] max-[370px]:right-[-45px]"
              style={
                {
                  width:window.innerHeight < 700 ? "75vw" : ""
                }
              }
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
              max-[400px]:w-[70vw] max-[400px]:h-[90px] max-[400px]:right-[-55px] max-[400px]:top-[0px]
              max-[375px]:w-[65vw] max-[375px]:h-[85px] max-[375px]:right-[-50px]
              max-[370px]:w-[78vw] max-[370px]:h-[80px] max-[370px]:right-[-45px]"
              style={
                {
                  width:window.innerHeight < 700 ? "75vw" : ""
                }
              }
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
          </div>

          <div
            className="mt-10 relative left-[20px] w-full h-[55vh]
            max-[468px]:mt-10 max-[468px]:left-[20px]
            max-[400px]:mt-8 max-[400px]:left-[15px]
            max-[375px]:mt-6 max-[375px]:left-[10px]
            max-[370px]:mt-4 max-[370px]:left-[5px]"
          >
            <h2
              className="text-sm relative text-[#A3A3A3] mb-2
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
                max-[468px]:text-xl max-[468px]:top-[40px]
                max-[400px]:text-lg max-[400px]:top-[38px]
                max-[375px]:text-base max-[375px]:top-[35px]
                max-[370px]:text-base max-[370px]:top-[35px]"
              >
                000
              </p>
            </div>
            <h2
              className="text-sm relative mt-7 text-[#A3A3A3] mb-2
              max-[468px]:text-sm
              max-[400px]:text-xs
              max-[375px]:text-xs
              max-[370px]:text-xs"
            >
              Tournaments
            </h2>
            <div
              className="bg-[#353535] border w-[86vw] h-[23vh] border-[#92FF00] rounded-2xl p-4 relative
              max-[468px]:w-[86vw] max-[468px]:h-[23vh] max-[468px]:p-4
              max-[400px]:w-[88vw] max-[400px]:h-[22vh] max-[400px]:p-3
              max-[375px]:w-[89vw] max-[375px]:p-2
              max-[370px]:w-[90vw] max-[370px]:h-[22vh] max-[370px]:p-2"
            >
              <select
                className="w-full h-[5.5vh] bg-[#353535] text-white border border-[#B3B3B3] rounded-[100px] p-2
                max-[468px]:p-2
                max-[400px]:p-1
                max-[375px]:p-1
                max-[370px]:p-1"
              >
                <option>Cricket Catch Pro</option>
                <option>Soccer Stars</option>
              </select>
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
                <div className="w-full h-[55px] rounded-2xl max-[468px]:top-[55px] bg-[#141414] absolute top-[30px]
                  max-[370px]:top-[34px] 
                  max-[400px]:top-[44px]
                ">
                  <p className="absolute top-[7px] font-light italic text-sm left-[18px]
                  ">
                    Your Score
                  </p>
                  <p className="absolute top-[25px] text-[#FEA50D] text-lg left-[20px]">
                    000
                  </p>
                </div>
                <div
                  className="mx-auto max-w-4xl absolute left-[-16px] grid grid-cols-2 w-[106%] gap-1 p-4 mt-[70px]
                  max-[378px]:mt-40"
                >
                  <div
                    className="w-[185px] relative left-[-30px] h-[106px] p-4 text-center rounded-3xl
                    max-[378px]:top-[-60px]"
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
                    className="p-4 w-[185px] h-[106px] relative text-center rounded-3xl
                    max-[378px]:top-[-60px]"
                  >
                    <img
                      src="/d2.svg"
                      alt="Image 2"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-sm font-normal top-[-30px] left-[40px] text-[#FEA50D]">
                      48 Hr
                    </p>
                  </div>
                  <div
                    className="p-4 w-[185px] h-[106px] relative left-[-30px] rounded-3xl text-center
                    max-[378px]:top-[-80px]"
                  >
                    <img
                      src="/d3.svg"
                      alt="Image 3"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-sm font-normal top-[-30px] left-[40px] text-[#FEA50D]">
                      -98 IGNIX
                    </p>
                  </div>
                  <div
                    className="p-4 w-[185px] h-[106px] relative text-center rounded-3xl
                    max-[378px]:top-[-80px]"
                  >
                    <img
                      src="/d4.svg"
                      alt="Image 4"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <p className="relative text-sm font-normal top-[-30px] left-[10px] text-[#FEA50D]">
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
