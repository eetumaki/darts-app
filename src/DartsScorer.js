import React, { useState } from 'react';

function DartsScorer() {
  const [players, setPlayers] = useState(['Player 1', 'Player 2']);
  const [gameType, setGameType] = useState('301');
  const [setSize, setSetSize] = useState(5);
  const [currentLeg, setCurrentLeg] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [legScores, setLegScores] = useState([0, 0]);
  const [totalScores, setTotalScores] = useState([0, 0]);

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
  };

  const addScore = (score) => {
    const updatedLegScores = [...legScores];
    updatedLegScores[currentPlayer] += score;
    setLegScores(updatedLegScores);
  };

  const finishTurn = () => {
    const [player1Score, player2Score] = legScores;
    const updatedTotalScores = [...totalScores];
    updatedTotalScores[currentPlayer] += legScores[currentPlayer];

    if (gameType === '301' && updatedTotalScores[currentPlayer] === 301) {
      alert(`${players[currentPlayer]} wins the leg!`);
      if (currentLeg === setSize) {
        alert('Game over! Set finished!');
      } else {
        setCurrentLeg(currentLeg + 1);
        setLegScores([0, 0]);
        switchPlayer();
      }
    } else if (gameType === '501' && updatedTotalScores[currentPlayer] === 501) {
      alert(`${players[currentPlayer]} wins the leg!`);
      if (currentLeg === setSize) {
        alert('Game over! Set finished!');
      } else {
        setCurrentLeg(currentLeg + 1);
        setLegScores([0, 0]);
        switchPlayer();
      }
    } else {
      switchPlayer();
    }

    setTotalScores(updatedTotalScores);
  };

  return (
    <div>
      <h1>Darts Scorer</h1>
      <div>
        <label>Player 1 Name: </label>
        <input
          type="text"
          value={players[0]}
          onChange={(e) => setPlayers([e.target.value, players[1]])}
        />
      </div>
      <div>
        <label>Player 2 Name: </label>
        <input
          type="text"
          value={players[1]}
          onChange={(e) => setPlayers([players[0], e.target.value])}
        />
      </div>
      <div>
        <label>Game Type: </label>
        <select value={gameType} onChange={(e) => setGameType(e.target.value)}>
          <option value="301">301 Up</option>
          <option value="501">501 Up</option>
        </select>
      </div>
      <div>
        <label>Set Size: </label>
        <input
          type="number"
          value={setSize}
          onChange={(e) => setSetSize(parseInt(e.target.value))}
        />
      </div>
      <h2>Leg {currentLeg}</h2>
      <h3>Player 1: {legScores[0]}</h3>
      <h3>Player 2: {legScores[1]}</h3>
      <button onClick={() => addScore(1)}>Add 1</button>
      <button onClick={() => addScore(2)}>Add 2</button>
      <button onClick={() => addScore(3)}>Add 3</button>
      <button onClick={() => finishTurn()}>Finish Turn</button>
      <h2>Total Scores</h2>
      <h3>Player 1: {totalScores[0]}</h3>
      <h3>Player 2: {totalScores[1]}</h3>
    </div>
  );
}

export default DartsScorer;
