import React, { useState } from 'react';

function MovieCard({ movie }) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const imdbStyleScore = movie.vote_average.toFixed(2);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='movie-card' onClick={openModal}>
        {movie.poster_path && <img className='movie-cover' src={`${imgPath}${movie.poster_path}`} alt={movie.title} />}
        <h5 className='movie-title'>{movie.title}</h5>
        <div className='imdb-score'>
          <span className='score'>{imdbStyleScore}</span>
          <span className='star'>★</span>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <div className='modal-header'>
              <h2>{movie.title}</h2>
              <button className='close-btn' onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} className='movie-cover' />
              <p>Release Date: {movie.release_date}</p>
              <p>Overview: {movie.overview}</p>
              <p>Original Language: {movie.original_language}</p>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
