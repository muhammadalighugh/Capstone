import React from "react";
import "../pages/Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Health <br /><span className="highlight">Our Responsibility</span></h1>
          <p>
            "Embrace the art of self-care, for a healthy mind and body forge the foundation of a vibrant life.
            Wellness is not just a destination; it's a journey of mindful choices and daily transformations.
            Nurture your health with love, and watch it bloom into a beacon of joy and vitality."
          </p>
          <a href="#" className="cta-button">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;