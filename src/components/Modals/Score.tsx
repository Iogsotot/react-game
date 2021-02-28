import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
// import IconButton from '@material-ui/core/IconButton';
import './Modal.scss';
import './Score.scss';


export default function Score() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='btn' variant='contained' color='primary' onClick={handleClickOpen}>
        <span className='material-icons'>star_rate</span>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Button onClick={handleClose} color='primary'>
          <CloseIcon />
        </Button>
        <DialogTitle className='dialogTitle' id='alert-dialog-title'>{'Score'}</DialogTitle>
        <DialogContent>
          <DialogContentText className='dialogContent' id='alert-dialog-description'>Score table</DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <IconButton aria-label='close' onClick={handleClose}>
            <CloseIcon />
          </IconButton> */}
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}
