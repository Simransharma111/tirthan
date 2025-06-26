import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Packages from './components/Packages';
import SnakeCursor from './components/SnakeCursor';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingPage from './components/BookingPage';
import FloatingWhatsappButton from './components/FloatingWhatsappButton';
import Gallary from './components/Gallary';

 function App() {
  const location = useLocation();
  const [showSnakeCursor, setShowSnakeCursor] = useState(false);

  useEffect(() => {
    // Enable snake trail only on home route
    setShowSnakeCursor(location.pathname === '/');
  }, [location]);

  return (
    <>
      {showSnakeCursor && <SnakeCursor color="blue" size={14} count={20} enabled={true} />}
      <FloatingWhatsappButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;