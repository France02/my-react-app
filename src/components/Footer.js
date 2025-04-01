import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../icons_assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="Little Lemon" className="footer-logo" />
          <p className="brand-tagline">Mediterranean flavors reimagined</p>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="footer-heading">Visit Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              123 Culinary Lane<br />
              Chicago, IL 60601
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="footer-hours">
          <h3 className="footer-heading">Opening Hours</h3>
          <div className="hours-list">
            <div className="hours-item">
              <span>Mon-Thu:</span> 11:00 AM - 10:00 PM
            </div>
            <div className="hours-item">
              <span>Fri-Sat:</span> 11:00 AM - 11:00 PM
            </div>
            <div className="hours-item">
              <span>Sunday:</span> Closed
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons">
            {/* Linea 41 */}
            <a 
              href="https://facebook.com/LittleLemonChicago" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            
            {/* Linea 44 */}
            <a 
              href="https://instagram.com/LittleLemonChicago" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            
            {/* Linea 47 */}
            <a 
              href="https://twitter.com/LittleLemonChi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-icon"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3 className="footer-heading">Join Our Community</h3>
          <form 
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              // Aggiungi qui la logica di registrazione
            }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              aria-label="Subscribe to newsletter"
              required
            />
            <button 
              type="submit" 
              className="newsletter-button"
              aria-label="Subscribe"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Little Lemon • All rights reserved
        </div>
        <div className="legal-links">
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          <Link to="/terms" className="legal-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;