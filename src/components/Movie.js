import React from "react";

const DEFAULT_PLACEHOLDERNAME_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function Movie({ current, movie }) {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDERNAME_IMAGE : movie.Poster;

  return (
    <div 
    onClick={()=>current(movie.imdbID)} 
    className="Movie border-b-2 py-6 flex flex-row items-center cursor-pointer">
      <div className="w-1/4">
        <img
          className="w-full"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <div className="w-3/4 mx-4">
        <h2 className="text-light text-xl font-semibold">{movie.Title}</h2>
        <p className="text-sm text-light">{movie.Year}</p>
      </div>
    </div>
  );
}

export default Movie;
