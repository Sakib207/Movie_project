import { useState, useEffect } from "react";
import "./App.css";
import Searchbox from "./components/Searchbox.js";
import Movie from "./components/Movie.js";
import MovieCard from "./components/MovieCard";
import Filters from "./components/Filters";
import logo from "./assets/MovieApp.png"


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentMovieID, setCurrentMovieID] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [year, setYear] = useState("");

  
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=${typeValue}&y=${year}&apikey=4b0b5ec1`;

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
  }, [searchValue, typeValue, year]);
  return (
    <div className="App bg-primary min-h-screen overflow-hidden">
      <div className="header py-8 bg-gradient-to-b from-black">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center w-full">
            <img className="w-24" src={logo} />
            <Searchbox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Filters
            currentType={(type)=>setTypeValue(type)}
            currentYear={(year)=>setYear(year)}
            />
          </div>
        </div>
      </div>
      <div className="body mt-5 container mx-auto">
        <div className="movie-list ">
          <h2 className="text-2xl font-semibold text-light my-5">Movie List</h2>
          <div className="flex my-24">
            <div className="border-r-2 w-1/4 overflow-y-auto h-96 px-2">
              {movies.length !== 0 ? ( 
                movies.map((movie, index) => (
                <Movie
                  current={(movieID) => setCurrentMovieID(movieID)}
                  movie={movie}
                />
              ))
              ):(
              <div className="flex items-center">
                <h1 className="text-sm font-semibold text-light my-5">No Movies Found!</h1>
              </div>
              )}
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
