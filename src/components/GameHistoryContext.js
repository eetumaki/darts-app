import React, { createContext, useState, useContext } from 'react';

export const GameHistoryContext = createContext();

export const useGameHistory = () => useContext(GameHistoryContext);

export const GameHistoryProvider = ({ children }) => {
  const [gameHistory, setGameHistory] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(1);
  const [gamesWon, setGamesWon] = useState({ player1: 0, player2: 0 });
  const [totalWins, setTotalWins] = useState({ player1: 0, player2: 0 });
  const [matchWins, setMatchWins] = useState({ player1: 0, player2: 0 });
  
  return (
    <GameHistoryContext.Provider value={{ gameHistory, setGameHistory, gamesWon, setGamesWon, totalWins, setTotalWins, matchWins, setMatchWins, currentMatch, setCurrentMatch }}>
  {children}
</GameHistoryContext.Provider>
  );
};