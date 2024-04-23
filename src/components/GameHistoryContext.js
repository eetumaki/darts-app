import React, { createContext, useState, useContext } from 'react';

export const GameHistoryContext = createContext();

export const useGameHistory = () => useContext(GameHistoryContext);

export const GameHistoryProvider = ({ children }) => {
  const [gameHistory, setGameHistory] = useState([]);
  
  return (
    <GameHistoryContext.Provider value={{ gameHistory, setGameHistory }}>
      {children}
    </GameHistoryContext.Provider>
  );
};
