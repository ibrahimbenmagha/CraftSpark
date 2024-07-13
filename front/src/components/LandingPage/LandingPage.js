import React, { useState } from 'react';
import './LandingPage.css';
import logo from './logo_white.png';
import pic from './plambier.png';
function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Service:', selectedService);
    // Implement logic to handle selected service
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
        <img src={logo} alt="Logo" /> </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">À PROPOS</a>
            </li>
          </ul>
          
          
        </nav>
        <nav className="nav-cnx">
        <button className="create-account-button">Créer Un Compte</button>
        <button className="account-button">Vous Avez Déjà Un Compte?</button>
        </nav>
      </header>
      <main>
        <div className="middle">
        <div className="hero">
          <h2>BESOIN D'UNE<span className="word"> SOLUTION</span></h2>
          <h2>POUR VOS PROBLÈMES ?</h2>
          <p className="sous-titre">Nous sommes là pour vous!</p>
          <span className="buttons">
          <button className="create-account-button">Créer Un Compte</button>
          <strong><button className="account-button">Connexion</button></strong>
          </span>
          </div >
        <div className="plumber_image">
            <img src={pic}  alt="Plumber" className="plumber"></img>
        </div>
        </div>
        <div className="services">
        <div className="service-search">
          <h2>Vous Cherchez Quels Services?</h2>
          <select className="list" value={selectedService} onChange={handleServiceChange}>
            <option value="">Selectionner</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            {/* Add more services here */}
          </select>
          <button onClick={handleSubmit} className="search-button">
            Chercher
          </button>
        </div></div>
      </main>
    </div>
  );
}

export default App;