import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        onChange={searchChange}
        className="pa3 ba b-blue bg-light-blue"
      />
    </div>
  );
};

export default SearchBox;
