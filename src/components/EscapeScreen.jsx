import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/EscapeScreen.css';

export default function EscapeScreen({ onEscape }) {
  const [startEscape, setStartEscape] = useState(false);

  const handleEscape = () => {
    setStartEscape(true);

    // Wait for tent animation to finish, then trigger actual page content
    setTimeout(() => {
      onEscape(); // calls the main Home component to reveal Hero
    }, 2500); // should match animation duration
  };

  return (
    <AnimatePresence>
      <div className="tent-container">
        {/* Background video (starts hidden, shows only after clicking) */}
        {startEscape && (
          <video
            className="bg-video"
            src="/videos/bgg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        {/* Tent flaps */}
        <motion.div
          className="tent tent-left"
          initial={{ x: 0 }}
          animate={startEscape ? { x: '-100%' } : { x: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.div
          className="tent tent-right"
          initial={{ x: 0 }}
          animate={startEscape ? { x: '100%' } : { x: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Centered text + escape button (fades out on click) */}
        {!startEscape && (
          <motion.div
            className="tent-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Feeling tired? Wanna escape?</h1>
            <p>Step into a world of peace, mountains, and calm.</p>
            <button onClick={handleEscape}>Escape</button>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
