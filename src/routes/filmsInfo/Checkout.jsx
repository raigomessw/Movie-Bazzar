import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { actions } from '../../features/shoppingCart';
import '../filmsInfo/checkout.css';

import { toast } from "react-toastify";




const Checkout = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    toast.error(`${movieTitle} has been deleted`, { position: "bottom-center" });
    dispatch(actions.removeFromCart(movieToDelete))
  }

  const initialValues =
  {
    name: "", surename: "",
    adress: "", zipcode: "",
    city: "", country: "", phone: "", email: "", creditcard: "", expDate: "", cardName: "", ccv: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (shoppingCartObjects) {
        navigate("/thankyou");
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.surename) {
      errors.surename = "Surename is required!";
    }
    if (!values.adress) {
      errors.adress = "Adress is required!";
    }
    if (!values.zipcode) {
      errors.zipcode = "Zip-code is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    /* For presentation */

    //  else if (!regex.test(values.email)) {
    //   errors.email = "Error email format!"
    // }
    if (!values.creditcard) {
      errors.creditcard = "Card is required!";
    }

    /* For presentation */

    // else if(values.creditcard.length < 8) {
    //   errors.creditcard = "Invalid card"
    // } else if(values.creditcard.length > 8) {
    //   errors.creditcard = "Must be 8 digit"
    // }

    if (!values.expDate) {
      errors.expDate = "Date is required!";
    }
    if (!values.cardName) {
      errors.cardName = "Name is required!";
    }
    if (!values.ccv) {
      errors.ccv = "CCV is required!";
    }

    /* For presentation */

    // else if (values.ccv.length < 3) {
    //   errors.ccv = "Invalid CCV"
    // } else if(values.ccv.length > 3) {
    //   errors.ccv = "Can't exceed more than 3 digit"
    // }
    return errors;
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

          <form onSubmit={handleSubmit}>
            <div className='input-2'>
              <div>
                <span>Name: </span>
                <input type="text" name='name' value={formValues.name} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.name}</p>
                </div>
                <span>Surename: </span>
                <input type="text" name='surename' value={formValues.surename} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.surename}</p>
                </div>
              </div>
              <div>
                <span>Adress: </span>
                <input type="text" name='adress' value={formValues.adress} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.adress}</p>
                </div>
                <span>Zip Code: </span>
                <input type="text" name='zipcode' value={formValues.zipcode} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.zipcode}</p>
                </div>
              </div>
              <div>
                <span>City: </span>
                <input type="text" name='city' value={formValues.city} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.city}</p>
                </div>
                <span>Country: </span>
                <input type="text" name='country' value={formValues.country} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.country}</p>
                </div>
              </div>
              <div>
                <span>Phone: </span>
                <input type="text" name='phone' value={formValues.phone} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.phone}</p>
                </div>
                <span>Email: </span>
                <input type="text" name='email' value={formValues.email} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.email}</p>
                </div>
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
                <input type="text" name='creditcard' value={formValues.creditcard} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.creditcard}</p>
                </div>
                <span>Expire date: </span>
                <input type="text" name='expDate' value={formValues.expDate} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.expDate}</p>
                </div>
              </div>
              <div>
                <span>Name on card: </span>
                <input type="text" name='cardName' value={formValues.cardName} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.cardName}</p>
                </div>
                <span>CCV: </span>
                <input type="text" name='ccv' value={formValues.ccv} onChange={handleChange} />
                <div className='err-div'>
                  <p className='err-msg'>{formErrors.ccv}</p>
                </div>
              </div>
            </div>

            <div className="actions">
              {/* <Link to="/thankyou"> */}
              <button id="pay">
                Pay
              </button>
              {/* </Link> */}
            </div>
          </form> {/*  change to form end */}
        </div>
      </div>
    </div>
  );

}


export default Checkout;
