import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../icons_assets/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="container">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </Link>

        {/* Pulsante hamburger migliorato */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FaBars className="icon bars" />
          <FaTimes className="icon times" />
        </button>

        {/* Menu con backdrop */}
        <div className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`} 
             onClick={() => setIsMenuOpen(false)} />

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