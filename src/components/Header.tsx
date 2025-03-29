import HeaderImage from '../assets/hero.jpg';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <p className="sub-heading">Abugida Family</p>
          <h1 className="main-heading">Join the Global Movement of Young Leaders</h1>
          <p className="description">
            Taking action to build a better world through community service, leadership, and innovation.
          </p>
          <a href="#joinus" className="cta-button">Join the Movement</a>
        </div>
        <div className="header-image">
          <img src={HeaderImage} alt="Header" />
        </div>
      </div>
    </div>
  );
};

export default Header;
