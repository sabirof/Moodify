import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import Filters from '../Filters';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Homepage() {
  const { user } = useContext(AuthContext);
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '4909c193bcb0b13deddde40b3469602f';
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genreFilter, setGenreFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [popularityFilter, setPopularityFilter] = useState('');

  console.log('homepage');

  const fetchMovies = async () => {
    try {
      let url;
      if (searchQuery) {
        url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}`;
      } else {
        url = `${API_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}`;

        // Apply filters
        const filterParams = [];
        if (genreFilter) {
          filterParams.push(`with_genres=${genreFilter}`);
        }
        if (yearFilter) {
          filterParams.push(`year=${yearFilter}`);
        }
        if (popularityFilter) {
          filterParams.push(`vote_average.gte=${popularityFilter}`);
        }

        if (filterParams.length > 0) {
          url += `&${filterParams.join('&')}`;
        }
      }
      console.log(url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
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

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearFilter(event.target.value);
  };

  const handlePopularityChange = (event) => {
    setPopularityFilter(event.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, searchQuery, genreFilter, yearFilter, popularityFilter]);

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} imdb_score={movie.vote_average} />
    ));

  return (
    <div className='App'>
      <a href="/http://127.0.0.1:5173/" className="homepage-link">
        <h1>Moodify App</h1>
      </a>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          className='search-bar'
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search movies..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <Filters
        handleGenreChange={handleGenreChange}
        handleYearChange={handleYearChange}
        handlePopularityChange={handlePopularityChange}
      />
      {user && (
        <p>Welcome, {user.email}! You are logged in. Feel like watching a movie?</p>
      )}
      {movies.length > 0 ? (
        <div className='container'>{renderMovies()}</div>
      ) : (
        <p>No movies found.</p>
      )}
      <div className='btn-container'>
        {currentPage > 1 && (
          <button className='prev-btn' onClick={handlePrevPage}>
            Previous Page
          </button>
        )}
        {currentPage < totalPages && (
          <button className='next-btn' onClick={handleNextPage}>
            Next Page
          </button>
        )}
      </div>
    </div>
  );
}

export default Homepage;
