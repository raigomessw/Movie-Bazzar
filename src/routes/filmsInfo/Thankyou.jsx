import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../filmsInfo/checkout.css";

const Thankyou = () => {
  let totalamount = 500.0;

  return (
    <div className="movie-body">
      <div className="movie-container">
        <div className="card1">
          <h2>Thank you for your order</h2>
          <img
            className="img3"
            src={`https://firebasestorage.googleapis.com/v0/b/giggli-df121.appspot.com/o/private%2Fpic.png?alt=media&token=7044401c-0a4a-4d02-87d3-c1ea20ddf7e0`}
            alt=""
          />

          <div>
            <br />
            <br /> <br />
            <br />
            <Link to="/">
              <button className="wish2">Back to HomePage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
