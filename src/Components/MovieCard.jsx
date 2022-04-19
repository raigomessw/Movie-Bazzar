import react from 'react';
import React, {useState, useEffect} from 'react';
import './movies.css'

const MovieCard = ({ movie}) => {

   
    return (
        <div >
        
            <div className="dogInfo">
           
            <img className="profpic" src={movie.img}
                alt={"The dog"}
                width="60vw"
                height="60vw">
            </img>
        
        
            
               
           
            </div>

        </div>
    );
}

export default MovieCard;