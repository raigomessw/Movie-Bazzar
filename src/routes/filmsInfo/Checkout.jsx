import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import '../filmsInfo/checkout.css';



const Checkout = () => {

  //These are only test samples too see how they would display
  const listObject = useSelector(state => state.filmList);
  const movieList = listObject.list;
  const imagePath = 'https://image.tmdb.org/t/p/';

  const price = 16.90

  const shoppingCartObjects = useSelector(state => state.shoppingCart);

  const movieOne = movieList[0];
  const movieTwo = movieList[1];
  const movieThree = movieList[2];

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <div className="checkout-information">
          <h1 className="title">Checkout</h1>
          <div>
            <h2 className='order'>Order</h2>
          </div>


          <div className="movie-list">

            <p>{movieOne.title}</p>
            <div>
              <div className="img-movie">
                <img src={`${imagePath}/w500/${movieOne.poster_path}`} alt="" />
              </div>
              <div className='items'>
                <button>+</button>
                <p>Quantatiy : 1</p>
                <button>-</button>
                <span>{price} $</span>
              </div>
            </div>

            <p>{movieTwo.title}</p>
            <div>
              <div className="img-movie">
                <img src={`${imagePath}/w500/${movieTwo.poster_path}`} alt="" />
              </div>
              <div className='items'>
                <button>+</button>
                <p>Quantatiy : 1</p>
                <button>-</button>
                <span>{price} $</span>
              </div>
            </div>

            <p>{movieThree.title}</p>
            <div>
              <div className="img-movie">
                <img src={`${imagePath}/w500/${movieThree.poster_path}`} alt="" />
              </div>
              <div className='items'>
                <button>+</button>
                <p>Quantatiy : 1</p>
                <button>-</button>
                <span>{price} $</span>
              </div>
            </div>

          </div>

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
