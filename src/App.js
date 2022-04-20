import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';


function App() {






    return ( <
        main >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > }
        /> < /
        Routes > <
        /main>
    );
}
export default App;
