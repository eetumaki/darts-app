//score functionality and game history handled in the same component

import React, { useState } from 'react';
import { Header } from './Header';
import { Score } from './Score';
import { GameHistory } from './Gamehistory';
import { HTP1 } from '../Pages/HTP1';
// import { GameHistoryProvider } from './GameHistoryContext'; // Import the GameHistoryProvider
// import { GameHistoryContext } from './GameHistoryContext'; // Import the GameHistoryContext

export const Scoreboard = () => {
  const [activeTab, setActiveTab] = useState("scoreboard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Scoreboard">
      <Header />
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "scoreboard" ? "active" : ""}
            onClick={() => handleTabChange("scoreboard")}
          >
            Scoreboard
          </li>
          <li
            className={activeTab === "gamehistory" ? "active" : ""}
            onClick={() => handleTabChange("gamehistory")}
          >
            Game History
          </li>
          <li
            className={activeTab === 'HTP' ? 'active' : ""}
            onClick={() => handleTabChange('HTP')}
          >
            How to Play
          </li>
        </ul>
      </div>
      <div className="outlet"> 
        {activeTab === "scoreboard" && <Score />}
        {activeTab === "gamehistory" && <GameHistory />}
        {activeTab === 'HTP' && <HTP1 />}
      </div>
    </div>
  );
};

