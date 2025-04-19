import "./Footer.css";
import  logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Club Logo Section */}
        <div className="footer-section">
          <a href={"/"}><img 
            src={logo}  // Update with your logo path
            alt="Rotaract Club of Abugida Logo"
            className="club-logo"
          /></a>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">{t("contact_us")}</h3>
          <ul className="contact-list">
            <li><a href="mailto:abugidarotaract@gmail.com">abugidarotaract@gmail.com</a></li>
            <li><a href="tel:+1234567890">+123 456 7890</a></li>
            <li>{t("address_description")}</li>
            <li>
              <Link 
                to="/contact-us" 
                className="quick-link-button"
              >
                {t("contact_us")}
              </Link>
            </li>
          </ul>
          {/* <button>Contact Us </button> */}

        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">{t("quick_links")}</h3>
          <ul className="quick-links">
            <li><Link to="/about">{t("about_us")}</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/donate">{t("donate")}</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">{t("follow_us")}</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/RACAbugida?mibextid=b06tZ0" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://t.me/racabugida" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://www.instagram.com/rac_abugida" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="http://www.tiktok.com/@racabugida1" aria-label="Tiktok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/company/racabugida/" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
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