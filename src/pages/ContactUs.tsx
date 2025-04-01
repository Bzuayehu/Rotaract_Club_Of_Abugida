import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
// import { Link } from 'react-router-dom';
import './ContactUs.css';
// import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6';

const ContactUs: React.FC = () => {
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
        <h2>Get In Touch</h2>
        <p>Leave us a message, and we'll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              placeholder='Full Name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder='Email Address'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Write your message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      
      <div className="contact-info1">
        <h2>CONTACT US</h2>
        <div className="info-item">
          <h3>Address</h3>
          <p>4 Kilo, Addis Ababa, Ethiopia</p>
        </div>
        
        <div className="info-item">
          <h3>Phone</h3>
          <p>+251938594992</p>
        </div>
        
        <div className="info-item">
          <h3>Email</h3>
          <p>contactus@hummflytech.com</p>
        </div>
        
        <div className="social-links">
          <h3>Follow Us:</h3>
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