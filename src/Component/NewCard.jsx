import React from 'react'
import './NewCard.css'
import CardBox from './CardBox'

export default function NewCard() {
    
    return (
        <div className='card'>
            <div className="container">
                <h2>E-Wallet</h2>
                <div className="content">
                    <p>ACTIVE CARD</p>
                    <div style={{ top: "10px" }} className="card-item">
                        <CardBox type="bitcoin" />
                    </div>
                    <div style={{ top: "18rem" }} className="card-item">
                        <CardBox type="ninja" />
                    </div>
                    <div style={{ top: "22.5rem" }} className="card-item">
                        <CardBox type="chain" />
                    </div>
                    <div style={{ top: "27rem" }} className="card-item">
                        <CardBox type="evil"  />
                    </div>
                </div>
                <button className='white-btn'>ADD A NEW CARD</button>
            </div>
        </div>
    );
}