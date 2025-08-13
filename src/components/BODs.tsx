// import React from 'react';
import "./BODs.css";
import Ipp from "../assets/BODs/2025:26/impp-removebg-preview.png";
import president from "../assets/viceP-removebg-preview.png";
import vice from "../assets/BODs/2025:26/viceP-removebg-preview-2 (1).png"
import communityServc from "../assets/BODs/2025:26/communityService-removebg-preview.png";
import clubservc from "../assets/BODs/2025:26/clubServicee.png";
import Pr from "../assets/BODs/2025:26/prrr.png";
import secretary from "../assets/BODs/2025:26/secretaryy (1).png";
import membership from "../assets/BODs/2025:26/merd-removebg-preview.png";
import treasurer from "../assets/membership-removebg-preview.png";
import sergntArm from "../assets/BODs/2025:26/sergeantaermm.png";
import trf from "../assets/BODs/International_Srvcc-removebg-preview-2-2.png";
import projectOfcr from "../assets/BODs/2025:26/Po.png";
import grc from "../assets/BODs/2025:26/grc-removebg-preview (1).png";
import fundraising from "../assets/BODs/ClubChampionDr-removebg-preview (1).png";
import interact from "../assets/buze-removebg-preview.png"
import internationalServc from "../assets/BODs/2025:26/internationalService-removebg-preview.png";
import professionalDev from "../assets/BODs/2025:26/pddd.png";
import { FaLinkedin, FaFacebook, FaHistory, FaTelegram } from "react-icons/fa"; // Import social media icons
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import { Link } from 'react-router-dom';

export default function BODs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const { t } = useTranslation();

  const boardMembers = [
    {
      id: 0,
      name: "Tsedale Gashaw",
      role: t("President"),
      image: president,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://t.me/TensuBeke",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 1,
      name: "Tensae Bekele",
      role: t("Immediate_Past_President"),
      image: Ipp,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 3,
      name: "Zemenay Tsegaye",
      role: t("Vice_President"),
      image: vice,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 4,
      name: "Ashenafi Getachew",
      role: t("Community_Service_Director"),
      image: communityServc,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 5,
      name: "Jitu Taye",
      role: t("Club_Service_Director"),
      image: clubservc,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 6,
      name: "Solomon Asefa",
      role: t("Public_Relations_Director"),
      image: Pr,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 7,
      name: "Gelila G/Hiwot",
      role: t("Secretary"),
      image: secretary,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 8,
      name: "Alemayehu Chala",
      role: t("Memebership_Extension_and_Retention_Director"),
      image: membership,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://t.me/maranatajesus1",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 9,
      name: "Lemmi Lemma Lejisa",
      role: t("Treasurer"),
      image: treasurer,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 10,
      name: "Milka Endrias",
      role: t("Sergeant_at_Arms_Director"),
      image: sergntArm,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 11,
      name: "Bezawit Tsegaye",
      role: t("The_Rotary_Foundation_Director"),
      image: trf,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 12,
      name: "Nardos Guder",
      role: t("Project_Officer"),
      image: projectOfcr,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 13,
      name: "Sirak Moges",
      role: t("Green_Rotaract_Concept_Director"),
      image: grc,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 14,
      name: "Aschalew Melese",
      role: t("Fundraising_Director"),
      image: fundraising,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 15,
      name: "Bzuayehu Mamuye",
      role: t("Interact_Director"),
      image: interact,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 16,
      name: "Metabel Mitiku",
      role: t("International_Service_Director"),
      image: internationalServc,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      id: 17,
      name: "Bethelhem Birhanu",
      role: t("Professional_Development_Director"),
      image: professionalDev,
      socialMedia: {
        linkedin: "https://www.linkedin.com",
        telegram: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
  ];

  return (
    <div className="bods" id="bods" data-aos="fade-up">
      <h2 className="bod-title" data-aos="fade-up">
        {" "}
        {t("BOD_Title")} 2025/2026
      </h2>
      <p className="bods-description" data-aos="fade-up" data-aos-delay="100">
        {t("bods_description")}
      </p>
      <p className="bod-quote-text" data-aos="fade-up" data-aos-delay="200">
        <blockquote className="bod-quote">
          <em data-aos="fade-left">“{t("bod_quote")}”</em>
        </blockquote>
      </p>

      <div className="bods-list" data-aos="fade-up">
        <Link
          to="/past-presidents"
          className="past-presidents-link"
          data-aos="zoom-in"
        >
          <div className="bod-card past-presidents2">
            <FaHistory className="animated-icon" />
            <h3>{t("Past_Presidents")}</h3>
            <p>{t("Explore_the_legacy_of_our_past_leaders")}</p>
          </div>
        </Link>

        {boardMembers.map((member, index) => {
  const animationTypes = ["fade-up", "fade-left", "fade-right", "flip-up", "zoom-in-up"];
  const cardAos = animationTypes[index % animationTypes.length];

  return (
    <div
      key={member.id}
      className="bod-card"
      data-aos={cardAos}
      data-aos-delay={`${index * 150}`}
      data-aos-duration="1000"
    >
      <img
        src={member.image}
        alt={member.name}
        data-aos="zoom-in"
        data-aos-delay={`${index * 150 + 50}`}
        data-aos-duration="800"
      />
      <h3
        data-aos="fade-right"
        data-aos-delay={`${index * 150 + 100}`}
        data-aos-duration="800"
      >
        {member.name}
      </h3>
      <p
        data-aos="fade-left"
        data-aos-delay={`${index * 150 + 150}`}
        data-aos-duration="800"
      >
        <Link to={`/directorship-positions#position-${member.id}`}>
          {member.role}
        </Link>
      </p>
      <div
        className="social-media-links"
        data-aos="fade-up"
        data-aos-delay={`${index * 150 + 200}`}
        data-aos-duration="800"
      >
        <a
          href={member.socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <Link
          to={`${member.socialMedia.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </Link>
        <a
          href={member.socialMedia.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
}
