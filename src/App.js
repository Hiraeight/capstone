import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <Router>
      <div className="header-nav-container">
        <Header />
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
