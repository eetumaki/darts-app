import React from 'react';
// import { Tabs } from './components/Tabs';
import { Scoreboard } from './components/Scoreboard';
import './App.css';
import { GameHistoryProvider } from './components/GameHistoryContext'; // Import the context provider

function App() {
  return (
    <GameHistoryProvider> {/* Wrap your App component with the GameHistoryProvider */}
      <div className="Tabs">
        <Scoreboard />
      </div>
    </GameHistoryProvider>
  );
}

export default App;
