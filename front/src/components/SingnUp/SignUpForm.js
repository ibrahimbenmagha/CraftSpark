import React from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>CRÉER UN COMPTE</h2>
      </div>
      <div className="form-container">
        <div className="form-box normal-account">
          <h3>Compte Normal</h3>
          <form>
            <div className="input-group">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input-group">
              <label>Prénom</label>
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="input-group">
              <label>Date de naissance</label>
              <input type="date" placeholder="Date de naissance" />
            </div>
            <div className="input-group">
              <label>Téléphone</label>
              <input type="text" placeholder="Téléphone" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <label>Adresse complet</label>
              <input type="text" placeholder="Adresse complet" />
            </div>
            <div className="input-group">
              <label>Ville</label>
              <input type="text" placeholder="Ville" />
            </div>
            <div className="input-group">
              <label>Pays</label>
              <input type="text" placeholder="Pays" />
            </div>
            <div className="input-group">
              <label>Mot de passe</label>
              <input type="password" placeholder="Mot de passe" />
            </div>
            <div className="input-group">
              <label>Confirmer le mot de passe</label>
              <input type="password" placeholder="Confirmer le mot de passe" />
            </div>
            <div className="input-group">
              <input type="checkbox" />
              <label>Accepter nos <a href="#">Conditions de confidentialité</a></label>
            </div>
            <button type="submit">Créer votre compte</button>
          </form>
        </div>
        <div className="form-box artisan-account">
          <h3>Compte Artisan</h3>
          <form>
            <div className="input-group">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input-group">
              <label>Prénom</label>
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="input-group">
              <label>Date de naissance</label>
              <input type="date" placeholder="Date de naissance" />
            </div>
            <div className="input-group">
              <label>Téléphone</label>
              <input type="text" placeholder="Téléphone" />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <label>Votre métier</label>
              <input type="text" placeholder="Votre métier" />
            </div>
            <div className="input-group">
              <label>Années d'expérience</label>
              <input type="number" placeholder="Années d'expérience" />
            </div>
            <div className="input-group">
              <label>Adresse complet</label>
              <input type="text" placeholder="Adresse complet" />
            </div>
            <div className="input-group">
              <label>Ville</label>
              <input type="text" placeholder="Ville" />
            </div>
            <div className="input-group">
              <label>Pays</label>
              <input type="text" placeholder="Pays" />
            </div>
            <div className="input-group">
              <label>Mot de passe</label>
              <input type="password" placeholder="Mot de passe" />
            </div>
            <div className="input-group">
              <label>Confirmer le mot de passe</label>
              <input type="password" placeholder="Confirmer le mot de passe" />
            </div>
            <div className="input-group">
              <input type="checkbox" />
              <label>
                Accepter nos <a href="#">Conditions de confidentialité</a>
              </label>
            </div>
            <button type="submit">Créer votre compte</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
