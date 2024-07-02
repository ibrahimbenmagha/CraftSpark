import React, { useState } from 'react';

const ClientForm = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmMotDePasse, setConfirmMotDePasse] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [pays, setPays] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Compte Client</h2>
      <label>
        Prénom:
        <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
      </label>
      <br />
      <label>
        Nom:
        <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Date de naissance:
        <input type="date" value={dateNaissance} onChange={(event) => setDateNaissance(event.target.value)} />
      </label>
      <br />
      <label>
        Téléphone:
        <input type="tel" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
      </label>
      <br />
      <label>
        Confirmer mot de passe:
        <input type="password" value={confirmMotDePasse} onChange={(event) => setConfirmMotDePasse(event.target.value)} />
      </label>
      <br />
      <label>
        Adresse:
        <input type="text" value={adresse} onChange={(event) => setAdresse(event.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={ville} onChange={(event) => setVille(event.target.value)} />
      </label>
      <br />
      <label>
        Pays:
        <input type="text" value={pays} onChange={(event) => setPays(event.target.value)} />
      </label>
      <br />
      <button type="submit">Créer votre compte</button>
    </form>
  );
};

const ArtisanForm = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmMotDePasse, setConfirmMotDePasse] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [pays, setPays] = useState('');
  const [metier, setMetier] = useState('');
  const [anneesExperience, setAnneesExperience] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Compte Artisan</h2>
      <label>
        Prénom:
        <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} />
      </label>
      <br />
      <label>
        Nom:
        <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Date de naissance:
        <input type="date" value={dateNaissance} onChange={(event) => setDateNaissance(event.target.value)} />
      </label>
      <br />
      <label>
        Téléphone:
        <input type="tel" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
      </label>
      <br />
      <label>
        Confirmer mot de passe:
        <input type="password" value={confirmMotDePasse} onChange={(event) => setConfirmMotDePasse(event.target.value)} />
      </label>
      <br />
      <label>
        Adresse:
        <input type="text" value={adresse} onChange={(event) => setAdresse(event.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={ville} onChange={(event) => setVille(event.target.value)} />
      </label>
      <br />
      <label>
        Pays:
        <input type="text" value={pays} onChange={(event) => setPays(event.target.value)} />
      </label>
      <br />
      <label>
        Métier:
        <input type="text" value={metier} onChange={(event) => setMetier(event.target.value)} />
      </label>
      <br />
      <label>
        Années d'expérience:
        <input type="number" value={anneesExperience} onChange={(event) => setAnneesExperience(event.target.value)} />
      </label>
      <br />
      <button type="submit">Créer votre compte</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <ClientForm />
      <ArtisanForm />
    </div>
  );
};

export default App;