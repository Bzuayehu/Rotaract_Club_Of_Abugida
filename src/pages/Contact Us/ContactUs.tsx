import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin } from 'react-icons/fa';
import './ContactUs.css';
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_o5y7aoa';
const TEMPLATE_ID = 'template_fqy1w5k';
const PUBLIC_KEY = 'IVWKu8_h_9vWeSTkB';

const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
      setToastMessage("Please enter a valid email address.");
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setToastMessage("Message sent successfully!");
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToastMessage("Failed to send message.");
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {showToast && (
        <div className={`toast-popup ${toastType}`}> 
          {toastType === 'success' ? (
            <span role="img" aria-label="success">✅</span>
          ) : (
            <span role="img" aria-label="error">❌</span>
          )}
          {toastMessage}
        </div>
      )}
      <div className="contact-container" data-aos="fade-down">
        <div className="contact-form" data-aos="fade-right">
          <h2>{t("get_in_touch")}</h2>
          <p className='getintouch'>{t("get_in_touch_description")}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("name")}</label>
              <input
                placeholder={t("full_name")}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("contact_email")}</label>
              <input
                placeholder={t("email_address")}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t("message")}</label>
              <textarea
                placeholder={t("contact_form_message")}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : t("contact_form_submit")}
            </button>
          </form>
        </div>
        
        <div className="contact-info1" data-aos="fade-left">
          <h2>{t("contact_us_capitalized")}</h2>
          <div className="info-item">
            <h3>{t("address")}</h3>
            <p>{t("address_description")}</p>
          </div>
          <div className="info-item">
            <h3>{t("contact_phone")}</h3>
             <p>+251 92 017 5243</p>
            <p>+251 94 122 9771</p>
          </div>
          <div className="info-item">
            <h3>{t("contact_email")}</h3>
            <p>abugidarotaract@gmail.com</p>
          </div>
          <div className="social-links">
            <h3>{t("follow_us")}:</h3>
            <div className="social-icons" data-aos="zoom-in">
              <a href="https://www.facebook.com/RACAbugida?mibextid=b06tZ0" aria-label="Facebook" className='facebook-icon'><FaFacebook/></a>
              <a href="https://www.instagram.com/rac_abugida" aria-label="Instagram" className='instagram-icon'><FaInstagram/></a>
              <a href="https://t.me/racabugida" aria-label="Telegram" className='telegram-icon'><FaTelegram/></a>
              <a href="http://www.tiktok.com/@racabugida1" aria-label="Tiktok" className='tiktok-icon'><FaTiktok/></a>
              <a href="https://www.linkedin.com/company/racabugida/" aria-label="Linkedin" className='linkedin-icon'><FaLinkedin/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;