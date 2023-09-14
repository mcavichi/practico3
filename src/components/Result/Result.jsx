import React from 'react';

const Result = ({ playerScore, computerScore, round, winner }) => {
  return (
    <div>
      <h3>Resultados</h3>
      <p>Ronda: {round}</p>
      <p>Tu puntaje: {playerScore}</p>
      <p>Puntaje de la Computadora: {computerScore}</p>
      {winner && <p>Resultado de la ronda: {winner}</p>}
    </div>
  );
}

export default Result;
