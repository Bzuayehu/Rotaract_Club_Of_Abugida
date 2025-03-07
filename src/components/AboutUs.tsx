import aboutImage from "../assets/banner.jpg";
import "./AboutUs.css";
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="aboutus" className="about-section">
      <div className="about_container">
        {/* Image Section */}
        <div className="image-container">
          <img src={aboutImage} alt="About Rotaract Club" className="about-image" />
        </div>
        
        {/* Text Section */}
        <div className="text-container">
          <h2 className="title">{t("about_us_title")}</h2>
          <p className="description">{t("about_us_paragraph_1")}</p>
          <p className="description">{t("about_us_paragraph_2")}</p>
          <p className="description">{t("about_us_paragraph_3")}</p>
        </div>
      </div>
    </section>
  );
}
