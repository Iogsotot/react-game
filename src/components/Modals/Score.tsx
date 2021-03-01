import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import './Modal.scss';
import './Score.scss';


export default function Score() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setIsOpen(true)}>
        <span className='material-icons'>star_rate</span>
      </Button>

      {isOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <h1>Score</h1>
            <p>Score table</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}

    </React.Fragment>
  );
}
