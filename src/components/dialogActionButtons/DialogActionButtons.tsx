import * as React from 'react';
import { Button, DialogActions } from '@mui/material';
import { useStyles } from './dialogActionButtons.style';
import { IProps } from './types';

export const DialogActionButtons = (props: IProps): JSX.Element => {
  const { handleClose, handleSubmit, cancel, submit } = props;
  const classes = useStyles();
  return (
    <DialogActions>
      {cancel &&
          <Button
            variant="contained"
            className={classes.cancelBtn}
            onClick={handleClose}
          >{cancel}
          </Button>
      }
      <Button
        variant="contained"
        className={classes.uploadBtn}
        onClick={handleSubmit}
        type="submit"
      >{submit}
      </Button>
    </DialogActions>
  );
};
