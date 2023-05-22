import React, { useState } from 'react';
import Modal from './Modal';
import "../styles/App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        {/* Content for the modal */}
        <div className='modal'>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        </div>

      </Modal>
    </div>
  );
};

export default App;
