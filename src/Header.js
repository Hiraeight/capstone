// Header.js
import logo from './assets/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
