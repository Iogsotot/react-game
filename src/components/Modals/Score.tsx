import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import './Modal.scss';
import './Score.scss';
import layouts from '../layouts/layouts';
import { ScoreProps } from '../types';

export default function Score({ lang,  isScoreOpen, setScoreOpen }: ScoreProps) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setScoreOpen(true)}>
        <span className='material-icons'>star_rate</span>
      </Button>

      {isScoreOpen && (
        <div className='modal score'>
          <div className='modal__body'>
            <h1>{layouts[lang].score}</h1>
            <p>Score table</p>
            <Button onClick={() => setScoreOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              {layouts[lang].btnClose}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
