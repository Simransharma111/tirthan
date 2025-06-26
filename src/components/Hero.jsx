import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-video-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/bgg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1 className="hero-heading">Welcome to the Mountains</h1>
        <p className="hero-subtext">Escape the chaos. Embrace the calm.</p>
      </div>
    </section>
  );
}
