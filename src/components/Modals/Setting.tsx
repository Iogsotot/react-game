import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Setting.scss';
import layouts from '../layouts/layouts';
import { SettingProps } from '../types';

import paw from '../../assets/icons/paw-icon.png';
import hand from '../../assets/icons/hand-icon.png';
import en from '../../assets/icons/en.png';
import ru from '../../assets/icons/ru.png';

export default function Setting({
  playerName,
  onNameChange,
  onSkinChange,
  gameSkin,
  onLangChange,
  gameLang,
  onModeChange,
  gameMode,
  isSettingOpen,
  setSettingOpen
}: SettingProps) {
  // const [isOpen, setIsOpen] = useState(false);
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
      <Button className='btn' variant='contained' color='primary' onClick={() => setSettingOpen(true)}>
        <span className='material-icons'>settings</span>
      </Button>
      {isSettingOpen && (
        <div className='modal'>
          <div className='modal__body'>
            <h1 className='modal__title'>{layouts[gameLang].settingsTitle}</h1>
            <label htmlFor='inp' className='players-name'>
              <input type='text' id='inp' placeholder='&nbsp;' value={playerName} onChange={handleChange} />
              <span className='label'>{layouts[gameLang].inputLabel}</span>
              <span className='focus-bg'></span>
            </label>
            <div className='game-skin'>
              <h3 className='modal__subtitle'>{layouts[gameLang].selectSkin}:</h3>
              <div onClick={() => onSkinClick('round')}>
                <img src={hand} alt='hand' className='game-skin--round-icons icon--setting' />
              </div>
              <div onClick={() => onSkinClick('cats')}>
                <img src={paw} alt='paw' className='game-skin--round-icons icon--setting' />
              </div>
            </div>
            <div className='game-lang'>
              <h3 className='modal__subtitle'>{layouts[gameLang].selectLang}:</h3>
              <div className='game-lang--ru icon--setting' onClick={() => changeLang('ru')}>
                <img src={ru} alt='paw' className='game-skin--round-icons icon--setting' />
              </div>
              <div className='game-lang--en icon--setting' onClick={() => changeLang('en')}>
                <img src={en} alt='paw' className='game-skin--round-icons icon--setting' />
              </div>
            </div>
            <div className='game-mode'>
              <h3 className='modal__subtitle'>{layouts[gameLang].selectMode}:</h3>

              <Button
                variant='contained'
                color='secondary'
                className='game-mode--ru icon--setting btn--game-mode'
                onClick={() => changeGameMode('normal')}
              >
                {layouts[gameLang].gameModeNormal}
              </Button>
              <Button
                variant='contained'
                color='secondary'
                className='game-mode--en icon--setting btn--game-mode'
                onClick={() => changeGameMode('hard')}
              >
                {layouts[gameLang].gameModeIntersting}
              </Button>
            </div>
            <Button onClick={() => setSettingOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              {layouts[gameLang].btnClose}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
