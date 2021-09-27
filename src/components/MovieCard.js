import React from "react";
import { useState, useEffect } from "react";

function MovieCard(props) {
  const [movie, setMovie] = useState({});
  const getCurrentMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?i=${props.currentID}&apikey=4b0b5ec1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovie(responseJson);
  };
  useEffect(() => {
    getCurrentMovieRequest();
  });
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full rounded overflow-hidden shadow-lg m-4 flex justify-between">
            <div className="flex flex-col mx-10">
              {/* header */}
              <div className="heading flex">
                <div className="w-36">
                  <img
                    className="w-full"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
                <div className="flex flex-col px-8 py-4 ">
                  <h3 className="font-bold my-4 text-4xl text-light movie--title">
                    {movie.Title}
                  </h3>
                  {/* Subcategory */}
                  <div className="flex space-x-1 items-center">
                    <span className="mx-2 border rounded-md border-color-light px-2 py-1 text-sm  text-gray-600 lg:mb-4">
                      {movie.Rated}
                    </span>
                    <span className="movie--year  text-sm  text-gray-600 lg:mb-4">
                      {movie.Year}
                    </span>
                    <span className="text-sm  text-gray-600 lg:mb-4">•</span>
                    <span className="text-sm  text-gray-600 lg:mb-4">
                      {movie.Genre}
                    </span>
                    <span className="text-sm  text-gray-600 lg:mb-4">•</span>
                    <span className="text-sm  text-gray-600 lg:mb-4">
                      {movie.Runtime}
                    </span>
                  </div>

                  {/* Casts */}
                  <div className="casts">
                    <h3 className="text-base font-medium  text-gray-600 lg:mb-4">
                      {movie.Actors}
                    </h3>
                  </div>
                </div>
              </div>
              {/* body */}
              {/* plot */}
              <div className="my-8 border-t border-b">
                <p className="py-4 px-2 md:text-base lg:text-base text-gray-600 ">
                  {movie.Plot}
                </p>
              </div>
              {/* footer */}
              <div className="footer">
                {/* {movie.Ratings} */}

                {/* {movie.Ratings.foreach((Rating) => {
                <div className='footer-content'>
                  <h2>{Rating.Value}</h2>
                  <p>{Rating.Source}</p>
                </div>;
              })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
