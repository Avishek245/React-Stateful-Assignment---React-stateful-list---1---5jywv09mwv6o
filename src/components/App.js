import React, { useEffect, useState } from "react";

import "../styles/App.css";

const data = {
  "2018": ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  "2019": ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  "2020": [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came"
  ],
  "2021": ["Covid Returns"],
  "2022": ["Adventures of Saiman", "Adventures of Shaktiman"]
};
const App = () => {
  const years = Object.keys(data);
  const [currentYear, setCurrentYear] = useState(null);
  const [movieList, setMovieList] = useState([]);

  function handleChange(e) {
    setCurrentYear(e.target.value);
  }
  function setMovies() {
    if (currentYear !== null) {
      setMovieList(data[currentYear]);
    }
  }
  useEffect(() => {
    setMovies();
  }, [currentYear]);
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option value="null"></option>
        {years.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>
      <div id="selected-year">
        {currentYear ? (
          <p>Selected year-{currentYear}</p>
        ) : (
          <p>No year selected</p>
        )}
      </div>
      <ul>
        {movieList.map((movie, i) => {
          return <li key={i}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
