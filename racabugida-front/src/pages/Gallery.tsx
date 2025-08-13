import React, { useState } from 'react';

const images = [
  'https://source.unsplash.com/random/400x300?sig=1',
  'https://source.unsplash.com/random/400x300?sig=2',
  'https://source.unsplash.com/random/400x300?sig=3',
  'https://source.unsplash.com/random/400x300?sig=4',
  'https://source.unsplash.com/random/400x300?sig=5',
  'https://source.unsplash.com/random/400x300?sig=6',
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-primary mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="rounded-lg shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <img src={selected} alt="Selected" className="max-h-[80vh] rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default Gallery; 