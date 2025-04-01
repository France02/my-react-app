import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../icons_assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Little Lemon" className="footer-logo" />
          <p className="brand-tagline">Mediterranean flavors reimagined</p>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">Visit Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>123 Culinary Lane<br />Chicago, IL 60601</div>
          </div>
        </div>

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

        <div className="footer-social">
          <h3 className="footer-heading">Connect</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-heading">Join Our Community</h3>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              aria-label="Subscribe to newsletter"
            />
            <button type="submit" className="newsletter-button">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Little Lemon • All rights reserved
        </div>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;