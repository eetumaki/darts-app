// ScoreLogic.js
export const updateScore = (currentScore, player, points) => {
    const updatedScore = { ...currentScore };
    updatedScore[player] -= points;
    return updatedScore;
  };
  