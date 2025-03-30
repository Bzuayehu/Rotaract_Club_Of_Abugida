import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("aboutus");
      if (!aboutUsSection) return;

      const aboutUsTop = aboutUsSection.getBoundingClientRect().top;
      setShowNav(aboutUsTop <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${showNav ? "show" : "hidden"}`}>
      <div className="navbar-main">
        <div className="navbar-logo">
          <a href="/">
            <img src={Logo} alt="logo" width={210} />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`navbar-links ${isMobileMenuOpen ? "mobile-show" : ""}`}
        >
          <Link to="/" className="nav-link">
            {t("home")}
          </Link>
          {/* Projects Dropdown */}
          <div
            className="projects-dropdown-container"
            onMouseEnter={() => setShowProjects(true)}
            onMouseLeave={() => setShowProjects(false)}
          >
            <span className="nav-link projects-toggle">{t("projectss")}</span>

            {showProjects && (
              <div className="projects-dropdown">
                <Link to="/community-service" className="dropdown-item">
                  {t("community_service")}
                </Link>
                <Link to="/professional-development" className="dropdown-item">
                  {t("professional_development")}
                </Link>
                <Link to="/fellowship" className="dropdown-item">
                  {t("fellowships")}
                </Link>
              </div>
            )}
          </div>
          <Link to="/directorship-positions" className="nav-link">
            {t("directorship_position")}
          </Link>
          <Link to="/contact-us" className="nav-link">
            {t("contact_us")}
          </Link>
          <Link to="/about" className="nav-link">
            {t("about_us")}
          </Link>
          <select
            className="language-selector"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <Link to="/donate" className="submit-button nav-link">
            {t("donate")}
          </Link>
        </div>
      </div>
    </div>
  );
}
