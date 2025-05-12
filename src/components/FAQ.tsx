import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/Coffee-time/best-pic.jpg';

// Sample project data interface
interface Project {
  id: number;
  title: string;
  description: string;
  type: 'Community Service' | 'Leadership' | 'Fundraising' | 'Awareness';
  image: string;
}

const projectTypeColor: Record<Project['type'], string> = {
  'Community Service': 'border-blue-500',
  'Leadership': 'border-green-500',
  'Fundraising': 'border-yellow-500',
  'Awareness': 'border-purple-500',
};

const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing clean water to underserved communities.',
    type: 'Community Service',
    image: img,
  },
  {
    id: 2,
    title: 'Leadership Workshop 2025',
    description: 'Empowering youth through leadership training.',
    type: 'Leadership',
    image: img,
  },
  {
    id: 3,
    title: 'Vision Art Exhibition',
    description: 'Raising funds for eye care through community art.',
    type: 'Fundraising',
    image: img,
  },
  {
    id: 4,
    title: 'Mental Health Awareness Week',
    description: 'Spreading awareness on mental health and well-being.',
    type: 'Awareness',
    image: img,
  },
  {
    id: 3,
    title: 'Vision Art Exhibition',
    description: 'Raising funds for eye care through community art.',
    type: 'Fundraising',
    image: img,
  },
  {
    id: 4,
    title: 'Mental Health Awareness Week',
    description: 'Spreading awareness on mental health and well-being.',
    type: 'Awareness',
    image: img,
  },
  {
    id: 3,
    title: 'Vision Art Exhibition',
    description: 'Raising funds for eye care through community art.',
    type: 'Fundraising',
    image: img,
  },
  {
    id: 4,
    title: 'Mental Health Awareness Week',
    description: 'Spreading awareness on mental health and well-being.',
    type: 'Awareness',
    image: img,
  },
];

const FAQ: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(sampleProjects);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      sampleProjects.filter(project =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Impactful Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full p-3 mb-8 border rounded-lg shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`border-t-4 ${projectTypeColor[project.type]} bg-white rounded-xl shadow-lg overflow-hidden`}
            data-aos="fade-up"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <span className={`inline-block text-xs font-semibold mb-2 uppercase ${projectTypeColor[project.type]}`}>{project.type}</span>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">View More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
