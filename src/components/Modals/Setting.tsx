import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Setting.scss';

//@ts-ignore
export default function Setting({ playerName, onNameChange, onSkinChange, gameSkin, onLangChange, gameLang, onModeChange, gameMode }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState('Player 1');

  function handleChange(e: any) {
    onNameChange(e.target.value);
  }

  function onSkinClick(skin: string) {
    onSkinChange(skin);
  }

  function changeLang(lang: string) {
    onLangChange(lang);
  }

  function changeGameMode(mode: string) {
    onModeChange(mode);
  }

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
              <input type='text' id='inp' placeholder='&nbsp;' value={playerName} onChange={handleChange} />
              <span className='label'>Your name</span>
              <span className='focus-bg'></span>
            </label>
            <div className='game-skin'>
              <h3 className='modal__subtitle'>Select game skin:</h3>
              <div className='game-skin--round-icons icon--setting' onClick={() => onSkinClick('round')}>
                round-icons
              </div>
              <div className='game-skin--cats-icons icon--setting' onClick={() => onSkinClick('cats')}>
                cats-icons
              </div>
            </div>
            <div className='game-lang'>
              <h3 className='modal__subtitle'>Select language:</h3>
              <div className='game-lang--ru icon--setting' onClick={() => changeLang('ru')}>
                ru
              </div>
              <div className='game-lang--en icon--setting' onClick={() => changeLang('en')}>
                en
              </div>
            </div>
            <div className='game-mode'>
              <h3 className='modal__subtitle'>Select game mode:</h3>
              <div className='game-mode--ru icon--setting' onClick={() => changeGameMode('normal')}>normal</div>
              <div className='game-mode--en icon--setting' onClick={() => changeGameMode('hard')}>intersting</div>
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
