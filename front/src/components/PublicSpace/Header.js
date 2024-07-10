import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">LMooqaf</div>
      <nav>
        <ul>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/favorites">Favoris</Link></li>
          <li><Link to="/history">Historique</Link></li>
        </ul>
      </nav>
      <div className="search-profile-container">
        <div className="search">
          <input type="text" placeholder="Rechercher" />
          <button>🔍</button>
        </div>
        <div className="profile-icon">
          <Link to="/profile">
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
