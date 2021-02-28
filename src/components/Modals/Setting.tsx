import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Setting.scss';

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setIsOpen(true)}>
        <span className='material-icons'>settings</span>
      </Button>
      {isOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <h1 className='modal__title'>Settings</h1>
            <label htmlFor='inp' className='players-name'>
              <input type='text' id='inp' placeholder='&nbsp;' />
              <span className='label'>Your name</span>
              <span className='focus-bg'></span>
            </label>
            <div className='game-skin'>
              <h3 className='modal__subtitle'>Select game skin:</h3>
              <div className='game-skin--round-icons icon--setting'>round-icons</div>
              <div className='game-skin--cats-icons icon--setting'>cats-icons</div>
            </div>
            <div className='game-lang'>
              <h3 className='modal__subtitle'>Select language:</h3>
              <div className='game-lang--ru icon--setting'>ru</div>
              <div className='game-lang--en icon--setting'>en</div>
            </div>
            <div className='game-mode'>
              <h3 className='modal__subtitle'>Select game mode:</h3>
              <div className='game-mode--ru icon--setting'>normal</div>
              <div className='game-mode--en icon--setting'>intersting</div>
            </div>
            <Button onClick={() => setIsOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              Close
            </Button>
            <Button
              onClick={() => console.log('start battle')}
              variant='contained'
              color='primary'
              className='btn btn--start-game'
            >
              Start!
            </Button>
            {/* <button className='button start-game' type='submit'>
              Start battle!
            </button> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
