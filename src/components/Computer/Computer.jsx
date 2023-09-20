import React from 'react';
import computer from '../../images/computer.png';
import './Computer.css';

const Computer = () => {
    return (
        <div>
            <img className='Img' src={computer} alt="computer" />
        </div>
    );
};

export default Computer;