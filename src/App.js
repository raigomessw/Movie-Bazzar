import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import FilmsInfo from './routes/filmsInfo/FilmsInfo'


function App() {

  return (
    <main>
      
        <Routes >

          <Route exact path="/"element={< Home />}/>

          <Route path="/filmsInfo/:id" element={<FilmsInfo/>}/>

        </Routes >
    
      </main>
    );
}
export default App;
