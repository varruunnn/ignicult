import React from "react";
import { IoMenu } from "react-icons/io5";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
        <header className="flex justify-between items-center relative px-6 py-4 bg-black w-[412px] h-[131px] mx-auto">
            <button className="cursor-pointer relative">
                <IoMenu size={37} style={{ position: 'absolute', left: '2px', top: '50%' }} className="text-white transform -translate-y-1/2" />
            </button>
            <button className="absolute right-[32px] top-[45px] w-[120px] h-[41px] bg-[#282828] text-[#82E300] rounded-full hover:bg-[#3a3a3a] transition font-roboto font-semibold" 
                style={{ 
                border: '2px solid #82E300', 
                textShadow: '1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black' 
                }}>
                Let's Dive In
            </button>
        </header>



      <section className="text-center py-8 bg-gradient-to-r from-black-800 to-black-600 max-w-md mx-auto">
        <div 
            className="mt-4 bg-black text-white p-4 shadow-lg relative"
            style={{ width: '367.12px', height: '107px', position: 'absolute', left: '22px', top: '127px' }}
        >
            <img
            src="/Component41.png"
            alt="Trending Game"
            className="mx-auto"
            style={{
                width: '378px',
                height: '124px',
                position: 'absolute',
                left:  '4px',
                top: '-25px'
            }}
            />
            <img
            src="/rocket.png"
            alt="rocket"
            className="absolute"
            style={{
                width: '80px',
                height: '68px',
                position: 'absolute',
                top: '-42px',
                right: '100px' // Adjust this based on your desired positioning of the rocket
            }}
            />
        </div>
        </section>
 


      {/* Welcome Section */}
      <section className="py-8 px-6 max-w-md mx-auto">
        <h2 className="text-center text-3xl font-bold mb-6">
          Welcome to Ignicult
        </h2>
        <div className="grid gap-6">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <span className="text-green-500 text-2xl mr-4">🔥</span>
            <p>
              Ignicult is a revolutionary hyper-casual gaming platform where you
              can play, earn, and enjoy with both off-chain and on-chain rewards!
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <span className="text-green-500 text-2xl mr-4">🎮</span>
            <p>
              Discover a variety of exciting games that cater to all types of
              players.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <span className="text-green-500 text-2xl mr-4">🏆</span>
            <p>
              Earn IGNix points for real-world rewards and use Cultix to unlock
              on-chain benefits and ownership.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <span className="text-green-500 text-2xl mr-4">👤</span>
            <p>
              Create your profile and showcase your achievements to the
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="fixed bottom-0 w-full bg-gray-900 text-white flex justify-around py-2 max-w-md mx-auto">
        <button className="flex flex-col items-center text-green-500">
          <span className="text-2xl">🏠</span>
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-green-500">
          <span className="text-2xl">🎮</span>
          <span className="text-sm">Play now</span>
        </button>
        <button className="flex flex-col items-center text-green-500">
          <span className="text-2xl">👤</span>
          <span className="text-sm">Profiles</span>
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
