import React from "react";
import { Route, Routes } from "react-router-dom";
import Connexion from "../pages/Connexion";
import Inscription from "../pages/Inscription";
import Acceuil from "../pages/Acceuil";
import Depot from "../pages/Depot";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/depot" element={<Depot />} />
    </Routes>
  );
};

export default AppRouter;
