import React from 'react';
import './Modal.scss';
import './Score.scss';

export default class Score extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button className='btn' onClick={() => this.setState({ isOpen: true })}>Score</button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal__body'>
              <h1>Score</h1>
              <p>There are score of all players</p>
              <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}