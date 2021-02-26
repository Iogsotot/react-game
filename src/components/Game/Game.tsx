import './Game.scss';

export default function Game() {
  let playerOneCurrentScore:number = 0;
  let playerTwoCurrentScore:number = 0;
  let totalGames:number = 3;

  let playerOneResult = 'Rock';
  let playerTwoResult = 'Scissors';

  let playerOneName:string = 'Player 1';
  let playerTwoName:string = 'Player 2';




  return (
    <main>
      <input type='text' />
      <button className='button start-game' type='submit'>
        Start battle!
      </button>

      <div className='battlefield'>
        <div className='weapon rock'></div>
        <div className='weapon scissors'></div>
        <div className='weapon paper'></div>
      </div>

      <div className='stats-string'>
        <h2 className='player1-result-header'>{playerOneName} { 'score ' }{playerOneCurrentScore} / {totalGames}</h2>
        <h2 className='player2-result-header'>{playerTwoName} { 'score ' }{playerTwoCurrentScore} / {totalGames}</h2>

        <div className='round-1-stats'>
          <h3 className='round-header round-1'>1 round:</h3>
          <p className='player1-result-round-1'>{playerOneResult}</p>
          <p className='player2-result-round-1'>{playerTwoResult}</p>
        </div>

        <div className='round-2-stats hidden'>
          <h3 className='round-header round-2'>2 round:</h3>
          <p className='player1-result-round-2'>{playerOneResult}</p>
          <p className='player2-result-round-2'>{playerTwoResult}</p>
        </div>

        <div className='round-3-stats hidden '>
          <h3 className='round-header round-3'>3 round:</h3>
          <p className='player1-result-round-3'>{playerOneResult}</p>
          <p className='player2-result-round-3'>{playerTwoResult}</p>
        </div>
      </div>
    </main>
  );
}
