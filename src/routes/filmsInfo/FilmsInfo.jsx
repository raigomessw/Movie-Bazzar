import React from 'react'
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./navBarFilms/NavbarFilmInfo";
import "../filmsInfo/FilmsInfo.css";
import { actions } from "../../features/shoppingCart";
import Comments from "./Comments";

const FilmsInfo = () => {

  const dispatch = useDispatch();
  //const nav = useNavigate()
  const listObject = useSelector((state) => state.filmList);
  const list = listObject.list;

  const params = useParams();
  const imagePath = "https://image.tmdb.org/t/p/";
  const movieSelected = list.find((movie) => movie.id == params.id);

  let movieTitle = (movieSelected.title)
  let movieImg = (movieSelected.poster_path)
  let moviePrice = 20;

  // if(!movieTitle) {
  //   nav("/error");
  // }

  const movieToAdd = {
    name: movieTitle,
    price: moviePrice,
    poster: movieImg
  }

  const AddShoppingCart = () => {
    dispatch(actions.addToCart(movieToAdd));
  }

  return (
    <div>
      <Navbar />
      <div className="movie-body">
        <div className="movie-container">
          <div className="card">
            <div className="movie-info-container">
              <div className="top">
                <div className="img-1">
                  <img src={`${imagePath}/w500/${movieSelected.poster_path}`} alt="" />
                </div>
                <div className="general-info">
                  <div className="title_movie">
                    <h2>{movieSelected.title}</h2>
                  </div>
                  <div className="language">
                    <span>Language:</span>
                    <span className="movie-language">
                      {movieSelected.original_language}
                    </span>
                  </div>
                  <div className="rating">
                    <span>Rating:</span>
                    <span>{movieSelected.vote_average}</span>
                  </div>
                  <div className="polularity">
                    <span>Popularity:</span>
                    <span>{movieSelected.popularity}</span>
                  </div>
                  <div className="movie_id">
                    <span>Movie#</span>
                    <span>{movieSelected.id}</span>
                  </div>
                  <div className="movie_date">
                    <span>Release date:</span>
                    <span>{movieSelected.release_date}</span>
                  </div>
                  <div className="movie_price">
                    <span>Price:</span>
                    <span>{moviePrice}$</span>
                  </div>
                  <div className="movie-buttons">
                    <button onClick={AddShoppingCart} className="buy">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="movie-info">
                <p>{movieSelected.overview}</p>
              </div>
            </div>
            <div className="img-2">
              <img
                src={`${imagePath}/w500/${movieSelected.backdrop_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <Comments film={movieSelected} />
      </div>
    </div>
  );
};

export default FilmsInfo;
