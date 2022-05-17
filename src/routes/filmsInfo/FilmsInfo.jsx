import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./navBarFilms/NavbarFilmInfo";
import "../filmsInfo/FilmsInfo.css";
import { actions } from "../../features/shoppingCart";
import { getAuth, signInAnonymously } from 'firebase/compat/app';
import { app } from 'firebase/compat/app';
import Comments from "./Comments";

const FilmsInfo = () => {



  const dispatch = useDispatch();
  const listObject = useSelector((state) => state.filmList);
  const list = listObject.list;

  const params = useParams();
  const imagePath = "https://image.tmdb.org/t/p/";
  const movieSelected = list.find((movie) => movie.id == params.id);

 // const shoppingCartObjects = useSelector(state => state.shoppingCart);

  let movieTitle = (movieSelected.title)
  const movieImg = (movieSelected.poster_path)
  let moviePrice = 16.19;

  const movieToAdd = {

      name: movieTitle,
      price: moviePrice,
      poster: movieImg
  }


  const AddShoppingCart = () => {
    //const dispatch = useDispatch()

    console.log("adds to the basket" , movieToAdd)
    dispatch(actions.addToCart(movieToAdd));
  }


  // useEffect(() => {
  //   getData();
  // },[]);

  //   const getData = async () => {
  //       console.log("apiData: ", movieSelected);

  //         if(localStorage.getItem("savedApiData") === null) {
  //           // localStorage.setItem("savedApiData", JSON.stringify([]));

  //           const response = await fetch(
  //            `https://api.themoviedb.org/3/discover/movie?api_key=298722d66314704d61c48e8fe9330363&with_genres`
  //           );
  //           const movieSelected = await response.json();
  //           movieSelected(movieSelected);
  //           localStorage.setItem("savedApiData", JSON.stringify(movieSelected));
  //           console.log("saved apidata: ", movieSelected);

  //         } else {
  //           let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));
  //           movieSelected(apiDataLocal);
  //           console.log("local Saved apiData: ", apiDataLocal);
  //         }
  //       };


  return (
    <div>
      <Navbar />
      <div className="movie-body">
        <div className="movie-container">
          <div className="card">
            <div className="movie-info-container">
              <div className="top">
                <div className="img-1">
                  <img
                    src={`${imagePath}/w500/${movieSelected.poster_path}`}
                    alt=""
                  />
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
          <Comments film={movieSelected}/>
      </div>
      //movie-body ends
    </div>
  );
};

export default FilmsInfo;
