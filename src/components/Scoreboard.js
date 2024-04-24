//score functionality and game history handled in the same component

import React, { useState } from 'react';
import { Header } from './Header';
import { Score } from './Score';
import { GameHistory } from './Gamehistory';

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
        </ul>
      </div>
      <div className="outlet"> 
        {activeTab === "scoreboard" && <Score />}
        {activeTab === "gamehistory" && <GameHistory />}
      </div>
    </div>
  );
};

