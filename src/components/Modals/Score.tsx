import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Modal.scss';
import './Score.scss';
import layouts from '../layouts/layouts';
import { ScoreProps } from '../types';
import useLocalStorage from '../utils/useLocalStorage';


// data
// {'sortedScoreBoard': [{'playerName': 'playerName1', 'playerScore': 15}, {'playerName': 'playerName2', 'playerScore': 19}]}

export default function Score({ lang, isScoreOpen, setScoreOpen, gameWinner, setGameWinner }: ScoreProps) {

  const [sortedScoreBoard, setSortedScoreBoard] = useLocalStorage('REACT_GAME_SORTED_SCOREBOARD', '{"sortedScoreBoard": []}')

  function increasePlayerScore(playerName: string) {
    let sortedScoreBoardArray = sortedScoreBoard['sortedScoreBoard'];
    if (sortedScoreBoardArray) {
      const playerScoreIndex: any = sortedScoreBoardArray.findIndex((x: { playerName: string; }) => x.playerName === playerName);
      if (playerScoreIndex !== -1) {
        sortedScoreBoardArray[playerScoreIndex] = { "playerName": playerName, "playerScore": sortedScoreBoardArray[playerScoreIndex]['playerScore'] + 1 }
        sortedScoreBoardArray.sort((a: { playerScore: number; }, b: { playerScore: number; }) => (b.playerScore > a.playerScore) ? 1 : -1);
      } else {
        sortedScoreBoardArray.push({ "playerName": playerName, "playerScore": 1 });
      }
    } else {
      sortedScoreBoardArray = [{ "playerName": playerName, "playerScore": 1 }];
    }
    setSortedScoreBoard({ 'sortedScoreBoard': sortedScoreBoardArray })
  }

  function getReactScores(scoreBoard: any) {
    const items = []
    if (scoreBoard) {
      for (const [index, score] of scoreBoard['sortedScoreBoard'].entries()) {
        items.push(<li className='score__item'>
          {index + 1}. {score['playerName']} <span>{score['playerScore']}</span>
        </li>)
      }
    }
    return items;
  }

  useEffect(() => {
    if (gameWinner) {
      increasePlayerScore(gameWinner);
      setGameWinner(null)
    }
  });

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={() => setScoreOpen(true)}>
        <span className='material-icons'>star_rate</span>
      </Button>

      {isScoreOpen && (
        <div className='modal score'>
          <div className='modal__body'>
            <h1>{layouts[lang].score}</h1>
            <ol className='score__table'>
              {getReactScores(sortedScoreBoard)}
            </ol>
            <Button onClick={() => setScoreOpen(false)} variant='contained' color='primary' className='btn btn--close'>
              {layouts[lang].btnClose}
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
