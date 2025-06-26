// components/FloatingWhatsappButton.jsx
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20trip!"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
