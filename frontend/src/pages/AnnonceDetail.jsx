// import React, { useState, useEffect, useCallback } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const AnnonceDetail = () => {
//   const { _id } = useParams();
//   const [annonce, setAnnonce] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchAnnonceDetail = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:4000/api/depotVehicule/${_id}`
//       );
//       setAnnonce(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Erreur lors de la récupération de l'annonce:", error);
//       setLoading(false);
//     }
//   }, [_id]);

//   useEffect(() => {
//     fetchAnnonceDetail();
//   }, [fetchAnnonceDetail]);

//   return (
//     <div className="annonce-detail-container">
//       {loading ? (
//         <div>Loading...</div>
//       ) : annonce ? (
//         <div>
//           <h2>{annonce.titre}</h2>
//           {annonce.imageUrl && (
//             <img src={annonce.imageUrl} alt={annonce.titre} />
//           )}
//           <p>Description : {annonce.description}</p>
//           <p>Marque : {annonce.marque}</p>
//           <p>Model : {annonce.modele}</p>
//           <p>Année : {annonce.annee}</p>
//           <p>Type boite de vitesse : {annonce.boiteDeVitesse}</p>
//           <p>Carburant : {annonce.carburant}</p>
//           <p>Coloris : {annonce.couleur}</p>
//           <p>Prix : {annonce.prixEnEuro}</p>
//           <p>Email : {annonce.emailDeContact}</p>
//           <p>Numero de téléphone : {annonce.numeroDeTelDeContact}</p>
//           <Link to="/article" className="retour-button">
//             Retour
//           </Link>
//         </div>
//       ) : (
//         <div>Oups ! Annonce non trouvée.</div>
//       )}
//     </div>
//   );
// };

// export default AnnonceDetail;
// TEST

import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const AnnonceDetail = () => {
  const { _id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAnnonceDetail = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/depotVehicule/${_id}`
      );
      setAnnonce(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'annonce:", error);
      setLoading(false);
    }
  }, [_id]);

  useEffect(() => {
    fetchAnnonceDetail();
  }, [fetchAnnonceDetail]);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/api/depotVehicule/${id}`);
  //     window.location.href = "/article";
  //   } catch (error) {
  //     console.error("Erreur lors de la suppression de l'annonce:", error);
  //   }
  // };

  return (
    <div className="annonce-detail-container">
      {loading ? (
        <div>Loading...</div>
      ) : annonce ? (
        <div>
          <h2>{annonce.titre}</h2>
          {annonce.imageUrl && (
            <img src={annonce.imageUrl} alt={annonce.titre} />
          )}
          <p>Description : {annonce.description}</p>
          <p>Marque : {annonce.marque}</p>
          <p>Modèle : {annonce.modele}</p>
          <p>Année : {annonce.annee}</p>
          <p>Type boite de vitesse : {annonce.boiteDeVitesse}</p>
          <p>Carburant : {annonce.carburant}</p>
          <p>Coloris : {annonce.couleur}</p>
          <p>Prix : {annonce.prixEnEuro}</p>
          <p>Email : {annonce.emailDeContact}</p>
          <p>Numero de téléphone : {annonce.numeroDeTelDeContact}</p>
          <Link to="/article" className="retour-button">
            Retour
          </Link>

          {/* {annonce.isCreatedByCurrentUser && (
            <button onClick={() => handleDelete(annonce._id)}>
              Supprimer l'annonce
            </button>
          )} */}
        </div>
      ) : (
        <div>Oups ! Annonce non trouvée.</div>
      )}
    </div>
  );
};

export default AnnonceDetail;
