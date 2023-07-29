import React from "react";

const FilterComponent = ({
  minPrixFilter,
  maxPrixFilter,
  minAnneeFilter,
  maxAnneeFilter,
  boiteVitesseFilter,
  carburantFilter,
  setMinPrixFilter,
  setMaxPrixFilter,
  setMinAnneeFilter,
  setMaxAnneeFilter,
  setBoiteVitesseFilter,
  setCarburantFilter,
}) => {
  const handleMinPrixFilterChange = (event) => {
    setMinPrixFilter(event.target.value);
  };

  const handleMaxPrixFilterChange = (event) => {
    setMaxPrixFilter(event.target.value);
  };

  const handleMinAnneeFilterChange = (event) => {
    setMinAnneeFilter(event.target.value);
  };

  const handleMaxAnneeFilterChange = (event) => {
    setMaxAnneeFilter(event.target.value);
  };

  const handleBoiteVitesseFilterChange = (event) => {
    setBoiteVitesseFilter(event.target.value);
  };

  const handleCarburantFilterChange = (event) => {
    setCarburantFilter(event.target.value);
  };

  return (
    <div className="filters-container">
      <div>
        <label htmlFor="minPrixFilter">Prix minimum :</label>
        <input
          type="text"
          id="minPrixFilter"
          value={minPrixFilter}
          onChange={handleMinPrixFilterChange}
        />
      </div>
      <div>
        <label htmlFor="maxPrixFilter">Prix maximum :</label>
        <input
          type="text"
          id="maxPrixFilter"
          value={maxPrixFilter}
          onChange={handleMaxPrixFilterChange}
        />
      </div>

      <div>
        <label htmlFor="minAnneeFilter">Année minimum :</label>
        <input
          type="text"
          id="minAnneeFilter"
          value={minAnneeFilter}
          onChange={handleMinAnneeFilterChange}
        />
      </div>
      <div>
        <label htmlFor="maxAnneeFilter">Année maximum :</label>
        <input
          type="text"
          id="maxAnneeFilter"
          value={maxAnneeFilter}
          onChange={handleMaxAnneeFilterChange}
        />
      </div>

      <label htmlFor="boiteVitesseFilter">Filtre par boîte de vitesse :</label>
      <select
        id="boiteVitesseFilter"
        value={boiteVitesseFilter}
        onChange={handleBoiteVitesseFilterChange}
      >
        <option value="">Tous</option>
        <option value="Automatique">Automatique</option>
        <option value="Manuelle">Manuelle</option>
      </select>

      <label htmlFor="carburantFilter">Filtre par carburant :</label>
      <select
        id="carburantFilter"
        value={carburantFilter}
        onChange={handleCarburantFilterChange}
      >
        <option value="">Tous</option>
        <option value="Essence">Essence</option>
        <option value="Diesel">Diesel</option>
        <option value="Electrique">Electrique</option>
        <option value="Hybride">Hybride</option>
      </select>
    </div>
  );
};

export default FilterComponent;
