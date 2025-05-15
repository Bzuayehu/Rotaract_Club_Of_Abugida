import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modals/Modal";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "./PastPresidents.css";
import pp1 from "../../assets/Ipp-removebg-preview.png";
import Nardos from "../../assets/BODs/Nardos-removebg-preview.png";
import fitsum from "../../assets/BODs/fitsum-removebg-preview.png";
import tsedale from "../../assets/viceP-removebg-preview.png";
import zemenay from "../../assets/secretary-removebg-preview.png";
import Adonay from "../../assets/project_Ofcr-removebg-preview.png";

interface BOD {
  name: string;
  role: string;
  image: string;
}

interface PastPresident {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
  bods: BOD[];
}

export default function PastPresidents() {
  const { t } = useTranslation();
  const [selectedPresident, setSelectedPresident] =
    useState<PastPresident | null>(null);
  // const [activeBod, setActiveBod] = useState<number | null>(null);
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pastPresidents: PastPresident[] = [
    {
      id: 0,
      name: "Peniel Hailu",
      year: "2023-2024",
      description: t("pastPresidents.0.description"),
      image: pp1,
      bods: [
        { name: "Tsedale Gashaw", role: "Secretary", image: tsedale },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Zemenay",
          role: "Community Service Director",
          image: zemenay,
        },
        { name: "Milka", role: "Club Service Director", image: pp1 },
        { name: "Meskel Haile", role: "Public Relations Director", image: pp1 },
        {
          name: "Alazar",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Eyerusalem",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Tsedale Gashaw",
          role: "The Rotary Foundation Director",
          image: tsedale,
        },
        {
          name: "Gelila",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Adonay Haile", role: "Fundraising Director", image: Adonay },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 1,
      name: "Fitsum Tedla",
      year: "2022-2023",
      description: t("pastPresidents.1.description"),
      image: fitsum,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 2,
      name: "Melat Sisay",
      year: "2021-2022",
      description: t("pastPresidents.2.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 3,
      name: "Hiwot Nekatibeb",
      year: "2020-2021",
      description: t("pastPresidents.3.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 4,
      name: "Yonas Tadesse",
      year: "2019-2020",
      description: t("pastPresidents.4.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 5,
      name: "Nardos Seleshi",
      year: "2018-2019",
      description: t("pastPresidents.5.description"),
      image: Nardos,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 3,
      name: "Hiwot Nekatibeb",
      year: "2020-2021",
      description: t("pastPresidents.3.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 4,
      name: "Yonas Tadesse",
      year: "2019-2020",
      description: t("pastPresidents.4.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
    {
      id: 5,
      name: "Nardos Seleshi",
      year: "2018-2019",
      description: t("pastPresidents.5.description"),
      image: pp1,
      bods: [
        { name: "Sara Alemu", role: "Secretary", image: pp1 },
        { name: "Samuel Abebe", role: "Treasurer", image: pp1 },
        {
          name: "Lily Tesfaye",
          role: "Community Service Director",
          image: pp1,
        },
        { name: "Miki Belay", role: "Club Service Director", image: pp1 },
        { name: "Mimi Teshome", role: "Public Relations Director", image: pp1 },
        {
          name: "Beniam Dawit",
          role: "Membership Extension and Retention Director",
          image: pp1,
        },
        {
          name: "Kalkidan Mesfin",
          role: "Sergeant at Arms Director",
          image: pp1,
        },
        {
          name: "Nahom Tadele",
          role: "The Rotary Foundation Director",
          image: pp1,
        },
        {
          name: "Selam Wondimu",
          role: "International Service Director",
          image: pp1,
        },
        {
          name: "Hanna Getachew",
          role: "Green Rotaract Concept Director",
          image: pp1,
        },
        { name: "Yonatan Bekele", role: "Fundraising Director", image: pp1 },
        { name: "Lensa Abay", role: "Project Officer", image: pp1 },
        { name: "Ruth Mekonnen", role: "Interact Director", image: pp1 },
      ],
    },
  ];

  const openBodModal = (president: PastPresident) => {
    setSelectedPresident(president);
    document.body.style.overflow = "hidden";
  };

  const closeBodModal = () => {
    setSelectedPresident(null);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="past-presidents1" ref={cardRef}>
      <h2>{t("Past_Presidents")}</h2>
      <div className="past-presidents-list">
        {pastPresidents.map((president) => (
          <div
            key={president.id}
            className="past-president-card"
            style={{ opacity: cardInView ? 1 : 0 }}
          >
            <img src={president.image} alt={president.name} loading="lazy" />
            <h3>{president.name}</h3>
            <p>
              <strong>{t("term")}:</strong> {president.year}
            </p>
            <p>
              <strong>{t("achievements")}:</strong> {president.description}
            </p>

            <button
              onClick={() => openBodModal(president)}
              className="bod-toggle-button"
            >
              {t("View_BODs")}
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={!!selectedPresident} onClose={closeBodModal}>
        <div className="bod-modal-content">
          <h3>
            {t("b")}
            {selectedPresident?.name}'s {t("Board_of_Directors")}
          </h3>
          <div className="bod-grid">
            {selectedPresident?.bods.map((bod, index) => (
              <div key={index} className="bod-card-pp">
                <img
                  src={bod.image}
                  alt={bod.name}
                  className="bod-image"
                  loading="lazy"
                />
                <div className="bod-details">
                  <h4>{bod.name}</h4>
                  <p className="bod-role">{bod.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Link to="/#bods" className="cta-button">
        {t("back")}
      </Link>
    </div>
  );
}
