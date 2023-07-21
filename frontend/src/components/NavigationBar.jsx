import React, { useState } from "react";

function NavigationBar() {
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const handleSubMenuToggle = (subMenu) => {
    setActiveSubMenu(activeSubMenu === subMenu ? "" : subMenu);
  };

  // Définition des éléments du menu et du sous-menu
  const menuItems = [
    {
      label: "Véhicule",
      subMenuItems: [
        { label: "Voitures", href: "/voitures" },
        { label: "Moto", href: "/moto" },
        { label: "Bateau", href: "/bateau" },
      ],
    },
    {
      label: "Immobilier",
      subMenuItems: [
        { label: "Appartement", href: "/appartement" },
        { label: "Maison", href: "/maison" },
        { label: "Terrain", href: "/terrain" },
      ],
    },
    {
      label: "Mode",
      subMenuItems: [
        { label: "Homme", href: "/homme" },
        { label: "Femme", href: "/femme" },
        { label: "Enfant", href: "/enfant" },
      ],
    },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index} onClick={() => handleSubMenuToggle(menuItem.label)}>
            {menuItem.label}
            {activeSubMenu === menuItem.label && (
              <ul className="sub-menu">
                {menuItem.subMenuItems.map((subMenuItem, index) => (
                  <li key={index}>
                    <a href={subMenuItem.href}>{subMenuItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
