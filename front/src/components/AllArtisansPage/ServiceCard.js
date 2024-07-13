import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ artisan }) => {
  if (!artisan) {
    return null; // Return null or a loading spinner if service is undefined
  }

  return (
    <div className="service-card">
      {/*
      <img 
        src={service.artisan_photo || 'default-image.jpg'} 
        alt={service.service_name || 'Service'} 
        className="service-image" 
      />
    */}
    
      <div className="service">
        {artisan.artisan_photo}
        <div className='service-details'>
        <h4 className="service-name">{artisan.service_name || 'Service Name'}</h4>
        <p className="service-fullname">{artisan.user_name || 'Full Name'}</p>
        <p className="service-description">{artisan.description || 'No description available'}</p>
        </div>
      </div>
      <div className="service-info">
        <span className="service-city">Casablanca</span>
        <button className="service-button">Afficher numéro de téléphone</button>
      </div>
    </div>
  );
};

export default ServiceCard;
