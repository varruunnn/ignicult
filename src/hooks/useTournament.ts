import { useState, useEffect } from 'react';
import { GameData } from '../types/tournament.types';
import { tournamentService } from '../services/tournamentService';

interface UseTournamentReturn {
  games: GameData[];
  selectedGame: GameData | null;
  loading: boolean;
  error: Error | null;
  setSelectedGame: (game: GameData | null) => void;
}

export const useTournament = (): UseTournamentReturn => {
  const [games, setGames] = useState<GameData[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const result = await tournamentService.getTrendingGames();
        setGames(result.data);
        setSelectedGame(result.data[0] || null);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return {
    games,
    selectedGame,
    loading,
    error,
    setSelectedGame,
  };
};