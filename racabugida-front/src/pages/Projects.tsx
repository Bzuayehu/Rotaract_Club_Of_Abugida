import React, { useState } from 'react';

const allProjects = [
  { title: 'Community Cleanup', desc: 'Organized a city-wide cleanup campaign.', category: 'Community Service' },
  { title: 'Career Workshop', desc: 'Hosted a professional development seminar.', category: 'Professional Development' },
  { title: 'Sports Day', desc: 'Annual sports and games event.', category: 'Fellowship' },
  { title: 'Blood Drive', desc: 'Partnered with local hospitals for blood donation.', category: 'Community Service' },
];

const categories = ['All', 'Community Service', 'Professional Development', 'Fellowship'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const projects = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-primary mb-6">Our Projects</h2>
      <div className="flex gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium border transition ${filter === cat ? 'bg-primary text-white' : 'bg-light text-dark border-primary hover:bg-primary/10'}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white">{p.category}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{p.title}</h3>
            <p className="text-dark">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 