import React from 'react';
import logo from '../icons_assets/Logo.svg'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-section">
      <h3>Little Lemon</h3>
      <img src={logo} alt="Little Lemon Logo" className="footer-logo"/>
    </div>
    <div className="footer-section">
      <h4>Doormat Navigation</h4>
      <ul className="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Login</a></li>
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
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </footer>
  );
};

export default Footer;