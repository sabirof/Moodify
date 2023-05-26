import React from 'react';

function Filters({ handleGenreChange, handleYearChange, handlePopularityChange }) {
  return (
    <div className="filter-container">
      <select onChange={handleGenreChange}>
      <option value="">All Genres</option>
  <option value="28">Action Satisfaction</option>
  <option value="12">Adventurous-Bi-Curious</option>
  <option value="16">Serving Animatrosity</option>
  <option value="35">Classic Chokehold Comedy</option>
  <option value="80">Crime Caper Carnival</option>
  <option value="99">Dutchess Documentress</option>
  <option value="18">Drama Llama Ding Dong Deluxe</option>
  <option value="10751">Family Fiesta</option>
  <option value="14">Delusional Fantasia</option>
  <option value="36">Historical Hilarity</option>
  <option value="27">Horror Hysteria</option>
  <option value="10402">Musical Mayhem</option>
  <option value="9648">Mysterious Marvels</option>
  <option value="10749">Romance is Dead </option>
  <option value="878">Sci-Figh Hunty Shuffletron 6900</option>
  <option value="10770">TV Movie Madness</option>
  <option value="53">Thrill-o-matic: Scream Queens</option>
  <option value="10752">Straight Men Stuff</option>
  <option value="37">Wild West Whimsy</option>
        
      </select>
      <select onChange={handleYearChange}>
        <option value="">All Years</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
      </select>
      <select onChange={handlePopularityChange}>
        <option value="">IMDb score</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        
      </select>
    </div>
  );
}

export default Filters;
