import React, { useState, useEffect } from "react";
import "./AddCard.css";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function AddCard() {
  const cardLogoColors = {
    bitcoin: "black",
    ninja: "white",
    chain: "black",
    evil: "white",
  };

  const cardLogo = {
    bitcoin: "./images/Bitcoin.svg",
    ninja: "./images/Group.svg",
    chain: "./images/chain.svg",
    evil: "./images/Subtract.svg",
    sim: "./images/sim.svg",
  };

  const [type, setType] = useState("bitcoin");
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [name, setName] = useState("FIRSTNAME LASTNAME");
  const [thru, setThru] = useState("MM/YY");
  const [validation, setValidation] = useState(false);
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);

  const cardTypeHandler = (event) => {
    setType(event.target.value);
  };

  const cardNumberHandler = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    input = input.substring(0, 19);

    input = input.replace(/(\d{4})(?=\d)/g, "$1 ");

    setCardNumber(input);
  };

  const cardNameHandler = (event) => {
    let regex = /^[a-zA-Z\s]+$/;

    const input = event.target.value;

    if (regex.test(input) || input === "") {
      setName(input);
    }
  };

  const cardThruHandler = (event) => {
    let input = event.target.value.replace(/\D/g, "");

    input = input.substring(0, 4);

    input = input.replace(/(\d{2})(?=\d)/g, "$1/");
    setThru(input);
  };

  const Validation = () => {
    if (cardNumber.length === 0 || name.length === 0 || thru.length === 0) {
      console.log("Fill Out The Form...");
      setErr("Fill Out The Form...");
    } else if (cardNumber.length < 19) {
      console.log("Card Number is less than 12...");
      setErr("Card Number is less than 12...");
    } else {
      setErr("");
      setValidation(true);
      setLoader(true);
    }
  };

  useEffect(() => {
    if (loader) {
      const timer = setTimeout(() => {
        setLoader(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [loader]);

  return (
    <div className="">
      {!validation ? (
        <div className="card">
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
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={cardNumberHandler}
                    maxLength={19}
                    autoComplete="cc-number"
                    className={`${
                      cardNumber.length < 19 ? "invalid" : "valid"
                    }`}
                  />
                </div>
                <div>
                  <label htmlFor="type">PalceHolder Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={cardNameHandler}
                    className={name.length === 0 ? "invalid" : "valid"}
                  />
                </div>
                <div className="cvv-content">
                  <div>
                    <label htmlFor="type">Valid THRU:</label>
                    <input
                      type="text"
                      value={thru}
                      onChange={cardThruHandler}
                      className={thru.length < 5 ? "invalid" : "valid"}
                    />
                  </div>
                  <div>
                    <label htmlFor="type">CVV:</label>
                    <input type="text" placeholder="CVV" />
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
              <p className="errorMsg">{err}</p>
              <button className="black-btn" onClick={Validation}>
                Add Card
              </button>
              <Link to={"/"}>
                <span className="back">Back</span>
              </Link>
            </div>
          </div>
        </div>
      ) : loader ? (
        <div className="loader-content">
          <BeatLoader color="#3670d6" />
        </div>
      ) : (
        <div className="card">
          <div className="container">
            <h2>Your Card is Ready</h2>
            <div className="content ready-content">
              <p>YOUR CARD</p>
              <div className={`card-box ${type}`}>
                <div className="card-content">
                  <div className="logo-content">
                    <img src={cardLogo.sim} alt="Sim" />
                    <img src={cardLogo[type]} alt={type} />
                  </div>
                  <div className="card-number">
                    <span style={{ color: cardLogoColors[type] }}>
                      {cardNumber}
                    </span>
                  </div>
                  <div className="card-info">
                    <div className="card-info-title">
                      <span style={{ color: cardLogoColors[type] }}>
                        cardholder name
                      </span>
                      <span style={{ color: cardLogoColors[type] }}>
                        Valid thru
                      </span>
                    </div>
                    <div className="card-info-content">
                      <span style={{ color: cardLogoColors[type] }}>
                        {name}
                      </span>
                      <span style={{ color: cardLogoColors[type] }}>
                        {thru}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
