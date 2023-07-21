import React, { useState } from "react";

const DepotAnnonceImmobilier = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("Immobilier");
  const [surface, setSurface] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      titre,
      description,
      categorie,
      surface,
      localisation,
    };

    fetch("http://localhost:4000/api/depotImmobilier", {
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
          setCategorie("Immobilier");
          setSurface("");
          setLocalisation("");
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
          <option value="Achat">Achat</option>
          <option value="Location">Location</option>
          <option value="Location Vacance">Location Vacance</option>
        </select>
      </label>
      <label>
        Surface :
        <input
          type="number"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
        />
      </label>
      <label>
        Localisation :
        <input
          type="text"
          value={localisation}
          onChange={(e) => setLocalisation(e.target.value)}
        />
      </label>
      <button type="submit">Créer l'annonce</button>
      {isSubmitted && <div>Annonce créée avec succès!</div>}
    </form>
  );
};

export default DepotAnnonceImmobilier;
