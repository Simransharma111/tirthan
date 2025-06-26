import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import packages from '../data/demoPackages.json';
import '../styles/Packages.css';

export default function Packages() {
  const navigate = useNavigate();

  const handleBooking = (pkg) => {
    navigate('/book', { state: pkg });
  };

  return (
    <>
      <Helmet>
        <title>Explore Packages | Tirthan Valley Tours</title>
        <meta
          name="description"
          content="Explore the best travel packages in Tirthan Valley including mountain adventures, riverside camps, and local stays."
        />
        <meta
          name="keywords"
          content="Tirthan Valley packages, travel deals, Himachal tour, riverside stay, mountain camp, book now"
        />
        <link rel="canonical" href="https://yourwebsite.com/packages" />
      </Helmet>

      <section className="packages-section">
        {/* <div className="packages-heading">
          <h2>Explore Our Packages</h2>
          <p>Discover the best travel experiences in Tirthan Valley</p>
        </div> */}

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="package-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="package-image"
              />
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <p className="package-location">{pkg.location}</p>
                <p className="package-desc">{pkg.description}</p>

                <div className="package-price">
                  {pkg.discountedPrice ? (
                    <>
                      <span className="original-price">₹{pkg.price}</span>
                      <span className="discounted-price">
                        ₹{pkg.discountedPrice}
                      </span>
                      {pkg.offer && (
                        <p className="offer-text">{pkg.offer}</p>
                      )}
                    </>
                  ) : (
                    <>₹{pkg.price}</>
                  )}
                </div>

                <button
                  className="package-button"
                  onClick={() => handleBooking(pkg)}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
