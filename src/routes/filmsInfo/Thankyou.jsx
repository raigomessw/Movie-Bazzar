import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../filmsInfo/Thankyou.css";
import { actions } from "../../features/shoppingCart";

const Thankyou = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const dispatch = useDispatch();
  const Emptycart = () => {
    dispatch(actions.emptycart("all"));
  };

  useEffect(() => {
    Emptycart();
  }, []);

  return (
    <div className="ty-container">
      <div className="ty-card">
        <div className="ty-h2">
          <h2>Thank you for your order</h2>
        </div>
        <div className="div-h">
          <h3>Customer #{randomNumber(2700, 600)}</h3>
          <h4>Order #{randomNumber(1984, 120)}</h4>
        </div>
        <div className="customer-text">
          <p>
            Your purchase has been successful. You will recieve your purschased movies coming 2 days.
          </p>
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
