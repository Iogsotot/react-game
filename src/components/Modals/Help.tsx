import React, { useState } from 'react';
import './Modal.scss';
import './Help.scss';
import Button from '@material-ui/core/Button';
import layouts from '../layouts/layouts';
import { HelpProps } from '../types';

export default function Help({ lang, isHelpOpen, setHelpOpen }: HelpProps) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setHelpOpen(true)}>
        <span className='material-icons'>school</span>
      </Button>
      {isHelpOpen && (
        <div className='modal help'>
          <div className='modal__body'>
            <h1>{layouts[lang].help}</h1>
            <div className='text'>
              <p> {layouts[lang].gameInstruction}</p>
              <p> {layouts[lang].gameInstructionExtended}</p>
              <p>{layouts[lang].hotkeys}</p>
            </div>
            <Button onClick={() => setHelpOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              {layouts[lang].btnClose}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
