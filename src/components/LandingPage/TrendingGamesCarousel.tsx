import React, { useState, useEffect, useRef } from "react";
import { Flame, ChevronRight, ChevronLeft, Play } from "lucide-react";

const gameImages = import.meta.glob("../../assets/trendingGames/*.jpg", {
  eager: true,
  import: "default",
});

interface Game {
  gameId: number;
  title: string;
  totalGamesPlayed: number;
  uniquePlayers: number;
}

const TrendingGamesCarousel = () => {
  const [trendingGames, setTrendingGames] = useState<Game[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => nextSlide(), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingGames.length);
    resetTimeout();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? trendingGames.length - 1 : prev - 1
    );
    resetTimeout();
  };

  useEffect(() => {
    const fetchTrendingGames = async () => {
      try {
        const res = await fetch("https://ignicult.com/api/trending-games");
        const json = await res.json();

        if (json.success && json.data) {
          const sortedGames = json.data
            .sort(
              (a: Game, b: Game) => b.totalGamesPlayed - a.totalGamesPlayed
            )
            .slice(0, 5); 
          setTrendingGames(sortedGames);
        }
      } catch (err) {
        console.error("Failed to load trending games:", err);
      }
    };

    fetchTrendingGames();
  }, []);

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const getGameImage = (gameId: number) => {
    return gameImages[`../../assets/trendingGames/game${gameId}.jpg`] as string;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1D1D1D]/90 via-[#0D0D0D] to-[#151515] text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold flex items-center">
            <Flame className="w-10 h-10 mr-3 text-red-500" />
            Trending Games
          </h2>

          <a
            href="/games"
            className="flex items-center text-yellow-500 hover:text-yellow-400 text-lg font-semibold"
          >
            View All
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>

        <div className="relative h-[60vh] rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            {trendingGames.map((game, index) => {
              const image = getGameImage(game.gameId);
              return (
                <div
                  key={game.gameId}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover h-full bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <div className="text-3xl font-bold mb-2">{game.title}</div>
                    <div className="flex items-center text-lg mb-4">
                      <span className="bg-blue-600 px-3 py-1 rounded-full mr-3">
                        {game.uniquePlayers} Players
                      </span>
                      <span className="text-yellow-400">
                        {game.totalGamesPlayed.toLocaleString()} Plays
                      </span>
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center w-48 py-3 font-bold text-lg transition-all duration-300">
                      <Play className="w-5 h-5 mr-2" />
                      Play Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 focus:outline-none z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 focus:outline-none z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {trendingGames.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  resetTimeout();
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          {trendingGames.map((game, index) => (
            <div
              key={game.gameId}
              className={`relative cursor-pointer rounded-lg overflow-hidden w-24 h-16 ${
                index === currentIndex ? "ring-2 ring-yellow-500" : "opacity-70"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                resetTimeout();
              }}
            >
              <img
                src={getGameImage(game.gameId)}
                alt={game.title}
                className="w-full h-full object-cover"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGamesCarousel;
