import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen p-4 py-20 text-white overflow-hidden">
      <h1 className="absolute text-3xl font-bold left-[39%] text-white top-[130px] z-49 max-[398px]:text-2xl max-[398px]:left-[39%] max-[398px]:top-[135px] max-[398px]:z-11">
        Profile
      </h1>
      <div className="border-4 border-[#92FF00] fixed h-[80vh] w-[110%] left-[-19px] top-[24%] rounded-[80px] p-4 max-[398px]:h-[70vh] max-[398px]:w-[105%] max-[398px]:top-[30%] max-[398px]:left-[-14px] max-[398px]:rounded-[40px]">
        <div className="mt-20 absolute w-[90%] h-[50vh] rounded-[80px] p-4 max-[398px]:w-full max-[398px]:h-[45vh] max-[398px]:rounded-[40px]">
          <img
            src="/profilee.svg"
            alt="Profile"
            className="w-16 h-16 absolute left-[43%] top-[-130px] rounded-full max-[398px]:w-12 max-[398px]:h-12 max-[398px]:top-[-120px] max-[398px]:z-11 max-[398px]:left-[40%]"
          />
          <h1 className="text-lg absolute text-[#858585] left-[35%] top-[-60px] font-bold max-[398px]:text-base max-[398px]:top-[-70px] max-[398px]:left-[30%]">
            Wallet Address
          </h1>
          <p className="text-sm absolute text-[#CACACA] left-[42%] top-[-30px] max-[398px]:text-xs max-[398px]:top-[-50px] max-[398px]:left-[38%]">
            abcd12345
          </p>
          <div className="flex max-[380px]:mt-[-9px] items-center max-[398px]:left-[-9px] max-[398px]:relative max-[398px]:top-[-30px] justify-between bg-[#92FF00]/10 border border-[#92FF00] rounded-lg p-4 mb-4 max-[398px]:p-2">
            <div>
              <h2 className="text-sm text-[#92FF00] max-[398px]:text-xs">
                Total Points
              </h2>
              <p className="text-xl font-bold max-[398px]:text-base">000</p>
            </div>
            <div className="bg-[#FED33C] p-2 rounded-full max-[398px]:p-1">
              <span className="text-black">
                <img src="/100.svg" alt="" />
              </span>
            </div>
          </div>

          <div className="flex max-[380px]:mt-[-9px] items-center max-[398px]:left-[-9px] justify-between max-[398px]:relative max-[398px]:top-[-30px] bg-[#92FF00]/10 border border-[#92FF00] rounded-lg p-4 max-[398px]:p-2">
            <div>
              <h2 className="text-sm text-[#92FF00] max-[398px]:text-xs">
                Games Played
              </h2>
              <p className="text-xl font-bold max-[398px]:text-base">000</p>
            </div>
            <div className="bg-[#FED33C] p-1 rounded-full max-[398px]:p-0.5">
              <span className="text-black">
                <img src="/gc.svg" alt="" />
              </span>
            </div>
          </div>

          <div className="mt-6 max-[380px]:mt-[2px] max-[398px]:left-[-9px] max-[398px]:relative max-[398px]:top-[-30px] max-[398px]:overflow-y-auto max-[398px]:mt-4">
            <h2 className="text-sm text-[#92FF00] mb-2 max-[398px]:text-xs max-[398px]:mb-1">
              Tournaments Participated
            </h2>
            <div className="bg-[#92FF00]/10 border border-[#92FF00] rounded-lg p-4 mb-4 max-[398px]:p-2 max-[398px]:mb-2">
              <p className="text-xl font-bold max-[398px]:text-base">000</p>
            </div>

            <h2 className="text-sm text-[#92FF00] mb-2 max-[398px]:text-xs max-[398px]:mb-1">
              Tournaments
            </h2>
            <div className="bg-[#353535] border border-[#92FF00] rounded-lg p-4 max-[398px]:p-2">
              <select className="w-full bg-[#353535] text-white border border-[#92FF00] rounded-[100px] p-2 max-[398px]:p-1">
                <option>Cricket Catch Pro</option>
                <option>Soccer Stars</option>
              </select>
              <div className="mt-4 max-[398px]:mt-2">
                <h3 className="text-sm text-[#92FF00] max-[398px]:text-xs">
                  Highest Score
                </h3>
                <p className="text-xl font-bold max-[398px]:text-base">00000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
