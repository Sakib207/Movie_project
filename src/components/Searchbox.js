import React, { useState } from "react";
import './Searchbox.css'

function Searchbox(props) {
  return (
    <div className="w-1/3">
      <input
      className="transition duration-500"
      placeholder='Type to search . . .'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="text"
      />
    </div>
  );
}

export default Searchbox;
