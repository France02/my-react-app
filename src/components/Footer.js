// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../icons_assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* ... altre sezioni ... */}

      <div className="footer-social">
        <h3 className="footer-heading">Connect</h3>
        <div className="social-icons">
          {/* Modifica qui: */}
          <a 
            href="https://facebook.com/littlelemon" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://instagram.com/littlelemon" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://twitter.com/littlelemon" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* ... resto del componente ... */}
    </footer>
  );
};

export default Footer;