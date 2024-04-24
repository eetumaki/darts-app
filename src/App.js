import React from 'react';
import { Scoreboard } from './components/Scoreboard';
import './App.css';
import { GameHistoryProvider } from './components/GameHistoryContext'; // Import the context provider

function App() {
  return (
    <GameHistoryProvider>
      <div className="Tabs">
        <Scoreboard />
      </div>
    </GameHistoryProvider>
  );
}

export default App;
