import React, { useState, useEffect } from 'react';
import './Game.scss';
import { GameProps } from '../types'
import { Weapons } from '../constants';


export default function Game({count = 0, result = ''}: GameProps) {
  const [roundCount, setRoundCount] = useState(count);
  const [playerOneResult, setPlayerOneResult] = useState(result);
  const [playerTwoResult, setPlayerTwoResult] = useState(result);
  const [playerOneScore, setPlayerOneScore] = useState(count);
  const [playerTwoScore, setPlayerTwoScore] = useState(count);

  let totalGames: number = 3;
  let playerOneName: string = 'Player 1';
  let playerTwoName: string = 'Computer';

  function getRandomAnswer(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result: number;
    return (result = Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function resetGame() {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setRoundCount(0);
    setPlayerOneResult('');
    setPlayerTwoResult('');
  }

  useEffect(() => {
    function stopGame() {
      console.log('конец игры');
      if (playerOneScore > playerTwoScore) {
        alert('Победитель игры: ' + playerOneName);
      }
      if (playerOneScore < playerTwoScore) {
        alert('Компьютер победил тебя, ха-ха-ха!');
      } else if (playerOneScore === playerTwoScore) {
        alert('Сегодня нет победителей, но нет и побеждённых');
      }
      resetGame();
    }
    if (roundCount >= 3) {
      stopGame();
    }
  }, [playerOneName, playerOneScore, playerTwoScore, roundCount]);

  function playerOneWin() {
    const currentRound = roundCount + 1;
    console.log(playerOneName + ' - победитель ' + currentRound + ' раунда!');
    setPlayerOneScore(playerOneScore + 1);
  }

  function playerOneLose() {
    const currentRound = roundCount + 1;
    console.log(playerTwoName + ' - победитель ' + currentRound + ' раунда!');
    setPlayerTwoScore(playerTwoScore + 1);
  }

  function draw() {
    const currentRound = roundCount + 1;
    console.log(currentRound + ' раунд: ничья');
  }

  function checkRound(weapon: number): void {
    setRoundCount(roundCount + 1);

    const playerOneChoice: number = weapon;
    setPlayerOneResult(Weapons[weapon]);
    // если играем против компа, то:
    const playerTwoChoice: number = getRandomAnswer(0, 2);
    setPlayerTwoResult(Weapons[playerTwoChoice]);

    if (playerTwoChoice === Weapons.Rock) {
      if (playerOneChoice === Weapons.Paper) {
        playerOneWin();
      }
      if (playerOneChoice === Weapons.Scissors) {
        playerOneLose();
      } else if (playerOneChoice === Weapons.Rock) {
        draw();
      }
    }

    if (playerTwoChoice === Weapons.Paper) {
      if (playerOneChoice === Weapons.Rock) {
        playerOneLose();
      }
      if (playerOneChoice === Weapons.Scissors) {
        playerOneWin();
      } else if (playerOneChoice === Weapons.Paper) {
        draw();
      }
    }

    if (playerTwoChoice === Weapons.Scissors) {
      if (playerOneChoice === Weapons.Rock) {
        playerOneWin();
      }
      if (playerOneChoice === Weapons.Paper) {
        playerOneLose();
      } else if (playerOneChoice === Weapons.Scissors) {
        draw();
      }
    }
    return;
  }

  return (
    <main>
      <div className='battlefield'>
        <div className='weapon rock' onClick={() => checkRound(Weapons.Rock)}></div>
        <div className='weapon scissors' onClick={() => checkRound(Weapons.Scissors)}></div>
        <div className='weapon paper' onClick={() => checkRound(Weapons.Paper)}></div>
        {/* <div className='centre'>*</div> */}
      </div>

      <div className='stats-string'>
        <h2 className='player1-result-header'>
          {playerOneName} {'score '}
          {playerOneScore} / {totalGames}
        </h2>
        <h2 className='player2-result-header'>
          {playerTwoName} {'score '}
          {playerTwoScore} / {totalGames}
        </h2>

        <div className='round-stats'>
          <h3 className='round-header round'>{roundCount} round:<div className="strip"></div></h3>
          <p className='player1-result-round'>{playerOneResult ? playerOneResult : ' '}</p>
          <p className='player2-result-round'>{playerTwoResult ? playerTwoResult : ' '}</p>
        </div>
      </div>
    </main>
  );
}
