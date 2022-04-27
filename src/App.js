import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';


function App() {

  return (
    <main>
      <Routes >
        <Route exact path="/"element={< Home />}/>
      </Routes >
      </main>
    );
}
export default App;
