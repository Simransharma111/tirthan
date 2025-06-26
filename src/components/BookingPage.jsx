import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/BookingPage.css";

export default function BookingPage() {
  const { state: packageData } = useLocation();
  const navigate = useNavigate();

  // Redirect if no package data is available (user came directly to /book)
  useEffect(() => {
    if (!packageData) {
      navigate('/packages');
    }
  }, [packageData, navigate]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    people: 1,
    note: '',
  });

  const ownerPhone = '918629096751'; // Replace with your WhatsApp number
  const upiId = 'owner@upi';         // Replace with actual UPI ID

  const finalPrice = packageData?.discountedPrice || packageData?.price;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsAppRequest = () => {
    const message = `
Hello! I'd like to book the following:

📦 *${packageData.name}*
📍 Location: ${packageData.location}
💰 Price: ₹${finalPrice}

🧑 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
🗓️ Dates: ${form.checkin} to ${form.checkout}
👥 People: ${form.people}
📝 Note: ${form.note}

Please confirm if it's available. Thanks!
    `;
    const link = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  if (!packageData) return null; // Prevent rendering during redirect

  return (
    <div className="booking-page">
      <h2>Booking: {packageData.name}</h2>
      <p>Location: {packageData.location}</p>
      <p>
        Price:
        {packageData.discountedPrice ? (
          <>
            <span className="original-price"> ₹{packageData.price}</span>{' '}
            <span className="discounted-price">₹{packageData.discountedPrice}</span>
          </>
        ) : (
          <> ₹{packageData.price}</>
        )}
      </p>

      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkin"
          value={form.checkin}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkout"
          value={form.checkout}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="people"
          placeholder="Number of People"
          value={form.people}
          min="1"
          onChange={handleChange}
          required
        />
        <textarea
          name="note"
          placeholder="Any special requests?"
          value={form.note}
          onChange={handleChange}
        />

        <button onClick={sendWhatsAppRequest} className="whatsapp-btn">
          Request to Book on WhatsApp
        </button>
      </form>

      <div className="payment-section">
        <h3>💸 Payment Instructions (Only After Confirmation)</h3>
        <p>Once the owner confirms availability, you can pay:</p>
        <p><strong>Amount:</strong> ₹{finalPrice}</p>
        <p><strong>UPI ID:</strong> {upiId}</p>
        <img
          src="/images/upi-qr.png"
          alt="Scan to Pay"
          className="upi-qr"
        />
        <p className="note">
          After payment, please send a screenshot on WhatsApp for confirmation.
        </p>
      </div>
    </div>
  );
}
