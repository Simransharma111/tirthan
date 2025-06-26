import React, { useEffect, useRef, useState } from 'react';
import '../styles/Gallary.css';

const images = [
  "/images/valley.jpg",
  "/images/waterfall.jpg",
  "/images/yoga1.jpg",
  "/images/snow.jpg"
];

const anglePerImage = 360 / images.length;

export default function Gallary() {
  const [angle, setAngle] = useState(0);
  const galleryRef = useRef(null);
  const scrollCooldown = useRef(false);
  const autoRotateRef = useRef(null);

  const rotate = (direction) => {
    setAngle((prev) => prev + direction * anglePerImage);
  };

  const goToImage = (index) => {
    const newAngle = -index * anglePerImage;
    setAngle(newAngle);
  };

  // Auto-rotate
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setAngle((prev) => prev - anglePerImage);
    }, 4000);

    return () => clearInterval(autoRotateRef.current);
  }, []);

  // Scroll rotation
  useEffect(() => {
    const galleryEl = galleryRef.current;
    if (!galleryEl) return;

    const handleScroll = (e) => {
      if (scrollCooldown.current || e.deltaY === 0) return;
      scrollCooldown.current = true;

      const direction = e.deltaY > 0 ? -1 : 1;
      rotate(direction);

      setTimeout(() => {
        scrollCooldown.current = false;
      }, 500);
    };

    galleryEl.addEventListener('wheel', handleScroll);
    return () => galleryEl.removeEventListener('wheel', handleScroll);
  }, []);

  const getAltText = (img) => {
    if (img.includes('valley')) return "Scenic view of Tirthan Valley";
    if (img.includes('waterfall')) return "Beautiful Waterfall in Nature";
    if (img.includes('yoga')) return "Yoga Retreat Session";
    if (img.includes('snow')) return "Snow Covered Mountains";
    return "Travel Image";
  };

  return (
    <div className="gallery-section" ref={galleryRef}>
      <h2 className="gallery-heading">Photo Gallery</h2>

      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="carousel-image"
              style={{ transform: `rotateY(${index * anglePerImage}deg) translateZ(500px)` }}
              onClick={() => goToImage(index)}
            >
              <img
                src={img}
                alt={getAltText(img)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={() => rotate(1)}>Prev</button>
        <button className="btn" onClick={() => rotate(-1)}>Next</button>
      </div>
    </div>
  );
}
