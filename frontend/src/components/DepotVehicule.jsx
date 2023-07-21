import React, { useState } from "react";

const DepotAnnonceVehicule = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("Vehicule");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [annee, setAnnee] = useState("");
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
          setCategorie("Vehicule");
          setMarque("");
          setModele("");
          setAnnee("");
        }, 2000);
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre :
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
      </label>
      <label>
        Description :
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Catégorie :
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option value="Voiture">Voiture</option>
          <option value="Moto">Moto</option>
          <option value="Bateau">Bateau</option>
        </select>
      </label>
      <label>
        Marque :
        <input
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
        />
      </label>
      <label>
        Modèle :
        <input
          type="text"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
        />
      </label>
      <label>
        Année :
        <input
          type="number"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
        />
      </label>
      <button type="submit">Créer l'annonce</button>
      {isSubmitted && <div>Annonce créée avec succès!</div>}
    </form>
  );
};

export default DepotAnnonceVehicule;
