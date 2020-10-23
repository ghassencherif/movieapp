import React, { useState } from "react";
import "./App.css";
import AddModal from "./components/AddModal";
import ListMovie from "./components/ListMovie";
import Rating from "./components/Rating";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Hubie Halloween",
      description:
        "Hubie's not the most popular guy in Salem, Mass., but when Halloween turns truly spooky, this good-hearted scaredy-cat sets out to keep his town safe.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTE0N2EyMzgtMWJhZS00ZWNmLThjZmQtMjcxYTk1NTJiMGVkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY1200_CR165,0,630,1200_AL_.jpg",
      rate: 4,
    },
    {
      title: "Spenser Confidential",
      description:
        "Spenser, an ex-cop and ex-con, teams up with aspiring fighter Hawk to uncover a sinister conspiracy tied to the deaths of two Boston police officers.",
      posterUrl: "https://m.media-amazon.com/images/I/81UIhhNlmpL._SS500_.jpg",
      rate: 5,
    },
    {
      title: "Happy Death Day 2U",
      description:
        "After surviving her death day countless times, a woman is once again caught in a time loop, but her friends are now victims alongside her.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91+y36hELqL._RI_.jpg",
      rate: 3,
    },
    {
      title: "All the Bright Places",
      description:
        "After meeting each other, two people struggle with the emotional and physical scars of their past. They discover that even the smallest moments can mean something.",
      posterUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlXXV_Tjj3CtcAxtPi5dWW1Puv7HXjsTHvEYhGbg1GdvoSvEvi",
      rate: 4,
    },
  ]);
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

export default App;
