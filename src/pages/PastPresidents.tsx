// import React from 'react';
import { Link } from 'react-router-dom';
import './PastPresidents.css';
import { useTranslation } from "react-i18next";
import pp1 from '../assets/Ipp-removebg-preview.png'
// import pp2 from '../assets/presidentt-removebg-preview.png'



interface PastPresident {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
}


export default function PastPresidents() {
  const { t } = useTranslation();
  // const pastPresidents: PastPresident[] = t("pastPresidents", { returnObjects: true }) as PastPresident[];
  const pastPresidents: PastPresident[] = [
    {
      id:0,
      name: "Peniel Hailu",
      year: "2023-2024",
      description:t("pastPresidents.0.description"),
      image:pp1
    },
    {
      id:0,
      name: "Fitsum Tedla",
      year: "2022-2023",
      description:t("pastPresidents.1.description"),
      image:pp1
    },
    {
      id:0,
      name: "Melat Sisay",
      year: "2021-2022",
      description:t("pastPresidents.2.description"),
      image:pp1
    },
    {
      id:0,
      name: "Hiwot Nekatibeb",
      year: "2020-2021",
      description:t("pastPresidents.3.description"),
      image:pp1
    },
    {
      id:0,
      name: "Yonas Tadesse",
      year: "2019-2020",
      description:t("pastPresidents.4.description"),
      image:pp1
    },
    {
      id:0,
      name: "Nardos Seleshi",
      year: "2018-2019",
      description:t("pastPresidents.5.description"),
      image:pp1
    },
  ]

  return (
    <div className="past-presidents1">
      <h2>{t("Past_Presidents")}</h2>
      <div className="past-presidents-list">
        {pastPresidents.map(president => (
          <div key={president.id} className="past-president-card">
            <img src={president.image} alt={president.name} />
            <h3>{president.name}</h3>
            <p><strong>{t("term")}:</strong> {president.year}</p>
            <p><strong>{t("achievements")}:</strong> {president.description}</p>
          </div>
        ))}
      </div>
      <Link to="/#bods" className="cta-button">
        Back to Board of Directors
      </Link>
    </div>
  );
}