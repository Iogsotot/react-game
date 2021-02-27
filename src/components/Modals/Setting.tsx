import React from 'react';
import './Modal.scss';
import './Setting.scss';

export default class Setting extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button className='btn' onClick={() => this.setState({ isOpen: true })}>
          Setting
        </button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal__body'>
              <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
              <h1>Settings</h1>
              <input type='text' className='players-name' placeholder='your name' />
              <div className='game-skin'>
                Select game skin:
                <div className='game-skin--round-icons'>round-icons</div>
                <div className='game-skin--cats-icons'>cats-icons</div>
              </div>
              <div className='game-lang'>
                Select language:
                <div className='game-lang--ru'>ru</div>
                <div className='game-lang--en'>en</div>
              </div>
              <div className='game-mode'>
                Select game mode:
                <div className='game-mode--ru'>normal</div>
                <div className='game-mode--en'>intersting</div>
              </div>
              <button className='button start-game' type='submit'>
                Start battle!
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
