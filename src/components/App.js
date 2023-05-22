import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        {/* Content for the modal */}
        <h2>Modal Title</h2>
        <p className='modal-p'>This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
