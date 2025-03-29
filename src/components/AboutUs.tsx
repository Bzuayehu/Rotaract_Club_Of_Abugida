import aboutImage from "../assets/banner.jpg";
import "./AboutUs.css";
// import { useTranslation } from 'react-i18next';
// import { FiArrowRight } from 'react-icons/fi';
// import img from '../assets/Aboutt.jpg';
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us" id="aboutus">
      <div className="about-text">
        <h2>About Us</h2>
        <h3>
          <span className="highlight">Rotaract Club of Abugida</span> Providing service above self to the community
        </h3>
        <p>
          We are a dynamic digital enterprise dedicated to driving business success in
          the digital age. With a focus on innovation, user-centric design, and
          cutting-edge technology, we deliver tailored solutions that transform challenges
          into opportunities.
        </p>
        <p>
          Our team of experts collaborates closely with you to create scalable, efficient,
          and impactful results that propel your business forward.
        </p>
        <button className="cta-button">Get to know The Team →</button>
      </div>

      <div className="about-images">
        <div className="background-box"></div>
        <img src={aboutImage} alt="Tech Woman" className="top-image" />
        <img src={aboutImage} alt="Team Collaboration" className="bottom-image" />
      </div>
    </section>
  );
};

export default AboutUs;