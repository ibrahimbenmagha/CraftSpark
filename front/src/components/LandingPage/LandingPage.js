import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import logo from "./logo_white.png";
import pic from "./plambier.png";
function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected Service:", selectedService);
    // Implement logic to handle selected service
  };

  return (
    <div className="App12">
      <header className="App-header1">
        <div className="logo99">
          <img src={logo} alt="Logo" />{" "}
        </div>

        <nav className="nav-cnx12">
          <Link to="../CreateClient">
            <button className="create-account-button1">Créer Un Compte</button>
          </Link>
          <Link to="/CreateArtisan">Vous êtes un artisan?</Link>
          <Link to="Login"><button className="account-button1">Vous Avez Déjà Un Compte?</button></Link>
        </nav>
      </header>
      <main>
        <div className="middle1">
          <div className="hero1">
            <h2>
              BESOIN D'UNE<span className="word1"> SOLUTION</span>
            </h2>
            <h2>POUR VOS PROBLÈMES ?</h2>
            <p className="sous-titre1">Nous sommes là pour vous!</p>
            <span className="buttons1">
              <button className="create-account-button1">Créer Un Compte</button>
              <strong>
                <button className="account-button1">Connexion</button>
              </strong>
            </span>
          </div>
          <div className="plumber_image1">
            <img src={pic} alt="Plumber" className="plumber1"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
