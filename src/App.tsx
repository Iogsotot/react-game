// import React from 'react';
import React, { useState } from 'react';

import useSound from 'use-sound';

import './App.scss';
import Button from '@material-ui/core/Button';

import githubLogo from './assets/github-logo.svg';
import RSSLogo from './assets/rs_school_react.png';
import youtubeLogo from './assets/youtube.png';
import themeSound from './assets/sounds/theme.mp3';
import cancelBtn from './assets/icons/cancel.png';

import Game from './components/Game/Game';
import Setting from './components/Modals/Setting';
import Help from './components/Modals/Help';
import Score from './components/Modals/Score';
import Sounds from './components/Modals/Sounds';

import layouts from './components/layouts/layouts';

import useFullscreenStatus from './components/utils/useFullscreenStatus';
// import { Modal } from '@material-ui/core';

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('');

  // hello reviewer. Here I am asking React to re-render my component again.
  const [gameId, setGameId] = useState(1);
  const resetGame = () => setGameId((gameId) => gameId + 1);

  const maximizableElement = React.useRef(null);
  let isFullscreen, setIsFullscreen: boolean;
  let errorMessage;

  try {
    //@ts-ignore
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = 'Fullscreen not supported';
    isFullscreen = false;
    //@ts-ignore
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  // lift state up
  const [lang, setLang] = useState('en');
  // console.log(layouts[lang].nameDefaulft);

  //
  const [name, setName] = useState(null);
  const playerOneName = name !== null ? name : layouts[lang].nameDefaulft;
  const [skin, setSkin] = useState('round');
  // const gameSkin = skin;
  const [mode, setMode] = useState('normal');
  const [soundVolume, setSoundVolume] = useState(0.5);
  const [musicVolume, setMusicVolume] = useState(0.4);
  const [isOpenMusicModalQuestion, setMusicModalQuestion] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isScoreOpen, setScoreOpen] = useState(false);
  const [isSoundsOpen, setSoundsOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);

  // sorry for this - I have no time at all
  function handleKeyPress(event: React.KeyboardEvent) {
    switch (event.key) {
      case '1':
        setSettingOpen(!isSettingOpen);
        setScoreOpen(false);
        setSoundsOpen(false);
        setHelpOpen(false);
        return;
      case '2':
        setScoreOpen(!isScoreOpen);
        setSoundsOpen(false);
        setHelpOpen(false);
        setSettingOpen(false);
        return;
      case '3':
        resetGame();
        return;
      case '4':
        setSoundsOpen(!isSoundsOpen);
        setScoreOpen(false);
        setHelpOpen(false);
        setSettingOpen(false);
        return;
      case '5':
        setHelpOpen(!isHelpOpen);
        setScoreOpen(false);
        setSoundsOpen(false);
        setSettingOpen(false);
        return;
      default:
        return;
    }
  }

  const [playThemeSound] = useSound(themeSound, { volume: musicVolume });

  return (
    <div className='App' onKeyDown={handleKeyPress} tabIndex={0}>
      <header className='App__header'>
        <Setting
          onNameChange={setName}
          playerName={playerOneName}
          onSkinChange={setSkin}
          gameSkin={skin}
          onLangChange={setLang}
          gameLang={lang}
          onModeChange={setMode}
          gameMode={mode}
          isSettingOpen={isSettingOpen}
          setSettingOpen={setSettingOpen}
        />
        <Score lang={lang} isScoreOpen={isScoreOpen} setScoreOpen={setScoreOpen} />
        <Button
          className='btn'
          variant='contained'
          color='primary'
          onClick={() => resetGame()}
          onKeyDown={handleKeyPress}
        >
          {layouts[lang].newGame}
        </Button>
        <Help lang={lang} isHelpOpen={isHelpOpen} setHelpOpen={setHelpOpen} />
        <Sounds
          lang={lang}
          isSoundsOpen={isSoundsOpen}
          setSoundsOpen={setSoundsOpen}
          setSounds={setSoundVolume}
          setMusic={setMusicVolume}
        />
      </header>
      <div ref={maximizableElement} className={`maximizable-container ${isFullscreen ? 'fullscreen' : 'default'}`}>
        <div className='maximizable-content'>
          <Button
            className='btn btn--autoplay'
            variant='contained'
            color='primary'
            // onClick={() => autoplay()}
            onKeyDown={handleKeyPress}
          >
            {layouts[lang].autoplay}
          </Button>
          <React.Fragment>
            {isOpenMusicModalQuestion && (
              <div className='modal modal--question'>
                <div className='modal__body'>
                  <img
                    src={cancelBtn}
                    alt='X'
                    onClick={() => {
                      setMusicModalQuestion(false);
                      playThemeSound();
                      setMusicVolume(0);
                    }}
                    className='btn--cancel'
                  />
                  <h1 className='title'>{layouts[lang].musicModalTitle}</h1>
                  <div className='bgt-wrapper'>
                    <Button
                      className='btn'
                      variant='contained'
                      color='primary'
                      onClick={() => {
                        setMusicModalQuestion(false);
                        playThemeSound();
                      }}
                      onKeyDown={handleKeyPress}
                    >
                      {layouts[lang].yes}
                    </Button>
                    <Button
                      className='btn'
                      variant='contained'
                      color='secondary'
                      onClick={() => {
                        setMusicModalQuestion(false);
                        playThemeSound();
                        setMusicVolume(0);
                      }}
                      onKeyDown={handleKeyPress}
                    >
                      {layouts[lang].no}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
          <Game
            count={count}
            result={result}
            playerOneName={playerOneName}
            key={gameId}
            lang={lang}
            gameSkin={skin}
            volume={soundVolume}
            setVolume={setSoundVolume}
            gameMode={mode}
          />
        </div>
        <div className='maximizable-actions'>
          {errorMessage ? (
            <button onClick={() => alert('Fullscreen is unsupported by this browser, please try another browser.')}>
              {errorMessage}
            </button>
          ) : isFullscreen ? (
            <Button className='btn--fullScreen btn' variant='contained' color='primary' onClick={handleExitFullscreen}>
              {layouts[lang].exitFullscreen}
            </Button>
          ) : (
            //@ts-ignore
            <Button onClick={setIsFullscreen} className='btn--fullScreen btn' variant='contained' color='primary'>
              {layouts[lang].fullscreen}
            </Button>
          )}
        </div>
      </div>

      <footer className='App__footer'>
        <div className='wrapper'>
          <div className='copyright'>
            <div className='author'>
              <img src={githubLogo} className='icon' alt='Github' />
              <a href='https://github.com/Iogsotot' className='link'>
                {layouts[lang].author}
              </a>
            </div>
            <div className='RSS'>
              <img src={RSSLogo} className='icon' alt='RSSchool' />
              <a href='https://rs.school/react/' className='link'>
                {' '}
              </a>
            </div>
            <div className='youtube'>
              <img src={youtubeLogo} className='icon' alt='youtube link' />
              <a href='https://www.youtube.com/watch?v=3-Zh_DAzCi0&feature=youtu.be' className='link'>
                {layouts[lang].youtube}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
