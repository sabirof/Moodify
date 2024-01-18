import  { useState, useEffect } from "react";
import "./Moodify.css";

const MovieRandomizer = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4909c193bcb0b13deddde40b3469602f";

  const [suggestedMovie, setSuggestedMovie] = useState(null);
  const [imdbScore, setImdbScore] = useState(null);

  const generateRandomMovie = async () => {
    try {
      const totalPages = 500; // Set the maximum number of pages to fetch

      const randomPage = Math.floor(Math.random() * totalPages) + 1;
      const response = await fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&page=${randomPage}`
      );

      if (response.ok) {
        const data = await response.json();
        const movies = data.results;

        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          const randomMovie = movies[randomIndex];
          const { title, overview, poster_path, vote_average } = randomMovie;
          setSuggestedMovie({ title, overview, poster_path });
          setImdbScore(vote_average); // Set IMDb score
        } else {
          console.error("No movies found");
        }
      } else {
        console.error("Error fetching movies:", response.status);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    generateRandomMovie();
  }, []);

  const handleRandomize = () => {
    generateRandomMovie();
  };

  return (
    <div className="movie-randomizer">
      <h1>Moodify Randomizer</h1>
      <div className="text-message">
        <p>
          Feeling overwhelmed by the results? Explore our Randomize function for
          instant, serendipitous suggestions on what to watch next. Let
          randomness guide your viewing experience. 🎲🍿🎞️
        </p>
      </div>
      <div>
        <button className="round-button" onClick={handleRandomize}>
          Randomize
        </button>
      </div>
      {suggestedMovie && (
        <div className="suggestion">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${suggestedMovie.poster_path}`}
            alt={suggestedMovie.title}
          />
          <div className="movie-details">
            <h2>{suggestedMovie.title}</h2>
            <div className="description">{suggestedMovie.overview}</div>
            <div className="imdb-score">
              <span>IMDb Score:</span> {imdbScore}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieRandomizer;
