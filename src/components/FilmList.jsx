import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/filmList";
import {Link } from "react-router-dom";
import './FilmListStyles.css';

const FilmList = () => {
  const listObject = useSelector(state => state.filmList);
  const status = listObject.status;
  const list = listObject.list;
  const apipath = 'https://image.tmdb.org/t/p/';

  const dispatch = useDispatch();
   let content = null;

   if (status === STATUS.NORMAL) {
    content = 'Redo for lite films!';

   }else if (status === STATUS.FETCHING){
    content = 'Väntar på films...';

  }else if (status === STATUS.SUCCESS) {
    content = list.map((films) => {
      return(
        <Link key={films.original_title} to={`/filmsinfo/${films.original_title}`}>
          <div className="movie-app">
          <div className='image-container d-flex justify-content-start m-3'>
           <img src={`${apipath}/w200/${films.poster_path}`}alt={films.title}/>
          </div>
           {/*<div className="movie-title">
             <h3>{films.title}</h3>
             </div> title blir konstig*/}
          </div>
         </Link>
      )
    });


  }else {
    content = "Kunde inte hämta fakta";
  }

    useEffect(() => {
      fetchList(dispatch);

    }, [dispatch])

  return(
      <div className='wrapper'>
        <div className='media-scroller container-fluid row'>
         {content}
        </div>
      </div>


  )

}

async function fetchList(dispatch) {

  dispatch(actions.isFetching());



 //const url = 'https://imdb-api.com/en/API/Top250Movies/k_09fl5jeb'; API begränsat till 100 portar per dag.
 // const url = 'https://api.themoviedb.org/3/movie/popular?api_key=298722d66314704d61c48e8fe9330363';
 const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=298722d66314704d61c48e8fe9330363';
 try {
   let response = await fetch(url)
   let json = await response.json();
   let list = json.results;
   console.log('Got lista:',list)
   dispatch(actions.success(list))


  }catch{
    dispatch(actions.failure())
  }


}

export default FilmList;

