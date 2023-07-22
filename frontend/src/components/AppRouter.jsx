import React from "react";
import { Route, Routes } from "react-router-dom";
import Connexion from "../pages/Connexion";
import Inscription from "../pages/Inscription";
import Acceuil from "../pages/Acceuil";
import DepotAnnonce from "../pages/DepotAnnonce";
import Article from "../pages/Article";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/depotannonce" element={<DepotAnnonce />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
};

export default AppRouter;
