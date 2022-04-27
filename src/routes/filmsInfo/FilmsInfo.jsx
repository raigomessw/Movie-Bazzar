import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from './components/navbarFilmsInfo/Navbar';

 const FilmsInfo = () => {
  return (
  <Link to="/">
    <div>
       <Navbar/>
    </div>
 </Link>
  )
}

export default FilmsInfo;
