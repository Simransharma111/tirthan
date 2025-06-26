import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | TravelNow</title>
        <meta
          name="description"
          content="Learn more about TravelNow and the team behind it."
        />
        <link rel="canonical" href="https://tirthan.netlify.app/about" />
      </Helmet>

      {/* Company Section */}
      <section className="about-section company-section">
        <div className="about-container">
          <div className="about-left">
            <img
              src="/images/company.webp"
              className="about-img large"
              alt="Our Company"
            />
          </div>
          <div className="about-right">
            <h2>Who We Are</h2>
            <p>
              Welcome to <strong>TravelNow</strong> – a modern travel service dedicated
              to making your journeys seamless and soulful.
            </p>
            <p>
              We curate personalized travel experiences to stunning destinations — from
              tranquil valleys to adventurous peaks — helping you explore with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="about-section owner-section">
        <div className="about-container reverse">
          <div className="about-left">
            <img
              src="/images/about.jpg"
              className="about-img circle"
              alt="Company Owner"
            />
          </div>
          <div className="about-right">
            <h2>Meet Our Owner</h2>
            <p>
              Behind TravelNow is a dedicated team led by a visionary owner with a deep
              love for travel and creating unforgettable memories for clients.
            </p>
            <p>
              With a commitment to quality, safety, and personalized attention, we ensure
              every trip is as unique as you are.
            </p>
          </div>
        </div>
      </section>

     <section className="developer-note enhanced-dev-section">
  <div className="dev-container">
    <p className="dev-credit">
      Designed & developed with ❤️ by{" "}
      <a href="mailto:ssaccount.com@gmail.com" className="dev-link">
        Simran Sharma
      </a>
    </p>
    <div className="dev-actions">
      <a
        href="mailto:ssaccount.com@gmail.com"
        className="dev-button email"
        title="Send Email"
      >
        📧 Email
      </a>
      <a
        href="https://wa.me/918894576440"
        className="dev-button whatsapp"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
