import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./navBarFilms/NavbarFilmInfo";
import "../filmsInfo/FilmsInfo.css";
import { actions } from "../../features/shoppingCart";

const FilmsInfo = () => {
  const dispatch = useDispatch();
  const listObject = useSelector((state) => state.filmList);
  const list = listObject.list;

  let comments = [
    {
      text: "Not bad, I liked the old ones betterrrrrrrrrrrrrrrrrrrrrrr",
      name: "John",
      icon: "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png",
    },
    {
      text: "Loved it!",
      name: "Sara",
      icon: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woman.png",
    },
    {
      text: "Not bad, I liked the old ones better",
      name: "John",
      icon: "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png",
    },
    {
      text: "Not bad, I liked the old ones better",
      name: "John",
      icon: "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png",
    },
    {
      text: "Not bad, I liked the old ones better",
      name: "John",
      icon: "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png",
    },
    {
      text: "Not bad, I liked the old ones better",
      name: "John",
      icon: "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face.png",
    },
  ];

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

        <comment className="movie-comentars">
          <div className="">
            <div className="">
              <h2> Comments</h2>
              <div className="test">
                {comments.map((member, index) => {
                  return (
                    <div className="comments-container">
                      <div className="">
                        <img className="img4" src={member.icon} alt="" />
                        <label className="labels1">{member.name} : </label>
                        <label className="labels2"> {member.text} </label>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="constainer_imputs">
                <div className="inputs">
                 <input className="inputC"></input>
                </div>
                <button> Leave a comment</button>
              </div>
            </div>
          </div>
        </comment>
      </div>
      //movie-body ends
    </div>
  );
};

export default FilmsInfo;
