import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home';


function App() {

  // The use of API from TMDB //

// Info about the API : https://www.themoviedb.org/documentation/api
// Examples with the API key: https://www.themoviedb.org/documentation/api/discover



/*const url = 'https://api.themoviedb.org/3'
const apiKey = 'api_key=25dcea31f980ad3c4032d87bbaa6778a'

// Show top popular movies. Useful form home
const popularMoviesHome = '/discover/movie?sort_by=popularity.desc&'

// Search throught API
const searchMovie = '/search/movie?'*/

  return (
    <main>
      <Routes >
        <Route exact path="/"element={< Home />}/>
      </Routes >
      </main>
    );
}
export default App;
