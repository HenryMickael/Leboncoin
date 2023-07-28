import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AnnonceVehicule = () => {
  const [annoncesVehicule, setAnnoncesVehicule] = useState([]);
  const [minPrixFilter, setMinPrixFilter] = useState("");
  const [maxPrixFilter, setMaxPrixFilter] = useState("");
  const [minAnneeFilter, setMinAnneeFilter] = useState("");
  const [maxAnneeFilter, setMaxAnneeFilter] = useState("");
  const [boiteVitesseFilter, setBoiteVitesseFilter] = useState("");
  const [carburantFilter, setCarburantFilter] = useState("");

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

  const filteredAnnonces = annoncesVehicule.filter(filterAnnonces);

  return (
    <div>
      <div className="filters-container">
        <div>
          <label htmlFor="minPrixFilter">Prix minimum :</label>
          <input
            type="text"
            id="minPrixFilter"
            value={minPrixFilter}
            onChange={(e) => setMinPrixFilter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maxPrixFilter">Prix maximum :</label>
          <input
            type="text"
            id="maxPrixFilter"
            value={maxPrixFilter}
            onChange={(e) => setMaxPrixFilter(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="minAnneeFilter">Année minimum :</label>
          <input
            type="text"
            id="minAnneeFilter"
            value={minAnneeFilter}
            onChange={(e) => setMinAnneeFilter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maxAnneeFilter">Année maximum :</label>
          <input
            type="text"
            id="maxAnneeFilter"
            value={maxAnneeFilter}
            onChange={(e) => setMaxAnneeFilter(e.target.value)}
          />
        </div>

        <label htmlFor="boiteVitesseFilter">
          Filtre par boîte de vitesse :
        </label>
        <select
          id="boiteVitesseFilter"
          value={boiteVitesseFilter}
          onChange={(e) => setBoiteVitesseFilter(e.target.value)}
        >
          <option value="">Tous</option>
          <option value="Automatique">Automatique</option>
          <option value="Manuelle">Manuelle</option>
        </select>

        <label htmlFor="carburantFilter">Filtre par carburant :</label>
        <select
          id="carburantFilter"
          value={carburantFilter}
          onChange={(e) => setCarburantFilter(e.target.value)}
        >
          <option value="">Tous</option>
          <option value="Essence">Essence</option>
          <option value="Diesel">Diesel</option>
          <option value="Electrique">Electrique</option>
          <option value="Hybride">Hybride</option>
        </select>
      </div>

      <div className="annonces-vehicule-container">
        <h1>Annonces de véhicules</h1>
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
// TEST

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AnnonceVehicule = () => {
//   const [annoncesVehicule, setAnnoncesVehicule] = useState([]);
//   const [minPrixFilter, setMinPrixFilter] = useState("");
//   const [maxPrixFilter, setMaxPrixFilter] = useState("");
//   const [minAnneeFilter, setMinAnneeFilter] = useState("");
//   const [maxAnneeFilter, setMaxAnneeFilter] = useState("");
//   const [boiteVitesseFilter, setBoiteVitesseFilter] = useState("");
//   const [carburantFilter, setCarburantFilter] = useState("");

//   useEffect(() => {
//     fetchAnnoncesVehicule();
//   }, []);

//   const fetchAnnoncesVehicule = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:4000/api/depotVehicule"
//       );
//       setAnnoncesVehicule(response.data);
//     } catch (error) {
//       console.error(
//         "Erreur lors de la récupération des annonces de véhicules:",
//         error
//       );
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/depotVehicule/${id}`);
//       // Après la suppression réussie, rafraîchir la liste des annonces
//       fetchAnnoncesVehicule();
//     } catch (error) {
//       console.error("Erreur lors de la suppression de l'annonce:", error);
//     }
//   };

//   const filterAnnonces = (annonce) => {
//     if (
//       (minPrixFilter !== "" && annonce.prixEnEuro < parseInt(minPrixFilter)) ||
//       (maxPrixFilter !== "" && annonce.prixEnEuro > parseInt(maxPrixFilter))
//     ) {
//       return false;
//     }

//     if (
//       (minAnneeFilter !== "" && annonce.annee < parseInt(minAnneeFilter)) ||
//       (maxAnneeFilter !== "" && annonce.annee > parseInt(maxAnneeFilter))
//     ) {
//       return false;
//     }

//     if (
//       boiteVitesseFilter !== "" &&
//       annonce.boiteDeVitesse !== boiteVitesseFilter
//     ) {
//       return false;
//     }

//     if (carburantFilter !== "" && annonce.carburant !== carburantFilter) {
//       return false;
//     }

//     return true;
//   };

//   const filteredAnnonces = annoncesVehicule.filter(filterAnnonces);

//   return (
//     <div>
//       <div className="filters-container">
//         <div>
//           <label htmlFor="minPrixFilter">Prix minimum :</label>
//           <input
//             type="text"
//             id="minPrixFilter"
//             value={minPrixFilter}
//             onChange={(e) => setMinPrixFilter(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="maxPrixFilter">Prix maximum :</label>
//           <input
//             type="text"
//             id="maxPrixFilter"
//             value={maxPrixFilter}
//             onChange={(e) => setMaxPrixFilter(e.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="minAnneeFilter">Année minimum :</label>
//           <input
//             type="text"
//             id="minAnneeFilter"
//             value={minAnneeFilter}
//             onChange={(e) => setMinAnneeFilter(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="maxAnneeFilter">Année maximum :</label>
//           <input
//             type="text"
//             id="maxAnneeFilter"
//             value={maxAnneeFilter}
//             onChange={(e) => setMaxAnneeFilter(e.target.value)}
//           />
//         </div>

//         <label htmlFor="boiteVitesseFilter">
//           Filtre par boîte de vitesse :
//         </label>
//         <select
//           id="boiteVitesseFilter"
//           value={boiteVitesseFilter}
//           onChange={(e) => setBoiteVitesseFilter(e.target.value)}
//         >
//           <option value="">Tous</option>
//           <option value="Automatique">Automatique</option>
//           <option value="Manuelle">Manuelle</option>
//         </select>

//         <label htmlFor="carburantFilter">Filtre par carburant :</label>
//         <select
//           id="carburantFilter"
//           value={carburantFilter}
//           onChange={(e) => setCarburantFilter(e.target.value)}
//         >
//           <option value="">Tous</option>
//           <option value="Essence">Essence</option>
//           <option value="Diesel">Diesel</option>
//           <option value="Electrique">Electrique</option>
//           <option value="Hybride">Hybride</option>
//         </select>
//       </div>

//       <div className="annonces-vehicule-container">
//         <h1>Annonces de véhicules</h1>
//         <div className="annonces-vehicule-list">
//           {filteredAnnonces.map((annonce, index) => (
//             <Link
//             //               key={index}
//             //               to={`/article/${annonce._id}`}
//             //               className="annonce-card-All"
//             //             >
//               {annonce.imageUrl && (
//                 <img src={annonce.imageUrl} alt={annonce.titre} />
//               )}
//               <div>
//                 <h2>{annonce.titre}</h2>
//                 <p>Marque : {annonce.marque}</p>
//                 <p>Modèle : {annonce.modele}</p>
//                 <p>Numéro de téléphone : {annonce.numeroDeTelDeContact}</p>
//                 {/* Affiche la croix de suppression si l'annonce a été créée par l'utilisateur actuellement connecté */}
//                 {annonce.isCreatedByCurrentUser && (
//                   <button onClick={() => handleDelete(annonce._id)}>
//                     Supprimer
//                   </button>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnonceVehicule;
