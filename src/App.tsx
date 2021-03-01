// import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';

import githubLogo from './assets/github-logo.svg';
import RSSLogo from './assets/rs_school_react.png';
import youtubeLogo from './assets/youtube.png';

import Game from './components/Game/Game';
import Setting from './components/Modals/Setting';
import Help from './components/Modals/Help';
import Score from './components/Modals/Score';
import Sounds from './components/Modals/Sounds';

import layouts from './components/layouts/layouts';

import useFullscreenStatus from './components/utils/useFullscreenStatus';

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
  console.log(layouts[lang].nameDefaulft);

  const [name, setName] = useState(null);
  const playerOneName = name !== null ? name : layouts[lang].nameDefaulft;
  
  const [skin, setSkin] = useState('round');
  const gameSkin = skin;
  

  const [mode, setMode] = useState('normal');

  return (
    <div className='App'>
      <header className='App__header'>
        <Setting
          onNameChange={setName}
          playerName={playerOneName}
          onSkinChange={setSkin}
          gameSkin={gameSkin}
          onLangChange={setLang}
          gameLang={lang}
          onModeChange={setMode}
          gameMode={mode}
        />
        <Score />
        <Button className='btn' variant='contained' color='primary' onClick={() => resetGame()}>
          {layouts[lang].newGame}
        </Button>
        <Help />
        <Sounds />
      </header>
      <div
        ref={maximizableElement}
        className={`maximizable-container ${isFullscreen ? 'fullscreen' : 'default'}`}
        // style={{ backgroundColor: isFullscreen ? backgroundColor : null }}
      >
        <div className='maximizable-content'>
          <Game count={count} result={result} playerOneName={playerOneName} key={gameId} lang={lang} />
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
                Anna Justus
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
                game Review
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
