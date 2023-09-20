import './Player.css'
import React from 'react';
import piedra from '../../images/piedra.png';
import papel from '../../images/papel.png';
import tijera from '../../images/tijera.png';


const Player = ({ onPlayerChoice }) => {
    return (
        <div>
            <h4>ELIGE TU JUGADA:</h4>
            <button onClick={() => onPlayerChoice('piedra')}>
                <img className='Images' src={piedra} alt="piedra" />
            </button>
            <button onClick={() => onPlayerChoice('papel')}>
                <img className='Images' src={papel} alt="papel" />
            </button>
            <button onClick={() => onPlayerChoice('tijera')}>
                <img className='Images' src={tijera} alt="tijera" />
            </button>
        </div>
    );
};

export default Player;
