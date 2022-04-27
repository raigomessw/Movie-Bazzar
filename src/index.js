import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

//Redux
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './features/rootreducer';
import { Provider } from 'react-redux';


const store = configureStore({
    reducer: rootReducer
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < HashRouter >
     <Provider store={store}>
       <App />
     </Provider>
    </HashRouter>
);