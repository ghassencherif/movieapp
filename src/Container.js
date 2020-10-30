import React, { useState } from "react";
import "./App.css";
import AddModal from "./components/AddModal";
import ListMovie from "./components/ListMovie";
import Rating from "./components/Rating";
import SearchBox from "./components/SearchBox";
import { moviesData } from "./data/MovieData";



function Container() {
  const [movies, setMovies] = useState(moviesData);
  const [searchMovie, setSearchMovie] = useState("");
  const [rating, setRating] = useState(1);

  const add = (newMovie) => setMovies([...movies, newMovie]);

  const handleInput = (e) => {
    setSearchMovie(e.target.value);
  };

  

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  

  return (
    
    <div className="App">
      
      <header className="App-header">
      
        <SearchBox handleInput={handleInput} />
        <Rating
          rating={rating}
          setRating={setRating}
          onStarClick={onStarClick}
        />
        <ListMovie
          filteredMovie={movies.filter(
            (movie) =>
              movie.title.toLowerCase().includes(searchMovie.toLowerCase()) &&
              movie.rate >= rating
          )}
        />
        <AddModal add={add} />
        
        
      </header>
      
    </div>
    
    
  );
}

export default Container;
