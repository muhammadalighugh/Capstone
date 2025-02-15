import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <span className="logo-text">StayHealthy</span>
          <span className="logo-icon">🩺</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/health-blog">Health Blog</a></li>
        <li><a href="/reviews">Reviews</a></li>
      </ul>
      <div className="navbar-auth">
        <a href="/signup" className="signup-btn">Sign Up</a>
        <a href="/login" className="login-btn">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;