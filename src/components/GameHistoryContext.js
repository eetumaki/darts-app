import React, { createContext, useState, useContext } from 'react';

export const GameHistoryContext = createContext();

export const useGameHistory = () => useContext(GameHistoryContext);

export const GameHistoryProvider = ({ children }) => {
  const [playerNames, setPlayerNames] = useState({ player1: 'Player1', player2: 'Player2' });
  const [gameHistory, setGameHistory] = useState([]); //keeping track of game history
  const [currentMatch, setCurrentMatch] = useState(1); //keeping track of the current match
  const [gamesWon, setGamesWon] = useState({ player1: 0, player2: 0 }); //keeping track of game wins per match for each player
  const [totalWins, setTotalWins] = useState({ player1: 0, player2: 0 }); //keeping track of total wins overall across matches for each player
  
  
  return (
    <GameHistoryContext.Provider value={{ playerNames, setPlayerNames, gameHistory, setGameHistory, gamesWon, setGamesWon, totalWins, setTotalWins, currentMatch, setCurrentMatch }}>
  {children}
</GameHistoryContext.Provider>
  );
};