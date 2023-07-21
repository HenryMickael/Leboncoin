import React from "react";
import { useNavigate } from "react-router-dom";

const BtnDepot = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDepotClick = () => {
    if (isLoggedIn) {
      navigate("/depotannonce");
    } else {
      navigate("/connexion");
    }
  };

  return (
    <div>
      <button onClick={handleDepotClick} className="BtnDepot">
        Déposer votre annonce
      </button>
    </div>
  );
};

export default BtnDepot;
