import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BtnDepot = () => {
  const [isLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const redirectPath = isLoggedIn ? "/depot" : "/connexion";

  const handleDepotClick = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <button onClick={handleDepotClick}>
        {isLoggedIn
          ? "Déposer votre annonce"
          : "Se connecter pour déposer une annonce"}
      </button>
    </div>
  );
};

export default BtnDepot;
