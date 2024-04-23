// ScoreLogic.js
export const updateScore = (currentScore, player, points, turnsPassed) => {
    const updatedScore = { ...currentScore };
    updatedScore[player] -= points;
    return updatedScore;
  };
  