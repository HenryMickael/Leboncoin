import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import BtnDepot from "./BtnDepot";
import SearchBar from "./SearchBar";
import Seconnecter from "./Seconnecter";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="MainNavbar">
        <Link to="/">
          <span>La Bonne Affaire</span>
        </Link>
        <BtnDepot />
        <SearchBar />
        <Seconnecter />
      </div>
      <div className="SubNavbar">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Navbar;
