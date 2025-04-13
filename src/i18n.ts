import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import am from './locales/am.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    am: { translation: am },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
