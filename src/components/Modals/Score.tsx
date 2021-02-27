import React, { useState } from 'react';
import './Modal.scss';
import './Score.scss';

export default function Score() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <button className='btn' onClick={() => setIsOpen(true)}>
        Score
      </button>
      {isOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <h1>Score</h1>
            <p>There are score of all players</p>
            <button onClick={() => setIsOpen(false)}>Close modal</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
