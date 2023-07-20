import React from "react";
import { useNavigate } from "react-router-dom";

function SeConnecter() {
  const navigate = useNavigate();

  const handleSeConnecterClick = () => {
    navigate("/connexion");
  };

  const handleSeDeconnecterClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const token = localStorage.getItem("token");

  return (
    <button onClick={token ? handleSeDeconnecterClick : handleSeConnecterClick}>
      {token ? "Se déconnecter" : "Se connecter"}
    </button>
  );
}

export default SeConnecter;
