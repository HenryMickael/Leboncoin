import React from "react";

function NavigationBar() {
  const menuItems = [
    {
      label: "Véhicule",
      href: "/vehicule",
    },
    {
      label: "Immobilier",
      href: "/immobilier",
    },
    {
      label: "Mode",
      href: "/mode",
    },
  ];

  return (
    <nav>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.href}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
