import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function App() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '4909c193bcb0b13deddde40b3469602f';
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async () => {
    try {
      let url;
      if (searchQuery) {
        url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}`;
      } else {
        url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, searchQuery]);

  useEffect(() => {
    // Only fetch movies when currentPage or searchQuery changes
    fetchMovies();
  }, [currentPage, searchQuery]);

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        popularity={movie.popularity}
      />
    ))
  );

  return (
    <div className='App'>
      <a href="/http://127.0.0.1:5173/" className="homepage-link">
        
        <h1>Moodify App</h1>
        <div className="navbar">
  
  <ul className="navbar-nav">
    <li className="nav-item"><a href="/movies" className="nav-link">Movies</a></li>
    <li className="nav-item"><a href="/genres" className="nav-link">Genres</a></li>
    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
  </ul>
</div>

      </a>
      <form onSubmit={handleSearchSubmit} className="search-form">
  <input
    className='search-bar'
    type="text"
    value={searchQuery}
    onChange={handleSearchChange}
    placeholder="Search movies..."
  />
  <button type="submit" className="search-button">Search</button>
</form>
      {movies.length > 0 ? (
        <div className='container'>{renderMovies()}</div>
      ) : (
        <p>No movies found.</p>
      )}
      <div className='btn-container'>
        {currentPage > 1 && (
          <button className='prev-btn' onClick={handlePrevPage}>Previous Page</button>
        )}
        {currentPage < totalPages && (
          <button className='next-btn' onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </div>
  );
}

export default App;
