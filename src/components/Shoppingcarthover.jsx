import "./Shoppingcarthover.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
//import { reducer as shopReducer } from "../features/shoppingCart";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Shoppincarthover = () => {
  const [cart, setCart] = useState(false);
  const handleCart = () => setCart(!cart);

  const shoppingCartObjects = useSelector((state) => state.shoppingCart);

  const shoppingCartList = shoppingCartObjects.map((item) => (
    <div className="dropdown-child">
      <div className="titletextleft">{item.product.name} </div>
      <div className="titletextrightcount">{item.count}</div>
    </div>
  ));

  return (
    <div className="dropdown">
      <div className="cart-icon" onClick={handleCart}>
        {!cart ? (
          <AiOutlineShoppingCart className="icon" style={{ color: "#ffff" }} />
        ) : (
          <AiOutlineClose style={{ color: "#ffff" }} className="icon" />
        )}
      </div>
      <div className={cart ? "dropdown" : "dropdown-content"}>
        <div className="">
          <div className="dropdown-childtop">
            <div className="titletextleft">Title</div>{" "}
            <div className="titletextright">Qty</div>{" "}
          </div>
          {shoppingCartList}
          <NavLink to="/checkout">
            <button className="checkoutbtn">Check Out</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shoppincarthover;
