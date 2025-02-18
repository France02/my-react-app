import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importa l'icona a hamburger
import logo from "../icons_assets/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per gestire l'apertura/chiusura del menu

  return (
    <header>
      <nav className="container">
        
        <img src={logo} alt="Little Lemon Logo" className="logo" />

      
        <div
          className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={24} />
        </div>

        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/reservations" onClick={() => setIsMenuOpen(false)}>Reservations</Link></li>
          <li><Link to="/orderonline" onClick={() => setIsMenuOpen(false)}>Order Online</Link></li>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;