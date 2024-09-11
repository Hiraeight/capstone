import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo-footer.png'; 
import facebookIcon from './assets/facebook-white.png';
import instagramIcon from './assets/instagram-white.png';
import twitterIcon from './assets/twitter-white.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        </div>

        <div className="footer-column doormat-navigation">
          <h3 className="footer-heading">Little Lemon</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, document.getElementById('call-to-action').offsetTop)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, document.getElementById('chicago-section').offsetTop)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, document.getElementById('specials-section').offsetTop)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column contact-info">
          <h3 className="footer-heading">Contact Us</h3>
          <p>1234 Lemon Street</p>
          <p>Chicago, IL 60657</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        <div className="footer-column social-media">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
