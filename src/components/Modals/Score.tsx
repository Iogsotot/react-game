import React, { useState } from 'react';
import './Modal.scss';
import './Score.scss';
import Button from '@material-ui/core/Button';

export default function Score() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setIsOpen(true)}>
        <span className='material-icons'>star_rate</span>
      </Button>
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
