import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about the Rotaract Club of Abugida and our mission to empower youth through service and leadership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              The Rotaract Club of Abugida is dedicated to empowering young leaders through community service, 
              professional development, and fellowship. We believe in the power of youth to create positive change 
              in our communities and beyond.
            </p>
            <p className="text-lg text-gray-600">
              Through our various initiatives and projects, we provide opportunities for young people to develop 
              leadership skills, build meaningful connections, and make a lasting impact on society.
            </p>
          </div>
          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold">A</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Rotaract Club of Abugida</h3>
            <p className="text-gray-200">
              Empowering youth, serving community, building leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 