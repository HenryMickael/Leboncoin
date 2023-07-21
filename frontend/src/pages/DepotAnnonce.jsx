import React, { useState } from "react";
import DepotVehicule from "../components/DepotVehicule";
import DepotMode from "../components/DepotMode";
import DepotImmobilier from "../components/DepotImmobilier";
import Navbar from "../components/Navbar";

const DepotAnnonce = () => {
  const [categorie, setCategorie] = useState("Vehicule");

  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
  };

  const renderDepotComponent = () => {
    switch (categorie) {
      case "Vehicule":
        return <DepotVehicule />;
      case "Immobilier":
        return <DepotImmobilier />;
      case "Mode":
        return <DepotMode />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <label>
          Catégorie :
          <select value={categorie} onChange={handleCategorieChange}>
            <option value="Vehicule">Véhicule</option>
            <option value="Immobilier">Immobilier</option>
            <option value="Mode">Mode</option>
          </select>
        </label>
        {renderDepotComponent()}
      </div>
    </div>
  );
};

export default DepotAnnonce;
