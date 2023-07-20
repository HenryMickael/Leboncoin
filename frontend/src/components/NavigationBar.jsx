import React, { useState } from "react";

function NavigationBar() {
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const handleSubMenuEnter = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu("");
  };

  return (
    <nav>
      <ul>
        <li
          onMouseEnter={() => handleSubMenuEnter("vehicule")}
          onMouseLeave={handleSubMenuLeave}
        >
          Véhicule
          {activeSubMenu === "vehicule" && (
            <ul className="sub-menu">
              <li>
                <a href="/voitures">Voitures</a>
              </li>
              <li>
                <a href="/moto">Moto</a>
              </li>
              <li>
                <a href="/bateau">Bateau</a>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleSubMenuEnter("immobilier")}
          onMouseLeave={handleSubMenuLeave}
        >
          Immobilier
          {activeSubMenu === "immobilier" && (
            <ul className="sub-menu">
              <li>
                <a href="/appartement">Appartement</a>
              </li>
              <li>
                <a href="/maison">Maison</a>
              </li>
              <li>
                <a href="/terrain">Terrain</a>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleSubMenuEnter("mode")}
          onMouseLeave={handleSubMenuLeave}
        >
          Mode
          {activeSubMenu === "mode" && (
            <ul className="sub-menu">
              <li>
                <a href="/homme">Homme</a>
              </li>
              <li>
                <a href="/femme">Femme</a>
              </li>
              <li>
                <a href="/enfant">Enfant</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
