import React from "react";
import { Link } from "react-router-dom";
import BtnDepot from "./BtnDepot";
import BtnVoirAnnonce from "./BtnVoirAnnonce";

import Seconnecter from "./Seconnecter";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/" className="Logo">
        <span>La Bonne Affaire</span>
      </Link>
      <BtnDepot />
      <BtnVoirAnnonce />
      <Seconnecter />
    </div>
  );
};

export default Navbar;
