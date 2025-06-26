// src/components/NavBar.jsx
import { useState } from "react";
import '../styles/Navbar.css'; // ✅ adjust path if needed
import { Link } from "react-router-dom"; // For internal navigation links

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="main-navbar">
      <div className="nav-container">
        <div className="logo">TravelNow</div>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallary">Gallary</a></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
