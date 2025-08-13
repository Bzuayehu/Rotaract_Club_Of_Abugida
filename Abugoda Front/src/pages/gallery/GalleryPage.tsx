import React from 'react';

const GalleryPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our events, projects, and community activities through our photo gallery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((photo) => (
            <div key={photo} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Photo {photo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 