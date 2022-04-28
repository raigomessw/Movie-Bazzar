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
        <Link key={films.original_title} to={`/filmsinfo/${films.original_title}` }>
          <div className="movie-app">
          <div className='image-container d-flex justify-content-start m-3'>
           <img src={`${apipath}/w200/${films.poster_path}`}alt={films.title}/>
          </div>

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
    <div className="category-container">
      <div className="category">
            <button  onClick={() => fetchList(dispatch , 28, 1)} >Action</button>

            <button  onClick={() => fetchList(dispatch , 35 , 1)}>Comdey</button>

           <button onClick={() => fetchList(dispatch , 18 , 1)}>Drama</button>

           <button onClick={() => fetchList(dispatch , 14 ,1 )}>Fantasy</button>

           <button onClick={() => fetchList(dispatch , 27 , 1)}>Horror</button>

           <button onClick={() => fetchList(dispatch , 10749 , 1)}>Romance</button>

           <button onClick={() => fetchList(dispatch , 9648 , 1)}>Mystery</button>

           <button onClick={() => fetchList(dispatch , 53 , 1)}>Thriller</button>

           <button onClick={() => fetchList(dispatch , 12 , 1)}>Adventure</button>
         </div>
       <div className='wrapper'>
          <div className='media-scroller container-fluid row'>
         {content}
          </div>
         </div>
    </div>


  )

}

async function fetchList(dispatch , gen )  {

  dispatch(actions.isFetching());



 //const url = 'https://imdb-api.com/en/API/Top250Movies/k_09fl5jeb'; API begränsat till 100 portar per dag.
 // const url = 'https://api.themoviedb.org/3/movie/popular?api_key=298722d66314704d61c48e8fe9330363';
 const url = `https://api.themoviedb.org/3/discover/movie?api_key=298722d66314704d61c48e8fe9330363&with_genres=${gen}`;



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

