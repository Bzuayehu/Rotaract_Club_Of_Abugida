import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the impactful projects and initiatives we've undertaken to serve our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="card p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-600 mb-4">
                This is a sample project description that showcases our community service initiatives.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-pink-500 font-medium">Completed</span>
                <span className="text-sm text-gray-500">2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 