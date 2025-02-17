import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import logo from "../icons_assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;