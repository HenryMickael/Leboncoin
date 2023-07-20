import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <i className="fa fa-search" aria-hidden="true"></i>{" "}
      </button>
    </div>
  );
};

export default SearchBar;
