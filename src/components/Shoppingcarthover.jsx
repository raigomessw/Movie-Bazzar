import './Shoppingcarthover.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { reducer as shopReducer } from "../features/shoppingCart";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Shoppincarthover = () => {

const movieTitle = "Batman";
const qty = 2;

const shoppingCartObjects = useSelector(state => state.shoppingCart);

const shoppingCartList =  shoppingCartObjects.map((item) => (
    <div class="dropdown-child">
     <div className='titletextleft'>{item.product.name}  </div>
     <div className='titletextrightcount'>{item.count}</div>
     </div>
))

    return (


        <div class="dropdown">
        <div className="nav-menu">
             <NavLink to="/checkout">
              <AiOutlineShoppingCart className="icon" style={{ color: "#ffff" }} />
             </NavLink>
         </div>
     <div class="dropdown-content">
    <div class="dropdown-childtop"><div className='titletextleft'>Title</div> <div className='titletextright'>Qty</div> </div>
    {shoppingCartList}
    <NavLink to="/checkout">
    <button className='checkoutbtn'>Check Out</button>
    </NavLink>
    </div>
    </div>


     /*<div class="dropdown">
    <button class="dropbtn">Dropdown</button>
     <div class="dropdown-content">
    <div class="dropdown-childtop"><p className='titletext'>Title</p> <p className='titletextright'>Qty</p> </div>
    <div class="dropdown-child"> <p className='titletext'>{movieTitle}</p> <p className='titletextright'>{qty}</p> </div>
    <div class="dropdown-child"> <p className='titletext'>{movieTitle}</p> <p className='titletextright'>{qty}</p> </div>
    </div>
    </div>*/

    )
//<button className='btnplus'>+</button> <button className='btnminus'>-</button>

}

export default Shoppincarthover;