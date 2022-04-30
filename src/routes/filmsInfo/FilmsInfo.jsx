import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Navbar from './components/navbarFilmsInfo/Navbar';
import { STATUS } from '../../features/filmList';
import '../filmsInfo/FilmsInfo.css';

const FilmsInfo = () => {

  const listObject = useSelector(state => state.filmList);

  const list = listObject.list;

  let moviePrice = 16.19;

  //ID working
  const params = useParams();
  const imagePath = 'https://image.tmdb.org/t/p/';

  const movieSelected = list.find(movie => movie.id == params.id)
  console.log(movieSelected)
  //

  return (
    <div className='component-films'>
      <section className='selected-movie-container'>
        <div className='card'>
          <div className='movie-title'>
            <h1>{movieSelected.original_title}</h1>
          </div>
          <div className='selected-image-movie'>
            <img src={`${imagePath}/w500/${movieSelected.poster_path}`} alt="" />
          </div>
          <div className='movie-release'>
            <h3>Release date : {movieSelected.release_date}</h3>
          </div>
          <div className='movie-lamguage'>
            <h4>Orignal language : {movieSelected.original_language}</h4>
          </div>
          <div className='movie-item'>
            <p>Item #: {movieSelected.id}</p>
          </div>
          <div className='movie-price'>
            <p>{moviePrice}$</p>
          </div>
          <div className='vote-average'>
            <p>Vote average : {movieSelected.vote_average}</p>
          </div>
          <div className='total-vote'>
            <p>Total votes : {movieSelected.vote_count}</p>
          </div>
          <div className='movie-overview'>
            <p>{movieSelected.overview}</p>
          </div>

          <div className='movie-buttons'>
            <Link to="/">
              <button className='home-button'>
                Home
              </button>
            </Link>
            <button className='buy-button'>
              Add to cart
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default FilmsInfo;
