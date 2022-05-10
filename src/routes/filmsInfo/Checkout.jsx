import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { actions } from '../../features/shoppingCart';
import '../filmsInfo/checkout.css';


const Checkout = () => {

 
  const listObject = useSelector(state => state.filmList);
  const movieList = listObject.list;
  const imagePath = 'https://image.tmdb.org/t/p/';

  const price = 16.90

  const shoppingCartObjects = useSelector(state => state.shoppingCart);

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="checkout-information">
          <h1 className="title">Checkout</h1>
          <div>
            <h2 className='order'>Order</h2>
          </div>

          {shoppingCartObjects.map((item, index) => {
            return (
              <div className="movie-list">
                <p>{item.product.name}</p>
                <div>
                  <div className="img-movie">
                    <img src={`${imagePath}/w500/${item.product.poster}`} alt="" />
                  </div>
                  <div className='items'>
                    <button className='addCount'>+</button>
                    <p>Item: {item.count}</p>
                    <button className='deleteCount'>-</button>
                  </div>
                  <span>{item.product.price} $</span>
                </div>
              </div>
            );

          })}

          <div className='total'>
            <span>Total price: {price}$</span>
          </div>

          <h3 className='customer-information'>Customer information</h3>

          <div className="inputs">
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
              <input type="number" />
            </div>
            <div>
              <span>City: </span>
              <input type="text" />
              <span>Country: </span>
              <input type="text" />
            </div>
            <div>
              <span>Phone: </span>
              <input type="number" />
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
              <input type="number" />
              <span>Expire date: </span>
              <input type="text" />
            </div>
            <div>
              <span>Name on card: </span>
              <input type="text" />
              <span>CCV: </span>
              <input type="number" />
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
