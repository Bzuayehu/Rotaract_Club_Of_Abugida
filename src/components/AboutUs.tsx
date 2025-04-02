import buhe from "../assets/Buhe Fellowship/buhe_1.jpg";
import bd1 from "../assets/Blood Donation/65th_3.jpg";
import bd2 from "../assets/Blood Donation/65th_10.jpg";
import bkd4 from "../assets/Book Donation/bookdonation.jpg";
import "./AboutUs.css";
import { useTranslation } from 'react-i18next';
// import { FiArrowRight } from 'react-icons/fi';
// import img from '../assets/Aboutt.jpg';
import React from "react";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us" id="aboutus">
      <div className="about-text">
        <h2>{t("about_us")}</h2>
        <h3>
          <span className="highlight">{t("Rotaract_Club_of_Abugida")}</span> {t("providing_service_above")}
        </h3>
        <p className="description">{t("about_us_paragraph_1")}</p>
        <p className="description">{t("about_us_paragraph_2")}</p>
        <button className="cta-button">{t("get_to_know_the_team")} →</button>
      </div>

      <div className="about-images">
        <div className="background-box"></div>
        <img src={buhe} alt="top image" className="top-image" />
        <img src={bkd4} alt="bottom image" className="bottom-image" />
        <img src={bd2} alt="top image" className="third-image" />
        <img src={bd1} alt="top image" className="fourth-image" />


      </div>
    </section>
  );
};

export default AboutUs;