import React from 'react';
import { useTheme } from 'react-jss';
import { Button } from '@mui/material';
import { ITheme } from '../theme';
import { useStyles } from './submitBtn.styles';
import { IProps } from './types';

export const SubmitBtn = ({ text, handleClick }: IProps): JSX.Element => {
  const theme: ITheme | undefined = useTheme();
  const classes = useStyles({ theme });

  return (
    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      onClick={handleClick && handleClick}
    >{text}
    </Button>
  );
};
