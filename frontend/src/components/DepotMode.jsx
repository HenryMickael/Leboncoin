import React, { useState } from "react";

const DepotAnnonceMode = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("Mode");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      titre,
      description,
      categorie,
      taille,
      couleur,
    };

    fetch("http://localhost:4000/api/depotMode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Vous pouvez effectuer des actions après avoir reçu la réponse du serveur
        // Par exemple, vous pouvez rediriger l'utilisateur vers une page de confirmation
        // en fonction de la réponse du serveur
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
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Enfant">Enfant</option>
        </select>
      </label>
      <label>
        Taille :
        <input
          type="text"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
        />
      </label>
      <label>
        Couleur :
        <input
          type="text"
          value={couleur}
          onChange={(e) => setCouleur(e.target.value)}
        />
      </label>
      <button type="submit">Créer l'annonce</button>
    </form>
  );
};

export default DepotAnnonceMode;
