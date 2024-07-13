import { message } from "antd";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { clearLocalStorage, getId, setRolrIdInLocalStorage } from "./../../localStorageUtils";

import Logo from "../../Photos/Logo.png";
import axiosInstance from './../../AxiosConfig';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    clearLocalStorage()

  })

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axiosInstance.post('login', {
        email,
        password
      });

      const { id, role } = response.data.user;
      setRolrIdInLocalStorage(role, id);
      const tst = getId();
      console.log(tst);
      if (role === 'admin') {
        message.success("Logged in successfully");
        navigate('/backoffice');
      } else
      if(role === 'client') {
        message.success("Logged in successfully");
        navigate('/Client/AllArtisansPage'); 
      }else{
        if(role === 'artisan') {
          message.success("Logged in successfully");
          navigate('/Artisan/EditArtisan'); 
        }
      }
    } catch (error) {
      message.error("Invalid credentials");
      setError('Erreur lors de la connexion. Veuillez vérifier vos informations.');
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={Logo} alt="Logo" className="logo"/>
          <h2>SE CONNECTER</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Connexion</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="login-link">
          <p>Pas encore de compte? <Link to="/CreateClient">Inscrivez-vous ici</Link> <br/>
          <Link to="/CreateArtisan">Vous êtes un artisan?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
