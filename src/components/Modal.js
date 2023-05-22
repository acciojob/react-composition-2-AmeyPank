import React, { useRef } from 'react';

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleCloseModal} ref={modalRef}>
      <div className="modal-dialog" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
        <h2>Modal Title</h2>
        <p className='modal-p'>This is the modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
