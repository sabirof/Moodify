import React from 'react';

function MovieCard({ movie }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const imdbStyleScore = movie.vote_average.toFixed(2); // Replace popularity with vote_average

  return (
    <div className='movie-card'>
      {movie.poster_path && <img className='movie-cover' src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
     
      <h5 className='movie-title'>{movie.title}</h5>
      
      <div className='imdb-score'>
        <span className='score'>{imdbStyleScore}</span>
        <span className='star'>★</span>
      </div>
    </div>
  );
}

export default MovieCard;
