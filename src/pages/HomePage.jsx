import React from "react";
import "../pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="services-section">
        <h2>Best Services</h2>
        <p>Love yourself enough to live a healthy lifestyle.</p>
        <div className="services-container">
          <div className="service-card">
            <img src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-telemedicine-medicine-internet-online-consultation-png-image_4645191.png" alt="Instant Consultation" />
            <h3>Instant Consultation</h3>
          </div>
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDinL634GAIpG__Os0juPeyx_m5DtmtLhWg&s" alt="Book an Appointment" />
            <h3>Book an Appointment</h3>
          </div>
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtRXQlTaLlpIgXih12D-0L_WsPT8MchOsCw&s" />
            <h3>Self Checkup</h3>
          </div>
          <div className="service-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTw-XotQ-Z1gee3q-6taeM9KWBa6AUGv4ajQ&s" alt="Health Tips and Guidance" />
            <h3>Health Tips and Guidance</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;