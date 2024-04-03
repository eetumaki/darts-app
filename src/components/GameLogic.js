// GameLogic.js
export const checkGameEnd = (score) => {
    return score.score1 === 0 || score.score2 === 0;
  };

// Function to check if the match has ended based on the number of games won
export const checkMatchEnd = (gamesWon, matchLength) => {
    const requiredWins = Math.ceil(matchLength / 2); // Calculate the number of wins required for match end
    return gamesWon.player1 >= requiredWins || gamesWon.player2 >= requiredWins;
  };
  