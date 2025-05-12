import { useTranslation } from 'react-i18next';
import './DirectorshipPositions.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function DirectorshipPositions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { t } = useTranslation();
  
  const positionKeys = [
    'president',
    'vice_president',
    'secretary',
    'communityservice',
    'treasurer',
    'professionaldevelopment',
    'club_service',
    'public_relations',
    'international_service',
    'interact_club',
    'project_officer',
    'sergeant_at_arms',
    'membership_extension',
    'green_rotaract',
    'The_Rotary_Foundation',
    'fundraising_director'
  ];

  return (
    <div className="directorship-positions" data-aos="fade-up" data-aos-delay="100">
      <h1 data-aos="zoom-in" data-aos-delay="200">
        {t('directorship_positions_title')}
      </h1>
      <div className="positions-list">
        {positionKeys.map((key, id) => (
          <div
            key={id}
            className="position-card"
            data-aos="fade-up"
            data-aos-delay={id * 100}
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="title" data-aos="fade-right">{t(`${key}.title`)}</h2>
            <p className="description" data-aos="fade-left">{t(`${key}.description`)}</p>
            <div className="details" data-aos="fade-in">
              <h3>{t('duties')}</h3>
              <ul>
                {(t(`${key}.duties`, { returnObjects: true }) as string[]).map((duty, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                    {duty}
                  </li>
                ))}
              </ul>
              <h3>{t('powers')}</h3>
              <ul>
                {(t(`${key}.powers`, { returnObjects: true }) as string[]).map((power, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                    {power}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}