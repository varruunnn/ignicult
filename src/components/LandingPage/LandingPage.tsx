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

    animation: ${glow} 2s infinite;
  `;
  const handleClick = () => {
    alert("I am Glowing dv");
  };
  return (
    <div className=" overflow-x-hidden font-roboto text-white min-h-screen">
      <section className="text-center min-[1023px]:hidden py-[100px] bg-gradient-to-r from-black-800 to-black-600 max-w-md mx-auto">
        <div
          className="mt-4  text-white p-4 shadow-lg relative"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <GlowingSVG
            onClick={handleClick}
            src="/component41.svg"
            alt="Trending Game"
          />
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
          <p className="absolute left-[49%] text-[#D9FFA6] font-semibold top-[93px]">
            Drop The Number
          </p>
          <img
            src="/rocket.png"
            alt="rocket"
            className="absolute max-[398px]:left-[55%] max-w-full h-auto"
            style={{
              top: "-3px",
              right: "110px",
              width: "88px",
              height: "88px",
            }}
          />
        </div>
      </section>
      <section className="mt-[-100px] lg:hidden relative px-6 max-w-md mx-auto">
        <h2 className="text-center text-3xl  text-[#82E300] font-bold mb-16">
          Welcome to Ignicult
        </h2>
        <div
          className="grid gap-1
        "
        >
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] flex items-center text-left mx-auto">
            <img
              src="/fire.svg"
              alt="Fire Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="">
              Ignicult is a revolutionary hyper-casual gaming platform where you
              can play, earn, and enjoy with both off-chain and on-chain
              rewards!
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] flex items-center text-left mx-auto">
            <img
              src="/joystick.svg"
              alt="Joystick Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="">
              Discover a variety of exciting games that cater to all types of
              players.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] flex items-center text-left mx-auto">
            <img
              src="/trophy.svg"
              alt="Trophy Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="">
              Earn IGNix points for real-world rewards and use Cultix to unlock
              on-chain benefits and ownership.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[308px] h-[136px] flex items-center text-left mx-auto">
            <img
              src="/Group.svg"
              alt="Group Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="">
              Create your profile and showcase your achievements to the
              community.
            </p>
          </div>
        </div>
      </section>
      <section className="max-[1023px]:hidden relative min-[1023px]:mt-[100px] px-6 max-w-[100%] mx-auto">
        <h2 className="text-center text-3xl text-[#82E300] font-bold mb-16">
          Welcome to Ignicult
        </h2>
        <div className="relative overflow-hidden h-[150px]">
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[10vw] top-0 text-left mx-auto">
            <img
              src="/fire.svg"
              alt="Fire Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="text-[11px]">
              Ignicult is a revolutionary hyper-casual gaming platform where you
              can play, earn, and enjoy with both off-chain and on-chain rewards!
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[30vw] top-0 text-left mx-auto">
            <img
              src="/joystick.svg"
              alt="Joystick Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="text-[14px]">
              Discover a variety of exciting games that cater to all types of
              players.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[50vw] top-0 text-left mx-auto">
            <img
              src="/trophy.svg"
              alt="Trophy Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="text-[12px]">
              Earn IGNix points for real-world rewards and use Cultix to unlock
              on-chain benefits and ownership.
            </p>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[71vw] top-0 text-left mx-auto">
            <img
              src="/Group.svg"
              alt="Group Icon"
              className="w-[34px] h-[36px] mr-4"
            />
            <p className="text-[14px]">
              Create your profile and showcase your achievements to the
              community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 lg:hidden relative max-w-md mx-auto mb-24">
        <h2 className="text-center text-3xl text-[#82E300] font-bold mb-4">
          Why choose ignicult?
        </h2>
        <div className="flex flex-wrap justify-center gap-1 p-4 text-white">
          {[
            {
              img: "/rockett.svg",
              title: "Fast",
              subtitle: "and seamless",
              desc: "gaming experience with web3 integration",
            },
            {
              img: "/money.svg",
              title: "Earn",
              subtitle: "points",
              desc: "for real-world rewards and use cultix to unlock on-chain benefits and ownership",
            },
            {
              img: "/trust.svg",
              title: "Secure",
              subtitle: "and transparent",
              desc: "transactions powered by blockchain technology",
            },
            {
              img: "/earth.svg",
              title: "Join",
              subtitle: "global Community",
              desc: "of gamers and blockchain enthusiasts",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#363636] w-[308px] h-[136px]  flex items-center p-4 text-left mx-auto"
            >
              <img src={item.img} alt={item.title} className="h-12 w-12 mr-4" />
              <div>
                <h3 className="text-[#82E300] text-lg font-bold">
                  {item.title}
                </h3>
                <h3
                  className="text-white text-lg mt-[-5px] font-bold tracking-tight"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.subtitle}
                </h3>
                <p className="text-sm leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-6 px-6 max-[1023px]:hidden mt-[150px] relative max-w-[100%] mx-auto mb-24">
        <h2 className="text-center text-3xl text-[#82E300] font-bold mb-16">
          Why choose ignicult?
        </h2>
        {/* Set an explicit height here as well */}
        <div className="relative overflow-hidden h-[150px]">
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[10vw] top-0 text-left mx-auto">
            <img
              src="/rockett.svg"
              alt="Fast"
              className="w-[34px] h-[36px] mr-4"
            />
            <div>
              <h3 className="text-[#82E300] text-lg font-bold">Fast</h3>
              <p className="text-[11px]">
                and seamless gaming experience with web3 integration
              </p>
            </div>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[30vw] top-0 text-left mx-auto">
            <img
              src="/money.svg"
              alt="Earn"
              className="w-[34px] h-[36px] mr-4"
            />
            <div>
              <h3 className="text-[#82E300] text-lg font-bold">Earn</h3>
              <p className="text-[11px]">
                points for real-world rewards and use cultix to unlock on-chain
                benefits and ownership
              </p>
            </div>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[50vw] top-0 text-left mx-auto">
            <img
              src="/trust.svg"
              alt="Secure"
              className="w-[34px] h-[36px] mr-4"
            />
            <div>
              <h3 className="text-[#82E300] text-lg font-bold">Secure</h3>
              <p className="text-[11px]">
                and transparent transactions powered by blockchain technology
              </p>
            </div>
          </div>
          <div className="bg-[#363636] p-4 w-[200px] h-[126px] flex items-center absolute left-[71vw] top-0 text-left mx-auto">
            <img
              src="/earth.svg"
              alt="Join"
              className="w-[34px] h-[36px] mr-4"
            />
            <div>
              <h3 className="text-[#82E300] text-lg font-bold">Join</h3>
              <p className="text-[11px]">
                global Community of gamers and blockchain enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
