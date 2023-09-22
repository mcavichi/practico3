import React from 'react';

const Result = ({playerScore, computerScore, round, winner }) => {
  return (
    <div>
      <h4>RESULTADOS</h4>
      <p>Ronda: {round}</p>
      <p>👤{playerScore} - {computerScore}💻</p>
      {winner && <p>{winner}</p>}
    </div>
  );
}

export default Result;
