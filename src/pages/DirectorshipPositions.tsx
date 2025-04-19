import { useTranslation } from 'react-i18next';
import './DirectorshipPositions.css';

export default function DirectorshipPositions() {
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
    <div className="directorship-positions">
      <h1>{t('directorship_positions_title')}</h1>
      <div className="positions-list">
        {positionKeys.map((key, id) => (
          <div key={id} className="position-card">
            <h2>{t(`${key}.title`)}</h2>
            <p className="description">{t(`${key}.description`)}</p>
            <div className="details">
              <h3>{t('duties')}</h3>
              <ul>
                {(t(`${key}.duties`, { returnObjects: true }) as string[]).map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
              <h3>{t('powers')}</h3>
              <ul>
                {(t(`${key}.powers`, { returnObjects: true }) as string[]).map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}