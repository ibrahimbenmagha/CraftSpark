import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('Plus populaires');

  const filters = ['Plus populaires', 'Prix', 'Nombre de Services', 'Avis', 'Plus Proche'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-bar">
      <span>Trier par:</span>
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === activeFilter ? 'active' : ''}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
