import React, { useContext } from 'react';
import { GameHistoryContext } from './GameHistoryContext'; // Import the context hook

export function GameHistory() {
  const { gameHistory } = useContext(GameHistoryContext); // Access game history from context

  return (
    <div className="container">
    <div className="game-history-container">
      
      <h2>Game History</h2>
      <table className="game-history-table">
        <thead className="game-history-head">
          <tr className="game-history-row-header">
            <th className="game-history-header-cell">Match</th>
            <th className="game-history-header-cell">Game Type</th>
            <th className="game-history-header-cell">Player 1</th>
            <th className="game-history-header-cell">Player 2</th>
            <th className="game-history-header-cell">Turns Passed</th>
            <th className="game-history-header-cell">Winner</th>
            <th className="game-history-header-cell">Total wins (Player 1)</th>
            <th className="game-history-header-cell">Total wins (Player 2)</th>
          </tr>
        </thead>
        <tbody className="game-history-tbody">
          {gameHistory.map((game, index) => (
            <tr className="game-history-row" key={index}>
              <td className="game-history-cell">{game.match}</td>
              <td className="game-history-cell">{game.gameType}</td>
              <td className="game-history-cell">{game.players.player1}</td>
              <td className="game-history-cell">{game.players.player2}</td>
              <td className="game-history-cell">{game.turnsPassed}</td>
              <td className="game-history-cell">{game.players[game.winner]}</td>
              <td className="game-history-cell">{game.totalWins.player1}</td>
              <td className="game-history-cell">{game.totalWins.player2}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    </div>
  );
}
