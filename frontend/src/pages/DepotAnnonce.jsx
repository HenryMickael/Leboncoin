import React, { useState } from "react";
import Navbar from "../components/Navbar";

const DepotAnnonceVehicule = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("Voiture");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
  const [boiteDeVitesse, setBoiteDeVitesse] = useState("");
  const [carburant, setCarburant] = useState("");
  const [couleur, setCouleur] = useState("");
  const [prixEnEuro, setPrixEnEuro] = useState("");
  const [emailDeContact, setEmailDeContact] = useState("");
  const [numeroDeTelDeContact, setNumeroDeTelDeContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      titre,
      description,
      categorie,
      marque,
      modele,
      annee,
      boiteDeVitesse,
      carburant,
      couleur,
      prixEnEuro,
      emailDeContact,
      numeroDeTelDeContact,
    };

    fetch("http://localhost:4000/api/depotVehicule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setTitre("");
          setDescription("");
          setCategorie("Voiture");
          setMarque("");
          setModele("");
          setAnnee("");
          setBoiteDeVitesse("");
          setCarburant("");
          setCouleur("");
          setPrixEnEuro("");
          setEmailDeContact("");
          setNumeroDeTelDeContact("");
        }, 2000);
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Catégorie :
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="form-select"
            >
              <option value="Voiture">Voiture</option>
              <option value="2 roues">2 roues</option>
              <option value="Bateau">Bateau</option>
            </select>
          </label>
          <label className="form-label">
            Titre :
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Description :
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
            />
          </label>

          <label className="form-label">
            Marque :
            <input
              type="text"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Modèle :
            <input
              type="text"
              value={modele}
              onChange={(e) => setModele(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Année :
            <input
              type="number"
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Boite de vitesse :
            <select
              value={boiteDeVitesse}
              onChange={(e) => setBoiteDeVitesse(e.target.value)}
              className="form-select"
            >
              <option value="">Sélectionnez</option>
              <option value="Automatique">Automatique</option>
              <option value="Manuel">Manuel</option>
            </select>
          </label>
          <label className="form-label">
            Carburant :
            <select
              value={carburant}
              onChange={(e) => setCarburant(e.target.value)}
              className="form-select"
            >
              <option value="">Sélectionnez</option>
              <option value="Essence">Essence</option>
              <option value="Diesel">Diesel</option>
              <option value="Electrique">Electrique</option>
              <option value="Hybride">Hybride</option>
            </select>
          </label>
          <label className="form-label">
            Couleur :
            <input
              type="text"
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Prix en euro :
            <input
              type="number"
              value={prixEnEuro}
              onChange={(e) => setPrixEnEuro(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Email de contact :
            <input
              type="email"
              value={emailDeContact}
              onChange={(e) => setEmailDeContact(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Numéro de téléphone de contact :
            <input
              type="text"
              value={numeroDeTelDeContact}
              onChange={(e) => setNumeroDeTelDeContact(e.target.value)}
              className="form-input"
            />
          </label>
          <button type="submit" className="submit-button">
            Créer l'annonce
          </button>
          {isSubmitted && (
            <div className="success-message">Annonce créée avec succès!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DepotAnnonceVehicule;
