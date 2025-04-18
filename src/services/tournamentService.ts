// src/services/tournamentService.ts

import { TournamentResponse } from '../types/tournament.types';

const API_BASE_URL = 'https://ignicult.com/api';

export const tournamentService = {
  /**
   * Fetches trending games data from the API
   * @returns Promise with trending games data
   */
  getTrendingGames: async (): Promise<TournamentResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/trending-games`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching trending games:', error);
      throw error;
    }
  }
};