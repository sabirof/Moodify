import React from 'react';

function MovieCard({ movie }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const imdbStyleScore = movie.popularity.toFixed(2);

  return (
    <div className='movie-card'>
      {movie.poster_path && <img className='movie-cover' src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
      <div className='popularity-overlay'>
        <div className='popularity-score'>
          <span className='score'>{imdbStyleScore}</span>
          <span className='star'>★</span>
        </div>
      </div>
      <h5 className='movie-title'>{movie.title}</h5>
     
    </div>
  );
}

export default MovieCard;
