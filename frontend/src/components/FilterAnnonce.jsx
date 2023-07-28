import React from "react";
import Navbar from "../components/Navbar";
import AnnonceVehicule from "../components/AnnonceVehicule";
import FilterAnnonce from "../components/FilterAnnonce";

const Article = () => {
  return (
    <div>
      <Navbar />
      <FilterAnnonce annonces={[]} setFilteredAnnonces={() => {}} />
      <AnnonceVehicule annonces={[]} />
    </div>
  );
};

export default Article;
// TEST
