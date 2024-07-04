import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import Logo from "../../Photos/Logo.png" ;

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={Logo} alt="Logo" className="logo"/>
          <h2>SE CONNECTER</h2>
        </div>
        <form>
          <div className="input-group">
            <label>Email ou numéro de téléphone</label>
            <input type="text" placeholder="Email ou numéro de téléphone" />
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <input type="password" placeholder="Mot de passe" />
          </div>
          <button type="submit">Connexion</button>
        </form>
        <div className="signup-link">
          <p>Pas encore de compte? <Link to="/signup">Inscrivez-vous ici</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;