import React from 'react'

function MovieCard ({movie}) {
    const imgPath = "https://image.tmdb.org/t/p/original"
    console.log(movie);
  return (
    <div className='movie-card'>
        {movie.poster_path ? <img className='movie-cover' src={`${imgPath}${movie.poster_path}`}/>
        : null}
    <h5 className='movie-title'>{movie.title}</h5>
  </div>
  )
}

export default MovieCard