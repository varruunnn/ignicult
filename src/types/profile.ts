export interface Game {
    name: string;
    score: number;
    rank: number;
    highestScore: number;
    topAchieverWallet: string;
    icon: string;
  }
  
  export interface TournamentHistoryItem {
    month: string;
    gamesPlayed: number;
    totalScore: number;
  }
  
  export interface BestPerformance {
    score: number;
    gameId: number;
    gameName: string;
    date: string;
  }
  
  export interface ProfileData {
    walletAddress: string;
    totalPoints: number;
    totalGamesPlayed: number;
    mostPlayedGame: string;
    hoursPerWeek: number;
    tournamentsParticipated: number;
    cultixBalance: number;
    games: Game[];
    completionRate: number;
    tournamentHistory: TournamentHistoryItem[];
    gameDiversityScore: number;
    dnfRate: number;
    bestPerformance: BestPerformance;
    gamingStreak: number;
  }
  
  export const defaultProfileData: ProfileData = {
    walletAddress: "",
    totalPoints: 0,
    totalGamesPlayed: 0,
    mostPlayedGame: "Loading...",
    hoursPerWeek: 0,
    tournamentsParticipated: 0,
    cultixBalance: 0,
    games: [],
    completionRate: 0,
    tournamentHistory: [],
    gameDiversityScore: 0,
    dnfRate: 0,
    gamingStreak: 0,
    bestPerformance: {
      score: 0,
      gameId: 0,
      gameName: "",
      date: ""
    }
  };