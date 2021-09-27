import React, { useState } from "react";

function Searchbox(props) {
  return (
    <div>
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="text"
      />
    </div>
  );
}

export default Searchbox;
