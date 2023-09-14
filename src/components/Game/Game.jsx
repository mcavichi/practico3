import React, { useState } from 'react';
import Player from '../Player/Player';
import Computer from '../Computer/Computer';
import Result from '../Result/Result';
import './Game.css';

const Game = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handlePlayerChoice = (choice) => {
    if (gameOver) {
      return;
    }

    const computerChoice = generateComputerChoice();
    const result = calculateWinner(choice, computerChoice);
    updateScores(result);
    setRound(round + 1);
    setWinner(result);
  };

  const generateComputerChoice = () => {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const calculateWinner = (playerChoice, computerChoice) => {
    if (
      (playerChoice === 'piedra' && computerChoice === 'tijera') ||
      (playerChoice === 'papel' && computerChoice === 'piedra') ||
      (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
      return `${playerName} gana!`;
    } else if (playerChoice === computerChoice) {
      return 'Empate!';
    } else {
      return 'La computadora gana!';
    }
  };

  const updateScores = (result) => {
    if (result === `${playerName} gana!`) {
      setPlayerScore(playerScore + 1);
      if (playerScore + 1 === 3) {
        setWinner('¡Has ganado el juego!');
        setGameOver(true);
      }
    } else if (result === 'La computadora gana!') {
      setComputerScore(computerScore + 1);
      if (computerScore + 1 === 3) {
        setWinner('¡La computadora ha ganado el juego!');
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setWinner('');
    setGameOver(false);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <div className="Game">
        <p>Ingresa tu nombre:</p>
        <input type="text" value={playerName} onChange={handleNameChange} required />
      <Player onPlayerChoice={handlePlayerChoice} disabled={gameOver} />
      <Computer />
      <Result
        playerScore={playerScore}
        computerScore={computerScore}
        round={round}
        winner={winner}
      />
      {gameOver && (
        <div>
          <p>Resultado Final: {winner}</p>
          <button onClick={resetGame}>Reiniciar Juego</button>
        </div>
      )}
    </div>
  );
};

export default Game;
