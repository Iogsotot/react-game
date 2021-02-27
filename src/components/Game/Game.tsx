import React, { useState } from 'react';
import './Game.scss';
// import { CounterProps } from '../types'

export default function Game() {
  const [roundCount, setRoundCount] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  // let roundCount: number = 0;
  // let playerOneCurrentScore: number = 0;
  let playerTwoCurrentScore: number = 0;
  let totalGames: number = 3;

  let playerOneResult = 'Rock';
  let playerTwoResult = 'Scissors';

  let playerOneName: string = 'Player 1';
  let playerTwoName: string = 'Computer';

  // function getRandomAnswer(min: number, max: number) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   let result: number;
  //   return (result = Math.floor(Math.random() * (max - min + 1)) + min);
  // }

  function checkRound(weapon: string): any {
    setRoundCount(roundCount + 1)
    return;
  }

  // function RoundCounter({roundCount}: CounterProps) {
  //   return <div> round count: {roundCount}</div>
  // }

  return (
    <main>
      <div className='battlefield'>
        <div className='weapon rock' onClick={() => checkRound('rock')}></div>
        <div className='weapon scissors' onClick={() => checkRound('scissors')}></div>
        <div className='weapon paper' onClick={() => checkRound('paper')}></div>
        {/* <div className='centre'>*</div> */}
      </div>

      <div className='stats-string'>
        <h2 className='player1-result-header'>
          {playerOneName} {'score '}
          {playerOneScore} / {totalGames}
        </h2>
        <h2 className='player2-result-header'>
          {playerTwoName} {'score '}
          {playerTwoCurrentScore} / {totalGames}
        </h2>

        <div className='round-stats'>
          <h3 className='round-header round'>{roundCount} round:</h3>
          <p className='player1-result-round'>{playerOneResult}</p>
          <p className='player2-result-round'>{playerTwoResult}</p>
        </div>

        {/* <div className='round-2-stats hidden'>
          <h3 className='round-header round-2'>2 round:</h3>
          <p className='player1-result-round-2'>{playerOneResult}</p>
          <p className='player2-result-round-2'>{playerTwoResult}</p>
        </div>

        <div className='round-3-stats hidden '>
          <h3 className='round-header round-3'>3 round:</h3>
          <p className='player1-result-round-3'>{playerOneResult}</p>
          <p className='player2-result-round-3'>{playerTwoResult}</p>
        </div> */}
      </div>
    </main>
  );
}
