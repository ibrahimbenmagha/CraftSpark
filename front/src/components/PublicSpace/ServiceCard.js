import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ServiceCard.css';

// const ServiceCard = () => {
//   const [serviceData, setServiceData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/service')
//       .then(response => {
//         setServiceData(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="service-card">
//       <div className="service-info">
//         <h3>" Name :"+{serviceData.name}</h3>
//         <p>{serviceData.description}</p>
//         <span className="price">{serviceData.price} DH</span>
//         <button>Demander</button>
//       </div>
//     </div>
//   );
// };


const ServiceCard = () => {   // Static Card 
  return (
    <div className="service-card">
      <div className="service-info">
        <h3>Nom et Prénom</h3>
        <p>Le lorem ipsum est, en imprimerie...</p>
        <span className="price">550 DH</span>
        <button>Demander</button>
      </div>
    </div>
  );
};

export default ServiceCard;
