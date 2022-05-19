import React from "react";
import { Link } from "react-router-dom";
import "../filmsInfo/Thankyou.css";

const Thankyou = () => {

  function randomNumber(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
  }

  return (

    <div className="ty-container">
      <div className="ty-card">
        <div className="ty-h2">
          <h2>Thank you for your order</h2>
        </div>
        <div className="div-h">
          <h3>Customer #{randomNumber(2700,600)}</h3>
          <h4>Order #{randomNumber(1984,120)}</h4>
        </div>
        <div className="customer-text">
          <p>Your purchase has been successful. You are now able to watch your purchased movies.</p>
          <p>Our developers would like to thank you shopping with us.</p>
        </div>
        <div className="nav-text">
          <p>See more movies by going back to home-page</p>
        </div>
        <div className="button-container">
          <Link to="/">
            <button className="close-button">Return to Home</button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Thankyou;
