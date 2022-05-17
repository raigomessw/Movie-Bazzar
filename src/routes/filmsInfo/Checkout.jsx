import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { actions } from '../../features/shoppingCart';
import '../filmsInfo/checkout.css';

import { toast } from "react-toastify";



const Checkout = () => {

  const dispatch = useDispatch()

  const shoppingCartObjects = useSelector(state => state.shoppingCart);

  let counter = 0


  const imagePath = 'https://image.tmdb.org/t/p/';

  /* Functions for selected movie */

  const IncreaseOne = (index) => {
    let movieTitle = (shoppingCartObjects[index].product.name);
    let moviePrice = (shoppingCartObjects[index].product.price);

    const movieToDelete = {
      name: movieTitle,
      price: moviePrice
    }
    dispatch(actions.increaseAmount(movieToDelete))
  }

  const DecreaseOne = (index) => {
    let movieTitle = (shoppingCartObjects[index].product.name);
    let moviePrice = (shoppingCartObjects[index].product.price);
    const movieToDelete = {
      name: movieTitle,
      price: moviePrice
    }
    if (shoppingCartObjects[index].count === 1) {
      dispatch(actions.removeFromCart(movieToDelete))
    } else
      dispatch(actions.decreaseAmount(movieToDelete))
  }

  const DeleteMovie = (index) => {
    let movieTitle = (shoppingCartObjects[index].product.name);
    let moviePrice = (shoppingCartObjects[index].product.price);
    const movieToDelete = {
      name: movieTitle,
      price: moviePrice
    }
    toast.error(`${movieTitle} has been deleted`, {position: "bottom-center" });
    dispatch(actions.removeFromCart(movieToDelete))
  }

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="checkout-information">
          <div>
            <h1 className="title">Checkout</h1>
            <h2 className='order'>Order</h2>
          </div>

          {shoppingCartObjects.map((item, index) => {
            counter = item.count + counter
            return (
              <div className="movie-list" key={index}>
                <div className='movie-title'>
                  <p>{item.product.name}</p>
                </div>
                <div className='selected-container'>
                  <div className="img-movie">
                    <img src={`${imagePath}/w500/${item.product.poster}`} alt="" />
                  </div>
                  <div className='counter'>
                    <p>Item: {item.count}</p>
                  </div>
                  <div className='items'>
                    <button onClick={() => { IncreaseOne(index) }} className='addCount'>+</button>

                    <button onClick={() => { DecreaseOne(index) }} className='deleteCount'>-</button>

                    <button onClick={() => { DeleteMovie(index) }} className='deleteMovie'>X</button>
                  </div>

                  <div className='total'>
                    <span className='total_price'>{item.count * 20}$</span>
                  </div>
                </div>
              </div>
            );

          })}

          <div className='subTotal'>
            <span className='totalText'>Total Amount: </span>
            <span className='totalAll'>{counter * 20}USD</span>
          </div>

          <h3 className='customer-information'>Customer information</h3>

          <div className='input-2'>
            <div>
              <span>Name: </span>
              <input type="text" />
              <span>Surename: </span>
              <input type="text" />
            </div>
            <div>
              <span>Adress: </span>
              <input type="text" />
              <span>Zip Code: </span>
              <input type="text" />
            </div>

            <div>
              <span>City: </span>
              <input type="text" />
              <span>Country: </span>
              <input type="text" />
            </div>
            <div>
              <span>Phone: </span>
              <input type="text" />
              <span>Email: </span>
              <input type="text" />
            </div>
          </div>

          <div className='creditcard'>
            <img className="img3" src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png`} alt="" />
            <img className="img3" src={`https://cdn2.downdetector.com/static/uploads/logo/mastercard.jpg`} alt="" />
            <img className="img3" src={`https://logowik.com/content/uploads/images/amex-card1708.jpg`} alt="" />
            <img className="img3" src={`https://www.retailbankerinternational.com/wp-content/uploads/sites/2/2020/02/JCBI.png`} alt="" />
            <img className="img3" src={`https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png`} alt="" />
          </div>

          <div className='creditcard-inputs'>
            <div>
              <span>Creditcard: </span>
              <input type="text" />
              <span>Expire date: </span>
              <input type="text" />
            </div>
            <div>
              <span>Name on card: </span>
              <input type="text" />
              <span>CCV: </span>
              <input type="text" />
            </div>
          </div>

          <div className="actions">
            <Link to="/thankyou">
              <button id="pay">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

}


export default Checkout;
