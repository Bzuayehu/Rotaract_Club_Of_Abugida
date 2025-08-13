import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from our club.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((news) => (
            <div key={news} className="card p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">News Article {news}</h3>
              <p className="text-gray-600 mb-4">
                This is a sample news article that provides updates about our club activities and events.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-pink-500 font-medium">Read More</span>
                <span className="text-sm text-gray-500">Dec 2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage; 