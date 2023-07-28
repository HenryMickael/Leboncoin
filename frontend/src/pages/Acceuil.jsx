import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import { Link } from "react-router-dom";

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
    <div className="Acceuil">
      <Navbar />
      <h1>Bienvenue sur notre site de vente de vehicules !</h1>
      <p className="presentation">
        Découvrez notre large sélection d'annonces de véhicules d'occasion et
        trouvez la voiture de vos rêves. Que vous cherchiez une citadine
        pratique, une berline confortable ou un SUV tout-terrain, vous êtes au
        bon endroit.
      </p>
      <p className="presentation">
        Si vous avez déjà trouvé la voiture idéale, vous pouvez également
        déposer une annonce pour vendre votre propre véhicule. Notre plateforme
        facilite la mise en relation entre les vendeurs et les acheteurs, vous
        permettant de vendre rapidement.
      </p>
      <div>
        <div className="options-container">
          <h2>Que souhaitez-vous faire aujourd'hui ?</h2>
          <ul className="option-container-list">
            <li>
              <a href="/article" className="option-link">
                Trouver votre futur véhicule
              </a>
            </li>
            <li>
              <a href="/depotAnnonce" className="option-link">
                Vendre votre véhicule
              </a>
            </li>
          </ul>
        </div>
        <h2>Dernières annonces en ligne :</h2>
        <div className="annonce-cards-container">
          {lastThreeAnnonces.map((annonce) => (
            <Link
              to={`/article/${annonce._id}`}
              key={annonce._id}
              className="annonce-card-link"
            >
              <div
                className="annonce-card"
                style={{
                  backgroundImage: `url(${annonce.imageUrl})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="overlay-text">
                  <p>{annonce.marque}</p>

                  <p>{annonce.modele}</p>
                  <p>{annonce.prixEnEuro} Euro</p>
                  <p>
                    Publié le{" "}
                    {format(
                      new Date(annonce.dateCreation),
                      "dd/MM/yyyy à HH:mm"
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
