import React, { useState, useEffect, useRef } from "react";
import { Flame, ChevronRight, ChevronLeft, Play } from "lucide-react";
const desktopGameImages = import.meta.glob("../../assets/trendingGames/*.jpg", {
  eager: true,
  import: "default",
});
const mobileGameImages = import.meta.glob("../../assets/mobileTrendingImage/*.jpg", {
  eager: true,
  import: "default",
});

const preloadedDesktopImages: Record<number, string> = {};
Object.entries(desktopGameImages).forEach(([path, img]) => {
  const match = path.match(/game(\d+)\.jpg$/);
  if (match) {
    const id = parseInt(match[1]);
    preloadedDesktopImages[id] = img as string;
  }
});

const preloadedMobileImages: Record<number, string> = {};
Object.entries(mobileGameImages).forEach(([path, img]) => {
  const match = path.match(/game(\d+)\.jpg$/);
  if (match) {
    const id = parseInt(match[1]);
    preloadedMobileImages[id] = img as string;
  }
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
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselActive = useRef<boolean>(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (carouselActive.current) {
      timeoutRef.current = setTimeout(() => nextSlide(), 5000);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % trendingGames.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? trendingGames.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const fetchTrendingGames = async () => {
      setIsLoading(true);
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
          const initialLoadingState: Record<number, boolean> = {};
          sortedGames.forEach((game: Game) => {
            initialLoadingState[game.gameId] = false;
          });
          setImagesLoaded(initialLoadingState);
          sortedGames.forEach((game: Game) => {
            const desktopImg = new Image();
            const desktopImgSrc = getGameImage(game.gameId, false);
            desktopImg.src = desktopImgSrc;
            desktopImg.onload = () => {
              updateImagesLoaded(game.gameId);
            };
            desktopImg.onerror = () => {
              console.error(`Failed to load desktop image for game ${game.gameId}`);
              updateImagesLoaded(game.gameId);
            };
            const mobileImg = new Image();
            const mobileImgSrc = getGameImage(game.gameId, true);
            mobileImg.src = mobileImgSrc;
            mobileImg.onload = () => {
              updateImagesLoaded(game.gameId);
            };
            mobileImg.onerror = () => {
              console.error(`Failed to load mobile image for game ${game.gameId}`);
              updateImagesLoaded(game.gameId);
            };
          });
        }
      } catch (err) {
        console.error("Failed to load trending games:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingGames();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      carouselActive.current = false;
    };
  }, []);
  const updateImagesLoaded = (gameId: number) => {
    setImagesLoaded(prev => {
      if (!prev[gameId]) {
        return {
          ...prev,
          [gameId]: true
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    if (trendingGames.length === 0) return;
    const allImagesLoaded = trendingGames.every(game => imagesLoaded[game.gameId]);

    if (allImagesLoaded && !carouselActive.current) {
      carouselActive.current = true;
      resetTimeout();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imagesLoaded, trendingGames]);

  useEffect(() => {
    resetTimeout();
  }, [currentIndex]);

  const getGameImage = (gameId: number, mobile = false) => {
    const images = mobile ? preloadedMobileImages : preloadedDesktopImages;
    return images[gameId] || "/assets/fallback.jpg";
  };

  const areAllImagesForCarouselLoaded = () => {
    return trendingGames.length > 0 &&
      trendingGames.every(game => imagesLoaded[game.gameId]);
  };

  if (isLoading || !areAllImagesForCarouselLoaded()) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white text-lg bg-gradient-to-b from-[#1D1D1D]/90 via-[#0D0D0D] to-[#151515]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
          Loading Trending Games...
        </div>
      </div>
    );
  }

  if (trendingGames.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-white text-lg bg-gradient-to-b from-[#1D1D1D]/90 via-[#0D0D0D] to-[#151515]">
        No trending games available at the moment.
      </div>
    );
  }

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

        <div className="relative h-[60vh] max-[768px]:h-[400px] rounded-2xl overflow-hidden mx-auto">
          <div className="relative w-full h-full">
            {trendingGames.map((game, index) => {
              const image = getGameImage(game.gameId, isMobile);
              return (
                <div
                  key={game.gameId}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                    }`}
                >
                  <div
                    className="absolute inset-0 bg-cover h-full bg-center"
                    style={{
                      backgroundImage: `url(${image})`,
                      ...(isMobile && window.innerWidth <= 368 ? {
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 50%', 
                        height: '270px' 
                      } : {})
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                    <div className="text-3xl max-[468px]:relative max-[468px]:top-[20%] max-[468px]:left-[-11px] max-[768px]:text-[20px] font-bold mb-2">{game.title}</div>
                    <div className="flex items-center max-[468px]:top-[20%] max-[468px]:relative max-[468px]:left-[-11px] text-lg max-[768px]:text-sm mb-4">
                      <span className="bg-blue-600 px-3 py-1 rounded-full mr-3">
                        {game.uniquePlayers} Players
                      </span>
                      <span className="text-yellow-400 max-[468px]:hidden ">
                        {game.totalGamesPlayed.toLocaleString()} Plays
                      </span>
                    </div>
                    <span className="text-yellow-400 max-[468px]:top-[19%] max-[468px]:left-[-5px] max-[468px]:text-sm max-[468px]:relative md:hidden ">
                      {game.totalGamesPlayed.toLocaleString()} Plays
                    </span>

                    <button className="bg-red-600  hover:bg-red-700 text-white rounded-full flex items-center justify-center w-48 max-[468px]:relative max-[468px]:top-[4%] max-[468px]:right-[-60%] max-[768px]:w-36 py-3 font-bold text-lg max-[768px]:text-base transition-all duration-300 max-[368px]:right-[-50%]">
                      <Play className="w-5 h-5  max-[468px]:w-2 max-[468px]:h-2 mr-2" />
                      Play Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 focus:outline-none z-20 hover:bg-opacity-80"
            onClick={() => {
              prevSlide();
              resetTimeout();
            }}
          >
            <ChevronLeft className="w-8 h-8 max-[768px]:w-6 max-[768px]:h-6 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-2 focus:outline-none z-20 hover:bg-opacity-80"
            onClick={() => {
              nextSlide();
              resetTimeout();
            }}
          >
            <ChevronRight className="w-8 h-8 max-[768px]:w-6 max-[768px]:h-6 text-white" />
          </button>
        </div>

        <div className="mt-6 flex justify-center space-x-4 max-[368px]:space-x-2 overflow-x-auto pb-2">
          {trendingGames.map((game, index) => (
            <div
              key={game.gameId}
              className={`relative cursor-pointer rounded-lg overflow-hidden w-24 h-16 max-[368px]:w-20 max-[368px]:h-14 flex-shrink-0 transition-all ${index === currentIndex ? "ring-2 ring-yellow-500" : "opacity-70 hover:opacity-100"
                }`}
              onClick={() => {
                setCurrentIndex(index);
                resetTimeout();
              }}
            >
              <img
                src={getGameImage(game.gameId, isMobile)}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGamesCarousel;