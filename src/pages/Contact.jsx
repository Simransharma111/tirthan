import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Contact Us | TravelNow</title>
        <meta
          name="description"
          content="Get in touch with TravelNow for booking inquiries, support, or general questions."
        />
        <meta
          name="keywords"
          content="contact travelnow, support, travel help, booking inquiry"
        />
        <link rel="canonical" href="https://tirthan.netlify.app/contact" />
      </Helmet>

      <div style={{ marginTop: "6rem" }}> {/* Adds space after Navbar */}
        <section
          style={{
            padding: "2rem",
            maxWidth: "600px",
            margin: "auto",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Contact Us
          </h1>

          <form
            action="https://formsubmit.co/ssacount.com@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="https://tirthan.netlify.app/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="name"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                background: "teal",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
