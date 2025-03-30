// import React from 'react';
import './BODs.css';
import Ipp from '../assets/Ipp-removebg-preview.png';
import president from '../assets/presidentt-removebg-preview.png';
import vice from '../assets/viceP-removebg-preview.png';
import communityServc from '../assets/CommunityServ-removebg-preview.png';
import clubservc from '../assets/ClubServc-removebg-preview.png';
// import pr from '../assets/Pr-removebg-preview.png';
import secretary from '../assets/secretary-removebg-preview.png';
import membership from '../assets/membership-removebg-preview.png';
import treasurer from '../assets/Treasurer-removebg-preview.png';
import sergntArm from '../assets/sergentArm-removebg-preview.png';
import trf from '../assets/buze-removebg-preview.png';
import projectOfcr from '../assets/project_Ofcr-removebg-preview.png';
import grc from '../assets/Grc-removebg-preview-2.png';
import fundraising from '../assets/Fundraisng-removebg-preview.png';
import interact from '../assets/Interact-removebg-preview.png';
import internationalServc from '../assets/International_Srvcc-removebg-preview-2.png';
import professionalDev from '../assets/International_Servc-removebg-preview.png';
import { FaLinkedin, FaFacebook, FaHistory, FaTelegram } from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function  BODs() {
  const boardMembers = [
    {
      id: 0,
      name: 'Tensae Bekele',
      role: 'President',
      image: president,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        telegram: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 1,
      name: 'Peniel Hailu',
      role: 'Immediate Past President',
      image: Ipp,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 3,
      name: 'Tsedale',
      role: 'Vice President',
      image: vice,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 4,
      name: 'Metabel Mitiku',
      role: 'Community Service Director',
      image: communityServc,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 5,
      name: 'Alemayehu chala',
      role: 'Club Service Director',
      image: clubservc,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 6,
      name: 'Nardos',
      role: 'Public Relations Director',
      image: secretary,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 7,
      name: 'Zemenay',
      role: 'Secretary',
      image: secretary,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 8,
      name: 'Lemmi Lemma Lejisa',
      role: 'Memebership Extension and Retention Director',
      image: membership,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 9,
      name: 'Solomon',
      role: 'Treasurer',
      image: treasurer,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 10,
      name: 'Gitu Taye',
      role: 'Sergeant at Arms Director',
      image: sergntArm,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 11,
      name: 'Bzuayehu Mamuye',
      role: 'The Rotary Foundation Director',
      image: trf,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 12,
      name: 'Adonias',
      role: 'Project Officer',
      image: projectOfcr,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 13,
      name: 'Tamene',
      role: 'Green Rotaract Concept Director',
      image: grc,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 14,
      name: 'Ashenafi Getachew',
      role: 'Fundraising Director',
      image: fundraising,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 15,
      name: 'Bethelhem Birhanu', 
      role: 'Interact Director',
      image: interact,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 16,
      name: 'Bezawit',
      role: 'International Service Director',
      image: internationalServc,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 17,
      name: 'Gelila',
      role: 'Professional Development Director',
      image: professionalDev,
      socialMedia: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
      },
    },
  ];

  return (
    <div className="bods" id='bods'>
      <h2>Board of Directors 2024/2025</h2>
      <div className="bods-list">
        {/* Add Past Presidents Card with Animated Icon */}
        <div className="bod-card past-presidents1">
          <Link to="/past-presidents" className="past-presidents-link">
            <FaHistory className="animated-icon" /> {/* Animated icon */}
            <h3>Past Presidents</h3>
            <p>Explore the legacy of our past leaders.</p>
          </Link>
        </div>
        {boardMembers.map(member => (
          <div key={member.id} className="bod-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p> 
                <Link to={`/directorship-positions#position-${member.id}`} >{member.role}</Link>  
            </p>
            <div className="social-media-links">
              <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <Link to={`${member.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </Link>
              <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
