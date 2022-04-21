import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
