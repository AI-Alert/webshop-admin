import * as React from 'react';
import {
  DialogTitle, DialogContent, DialogActions, Typography,
} from '@mui/material';
import { DialogActionButtons } from '../../dialogActionButtons/DialogActionButtons';
import { BootstrapDialog, dialogStyles, useStyles } from './modalLogOut.styles';
import { IProps } from './types';

export const ModalLogOut = ({ open, setOpen, handleSubmit }: IProps): JSX.Element => {
  const classes = useStyles();

  const handleClose = (): void => {
    setOpen(false);
  };

  const actionProps = {
    cancel: 'CANCEL',
    submit: 'LOG OUT',
    handleClose,
    handleSubmit,
  };

  return (
    <div>
      <BootstrapDialog
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={dialogStyles}
          className={classes.modalMainTitle}
        >
          Come back soon
        </DialogTitle>
        <DialogContent>
          <div>
            <Typography
              gutterBottom
              className={classes.modalTitle}
            >
              Are you sure you want to log out?
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <DialogActionButtons {...actionProps} />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
