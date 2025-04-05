import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
// import { Link } from 'react-router-dom';
import './ContactUs.css';
// import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6';
import { useTranslation } from "react-i18next";


const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>{t("get_in_touch")}</h2>
        <p className='getintouch'>{t("get_in_touch_description")}</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t("name")}:</label>
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
            <label htmlFor="email">{t("contact_email")}:</label>
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
            <label htmlFor="message">{t("message")}:</label>
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
          
          <button type="submit" className="submit-btn">{t("contact_form_submit")}</button>
        </form>
      </div>
      
      <div className="contact-info1">
        <h2>{t("contact_us_capitalized")}</h2>
        <div className="info-item">
          <h3>{t("address")}</h3>
          <p>{t("address_description")}</p>
        </div>
        
        <div className="info-item">
          <h3>{t("contact_phone")}</h3>
          <p>+251938594992</p>
        </div>
        
        <div className="info-item">
          <h3>{t("contact_email")}</h3>
          <p>abugidarotaract@gmail.com</p>
        </div>
        
        <div className="social-links">
          <h3>{t("follow_us")}:</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/RACAbugida?mibextid=b06tZ0" aria-label="Facebook" className='facebook-icon'><FaFacebook/></a>
            <a href="https://www.instagram.com/rac_abugida" aria-label="Instagram" className='instagram-icon'><FaInstagram/></a>
            <a href="https://t.me/racabugida" aria-label="Telegram" className='telegram-icon'><FaTelegram/></a>
            <a href="http://www.tiktok.com/@racabugida1" aria-label="Tiktok" className='tiktok-icon'><FaTiktok/></a>
            <a href="https://www.linkedin.com/company/racabugida/" aria-label="Linkedin" className='linkedin-icon'><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;