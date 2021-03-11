import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import useSound from 'use-sound';
import './Game.scss';
import { setInterval } from 'timers';
import { Weapons } from '../constants';
import layouts from '../layouts/layouts';

import rockIconRound from '../../assets/rock.svg';
import scissorsIconRound from '../../assets/scissors.svg';
import paperIconRound from '../../assets/paper.svg';
import lizardIconRound from '../../assets/lizard.svg';
import spockIconRound from '../../assets/spock.svg';
import rockIconCats from '../../assets/rock--cat.png';
import scissorsIconCats from '../../assets/scissors--cat.png';
import paperIconCats from '../../assets/paper--cat.png';
import lizardIconCats from '../../assets/lizard--cat.png';
import spockIconCats from '../../assets/spock--cat.png';

// eslint-disable-next-line
import weaponSound from './../../assets/sounds/puk.mp3';

import { GameProps } from '../types';

export default function Game({
  count = 0,
  result = '',
  playerOneName,
  lang,
  gameSkin,
  volume,
  gameMode,
  setGameWinner,
}: GameProps): any {
  const [roundCount, setRoundCount] = useState(count);
  const [playerOneResult, setPlayerOneResult] = useState(result);
  const [playerTwoResult, setPlayerTwoResult] = useState(result);
  const [playerOneScore, setPlayerOneScore] = useState(count);
  const [playerTwoScore, setPlayerTwoScore] = useState(count);
  const [roundResult, setRoundResult] = useState('');
  const [endGameMsg, setEndGameMsg] = useState('');
  const [myModalClass, setMyModalClass] = useState('');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const [playWeaponSound] = useSound(weaponSound, { volume });

  function getSkin(skin: string) {
    const skinIcons = {
      rock: rockIconRound,
      paper: paperIconRound,
      scissors: scissorsIconRound,
      lizard: lizardIconRound,
      spock: spockIconRound,
    };
    if (skin === 'cats') {
      skinIcons.rock = rockIconCats;
      skinIcons.paper = paperIconCats;
      skinIcons.scissors = scissorsIconCats;
      skinIcons.lizard = lizardIconCats;
      skinIcons.spock = spockIconCats;
    }
    return skinIcons;
  }

  const styles = {
    rock: {
      backgroundImage: `url('${getSkin(gameSkin).rock}')`,
    },
    paper: {
      backgroundImage: `url(${getSkin(gameSkin).paper})`,
    },
    scissors: {
      backgroundImage: `url(${getSkin(gameSkin).scissors})`,
    },
    lizard: {
      backgroundImage: `url(${getSkin(gameSkin).lizard})`,
    },
    spock: {
      backgroundImage: `url(${getSkin(gameSkin).spock})`,
    },
  };

  const totalGames = 3;
  const playerTwoName: string = layouts[lang].enemyName;

  function getRandomAnswer(min: number, max: number) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    const randomResult: number = Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
    return randomResult;
  }

  function resetGame() {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setRoundCount(0);
    setPlayerOneResult('');
    setPlayerTwoResult('');
  }

  function stopGame() {
    if (playerOneScore > playerTwoScore) {
      setRoundResult(layouts[lang].winTitle);
      setEndGameMsg(`${layouts[lang].winText} ${playerOneName}`);
      setGameWinner(playerOneName);
    }
    if (playerOneScore < playerTwoScore) {
      setRoundResult(layouts[lang].loseTitle);
      setEndGameMsg(`${layouts[lang].winText} ${playerTwoName}`);
    } else if (playerOneScore === playerTwoScore) {
      setRoundResult(layouts[lang].drawTitle);
      setEndGameMsg(layouts[lang].drawText);
    }
    setMyModalClass('md-show');
  }

  useEffect(() => {
    if (roundCount >= 3) {
      stopGame();
    }
  }, [playerOneName, playerOneScore, playerTwoName, playerTwoScore, roundCount]);

  function playerOneWin() {
    setPlayerOneScore(playerOneScore + 1);
  }

  function playerOneLose() {
    setPlayerTwoScore(playerTwoScore + 1);
  }

  function useInterval(callback: any, delay: number) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    // eslint-disable-next-line consistent-return
    useEffect(() => {
      function tick() {
        // I'm very sorry about this
        // eslint-disable-next-line
        //@ts-ignore
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  function checkRound(weapon: number): void {
    playWeaponSound();
    setRoundCount(roundCount + 1);

    const playerOneChoice: number = weapon;
    setPlayerOneResult(Weapons[weapon]);
    // если играем против компа, то:
    let playerTwoChoice: number = getRandomAnswer(0, 2);
    if (gameMode === 'hard') {
      playerTwoChoice = getRandomAnswer(0, 4);
    }
    setPlayerTwoResult(Weapons[playerTwoChoice]);

    if (playerTwoChoice === Weapons.Rock) {
      if (playerOneChoice === Weapons.Paper || playerOneChoice === Weapons.Lizard) {
        playerOneWin();
      }
      if (playerOneChoice === Weapons.Scissors || playerOneChoice === Weapons.Spock) {
        playerOneLose();
      }
    }

    if (playerTwoChoice === Weapons.Paper) {
      if (playerOneChoice === Weapons.Rock || playerOneChoice === Weapons.Spock) {
        playerOneLose();
      }
      if (playerOneChoice === Weapons.Scissors || playerOneChoice === Weapons.Lizard) {
        playerOneWin();
      }
    }

    if (playerTwoChoice === Weapons.Scissors) {
      if (playerOneChoice === Weapons.Rock || playerOneChoice === Weapons.Spock) {
        playerOneWin();
      }
      if (playerOneChoice === Weapons.Paper || playerOneChoice === Weapons.Lizard) {
        playerOneLose();
      }
    }

    if (playerTwoChoice === Weapons.Spock) {
      if (playerOneChoice === Weapons.Paper || playerOneChoice === Weapons.Lizard) {
        playerOneLose();
      }
      if (playerOneChoice === Weapons.Rock || playerOneChoice === Weapons.Scissors) {
        playerOneWin();
      }
    }

    if (playerTwoChoice === Weapons.Lizard) {
      if (playerOneChoice === Weapons.Paper || playerOneChoice === Weapons.Spock) {
        playerOneLose();
      }
      if (playerOneChoice === Weapons.Rock || playerOneChoice === Weapons.Scissors) {
        playerOneWin();
      }
    }
  }

  useInterval(() => {
    if (isAutoPlay) {
      if (roundCount >= 3) {
        stopGame();
        setIsAutoPlay(false);
      } else {
        let playerOneChoice: number = getRandomAnswer(0, 2);
        if (gameMode === 'hard') {
          playerOneChoice = getRandomAnswer(0, 4);
        }
        checkRound(playerOneChoice);
      }
    }
  }, 2000);

  function closeModal() {
    setMyModalClass('');
    resetGame();
  }

  return (
    <main>
      <Button
        className='btn btn--autoplay'
        variant='contained'
        color='primary'
        onClick={() => setIsAutoPlay(!isAutoPlay)}
      >
        {layouts[lang].autoplay}
      </Button>
      <div className={`md-modal md-effect-1 ${myModalClass}`} id='modal-1'>
        <div className='md-content'>
          <h3 className='modal__title'>{roundResult}</h3>
          <div>
            <p className='modal__content'>{endGameMsg}</p>

            <Button
              className='btn md-close'
              variant='contained'
              color='primary'
              id='md-close'
              onClick={() => closeModal()}
            >
              {layouts[lang].btnClose}
            </Button>
          </div>
        </div>
      </div>

      <div className='battlefield'>
        <div
          className='weapon rock'
          onClick={() => {
            playWeaponSound();
            checkRound(Weapons.Rock);
          }}
          style={styles.rock}
        />
        <div
          className='weapon scissors'
          onClick={() => {
            playWeaponSound();
            checkRound(Weapons.Scissors);
          }}
          style={styles.scissors}
        />
        <div
          className='weapon paper'
          onClick={() => {
            playWeaponSound();
            checkRound(Weapons.Paper);
          }}
          style={styles.paper}
        />
        {gameMode === 'hard' && (
          <div
            className='weapon lizard'
            onClick={() => {
              playWeaponSound();
              checkRound(Weapons.Lizard);
            }}
            style={styles.lizard}
          />
        )}
        {gameMode === 'hard' && (
          <div
            className='weapon spock'
            onClick={() => {
              playWeaponSound();
              checkRound(Weapons.Spock);
            }}
            style={styles.spock}
          />
        )}
      </div>
      <div className='stats-string'>
        <h2 className='player1-result-header'>
          {playerOneName} {`${layouts[lang].score} `}
          {playerOneScore} / {totalGames}
        </h2>
        <h2 className='player2-result-header'>
          {playerTwoName} {`${layouts[lang].score} `}
          {playerTwoScore} / {totalGames}
        </h2>

        <div className='round-stats'>
          <h3 className='round-header round'>
            {roundCount} {layouts[lang].round}:<div className='strip'/>
          </h3>
          <p className='player1-result-round'>{playerOneResult ? layouts[lang][playerOneResult] : ' '}</p>
          <p className='player2-result-round'>{playerTwoResult ? layouts[lang][playerTwoResult] : ' '}</p>
        </div>
      </div>
    </main>
  );
}
