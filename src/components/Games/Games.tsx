import React from "react";
const games = [
  { id: 1, svg: "/game0.svg" },
  { id: 2, svg: "/game2.svg" },
  { id: 3, svg: "/game3.svg" },
  { id: 4, svg: "/game4.svg" },
  { id: 5, svg: "/game5.svg" },
  { id: 6, svg: "/game6.svg" },
  { id: 7, svg: "/game7.svg" },
  { id: 8, svg: "/game8.svg" },
  { id: 9, svg: "/game9.svg" },
  { id: 10, svg: "/game10.svg" },
];
export default function GamingSection() {
  const handleGameClick = (id: number) => {
    alert(`Game ID: ${id} clicked!`);
  };

  return (
    <div className="px-6 mt-30 py-8 w-full h-[100vh] bg-black text-white overflow-y-auto relative">
      <h1 className="text-5xl font-bold text-center text-[#82E300] mb-10 shadow-lg shadow-[#82E300]/50">
        Games
      </h1>
      <div className="grid absolute max-[399px]:left-[9%] left-[14%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-[300px] h-[200px] bg-green-900 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform hover:shadow-[0_0_20px_4px_rgba(130,227,0,0.8)]"
            onClick={() => handleGameClick(game.id)}
          >
            <img
              src={game.svg}
              alt={`Game ${game.id}`}
              className="w-full h-full object-cover rounded-lg shadow-[0_0_20px_4px_rgba(130,227,0,0.8)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

