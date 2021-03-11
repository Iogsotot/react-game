/* eslint-disable */
import useSound from 'use-sound';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';

import weaponSound from './../../assets/sounds/vzz.mp3'

//@ts-ignore
// import boopSfx from '../../assets/sounds/theme.mp3';

// const BoopButton = () => {
//   const [play] = useSound(boopSfx);
//   return <button onClick={play}>Boop!</button>;
// };

function Demo() {
  const [isChecked, setIsChecked] = useState(false);


  const [playActive] = useSound(weaponSound, { volume: 0.25 });
  // const [playOn] = useSound('./../../assets/sounds/theme.mp3', { volume: 0.25 });
  // const [playOff] = useSound('./../../assets/sounds/theme.mp3', { volume: 0.25 });

  return (
    <Checkbox
      name='demo-checkbox'
      checked={isChecked}
      size={24}
      label='I agree to self-isolate'
      onChange={() => setIsChecked(!isChecked)}
      // onMouseDown={playActive}
      // onMouseUp={() => {
      //   isChecked ? playOff() : playOn();
      // }}
    />
  );
}

export default Demo