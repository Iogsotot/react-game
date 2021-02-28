import React, { useState } from 'react';
import './Modal.scss';
import './Help.scss';
import Button from '@material-ui/core/Button';

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setIsOpen(true)}>
        <span className='material-icons'>school</span>
      </Button>
      {isOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <h1>How to play</h1>
            <p>Just click on all icons! do smt!</p>
            <button onClick={() => setIsOpen(false)}>Close modal</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
