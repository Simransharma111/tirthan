import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left: About */}
        <div className="footer-about">
          <h3>WanderTirthan</h3>
          <p>Explore Tirthan Valley with curated travel experiences. Nature, comfort, and adventure all in one place.</p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Right: Location Map */}
        <div className="footer-location">
          <h4>Our Location</h4>
          <div className="map-container">
            <iframe
              title="Banjar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.695348643052!2d77.33666883707885!3d31.635935655739498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905add900fe60f3%3A0x1dfb1cfa58073c82!2sBanjar%2C%20Himachal%20Pradesh%20175123!5e0!3m2!1sen!2sin!4v1750957609838!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Follow Us - Below all */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WanderTirthan. All rights reserved.
      </div>
    </footer>
  );
}
