import React from 'react';
import './App.scss';
import Game from './components/Game/Game';
import githubLogo from './assets/github-logo.svg';
import RSSLogo from './assets/rs_school_js.svg';
import youtubeLogo from './assets/youtube.svg';

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <button className='btn'>Settings</button>
        <button className='btn'>Score</button>
        <button className='btn'>New game</button>
        <button className='btn'>I can't undestand</button>
      </header>
      <Game />
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
              <a href='https://rs.school/js/' className='link'></a>
            </div>
            <div className='youtube'>
              <img src={youtubeLogo} className='icon' alt='youtube link' />
              <a href='https://www.youtube.com/watch?v=3-Zh_DAzCi0&feature=youtu.be' className='link'>game Review</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
