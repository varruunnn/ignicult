export interface Player {
    walletAddress: string;
    totalScore: number;
  }
  
  export interface GameData {
    gameId: number;
    title: string;
    topTotalScorers: Player[];
  }
  
  export interface TournamentResponse {
    data: GameData[];
  }