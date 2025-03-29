import "./Footer.css";
import  logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Club Logo Section */}
        <div className="footer-section">
          <img 
            src={logo}  // Update with your logo path
            alt="Rotaract Club of Abugida Logo"
            className="club-logo"
          />
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="contact-list">
            <li><a href="mailto:contact@abugida.org">contact@abugida.org</a></li>
            <li><a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Addis Ababa, Ethiopia</li>
            <li>
              <Link 
                to="/contact-us" 
                className="quick-link-button"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* <button>Contact Us </button> */}

        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
          <a href="https://linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" aria-label="Tiktok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Rotaract Club of Abugida. All Rights Reserved.</p>
      </div>
    </footer>
  );
}