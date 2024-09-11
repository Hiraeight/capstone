//App.js
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="header-nav-container">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;

//Header.js
import logo from './assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;

//Nav
function Nav() {
    return (
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  
//Main
function Main() {
    return <main>Main Content Section</main>;
  }
  
  export default Main;

//Footer
function Footer() {
    return <footer>Footer Section</footer>;
  }
  
  export default Footer;

App.css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

h1 {
  font-size: 2.5rem;
  color: #495e57;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.header-nav-container {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: space-between; /* Distribute space between Header and Nav */
  padding: 10px 20px;
  background-color: white; /* Background color for the container */
}

header {
  flex: 1; /* Allow the header to take up necessary space */
}

nav {
  flex: 2; /* Allow the nav to take more space if needed */
  display: flex;
  justify-content: flex-end; /* Push nav items to the right */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

nav a {
  text-decoration: none;
  color: #495e57;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #f4ce14;
}

img {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

header img {
  max-height: 50px; /* Adjust based on design */
}
