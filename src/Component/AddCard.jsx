import React, { useState } from 'react';
import './AddCard.css'

export default function AddCard() {

    const cardLogo = {
        bitcoin: './images/Bitcoin.svg',
        ninja: './images/Group.svg',
        chain: './images/chain.svg',
        evil: './images/Subtract.svg',
        sim: './images/sim.svg',
    };


    const [type, setType] = useState("bitcoin");
    const [cardNumber, setCardNumber]=useState('XXXX XXXX XXXX XXXX');
    const [name, setName]=useState("FIRSTNAME LASTNAME")
    const [thru, setThru]=useState("MM/YY")

    const cardTypeHandler = (event) => {
        setType(event.target.value);
    }

    const cardNumberHandler = (event) => {
        setCardNumber(event.target.value)
    }

    const cardNameHandler = (event) => {
        setName(event.target.value)
    }

    const cardThruHandler = (event) => {
        setThru(event.target.value)
    }

    return (
        <div className='card'>
            <div className="container">
                <h2>ADD A NEW BANK CARD</h2>
                <div className="content">
                    <p>NEW CARD</p>
                    <div className={`card-box selected-card ${type}`}>
                        <div className="card-content">
                            <div className="logo-content">
                                <img src={cardLogo.sim} alt="Sim" />
                                <img src={cardLogo[type]} alt={type} />
                            </div>
                            <div className="card-number">
                                <span>{cardNumber}</span>
                            </div>
                            <div className="card-info">
                                <div className="card-info-title">
                                    <span>cardholder name</span>
                                    <span>Valid thru</span>
                                </div>
                                <div className="card-info-content">
                                    <span>{name}</span>
                                    <span>{thru}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="type">Card Number:</label>
                            <input type="text" value={cardNumber} onChange={cardNumberHandler} />
                        </div>
                        <div>
                            <label htmlFor="type">PalceHolder Name:</label>
                            <input type="text" value={name} onChange={cardNameHandler} />
                        </div>
                        <div className='cvv-content'>
                            <div>
                                <label htmlFor="type">Valid THRU:</label>
                                <input type="text" value={thru} onChange={cardThruHandler} />
                            </div>
                            <div>
                                <label htmlFor="type">CVV:</label>
                                <input type="text" placeholder='CVV' />
                            </div>
                        </div>
                        <div>
                            <select value={type} onChange={cardTypeHandler}>
                                <option value="bitcoin">BITCOIN</option>
                                <option value="ninja">NINJA</option>
                                <option value="chain">CHAIN</option>
                                <option value="evil">EVIL</option>
                            </select>
                        </div>
                    </form>
                    <button className='black-btn'>Add Card</button>
                </div>
            </div>
        </div>
    );
}
