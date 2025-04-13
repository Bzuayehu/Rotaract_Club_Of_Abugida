import React from 'react';
import { useTranslation } from 'react-i18next';
import './Awards.css'; // Ensure your CSS file is properly linked
import image from '../assets/certeficate.png'

interface AwardCardProps {
  title: string;
  description: string;
  image: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ title, description, image }) => {
  const { t } = useTranslation();

  return (
    <div className="award-card">
      <img src={image} alt={title} className="certificate-img" />
      <i className='fas fa-trophy'></i>
      <h3>{t(title)}</h3>
      <p>{description}</p>
    </div>
  );
};

const AwardsSection = () => {
  const { t } = useTranslation();

  const awards = [
    {
      key:'best_community_service',
      image: image,
    },
    {
      key:'best_club_year',
      image:image,
    },
    {
      key:'blood_donation',
      image: image,
    },
    {
      key:'tana_awards',
      image: image,
    },
    {
      key:'summer_volunteer',
      image: image,
    },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2 className='award-recognition-title'>{t('awards_recognition_title')}</h2>
      <p>{t('awards_recognition_description')}</p>
      <div className="award-grid">
        {awards.map((award, index) => (
          <AwardCard key={index} title={t(`${award.key}.title`)} description={t(`${award.key}.description`)} image={award.image} />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
