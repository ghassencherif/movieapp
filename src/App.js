import React from "react";
import "./App.css";
import Container from "./Container";
import { Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { moviesData } from "./data/MovieData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Container} />
        <Route
          path="/movielist/:title"
          render={(props) => <MovieDetails data={moviesData} {...props} />}
        />
      </header>
    </div>
  );
}

export default App;
