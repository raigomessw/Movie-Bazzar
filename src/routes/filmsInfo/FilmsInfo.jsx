import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Navbar from './components/navbarFilmsInfo/Navbar';
import { STATUS } from '../../features/filmList';
import '../filmsInfo/FilmsInfo.css';

const FilmsInfo = () => {

  const listObject = useSelector(state => state.filmList);
  const list = listObject.list;
  // Function : price is determined by number of puchaches
  let moviePrice = 16.19;
  const params = useParams();
  const imagePath = 'https://image.tmdb.org/t/p/';
  const movieSelected = list.find(movie => movie.id == params.id)
  //console.log(movieSelected)


  return (
    <div className='movie-body'>
          <div className='movie-container'>
            <div className='card'>
              <div className='movie-info-container'>
                <div className='top'>
                  <div className='img-1'>
                    <img src={`${imagePath}/w500/${movieSelected.poster_path}`} alt=""/>
                  </div>
                  <div className='general-info'>
                    <h2>{movieSelected.title}</h2>
                    <div>
                      <span>Language:</span>
                      <span className='movie-language'>{movieSelected.original_language}</span>
                    </div>
                    <div>
                      <span>Rating:</span>
                      <span>{movieSelected.vote_average}</span>
                    </div>
                    <div>
                      <span>Popularity:</span>
                      <span>{movieSelected.popularity}</span>
                    </div>
                    <div>
                      <span>Movie#</span>
                      <span>{movieSelected.id}</span>
                    </div>
                    <div>
                      <span>Release date:</span>
                      <span>{movieSelected.release_date}</span>
                    </div>
                    <div>
                      <span>Price:</span>
                      <span>{moviePrice}$</span>
                    </div>
                    <div className='movie-buttons'>
                      <button className='buy'>Add to cart</button>
                      <button className='wish'>Add to wishlist</button>
                    </div>
                  </div>
                </div>
                <div className='movie-info'>
                    <p>
                    {movieSelected.overview}
                    </p>
                </div>
              </div>
              <div className='img-2'>
                <img src={`${imagePath}/w500/${movieSelected.backdrop_path}`} alt="" />
                </div>
            </div>
          </div>
    </div> //movie-body ends

  )
}

export default FilmsInfo;
