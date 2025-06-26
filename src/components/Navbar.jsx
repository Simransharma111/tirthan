// src/components/NavBar.jsx
import { useState } from "react";
import '../styles/Navbar.css'; // ✅ adjust path if needed

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
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
