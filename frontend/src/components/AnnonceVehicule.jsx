import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterComponent from "../components/FilterAnnonce";
import SearchBar from "../components/SearchBar";

const AnnonceVehicule = () => {
  const [annoncesVehicule, setAnnoncesVehicule] = useState([]);
  const [minPrixFilter, setMinPrixFilter] = useState("");
  const [maxPrixFilter, setMaxPrixFilter] = useState("");
  const [minAnneeFilter, setMinAnneeFilter] = useState("");
  const [maxAnneeFilter, setMaxAnneeFilter] = useState("");
  const [boiteVitesseFilter, setBoiteVitesseFilter] = useState("");
  const [carburantFilter, setCarburantFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchAnnoncesVehicule();
  }, []);

  const fetchAnnoncesVehicule = async () => {
    try {
      const response = await axios.get(
        "https://leboncoin-xi.vercel.app/api/depotVehicule"
      );
      setAnnoncesVehicule(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des annonces de véhicules:",
        error
      );
    }
  };

  const filterAnnonces = (annonce) => {
    if (
      (minPrixFilter !== "" && annonce.prixEnEuro < parseInt(minPrixFilter)) ||
      (maxPrixFilter !== "" && annonce.prixEnEuro > parseInt(maxPrixFilter))
    ) {
      return false;
    }

    if (
      (minAnneeFilter !== "" && annonce.annee < parseInt(minAnneeFilter)) ||
      (maxAnneeFilter !== "" && annonce.annee > parseInt(maxAnneeFilter))
    ) {
      return false;
    }

    if (
      boiteVitesseFilter !== "" &&
      annonce.boiteDeVitesse !== boiteVitesseFilter
    ) {
      return false;
    }

    if (carburantFilter !== "" && annonce.carburant !== carburantFilter) {
      return false;
    }

    return true;
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = annoncesVehicule.filter((annonce) =>
        annonce.titre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const filteredAnnonces = searchTerm
    ? searchResults.filter(filterAnnonces)
    : annoncesVehicule.filter(filterAnnonces);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="filters-container">
        <FilterComponent
          minPrixFilter={minPrixFilter}
          maxPrixFilter={maxPrixFilter}
          minAnneeFilter={minAnneeFilter}
          maxAnneeFilter={maxAnneeFilter}
          boiteVitesseFilter={boiteVitesseFilter}
          carburantFilter={carburantFilter}
          setMinPrixFilter={setMinPrixFilter}
          setMaxPrixFilter={setMaxPrixFilter}
          setMinAnneeFilter={setMinAnneeFilter}
          setMaxAnneeFilter={setMaxAnneeFilter}
          setBoiteVitesseFilter={setBoiteVitesseFilter}
          setCarburantFilter={setCarburantFilter}
        />
      </div>
      <div className="annonces-vehicule-container">
        <h1>Annonces de véhicules</h1>
        {filteredAnnonces.length === 0 && (
          <p>
            Désolé, aucun véhicule trouvé ne correspond à vos attentes
            actuellement.
          </p>
        )}
        <div className="annonces-vehicule-list">
          {filteredAnnonces.map((annonce, index) => (
            <Link
              key={index}
              to={`/article/${annonce._id}`}
              className="annonce-card-All"
            >
              {annonce.imageUrl && (
                <img src={annonce.imageUrl} alt={annonce.titre} />
              )}
              <div>
                <h2>{annonce.titre}</h2>
                <p>Marque : {annonce.marque}</p>
                <p>Model : {annonce.modele}</p>
                <p>Numero de téléphone : {annonce.numeroDeTelDeContact}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnonceVehicule;
