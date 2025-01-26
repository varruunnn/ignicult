import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen p-4 text-white">
              <div className="flex flex-col absolute left-[33%] top-[-10px] items-center">
        <div className="bg-green-500 rounded-full p-2 mb-2">
          <img
            src="/profilee.svg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <h1 className="text-lg font-bold">Wallet Address</h1>
        <p className="text-sm">abcd12345</p>
      </div>
      <div className="mt-2 border-4 border-red-400 relative h-[1px] w-[100%] rounded-[80px] p-4">
        <div className="mt-44 absolute w-[90%] h-[90%] rounded-[80px] p-4">
            <div className="flex items-center justify-between bg-green-500/10 border border-green-500 rounded-lg p-4 mb-4">
            <div>
                <h2 className="text-sm text-green-500">Total Points</h2>
                <p className="text-xl font-bold">000</p>
            </div>
            <div className="bg-[#FED33C] p-2 rounded-full">
                <span className="text-black">💯</span>
            </div>
            </div>

            <div className="flex items-center justify-between bg-green-500/10 border border-green-500 rounded-lg p-4">
            <div>
                <h2 className="text-sm text-green-500">Games Played</h2>
                <p className="text-xl font-bold">000</p>
            </div>
            <div className="bg-[#FED33C] p-2 rounded-full">
                <span className="text-black">🎮</span>
            </div>
            </div>
            <div className="mt-6">
            <h2 className="text-sm text-green-500 mb-2">Tournaments Participated</h2>
            <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-4">
            <p className="text-xl font-bold">000</p>
            </div>

            <h2 className="text-sm text-green-500 mb-2">Tournaments</h2>
            <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
            <select
                className="w-full bg-black text-white border border-green-500 rounded-lg p-2"
            >
                <option>Cricket Catch Pro</option>
                <option>Soccer Stars</option>
            </select>
            <div className="mt-4">
                <h3 className="text-sm text-green-500">Highest Score</h3>
                <p className="text-xl font-bold">00000</p>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
