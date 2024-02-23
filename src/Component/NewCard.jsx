import React, { useState } from 'react';
import './NewCard.css';
import CardBox from './CardBox';
import { Link } from 'react-router-dom';

export default function NewCard() {

    const types = [ 'bitcoin', 'ninja', 'chain', 'evil'];

    const [activeCard, setActiveCard] = useState("bitcoin");

    const handleCardClick = (type) => {
        setActiveCard(type);
    };

    
    return (
        <div className='card'>
            <div className="container">
                <h2>E-Wallet</h2>
                <div className="content">
                    <p>ACTIVE CARD</p>
                    {types.map((type, index) => (
                        <CardBox
                            key={index}
                            type={type}
                            isActive={activeCard === type}
                            onClick={() => handleCardClick(type)}
                            index={index}
                        />
                    ))}
                </div>
                <Link to={"/add-card"}>
                    <button className='white-btn'>ADD A NEW CARD</button>
                </Link>
            </div>
        </div>
    );
}
