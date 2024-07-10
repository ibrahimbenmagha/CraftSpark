import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';
import { useState } from 'react';
import FilterBar from './FilterBar';


const ServiceList = () => {

  const [filter, setFilter] = useState('Plus populaires');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // Add your filtering logic here
  };

  return (
    
    <div className="services-page">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="services-list">
       
      <div className="service-list">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      
      </div>
    </div>
  );
};

export default ServiceList;
