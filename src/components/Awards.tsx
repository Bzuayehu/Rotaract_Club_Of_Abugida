import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Awards.css";
import image from "../assets/certeficate.png";

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
      <i className="fas fa-trophy"></i>
      <h3>{t(title)}</h3>
      <p>{description}</p>
    </div>
  );
};

const AwardsSection = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(4);

  const awards = [
    {
      key: "best_community_service",
      image: image,
    },
    {
      key: "best_club_year",
      image: image,
    },
    {
      key: "blood_donation",
      image: image,
    },
    {
      key: "tana_awards",
      image: image,
    },
    {
      key: "summer_volunteer",
      image: image,
    },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2 className="award-recognition-title">
        {t("awards_recognition_title")}
      </h2>
      <p>{t("awards_recognition_description")}</p>
      <div className="award-grid">
        {awards.slice(0, visibleCount).map((award, index) => (
          <AwardCard
            key={index}
            title={t(`${award.key}.title`)}
            description={t(`${award.key}.description`)}
            image={award.image}
          />
        ))}
      </div>
      {visibleCount < awards.length && (
        <button
          className="see-more-button"
          onClick={() => setVisibleCount(awards.length)}
        >
          {t("see_more")}
        </button>
      )}
    </section>
  );
};

export default AwardsSection;
