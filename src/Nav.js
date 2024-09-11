// Nav.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>
    </nav>
  );
}

export default Nav;
