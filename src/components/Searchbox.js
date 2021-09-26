import React from "react";

function Searchbox(props) {
  return (
    <div>
      <form className="search">
        <input
          //   value={}
          //   onChange={}
          type="text"
        />
        <input
          className="searchbutton"
          //   onClick={}
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
}

export default Searchbox;
