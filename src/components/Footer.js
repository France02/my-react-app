import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Little Lemon</h3>
        <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
      </div>
      <div className="footer-section">
        <h4>Doormat Navigation</h4>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contacts</h4>
        <p>123 Main Street, Chicago</p>
        <p>+1 (123) 456-7890</p>
        <p>info@littlelemon.com</p>
      </div>
      <div className="footer-section">
        <h4>Social Media Links</h4>
        <ul className="footer-social">
          <li><Link to="#">Facebook</Link></li>
          <li><Link to="#">Instagram</Link></li>
          <li><Link to="#">Twitter</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
