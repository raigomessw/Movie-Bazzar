import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import FilmsInfo from './routes/filmsInfo/FilmsInfo'
import Checkout from './routes/filmsInfo/Checkout';
import Thankyou from './routes/filmsInfo/Thankyou';



function App() {

  return (
    <main>
        <Routes >
          <Route exact path="/"element={< Home />}/>
          <Route path="/filmsInfo/:id" element={<FilmsInfo/>}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/thankyou" element={<Thankyou />}/>
        </Routes >
      </main>
    );
}
export default App;
