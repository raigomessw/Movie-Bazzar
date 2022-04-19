import react, { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './Components/Movies';
import IndividualMovie from './Components/IndividualMovie';

function App() {
 

  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
      'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '1c0e638801mshc7a95966d63e352p1e9a1ejsnc17b15d45de2'
    }
  };
  const [movieData, setMovieData] = useState(null);
  const [eachMovie, setEachMovie] = useState(null);
  
  const fetchData = async () => {
  fetch('https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino', options)
    .then(response => response.json())
    .then((data) => {

      setMovieData(data);

    })
}
 


  return (
    <div className="App">
      <header className="App-header">
        <main >
          <Router>



            <Routes>

              <Route exact path="/" element={
                <Welcome fetchData={() => fetchData()} />} />


              <Route path="/movies" element={
                <Movies movieData={movieData} setEachMovie={setEachMovie} />} />


              <Route path="/individualMovie" element={
                <IndividualMovie film={eachMovie} />} />



            </Routes>
          </Router>

        </main>

      </header>


    </div>
  );


}


export default App;