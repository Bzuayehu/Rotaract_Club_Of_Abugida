import Logo from '../assets/logo.png';
import './NavBar.css';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  

  return (
    <div className="navbar-container">
      <div className="navbar-main">
        <div className="navbar-logo">
          <a href="/"><img src={Logo} alt="logo" width={210} /></a>
        </div>

        <div className="navbar-links">
          <div className="font-bold">{t('about_us')}</div>
          <select className='language-selector' value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <button type="submit" className="submit-button">{t('donate')}</button>
        </div>
      </div>
    </div>
  );
}