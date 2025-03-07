import { useState, useEffect } from 'react';
import './Header.css'; // Import your CSS file
import { useTranslation } from 'react-i18next';

// Import images
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/community.jpg';
import banner3 from '../assets/communityservice.jpg';

const Header = () => {
  const { t } = useTranslation();

  // Array of background images (imported correctly)
  const backgrounds = [banner1, banner2, banner3];

  // State to hold the current background image
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the background every 5 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header-container">
      <div
        className="header-background"
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      />
      <div className="header-content">
        <div className="header-text">
          <p className="sub-heading">{t('club_name')}</p>
          <h1 className="main-heading">{t('tagline')}</h1>
          <p className="heading-description">
          {t('mission')}
          </p>
          <button className="submit-button">{t('join_movement')}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
