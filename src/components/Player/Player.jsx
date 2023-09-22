import './Player.css'
import React from 'react';
import piedra from '../../images/piedra.png';
import papel from '../../images/papel.png';
import tijera from '../../images/tijera.png';


const Player = ({ onPlayerChoice }) => {
    return (
        <div>
            <h4>ELIGE TU JUGADA:</h4>
            <button className='ButtonOption' onClick={() => onPlayerChoice('piedra')}>
                <img  className='Option' src={piedra} alt="piedra" />
            </button>
            <button className='ButtonOption' onClick={() => onPlayerChoice('papel')}>
                <img className='Option' src={papel} alt="papel" />
            </button>
            <button className='ButtonOption' onClick={() => onPlayerChoice('tijera')}>
                <img className='Option' src={tijera} alt="tijera" />
            </button>
        </div>
    );
};

export default Player;
