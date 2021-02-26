import React from 'react';
import './App.scss';
import Game from './components/Game';

function App() {
  return (
    <div className='App'>
      <header className='App__header'></header>
      <Game />
      <footer className='App__footer'></footer>
    </div>
  );
}

export default App;
