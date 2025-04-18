export const getGameIcon = (gameName: string): string => {
    const gameIcons: { [key: string]: string } = {
      "Number Snake": "🐍",
      "Tic Tac Toe": "❌",
      "Color Ship Shooter": "👾",
      "Color puzzle": "⚔️",
      "Cricket Catch Pro": "🚀",
    };
  
    return gameIcons[gameName] || "🎮";
  };