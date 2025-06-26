import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar';
import Gallary from '../components/Gallary';
import Packages from '../components/Packages';
import Footer from '../components/Footer';
import EscapeScreen from '../components/EscapeScreen';
import Hero from '../components/Hero';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';
// import About from '../pages/About';
// import Contact from '../pages/Contact';

export default function Home() {
  const [hasEscaped, setHasEscaped] = useState(() => {
    // Only show EscapeScreen on first-ever visit
    const visited = localStorage.getItem('hasVisited');
    return visited === 'true' ? true : false;
  });

  useEffect(() => {
    if (hasEscaped) {
      AOS.init({ duration: 1000 });
    }
  }, [hasEscaped]);

  const handleEscape = () => {
    setHasEscaped(true);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <>
      {!hasEscaped && <EscapeScreen onEscape={handleEscape} />}
      {hasEscaped && (
        <motion.div
          className="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <div id="hero"><Hero /></div>
          <div id="gallary"><Gallary /></div>

          <div id="packages" className="text-center mt-10 mb-5">
            <h1 className="text-3xl font-bold">Explore Our Packages</h1>
            <p className="text-gray-600">Discover the best travel packages tailored for you</p>
          </div>
          <Packages />
{/* 
          <div id="about"><About /></div>
          <div id="contact"><Contact /></div> */}

          <Footer />
          <FloatingWhatsappButton />
        </motion.div>
      )}
    </>
  );
}
