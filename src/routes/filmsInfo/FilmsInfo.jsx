import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import Navbar from './components/navbarFilmsInfo/Navbar';
import { STATUS } from '../../features/filmList';

 const FilmsInfo = () => {

   const listObject = useSelector(state => state.filmList);
   
   const list = listObject.list;

   //ID working
   const params = useParams();
   const imagePath = 'https://image.tmdb.org/t/p/';
   
   const movieSelected = list.find(movie => movie.id == params.id)
   console.log(movieSelected)
   //

  return (
     <div className='movie-container'>
        <Navbar/>
        <h1>{movieSelected.original_title}</h1>
         <div className='image-container'>
         <img src={`${imagePath}/w500/${movieSelected.poster_path}`} alt="" />
         </div>
         <h3 className='movie-release'>Release date : {movieSelected.release_date}</h3>
         <h4 className='movie-language'>Orignal language : {movieSelected.original_language}</h4>
         <p>Vote average : {movieSelected.vote_average}</p>
         <p>Total votes : {movieSelected.vote_count}</p>

        
        <br />
        <p>{movieSelected.overview}</p>

      <div className='movie-buttons'>
      <Link to="/">
            <button className='home-button'>
               Home
            </button>
            </Link>
             <button className='buy-button'>
               Buy              
             </button>
      </div>  

      </div>
  )
}

export default FilmsInfo;
