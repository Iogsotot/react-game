import React from 'react';
import './Modal.scss';
import './Help.scss';

export default class Help extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button className='btn' onClick={() => this.setState({ isOpen: true })}>I can't understand</button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal__body'>
              <h1>How to play</h1>
              <p>Just click on all icons! do smt!</p>
              <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}