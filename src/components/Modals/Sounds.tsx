import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Sounds.scss';
import layouts from '../layouts/layouts';
import soundOn from '../../assets/icons/sound--on.png';
import soundOff from '../../assets/icons/sound--off.png';
// import cancel from '../../assets/icons/cancel.svg';
import { SoundsProps } from '../types';

export default function Sounds({ lang,  isSoundsOpen, setSoundsOpen }: SoundsProps) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setSoundsOpen(true)}>
        <span className='material-icons'>music_note</span>
      </Button>
      {isSoundsOpen && (
        <div className='modal sound'>
          <div className='modal__body'>
            {/* <img src={cancel} alt='' className='btn btn--close' onClick={() => setIsOpen(false)} /> */}
            <h1 className='title'> {layouts[lang].soundTitle}</h1>
            <img src={soundOn} alt='sound on' className='soundIcon--on' />
            <img src={soundOff} alt='sound off' className='soundIcon--off' />
            <div className='sound__settings'>
              <Button variant='contained' color='secondary' className='btn btn--sound'>
                25%
              </Button>
              <Button variant='contained' color='secondary' className='btn btn--sound'>
                50%
              </Button>
              <Button variant='contained' color='secondary' className='btn btn--sound'>
                70%
              </Button>
              {/* <div className=''>25%</div>
              <div className=''>50%</div>
              <div className=''>75%</div> */}
            </div>
            {/* <div className="sound-bar">sound bar</div> */}
            <Button onClick={() => setSoundsOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              {layouts[lang].btnClose}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
