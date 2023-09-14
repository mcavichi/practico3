import React from 'react';
import computer from '../../images/computer.png';
import './Computer.css';

const Computer = () => {
    return (
        <div>
            {/* <h3>Turno de la computadora:</h3> */}
            <img className='Img'  src={computer} alt="computer" />
        </div>
    );
};

export default Computer;
