import React from "react";
import Navbar from "../components/Navbar";

const Accueil = () => {
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
            <a href="/article">Consulter les articles à acheter</a>
          </li>
          <li>
            <a href="/depotAnnonce">Déposer une annonce</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accueil;
