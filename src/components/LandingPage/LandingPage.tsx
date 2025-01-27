import React from "react";
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
  height: 168px;

  animation: ${glow} 2s infinite; /* Animation that loops every 2 seconds */
`;
  const handleClick = () =>{
    alert("I am Glowing dv")
  }
  return (
    <div className="max-[485px]:bg-black overflow-x-hidden text-white min-h-screen">
      <section className="text-center py-8 bg-gradient-to-r from-black-800 to-black-600 max-w-md mx-auto">
      <div
        className="mt-4 bg-black text-white p-4 shadow-lg relative"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <GlowingSVG onClick={handleClick} src="/component41.svg" alt="Trending Game" />
        <h1
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
        >
          Trending Game
        </h1>
        <p className="absolute left-[49%] text-[#D9FFA6] font-semibold top-[93px]">Drop The Number</p>
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
      <section className="py-6 bg-[black] px-6 max-w-md mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-black text-white">
          <div className="flex items-center bg-gray-800 rounded-lg p-6">
            <img src="/path/to/your/svg1.svg" alt="Fast" className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-green-500 text-lg font-bold">Fast</h3>
              <p className="text-sm">and seamless gaming experience with web3 integration</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-800 rounded-lg p-6">
            <img src="/path/to/your/svg2.svg" alt="Earn Points" className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-green-500 text-lg font-bold">Earn points</h3>
              <p className="text-sm">for real-world rewards and use cultix to unlock on-chain benefits and ownership</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-800 rounded-lg p-6">
            <img src="/path/to/your/svg3.svg" alt="Secure" className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-green-500 text-lg font-bold">Secure and transparent</h3>
              <p className="text-sm">transactions powered by blockchain technology</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-800 rounded-lg p-6">
            <img src="/path/to/your/svg4.svg" alt="Join" className="h-16 w-16 mr-4" />
            <div>
              <h3 className="text-green-500 text-lg font-bold">Join</h3>
              <p className="text-sm">global community of gamers and blockchain enthusiasts</p>
            </div>
          </div>
        </div>

      </section>

      <footer className="fixed bottom-0 w-full h-[75px] bg-[#363636] text-white flex justify-around items-center">
        <div className="relative flex w-full h-[75px] flex-col items-center justify-center space-y-6">
          <img
            src="footer.svg"
            alt=""
            className="w-[68px] h-[68px] absolute top-[-35px] z-10"
            onClick={handleClick}
          />
          <button className="flex flex-col left-[40px] top-[1px] absolute items-center cursor-pointer text-green-500">
            <img
              src="/home.svg"
              alt="Home Icon"
              className="w-[46px] h-[46px] relative"
            />
            <span
              className="text-sm font-bold font-roboto text-[#82E300] relative"
              style={{
                textShadow: "2px 2px 2px black",
              }}
            >
              Home
            </span>
          </button>
          <img
            src="/vec.svg"
            alt="Play Now Background"
            className="w-[242px] h-[75px] absolute top-[2px] "
          />
          <span
            className="absolute text-[#282828] font-semibold font-roboto text-lg"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -10%)" }}
          >
            Play Now
          </span>
          <button className="flex flex-col right-[40px] top-[10px] absolute items-center cursor-pointer text-green-500">
            <img
              src="/Group.svg"
              alt="Profiles Icon"
              className="w-[36px] h-[36px] relative"
            />
            <span
              className="text-sm font-bold font-roboto text-[#82E300] relative"
              style={{
                textShadow: "2px 2px 2px black",
              }}
            >
              Profiles
            </span>
        </button>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
