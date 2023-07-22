import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { format } from "date-fns";

const Accueil = () => {
  const [allAnnonces, setAllAnnonces] = useState([]);
  const [lastThreeAnnonces, setLastThreeAnnonces] = useState([]);

  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/depotVehicule"
      );
      setAllAnnonces(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des annonces :", error);
    }
  };

  useEffect(() => {
    const sortedAnnonces = allAnnonces.sort(
      (a, b) => new Date(b.dateCreation) - new Date(a.dateCreation)
    );
    setLastThreeAnnonces(sortedAnnonces.slice(0, 3));
  }, [allAnnonces]);

  return (
    <div>
      <Navbar />
      <h1>Bienvenue sur notre site !</h1>
      <p>
        Vous pouvez consulter nos articles à acheter ou déposer une annonce pour
        vendre votre propre article.
      </p>
      <div>
        <h2>Choisissez une option :</h2>
        <ul>
          <li>
            <a href="/article">Chercher votre futur Vehicule</a>
          </li>
          <li>
            <a href="/depotAnnonce">Déposer une annonce</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Dernières annonces :</h2>
        <div className="annonce-cards-container">
          {lastThreeAnnonces.map((annonce) => (
            <div key={annonce._id} className="annonce-card">
              <h3>{annonce.titre}</h3>
              <p>{annonce.marque}</p>
              <p>{annonce.modele}</p>
              <p>{annonce.prixEnEuro}</p>
              <p>
                Publié le{" "}
                {format(new Date(annonce.dateCreation), "dd/MM/yyyy à HH:mm")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
