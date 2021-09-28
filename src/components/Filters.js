import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Filters({ currentType, currentYear }) {
  return (
    <div className="flex w-1/3 ">
      <div className="slider flex flex-col w-full mx-4">
        <h2 className="text-light">Year</h2>

        <div className="flex items-center mt-2">
          <span className="mr-4 text-sm text-light">1970</span>
          <Slider min={1970} max={2021} onChange={(e) => currentYear(e)} />
          <span className="ml-3 text-light text-sm">2021</span>
        </div>
      </div>
      
      <div className="radio flex flex-col content-center">
          <h2 className="text-light">Type</h2>
          <div className="flex flex-row mt-2">
              <input 
              type='radio' 
              className="form-radio"
              name="type"
              onClick={
                  () => currentType('')
              }
              />
              <span className="ml-1 mr-2 text-sm text-light">Any</span>

              <input 
              type='radio' 
              className="form-radio"
              name="type"
              onClick={
                  () => currentType('movie')
              }
              />
              <span className="ml-1 mr-2 text-sm text-light">Movies</span>

              <input 
              type='radio' 
              className="form-radio"
              name="type"
              onClick={
                  () => currentType('series')
              }
              />
              <span className="ml-1 mr-2 text-sm text-light">Series</span>

              <input 
              type='radio' 
              className="form-radio"
              name="type"
              onClick={
                  () => currentType('episode')
              }
              />
              <span className="ml-1 mr-2 text-sm text-light">Episodes</span>
          </div>

      </div>
    </div>
  );
}

export default Filters;
