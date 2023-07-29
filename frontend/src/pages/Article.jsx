import React from "react";
import Navbar from "../components/Navbar";
import AnnonceVehicule from "../components/AnnonceVehicule";
import SearchBar from "../components/SearchBar";

const Article = () => {
  const handleSearch = (searchTerm) => {};
  return (
    <div>
      <Navbar>
        <SearchBar onSearch={handleSearch} />
      </Navbar>
      <AnnonceVehicule />
    </div>
  );
};

export default Article;
