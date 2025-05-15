import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the user clicks on the overlay (not the content)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay-modal" onClick={handleOverlayClick}>
      <div className="modal-content-modal">
        <button className="close-button-modal" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
