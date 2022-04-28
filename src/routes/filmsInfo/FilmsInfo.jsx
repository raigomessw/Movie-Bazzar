import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import Navbar from './components/navbarFilmsInfo/Navbar';
import { STATUS } from '../../features/filmList';

 const FilmsInfo = () => {

   const listObject = useSelector(state => state.filmList);
   const status = listObject.status;
   const list = listObject.list;

   //ID working
   const params = useParams();
   console.log(params);
   
   list.map(movie => {
      console.log(movie.id);
   });
   



   let movieContent = null;
   let selectedMovie = null;
   //const dispatch = useDispatch()


   if (status === STATUS.FETCHING) {
      movieContent = 'Loading...';
   } else if (status === STATUS.SUCCESS) {
      movieContent = "Det funkar";
   } else {
      movieContent = "Failure";
   }


   
  return (
     <div>
      <Link to="/">
         <div>
            <Navbar/>
         </div>
      </Link>
      <div className='movie-content'>
         <div className='syanpsis'>
             <p>Hejsan</p>
         </div>
      </div>
   </div>
  )
}

export default FilmsInfo;
