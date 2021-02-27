import React, { useState } from 'react';
import './Modal.scss';
import './Sounds.scss';
import soundOn from '../../assets/icons/sound--on.png';
import soundOff from '../../assets/icons/sound--off.png';
import cancel from '../../assets/icons/cancel.svg';

export default function Sounds() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button className='btn' onClick={() => setIsOpen(true)}>
        Sound
      </button>
      {isOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <img src={cancel} alt='' className='btn btn--close' onClick={() => setIsOpen(false)} />

            <img src={soundOn} alt='sound on' className='soundIcon--on' />
            <img src={soundOff} alt='sound off' className='soundIcon--off hidden' />
            {/* <div className="sound-bar">sound bar</div> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
