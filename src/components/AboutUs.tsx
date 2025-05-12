import buhe from "../assets/Buhe-Fellowship/buhe_1.jpg";
import bd1 from "../assets/Blood Donation/65th_3.jpg";
import bd2 from "../assets/Blood Donation/65th_10.jpg";
import bkd4 from "../assets/Book Donation/bookdonation.jpg";
import "./AboutUs.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-us" id="aboutus">
      <div className="about-text" data-aos="fade-right">
        <h2 data-aos="fade-up" data-aos-delay="100">{t("about_us")}</h2>
        <h3 data-aos="fade-up" data-aos-delay="200">
          <span className="highlight">{t("Rotaract_Club_of_Abugida")}</span> {t("providing_service_above")}
        </h3>
        <p className="description" data-aos="fade-up" data-aos-delay="300">{t("about_us_paragraph_1")}</p>
        <p className="description" data-aos="fade-up" data-aos-delay="400">{t("about_us_paragraph_2")}</p>
        <Link to="/about">
          <button className="cta-button" data-aos="fade-up" data-aos-delay="500">
            {t("get_to_know_the_team")} →
          </button>
        </Link>
      </div>

      <div className="about-images" data-aos="fade-left">
        <div className="background-box" data-aos="zoom-in"  data-aos-delay="100"></div>
        <img src={buhe} alt="top image" className="top-image" data-aos="fade-left" data-aos-delay="300" />
        <img src={bkd4} alt="bottom image" className="bottom-image" data-aos="fade-right" data-aos-delay="200" />
        <img src={bd2} alt="top image" className="third-image" data-aos="zoom-in" data-aos-delay="400" />
        <img src={bd1} alt="top image" className="fourth-image" data-aos="zoom-in" data-aos-delay="500" />
      </div>
    </section>
  );
};

export default AboutUs;