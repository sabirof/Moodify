import React from 'react';
import { Link } from 'react-router-dom';

function Genres() {
  const genres = [
    { id: "28", name: "Action Satisfaction" },
    { id: "12", name: "Adventurous-Bi-Curious" },
    { id: "16", name: "Serving Animatrosity" },
    { id: "35", name: "Classic Chokehold Comedy" },
    { id: "80", name: "Crime Caper Carnival" },
    { id: "99", name: "Dutchess Documentress" },
    { id: "18", name: "Drama Llama Ding Dong Deluxe" },
    { id: "10751", name: "Family Fiesta" },
    { id: "14", name: "Delusional Fantasia" },
    { id: "36", name: "Historical Hilarity" },
    { id: "27", name: "Horror Hysteria" },
    { id: "10402", name: "Musical Mayhem" },
    { id: "9648", name: "Mysterious Marvels" },
    { id: "10749", name: "Romance is Dead" },
    { id: "878", name: "Sci-Figh Hunty Shuffletron 6900" },
    { id: "10770", name: "TV Movie Madness" },
    { id: "53", name: "Thrill-o-matic: Scream Queens" },
    { id: "10752", name: "War-tastic Wonderland" },
    { id: "37", name: "Wild West Whimsy" }
  ];

  const renderGenres = () =>
    genres.map((genre) => (
      <div key={genre.id} className="genre-card">
        <h2>{genre.name}</h2>
        <Link to={`/genres/${genre.id}`} className="genre-link">View Movies</Link>
      </div>
    ));

  return (
    <div className="genres-container">
      <h1>Genres</h1>
      <div className="genre-list">{renderGenres()}</div>
    </div>
  );
}

export default Genres;
