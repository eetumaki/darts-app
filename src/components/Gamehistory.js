import React, { useContext } from 'react';
import { GameHistoryContext } from './GameHistoryContext'; // Import the context hook

export function GameHistory() {
  const { gameHistory } = useContext(GameHistoryContext); // Access game history from context

  return (
    <div className="game-history">
      
      <h2>Game History</h2>
      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Game Type</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Turns Passed</th>
            <th>Winner</th>
            <th>Total wins (Player 1)</th>
            <th>Total wins (Player 2)</th>
          </tr>
        </thead>
        <tbody>
          {gameHistory.map((game, index) => (
            <tr key={index}>
              <td>{game.match}</td>
              <td>{game.gameType}</td>
              <td>{game.players.player1}</td>
              <td>{game.players.player2}</td>
              <td>{game.turnsPassed}</td>
              <td>{game.winner}</td>
              <td>{game.totalWins.player1}</td>
              <td>{game.totalWins.player2}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
