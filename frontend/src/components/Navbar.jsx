import React from "react";
import { Link } from "react-router-dom";
import BtnDepot from "./BtnDepot";
import SearchBar from "./SearchBar";
import Seconnecter from "./Seconnecter";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/" className="Logo">
        <span>La Bonne Affaire</span>
      </Link>
      <BtnDepot />
      <SearchBar />
      <Seconnecter />
    </div>
  );
};

export default Navbar;
