import { useState, useEffect } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

import banner4 from "../assets/Blood Donation/65th_3.jpg";
import banner5 from "../assets/Buhe Fellowship/buhe_6.jpg";
import banner6 from "../assets/Book Donation/bookdonation.jpg";
import banner7 from "../assets/Buhe Fellowship/buhe_7.jpg";
import logo from "../assets/RotOnlyLogo.png"; // Add your logo path

const Header = () => {
  const { t } = useTranslation();
  const backgrounds = [banner4, banner5, banner6, banner7];
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header-container">
      <div className="header-background-wrapper">
        <div
          className="header-background"
          style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
        />
        <div className="header-overlay" />
      </div>

      <div className="header-content header-flex">
        <div className="header-text left-align">
          <p className="sub-heading">{t("club_name")}</p>
          <h1 className="main-heading tagline">{t("tagline")}</h1>
          <p className="heading-description">{t("mission")}</p>
          <button className="submit-button">{t("join_movement")}</button>
        </div>
        <div className="header-logo">
          <img src={logo} alt="Club Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
