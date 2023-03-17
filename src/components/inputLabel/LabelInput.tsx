import React from 'react';
import { useTheme } from 'react-jss';
import { InputLabel } from '@mui/material';
import { ITheme } from '../theme';
import { useStyles } from './labelInput.styles';
import { IProps } from './types';


export const LabelInput = ({ text, label }: IProps): JSX.Element => {
  const theme: ITheme | undefined = useTheme();
  const classes = useStyles({ theme });

  return (
    <InputLabel
      className={classes.inputLabel}
      shrink htmlFor={label}
    >
      {text}
    </InputLabel>
  );
};
