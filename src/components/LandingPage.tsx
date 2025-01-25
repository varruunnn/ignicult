import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";
import styled, { keyframes } from "styled-components";
const LandingPage: React.FC = () => {
  const glow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 0px #92FF00);
  }
  50% {
    filter: drop-shadow(0 0 15px #92FF00);
  }
`;

const GlowingSVG = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  top: -22px;
  right: 1px;
  width: 390px;
  height: 158px;

  animation: ${glow} 2s infinite; /* Animation that loops every 2 seconds */
`;
  const handleClick = () =>{
    alert("I am Glowing dv")
  }
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="bg-black overflow-x-hidden text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 bg-black h-[131px]">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer relative"
          aria-label="Open Sidebar Menu"
        >
          <IoMenu size={37} className="text-white" />
        </button>
        <button
          className="w-[120px] h-[41px] bg-[#282828] text-[#82E300] rounded-full hover:bg-[#3a3a3a] transition font-roboto font-semibold"
          style={{
            border: "2px solid #82E300",
            textShadow:
              "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
          }}
        >
          Let's Dive In
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>

      <section className="text-center py-8 bg-gradient-to-r from-black-800 to-black-600 max-w-md mx-auto">
      <div
        className="mt-4 bg-black text-white p-4 shadow-lg relative"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <GlowingSVG onClick={handleClick} src="/component41.svg" alt="Trending Game" />
        <img
          src="/rocket.png"
          alt="rocket"
          className="absolute max-w-full h-auto"
          style={{
            top: "-3px",
            right: "110px",
            width: "88px",
            height: "88px",
          }}
        />
      </div>
    </section>
      <section className="py-6 px-6 max-w-md mx-auto">
        <h2 className="text-center text-3xl font-roboto text-[#82E300] font-bold mb-16">
          Welcome to Ignicult
        </h2>
        <div className="grid gap-1">
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/fire.svg" alt="Fire Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Ignicult is a revolutionary hyper-casual gaming platform where you can play, earn, and enjoy with both off-chain and on-chain rewards!
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/joystick.svg" alt="Joystick Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Discover a variety of exciting games that cater to all types of players.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/trophy.svg" alt="Trophy Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">
              Earn IGNix points for real-world rewards and use Cultix to unlock on-chain benefits and ownership.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] rounded-xs flex items-center justify-center text-center mx-auto">
            <img src="/Group.svg" alt="Group Icon" className="w-[34px] h-[36px] mr-4" />
            <p className="font-roboto">Create your profile and showcase your achievements to the community.</p>
          </div>
        </div>
      </section>
      
      <section className="py-6 px-6 max-w-md mx-auto">
        <h2 className="text-center text-3xl font-roboto text-[#82E300] font-bold mb-16">
          Why choose ignicult ? 
        </h2>
      </section>

      <footer className="fixed bottom-0 w-full h-[90px] bg-[#363636] text-white flex justify-around items-center">
        <img src="footer.svg" alt="" className="w-[68px] h-[68px] top-[-25px] absolute left-[43%] z-[2] mr-4"/>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center">
              <button className="flex flex-col cursor-pointer items-center text-green-500">
                <img src="/home.svg" alt="Mic Icon" className="w-[46px] relative left-[25px] top-[8px] h-[46px]" />
                <span
                className="text-sm font-bold left-[25px] top-[3px] font-roboto relative  text-[#82E300]"
                style={{
                  textShadow: "2px 2px 2px black",
                }}
              >
                Home
              </span>
              </button>
            </div>

            <div className="relative flex flex-col items-center justify-center">
              <img
                src="/vec.svg"
                alt="Play Now Background"
                className="w-[242px] h-[90px] relative left-[15px] mr-4"
              />
              <span
                className="absolute text-[#282828] font-semibold font-roboto text-lg"
                style={{ top: "50%", left: "50%", transform: "translate(-40%, -10%)" }}
              >
                Play Now
              </span>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex flex-col cursor-pointer items-center text-green-500">
                <img src="/Group.svg" alt="Mic Icon" className="w-[36px] relative left-[-25px] top-[8px] h-[36px]" />
                <span
                className="text-sm font-bold left-[-25px] top-[9px] relative font-roboto text-[#82E300]"
                style={{
                  textShadow: "2px 2px 2px black",
                }}
              >
                Profiles
              </span>
              </button>
            </div>
          </div>

      </footer>

    </div>
  );
};

export default LandingPage;
