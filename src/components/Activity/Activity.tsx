
// import { ArrowDown, ArrowUp } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
const Activity = () => {
  const games = [
    { id: 1, name: "Wave Runner", score: 0, image: "/game1.svg" },
    { id: 2, name: "Colorship", score: 0, image: "/game1.svg" },
    { id: 3, name: "Sky Dash", score: 0, image: "/game1.svg" },
    { id: 4, name: "Rocket Leap", score: 0, image: "/game1.svg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <section>
        <div className="relative bg-[#1A1A1A] border ml-[31px] border-green-600 rounded-2xl p-4 w-[368px] h-[129px] shadow-lg flex items-center max-[391px]:w-[320px] justify-between">
          <div>
            <h2 className="text-[#7FFF00] text-2xl font-bold mb-2"> {games[currentIndex].name}</h2>
            <p className="text-[#FFD700] text-xl font-mono">Score</p>
            <p className="text-[#FFD700] text-4xl font-mono mt-1">{games[currentIndex].score}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" rounded-lg flex items-center justify-center">
              <img
                src={games[currentIndex].image} // Replace with your image paths
                alt={games[currentIndex].name}
                className="w-[93px] h-[93px] object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-[#7FFF00] rounded-full p-2">
            <ChevronDown className="text-black h-6 w-6" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center w-[90%] ml-[20px] max-[391px]:ml-[25px] justify-center mt-[50px] bg-black border border-gray-500 rounded-full px-6 py-3">
          <button
            onClick={handlePrev}
            className="p-2 text-[#7FFF00] hover:text-green-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="px-6 text-white text-lg">
            {currentIndex + 1}/{games.length}
          </div>
          <button
            onClick={handleNext}
            className="p-2 text-[#7FFF00] hover:text-green-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Activity