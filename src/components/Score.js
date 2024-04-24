import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { updateScore } from './ScoreLogic';
import { checkGameEnd, checkMatchEnd } from './GameLogic';
import { GameHistoryContext } from './GameHistoryContext'; // Import the GameHistoryContext

export const Score = () => {
  const { gameHistory, setGameHistory, gamesWon, setGamesWon, totalWins, setTotalWins, currentMatch, setCurrentMatch } = useContext(GameHistoryContext); // Access gameHistory context
  const [gameType, setGameType] = useState('option1');
  const gameTypeValue = gameType === 'option1' ? '301' : '501';
  const [score, setScore] = useState({ score1: 301, score2: 301 });
  const [playerNames, setPlayerNames] = useState({ player1: 'Player1', player2: 'Player2' });
  const [showModal, setShowModal] = useState(false);
  const [tempPlayerNames, setTempPlayerNames] = useState({});
  const [tempPoints1, setTempPoints1] = useState('');
  const [tempPoints2, setTempPoints2] = useState('');
  const [matchLength, setMatchLength] = useState(3); // Default to best of 3 games
  const [currentGame, setCurrentGame] = useState(1); // State to track the current game [1, 2, 3, ...
  const [turnsPassed, setTurnsPassed] = useState(0); // State to track the number of turns
  

  useEffect(() => {
    const savedGameHistory = localStorage.getItem('gameHistory');
    if (savedGameHistory) {
      setGameHistory(JSON.parse(savedGameHistory));
    }
  }, [setGameHistory]);

  useEffect(() => {
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
  }, [gameHistory]);

  useEffect(() => {
    localStorage.setItem('gamesWon', JSON.stringify(gamesWon));
  }, [gamesWon]);



  const handleGameTypeChange = (event) => {
    if (!checkMatchEnd(gamesWon, matchLength)) {
      setGameType(event.target.value);
      if (!checkGameEnd(score)) {
        // Only update the score if the current game is not over
        setScore({
          score1: event.target.value === 'option1' ? 301 : 501,
          score2: event.target.value === 'option1' ? 301 : 501
        });
      }
    }
  };
  

  const handlePlayerNameChange = (player, newName) => {
    setTempPlayerNames({ ...tempPlayerNames, [player]: newName });
  };

  const openModal = () => {
    setTempPlayerNames(playerNames);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmNameChange = () => {
    setPlayerNames(tempPlayerNames);
    setShowModal(false);
  };

  const handleScoreChange = (event, player) => {
    let points = event.target.value;
    if (!/^\d*$/.test(points)) return; // Allow only digits
    points = parseInt(points);
    if (points > 180) points = 180; // Limit to maximum 180
    if (points < 0) points = 0; // Disallow negative values
    if (player === 'player1') {
      setTempPoints1(points);
      setTempPoints2(''); // Clear the other player's input
    } else if (player === 'player2') {
      setTempPoints2(points);
      setTempPoints1(''); // Clear the other player's input
    }
  };

  const handleConfirmScore = (player) => {
    setTurnsPassed(turnsPassed + 1);
    const points = player === 'player1' ? tempPoints1 : tempPoints2;
    if (points !== '') {
      let updatedScore = updateScore(score, player === 'player1' ? 'score1' : 'score2', parseInt(points));
      if (updatedScore[player === 'player1' ? 'score1' : 'score2'] < 0) {
        alert(`Bust! ${playerNames[player]} Score reset back to last round!`);
        updatedScore = score;
      }
      setScore(updatedScore);
  
      if (checkGameEnd(updatedScore)) {
        const winner = updatedScore.score1 === 0 ? 'player1' : 'player2';
        const updatedGamesWon = { ...gamesWon, [winner]: gamesWon[winner] + 1 };
        setGamesWon(updatedGamesWon);
        const updatedTotalWins = { ...totalWins, [winner]: totalWins[winner] + 1 };
        setTotalWins(updatedTotalWins);
  
        const gameInfo = {
          match: currentMatch,
          game: currentGame,
          gameType: gameTypeValue,
          players: { ...playerNames },
          player1: playerNames.player1,
          player2: playerNames.player2,
          turnsPassed,
          winner,
          totalWins: updatedTotalWins,
        };
  
        setGameHistory([...gameHistory, gameInfo]); // Update game history context here
        alert(`Game over! ${playerNames[player]} wins the game!`);
        setCurrentGame(currentGame + 1);
  
        if (checkMatchEnd(updatedGamesWon, matchLength)) {
          alert(`Match over! ${playerNames[player]} wins the match!`);
          setCurrentMatch(currentMatch + 1);
          setGamesWon({ player1: 0, player2: 0 });
          setCurrentGame(1);
        }
  
        const newScore = {
          score1: gameType === 'option1' ? 301 : 501,
          score2: gameType === 'option1' ? 301 : 501
        };
        setScore(newScore);
        setTurnsPassed(0);
      }
    }
  };
  

  const handleMatchLengthChange = (event) => {
    setMatchLength(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="options">Choose game type: </label>
      <select id="options" value={gameType} onChange={handleGameTypeChange}>
        <option value="option1">301</option>
        <option value="option2">501</option>
      </select>
      <label htmlFor='sets'>Best of:</label>
      <select id='sets' onChange={handleMatchLengthChange} value={matchLength}>
        <option value='1'>1</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='7'>7</option>
      </select>
      <div className='button-wrapper'>
      <button className='set-players-btn' onClick={openModal}>Set Player Names</button> <br></br>
      </div>
      <hr></hr>
      <div className='score-container'>
        <h4>{playerNames.player1} Score:</h4>
        <h1 id='score1'>{score.score1}</h1>
        <input type="number" value={tempPoints1} onChange={(e) => handleScoreChange(e, 'player1')} placeholder="0" />
        <button onClick={() => handleConfirmScore('player1')}>Confirm</button>
      </div>
      <div className='score-container'>
        <h4>{playerNames.player2} Score:</h4>
        <h1 id='score2'>{score.score2}</h1>
        <input type="number" value={tempPoints2} onChange={(e) => handleScoreChange(e, 'player2')} placeholder="0" />
        <button onClick={() => handleConfirmScore('player2')}>Confirm</button>
      </div>
      <hr></hr>
      <div className='games-won-container'>
        <h4>Games Won:</h4>
        <p>{playerNames.player1}: {gamesWon.player1}</p>
        <p>{playerNames.player2}: {gamesWon.player2}</p>
      </div>
      
 
      {showModal && (
        <div className={`modal ${showModal ? `active` : ''}`}>
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