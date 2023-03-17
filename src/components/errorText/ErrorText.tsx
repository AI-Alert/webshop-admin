import React from 'react';
import { useTheme } from 'react-jss';
import { FormHelperText } from '@mui/material';
import { ITheme } from '../theme';
import { useStyles } from './errorText.styles';

export const ErrorText = ({ text }: { text?: string }): JSX.Element => {
  const theme: ITheme | undefined = useTheme();
  const classes = useStyles({ theme });
  return (
    <FormHelperText className={classes.error}>
      {text}
    </FormHelperText>
  );
};
