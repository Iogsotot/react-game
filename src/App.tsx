// import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Game from './components/Game/Game';
import githubLogo from './assets/github-logo.svg';
import RSSLogo from './assets/rs_school_react.png';
import youtubeLogo from './assets/youtube.png';

import Setting from './components/Modals/Setting';
import Help from './components/Modals/Help';
import Score from './components/Modals/Score';
import Sounds from './components/Modals/Sounds';

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('');

  // hello reviewer. Here I am asking React to re-render my component again.
  const [gameId, setGameId] = useState(1);
  const resetGame = () => setGameId((gameId) => gameId + 1);

  return (
    <div className='App'>
      <header className='App__header'>
        <Setting />
        <Score />
        <button className='btn' onClick={() => resetGame()}>
          New game
        </button>
        <Help />
        <Sounds />
      </header>
      <Game count={count} result={result} key={gameId} />
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
