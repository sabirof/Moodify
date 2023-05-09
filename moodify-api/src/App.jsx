import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function App() {
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '4909c193bcb0b13deddde40b3469602f';
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      let url = `${API_URL}/discover/movie?api_key=${API_KEY}`;
      if (searchQuery) {
        url += `&query=${searchQuery}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))
  );

  return (
    <div className='App'>
      <h1>Moodify App</h1>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          className='search-bar'
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <div className='container'>{renderMovies()}</div>
    </div>
  );
}

export default App;
