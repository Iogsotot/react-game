import React from 'react';
import './Modal.scss';
import './Sounds.scss';
import soundOn from '../../assets/icons/sound--on.png';
import soundOff from '../../assets/icons/sound--off.png';
import cancel from '../../assets/icons/cancel.svg';

export default class Sounds extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button className='btn' onClick={() => this.setState({ isOpen: true })}>
          Sound
        </button>
        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal__body'>
              {/* <button className='btn btn--close' onClick={() => this.setState({ isOpen: false })}> */}
              <img src={cancel} alt='' className='btn btn--close' onClick={() => this.setState({ isOpen: false })} />
              {/* </button> */}
              <img src={soundOn} alt='sound on' className='soundIcon--on' />
              <img src={soundOff} alt='sound off' className='soundIcon--off hidden' />
              {/* <div className="sound-bar">sound bar</div> */}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
