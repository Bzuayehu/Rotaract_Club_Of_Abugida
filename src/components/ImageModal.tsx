import React from "react";
import "./ImageModal.css"; // Separate CSS file

interface ImageModalProps {
  images: string[];
  titles?: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  titles,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content2">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <button className="modal-nav left" onClick={handlePrev} disabled={currentIndex === 0}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt="Zoomed" className="modal-img" />
        <button className="modal-nav right" onClick={handleNext} disabled={currentIndex === images.length - 1}>
          &#10095;
        </button>
        {titles && <div className="modal-title">{titles[currentIndex]}</div>}
      </div>
    </div>
  );
};

export default ImageModal;