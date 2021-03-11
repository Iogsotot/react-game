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

function App(): JSX.Element {
  const count = 0;
  const result = '';

  // hello reviewer. Here I am asking React to re-render my component again.
  const [gameId, setGameId] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const resetGame = () => setGameId((gameId) => gameId + 1);

  // lift state up
  const [lang, setLang] = useState('en');
  const [name, setName] = useState(layouts[lang].nameDefaulft);
  const playerOneName = name !== null ? name : layouts[lang].nameDefaulft;
  const [skin, setSkin] = useState('round');
  const [mode, setMode] = useState('normal');
  const [soundVolume, setSoundVolume] = useState(0.5);
  const [musicVolume, setMusicVolume] = useState(0.4);
  const [isOpenMusicModalQuestion, setMusicModalQuestion] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isScoreOpen, setScoreOpen] = useState(false);
  const [isSoundsOpen, setSoundsOpen] = useState(false);
  const [isHelpOpen, setHelpOpen] = useState(false);
  const [gameWinner, setGameWinner] = useState(null);

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
        setHelpOpen(!isHelpOpen);
        setScoreOpen(false);
        setSoundsOpen(false);
        setSettingOpen(false);
        return;
      case '5':
        setSoundsOpen(!isSoundsOpen);
        setScoreOpen(false);
        setHelpOpen(false);
        setSettingOpen(false);
        break;
      default:
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
        <Score
          lang={lang}
          isScoreOpen={isScoreOpen}
          setScoreOpen={setScoreOpen}
          gameWinner={gameWinner}
          setGameWinner={setGameWinner}
        />
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
      <div className={'maximizable-container default'}>
        <div className='maximizable-content'>
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
            setGameWinner={setGameWinner}
          />
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
              <a href='https://youtu.be/TA-sqieWo9k' className='link'>
                {layouts[lang].youtube}
              </a>
            </div>
            <div className='years'>2021</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
