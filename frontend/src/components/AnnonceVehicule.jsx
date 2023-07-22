import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AnnonceVehicule = () => {
  const [annoncesVehicule, setAnnoncesVehicule] = useState([]);
  const [annonceSelectionnee, setAnnonceSelectionnee] = useState(null);

  useEffect(() => {
    fetchAnnoncesVehicule();
  }, []);

  const fetchAnnoncesVehicule = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/depotVehicule"
      );
      setAnnoncesVehicule(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des annonces de véhicules:",
        error
      );
    }
  };

  const handleVoirPlusClick = (annonce) => {
    setAnnonceSelectionnee(annonce);
  };

  const handleRetourClick = () => {
    setAnnonceSelectionnee(null);
  };

  const renderAnnoncesVehicule = () => {
    return annoncesVehicule.map((annonce, index) => (
      <div key={index} className="annonce-card">
        <h2>{annonce.titre}</h2>
        <p>{annonce.categorie}</p>
        <p>{annonce.description}</p>
        <p>{annonce.marque}</p>
        <p>{annonce.modele}</p>
        <p>{annonce.annee}</p>
        <p>{annonce.boiteDeVitesse}</p>
        <p>{annonce.carburant}</p>
        <p>{annonce.couleur}</p>
        <p>{annonce.prixEnEuro}</p>
        <p>{annonce.emailDeContact}</p>

        <p>{annonce.numeroDeTelDeContact}</p>

        <button onClick={() => handleVoirPlusClick(annonce)}>Voir plus</button>
      </div>
    ));
  };

  return (
    <div className="annonces-vehicule-container">
      <h1>Annonces de véhicules</h1>
      {annonceSelectionnee ? (
        <div>
          <Link to={`/annonce/${annonceSelectionnee.id}`}>
            <h2>{annonceSelectionnee.titre}</h2>
          </Link>
          <p>{annonceSelectionnee.categorie}</p>
          <p>{annonceSelectionnee.description}</p>
          <p>{annonceSelectionnee.marque}</p>
          <p>{annonceSelectionnee.modele}</p>
          <p>{annonceSelectionnee.annee}</p>
          <p>{annonceSelectionnee.boiteDeVitesse}</p>
          <p>{annonceSelectionnee.carburant}</p>
          <p>{annonceSelectionnee.couleur}</p>
          <p>{annonceSelectionnee.prixEnEuro}</p>
          <p>{annonceSelectionnee.emailDeContact}</p>
          <p>{annonceSelectionnee.numeroDeTelDeContact}</p>
          <button onClick={handleRetourClick}>Retour</button>
        </div>
      ) : (
        <div className="annonces-vehicule-list">{renderAnnoncesVehicule()}</div>
      )}
    </div>
  );
};

export default AnnonceVehicule;
