import React, { useState } from 'react';

export const Score = () => {
  const [gameType, setGameType] = useState('option1'); //default gametype is 301
  const [score, setScore] = useState({
    score1: 301,
    score2: 301
  });
  const [playerNames, setPlayerNames] = useState({
    player1: 'Player1',
    player2: 'Player2'
  });
  const [showModal, setShowModal] = useState(false);
  const [tempPlayerNames, setTempPlayerNames] = useState({}); // Temporary state to hold changes in player names

  const handleGameTypeChange = (event) => {
    setGameType(event.target.value);
    //update scores based on selected gametype
    setScore({
      score1: event.target.value === 'option1' ? 301 : 501,
      score2: event.target.value === 'option1' ? 301 : 501
    });
  };

  const handlePlayerNameChange = (player, newName) => {
    setTempPlayerNames({
      ...tempPlayerNames,
      [player]: newName
    });
  };

  const openModal = () => {
    // Initialize temporary state with current player names
    setTempPlayerNames(playerNames);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmNameChange = () => {
    setPlayerNames(tempPlayerNames);
    setShowModal(false); // Close the modal after confirming the name change
  };

  return (
    <div>
      <label htmlFor="options">Choose game type: </label>
      <select id="options" value={gameType} onChange={handleGameTypeChange}>
        <option value="option1">301</option>
        <option value="option2">501</option>
      </select>
      <button onClick={openModal}>Set Player Names</button>
      <div className='score-container'>
        <h4>{playerNames.player1} Score:</h4>
        <h1 id='score1'>{score.score1}</h1>
      </div>
      <div className='score-container'>
        <h4>{playerNames.player2} Score:</h4>
        <h1 id='score2'>{score.score2}</h1>
      </div>

      {/*Modal */}
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <label htmlFor='player1Name'>Player 1 Name:</label>
            <input type='text' id='player1Name' value={tempPlayerNames.player1} onChange={(e) => handlePlayerNameChange('player1', e.target.value)}></input>
            <br></br>
            <label htmlFor='player2Name'>Player 2 Name:</label>
            <input type='text' id='player2Name' value={tempPlayerNames.player2} onChange={(e) => handlePlayerNameChange('player2', e.target.value)}></input>
            <button onClick={confirmNameChange}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};
