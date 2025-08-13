import React, { useState } from 'react';
import './Modal.css';

interface EventGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    title: string;
    date: Date;
    location: string[];
  };
  images: string[];
}

const EventGalleryModal: React.FC<EventGalleryModalProps> = ({
  isOpen,
  onClose,
  event,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Event Gallery</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-body">
          <div className="event-info">
            <h3>{event.title}</h3>
            <p>
              <i className="far fa-calendar-alt"></i>
              {event.date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              {event.location.join(', ')}
            </p>
          </div>

          <div className="gallery-container">
            <div className="main-image-container">
              <button className="gallery-nav prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="main-image">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`${event.title} - Image ${currentImageIndex + 1}`}
                />
              </div>
              
              <button className="gallery-nav next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="image-counter">
              {currentImageIndex + 1} of {images.length}
            </div>

            <div className="thumbnail-grid">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGalleryModal; 