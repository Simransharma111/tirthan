import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css'; // External CSS styling

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>WanderTirthan</h3>
          <p>Explore Tirthan Valley with curated travel experiences. Nature, comfort, and adventure all in one place.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WanderTirthan. All rights reserved.
      </div>
    </footer>
  );
}
