// App.js
import React from 'react';
import Scoreboard from './components/Scoreboard';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <h1>Darts Score Keeper</h1>
      <Settings />
      <Scoreboard />
    </div>
  );
}

export default App;
