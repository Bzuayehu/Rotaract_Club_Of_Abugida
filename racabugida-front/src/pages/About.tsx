import React from 'react';

const About: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
    <p className="mb-4 text-lg text-dark">
      The Rotaract Club of Abugida is a youth-led organization dedicated to community service, professional development, and fellowship. We empower young people to create positive change in their communities and beyond.
    </p>
    <h3 className="text-xl font-semibold text-secondary mt-8 mb-2">Our Mission</h3>
    <p className="mb-4 text-dark">To develop leadership and professional skills, promote ethical standards, and foster goodwill and peace through service.</p>
    <h3 className="text-xl font-semibold text-secondary mt-8 mb-2">Our Vision</h3>
    <p className="mb-4 text-dark">To be a leading force for positive change, inspiring youth to serve and lead with integrity.</p>
    <h3 className="text-xl font-semibold text-secondary mt-8 mb-2">Our Values</h3>
    <ul className="list-disc pl-6 text-dark">
      <li>Service Above Self</li>
      <li>Leadership</li>
      <li>Fellowship</li>
      <li>Diversity & Inclusion</li>
      <li>Integrity</li>
    </ul>
  </div>
);

export default About; 