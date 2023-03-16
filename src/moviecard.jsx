import React from 'react';
import './App.css';

const MovieCard = ({movie}) => {
return (
    <div ClassName = "movie" > 
    <div>
      <p>{movie.Year}</p>
    </div>
    <div>
      <img src = { movie.Poster !== 'N/A'? movie.Poster : 'https://viaplaceholder.com/400'} alt = {movie.Title}/>
    </div>
    <div>
      <span>{movie.Type}</span>
    </div>
    <div>
      <h1>{movie.Title}</h1>
    </div>
  </div>
)

}

export default MovieCard