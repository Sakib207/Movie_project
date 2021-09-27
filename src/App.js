import { useState, useEffect } from "react";
import "./App.css";
import Searchbox from "./components/Searchbox.js";
import Movie from "./components/Movie.js";
import MovieCard from "./components/MovieCard";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=star&apikey=4b0b5ec1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentMovieID, setCurrentMovieID] = useState("");

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        /*  setLoading(false); */
      });
  }, []);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4b0b5ec1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    console.log(currentMovieID);
  }, [currentMovieID]);

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);
  return (
    <div className="App">
      <div className="header py-12  bg-gray-400">
        <div className="container mx-auto">
          <Searchbox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <div className="body mt-5 container mx-auto">
        <div className="movie-list h-4/5">
          <h2>Movie List</h2>
          <div className="flex">
            <div className="border-r-2 w-1/4">
              {movies.map((movie, index) => (
                <Movie
                  current={(movieID) => setCurrentMovieID(movieID)}
                  movie={movie}
                />
              ))}
            </div>
            <div className="w-3/4">
              {currentMovieID !== "" && (
                <MovieCard currentID={currentMovieID} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
