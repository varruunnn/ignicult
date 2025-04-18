import { ProfileData } from '../types/profile';
import { getGameIcon } from './getGameIcon';

export const mapApiDataToProfileData = (apiData: any): ProfileData => {
  const games = apiData.games?.map((game: any) => ({
    name: game.name || "Unknown Game",
    score: game.score || 0,
    rank: game.rank || 0,
    highestScore: game.highestScore || 0,
    topAchieverWallet: game.topAchieverWallet || "0x0000000000",
    icon: getGameIcon(game.name),
  })) || [];

  const hoursPerWeek = 8; // Hardcoded value since it's not in the API

  return {
    walletAddress: apiData.walletAddress || "",
    totalPoints: apiData.totalPoints?.value || 0,
    totalGamesPlayed: apiData.totalGamesPlayed?.value || 0,
    mostPlayedGame: apiData.mostPlayedGame?.name || "No Games",
    hoursPerWeek: hoursPerWeek,
    tournamentsParticipated: apiData.tournamentsParticipated?.value || 0,
    cultixBalance: apiData.cultixBalance?.value || 0,
    games: games,
    completionRate: apiData.completionRate?.value || 0,
    tournamentHistory: apiData.tournamentStats?.tournamentHistory?.value || [],
    gameDiversityScore: apiData.gameDiversityScore?.value || 0,
    dnfRate: apiData.dnfRate?.value || 0,
    gamingStreak: apiData.gamingStreak?.value || 0,
    bestPerformance: apiData.bestPerformance?.value || {
      score: 0,
      gameId: 0,
      gameName: "",
      date: ""
    }
  };
};