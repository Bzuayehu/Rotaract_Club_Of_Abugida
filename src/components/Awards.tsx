import React from 'react';
import { useTranslation } from 'react-i18next';
import './awards.css'; // Make sure your CSS file is properly linked

interface AwardCardProps {
  title: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ title, description }) => {
  const { t } = useTranslation(); // Now using the translation hook

  return (
    <div className="award-card">
      <i className="fas fa-trophy" style={{ color: ' hsl(51, 60%, 60%)' }} />
      <h3>{t(title)}</h3> {/* Translate titles */}
      <p>{description}</p>
    </div>
  );
};

const AwardsSection = () => {
  const { t } = useTranslation(); // Translation hook in main component

  const awards = [
    {
      title: 'Best Community Service', // Translation key
      description: '26th District Conference Assembly (DCA), 2012/13',
    },
    {
      title: 'best club year',
      description: 'Ethiopia Rotaract Country Team, 2013/14',
    },
    {
      title: 'blood donation',
      description: 'Ministry of Health, 2015/16',
    },
    {
      title: 'tana awards',
      description: 'Held in Bahir Dar, 2018/19',
    },
    {
      title: 'summer volunteer',
      description: 'Addis Ababa City Administration, 2020/21',
    },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2>{t('awards_recognition_title')}</h2> {/* Translate section title */}
      <p>{t('awards_recognition_description')}</p> {/* Translate description */}
      <div className="award-grid">
        {awards.map((award, index) => (
          <AwardCard key={index} title={award.title} description={award.description} />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;