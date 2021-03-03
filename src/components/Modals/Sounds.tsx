import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Sounds.scss';
import layouts from '../layouts/layouts';
import soundOn from '../../assets/icons/sound--on.png';
import soundOff from '../../assets/icons/sound--off.png';

import { SoundsProps } from '../types';

export default function Sounds({ lang,  isSoundsOpen, setSoundsOpen, setSounds }: SoundsProps) {
  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setSoundsOpen(true)}>
        <span className='material-icons'>music_note</span>
      </Button>
      {isSoundsOpen && (
        <div className='modal sound'>
          <div className='modal__body'>
            <h1 className='title'> {layouts[lang].soundTitle}</h1>
            <img src={soundOff} alt='sound off' className='soundIcon--off' onClick={() => {setSounds(0)}}/>
            <img src={soundOn} alt='sound on' className='soundIcon--on' onClick={() => {setSounds(1)}}/>
            <div className='sound__settings'>
              <Button variant='contained' color='secondary' className='btn btn--sound' onClick={() => {setSounds(0.25)}}>
                25%
              </Button>
              <Button variant='contained' color='secondary' className='btn btn--sound' onClick={() => {setSounds(0.50)}}>
                50%
              </Button>
              <Button variant='contained' color='secondary' className='btn btn--sound' onClick={() => {setSounds(0.70)}}>
                70%
              </Button>
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
