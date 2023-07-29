import React from "react";
import { useNavigate } from "react-router-dom";

const BtnVoirAnnonce = () => {
  const navigate = useNavigate();

  const handleVoirAnnonceClick = () => {
    navigate("/article");
  };

  return (
    <div>
      <button onClick={handleVoirAnnonceClick} className="BtnVoirAnnonce">
        Voir nos Annonces
      </button>
    </div>
  );
};

export default BtnVoirAnnonce;
