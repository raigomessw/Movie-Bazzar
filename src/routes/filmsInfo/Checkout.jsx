import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import '../filmsInfo/checkout.css';
import { actions } from '../../features/shoppingCart';
import { reducer as shopReducer } from '../../features/shoppingCart';
import { useEffect } from 'react';


const Checkout = () => {
  const dispatch = useDispatch();


 const shoppingCartObjects = useSelector(state => state.shoppingCart);
 //const [currentFilm, setCurrentFilm ] = useState(null);

  const  DeleteMovie = (index) => {
    let movieTitle = ( shoppingCartObjects[index].product.name);
    let moviePrice = ( shoppingCartObjects[index].product.price);
    const movieToDelete = {
     name: movieTitle,
     price: moviePrice
   }
   dispatch(actions.removeFromCart(movieToDelete))
}

const  IncreaseOne = (index) => {
  let movieTitle = ( shoppingCartObjects[index].product.name);
  let moviePrice = ( shoppingCartObjects[index].product.price);
  const movieToDelete = {
   name: movieTitle,
   price: moviePrice
 }
 dispatch(actions.increaseAmount(movieToDelete))
}

const  DecreaseOne = (index) => {
  let movieTitle = ( shoppingCartObjects[index].product.name);
  let moviePrice = ( shoppingCartObjects[index].product.price);
  const movieToDelete = {
   name: movieTitle,
   price: moviePrice

 }
  if (shoppingCartObjects[index].count == 1 ){
    dispatch(actions.removeFromCart(movieToDelete))
  } else
 dispatch(actions.decreaseAmount(movieToDelete))
}


const billing =  shoppingCartObjects.map((item, index) => (


  <div className='card2' key={index}>


     <label  className='labels'>{item.product.name}  </label>

     <label className='labels'>   Price: {item.product.price} USD    </label>

     <label className='labels'>  Nr: {item.count}  </label>


     <button  onClick={()=> {   IncreaseOne(index) }} className='wish' > +1 </button>

     <button  onClick={()=> {   DecreaseOne(index) }} className='wish' > -1 </button>

     <button  onClick={()=> {   DeleteMovie(index) }} className='wish' >Remove Movie</button>

    </div>



))


  return (
    <div className='movie-body'>

    <div className='movie-container'>

    <div className='card1'>


    <div >
      <h2>Payment Details</h2>
      <br/>   <br/>


        <div>
             {billing}

<br/>
<label  className="labels2" >Total Amount:  50.00 USD </label>
<br/>  <br/>
</div>
              <div >

             <div className='labels3'>
    <label className="labels" >First Name:</label>
    <input className="inputF" id="firstname" name="firstname" type="text" required minlength="3" maxlength="15">
        </input>

    <label  className="labels">Last Name:</label>
    <input className="inputF" id="lastname" name="lastname" type="text" required minlength="3" maxlength="15">
        </input>
        </div>

    <br/>

    <div className='labels3'>
    <label className="labels" >Address:</label>
    <input className="inputF"></input>
    <label className="labels" >Zip Code</label>
    <input className="inputF" id="zipcode" name="zipcode" type="number" required minlength="5" maxlength="6">
        </input>

              </div>

              <br />
              <div className="labels3">
                <label className="labels">City:</label>
                <input className="inputF"></input>
                <label className="labels">Country:</label>
                <input className="inputF"></input>
              </div>

              <br />
              <div className="labels3">
                <label className="labels">Phone:</label>
                <input className="inputF"></input>
                <label className="labels">Email:</label>
                <input className="inputF"></input>
              </div>

              <br />
              <br />
              <div>
                <img
                  className="img3"
                  src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png`}
                  alt=""
                />
                <img
                  className="img3"
                  src={`https://cdn2.downdetector.com/static/uploads/logo/mastercard.jpg`}
                  alt=""
                />
                <img
                  className="img3"
                  src={`https://logowik.com/content/uploads/images/amex-card1708.jpg`}
                  alt=""
                />
                <img
                  className="img3"
                  src={`https://www.retailbankerinternational.com/wp-content/uploads/sites/2/2020/02/JCBI.png`}
                  alt=""
                />
                <img
                  className="img3"
                  src={`https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png`}
                  alt=""
                />
              </div>
              <br />
              <br />
              <div className="labels3">
                <label className="labels">Credit Card:</label>
                <input className="inputF"></input>
                <label className="labels">Expiry date:</label>
                <input className="inputF"></input>
              </div>
              <br />

              <div className="labels3">
                <label className="labels">Name on card:</label>
                <input className="inputF"></input>
                <label className="labels">CCV:</label>
                <input className="inputF"></input>
              </div>
              <br />
              <br />

              <br />
              <br />

              <br />
              <br />
              <Link to="/thankyou">
                <button className="wish">Submit your payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
