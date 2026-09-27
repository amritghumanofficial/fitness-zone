import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col footer-about">
          <h2 className="footer-logo">
            Fitness <span>Zone</span>
          </h2>

          <p className="footer-text">
            Transform your body, transform your life. Fitness Zone is a modern
            fitness community helping people become stronger, healthier, and
            more confident.
          </p>

          <div className="footer-socials">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <FaFacebook />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <FaInstagram />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <FaYoutube />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <FaLinkedin />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div className="footer-col footer-links">
          <h3 className="footer-title">Quick Links</h3>

          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-services">
          <h3 className="footer-title">Services</h3>

          <ul className="footer-list">
            <li>Personal Training</li>
            <li>Strength Training</li>
            <li>Cardio Training</li>
            <li>Yoga Classes</li>
            <li>Weight Loss Program</li>
            <li>Nutrition Guidance</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h3 className="footer-title">Contact Info</h3>

          <ul className="footer-list">
            <li>📍 Model Town, Ludhiana, Punjab</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 info@fitnesszone.com</li>
            <li>⏰ Mon-Sat: 5:00 AM - 10:00 PM</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
         Copyright &copy; 2026 Fitness Zone. All Rights Reserved.
        </p>

        <p className="developer">
          Designed & Developed by {""}
          <a
            href="https://amritghuman.site"
            target="_blank"
            className="developer-link"
          >
            Amrit Ghuman
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
