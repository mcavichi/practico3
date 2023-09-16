import React from 'react';

const Result = ({ playerScore, computerScore, round, winner }) => {
  return (
    <div>
      <h4>Resultados</h4>
      <p>Ronda: {round}</p>
      <p>Tu puntaje: {playerScore}</p>
      <p>Puntaje de la Computadora: {computerScore}</p>
      {winner && <p>Resultado de la rondan: {winner}</p>}
    </div>
  );
}

export default Result;
