import React from 'react';

const CardBox = ({ type }) => {

    const cardLogoColors = {
        bitcoin: 'black',
        ninja: 'white',
        chain: 'black',
        evil: 'black',
    };

    const cardLogo = {
        bitcoin: './images/Bitcoin.svg',
        ninja: './images/Group.svg',
        chain: './images/chain.svg',
        evil: './images/Subtract.svg',
        sim: './images/sim.svg',
    }

    return (
        <div className={`card-box ${type}`}>
            <div className="card-content">
                <div className="logo-content">
                    <img src={cardLogo.sim} alt="Sim" />
                    <img src={cardLogo[type]} alt={`${type} logo`} />
                </div>
                <div className="card-number">
                    <span style={{ color: cardLogoColors[type] }}>1234 5678 0910 1112</span>
                </div>
                <div className="card-info">
                    <div className="card-info-title" style={{ color: cardLogoColors[type] }}>
                        <span>cardholder name</span>
                        <span>Valid thru</span>
                    </div>
                    <div className="card-info-content" style={{ color: cardLogoColors[type] }}>
                        <span>Christoffer Wallenberg</span>
                        <span>12/22</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBox;