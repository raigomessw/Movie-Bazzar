import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
import './movies.css'

const Movies = ({ movieData, setEachMovie}) => {
  
  
    return (
        <div className="cardContainer">

                <div >
                    {movieData && movieData.map((member) => {
                        
                        return (
                            <div  onClick={() => {setEachMovie(member)}}>
                                <Link to="/individualMovie">
                                <MovieCard movie ={member} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}

export default Movies;