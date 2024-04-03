import React, { useState } from 'react'

export const Score = () => {
  const [gameType, setGameType] = useState('option1'); //default gametype is 301
  const [score, setScore] = useState({
    score1:301,
    score2:301
  });

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
    //update scores based on selected gametype
    setScore({
        score1: event.target.value === 'option1' ? 301:501,
        score2: event.target.value === 'option1' ? 301:501
    });
  };
  return (
    <div>
        <label htmlFor="options">Choose game type: </label>
        <select id="options" value={gameType} onChange={handleGameTypeChange}>
        <option value="option1">301</option>
        <option value="option2">501</option>
        </select>
        <div className='score-container'>
            <h4>Player1 Score:</h4>
            <h1 id='score1'>{score.score1}</h1> 
        </div>
        <div className='score-container'>
            <h4>Player2 Score:</h4>
            <h1 id='score2'>{score.score2}</h1> 
        </div>
    </div>
  )
}
