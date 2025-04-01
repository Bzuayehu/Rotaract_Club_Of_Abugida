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
      title: 'Best Community Service',
      description: '26th District Conference Assembly (DCA), 2012/13',
      image: image,
    },
    {
      title: 'Best Club Of The Year',
      description: 'Ethiopia Rotaract Country Team, 2013/14',
      image:image,
    },
    {
      title: 'Blood Donation',
      description: 'Ministry of Health, 2015/16',
      image: image,
    },
    {
      title: 'Tana Awards',
      description: 'Held in Bahir Dar, 2018/19',
      image: image,
    },
    {
      title: 'Summer Volunteer',
      description: 'Addis Ababa City Administration, 2020/21',
      image: image,
    },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2 className='award-recognition-title'>{t('awards_recognition_title')}</h2>
      <p>{t('awards_recognition_description')}</p>
      <div className="award-grid">
        {awards.map((award, index) => (
          <AwardCard key={index} title={award.title} description={award.description} image={award.image} />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
