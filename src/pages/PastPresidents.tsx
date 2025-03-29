// import React from 'react';
import { Link } from 'react-router-dom';
import './PastPresidents.css';

const pastPresidents = [
  {
    id: 1,
    name: 'John Doe',
    term: '2020-2021',
    achievements: 'Led the club through the pandemic, organized virtual events, and increased membership by 20%.',
    image: 'https://via.placeholder.com/150', // Replace with actual image
  },
  {
    id: 2,
    name: 'Jane Smith',
    term: '2019-2020',
    achievements: 'Initiated the annual charity run, raised $50,000 for local schools, and expanded community outreach programs.',
    image: 'https://via.placeholder.com/150', // Replace with actual image
  },
  {
    id: 3,
    name: 'Michael Johnson',
    term: '2018-2019',
    achievements: 'Launched the Green Rotaract Initiative, planted 1,000 trees, and partnered with local businesses for sustainability projects.',
    image: 'https://via.placeholder.com/150', // Replace with actual image
  },
  // Add more past presidents here
];

export default function PastPresidents() {
  return (
    <div className="past-presidents">
      <h2>Past Presidents</h2>
      <div className="past-presidents-list">
        {pastPresidents.map(president => (
          <div key={president.id} className="past-president-card">
            <img src={president.image} alt={president.name} />
            <h3>{president.name}</h3>
            <p><strong>Term:</strong> {president.term}</p>
            <p><strong>Achievements:</strong> {president.achievements}</p>
          </div>
        ))}
      </div>
      <Link to="/#bods" className="cta-button">
        Back to Board of Directors
      </Link>
    </div>
  );
}