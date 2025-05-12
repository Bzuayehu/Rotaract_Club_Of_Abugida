import "./Footer.css";
// import  logo from '../assets/logo.png'
// import  logo from '../assets/Abugida-RI24-25-Lockup w-2.png'
// import  logo from '../assets/logos/Abugida-RI24-25-Lockup co-2.png'
import logo from '../assets/logos/image-removebg-preview.png'

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        {/* Club Logo Section */}
        <div className="footer-section" data-aos="zoom-in">
          <a className="logoo" href={"/"}>
            <img 
              src={logo}
              alt="Rotaract Club of Abugida Logo"
              className="club-logo"
            />
          </a>
        </div>

        {/* Contact Info */}
        <div className="footer-section" data-aos="fade-right">
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
        </div>

        {/* Quick Links */}
        <div className="footer-section" data-aos="fade-up">
          <h3 className="footer-heading">{t("quick_links")}</h3>
          <ul className="quick-links">
            <li><Link to="/about">{t("about_us")}</Link></li>
            <li><Link to="/events">{t("news_and_events")}</Link></li>
            <li><Link to="/gallery">{t("gallery")}</Link></li>
            <li><Link to="/donate">{t("donate")}</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section" data-aos="fade-left">
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
      <div className="copyright" data-aos="fade-up">
        <p>&copy; {new Date().getFullYear()} Rotaract Club of Abugida. All Rights Reserved.</p>
      </div>
    </footer>
  );
}