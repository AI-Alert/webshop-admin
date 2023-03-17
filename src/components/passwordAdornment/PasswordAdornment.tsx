import React from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useStyles } from './passwordAdornment.styles';
import { IPasswordAdornment } from './types';


export const PasswordAdornment = ({ setShowPassword, showPassword }: IPasswordAdornment): JSX.Element => {
  const classes = useStyles();
  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  return (
    <InputAdornment position="end" onClick={handleClickShowPassword}>
      <IconButton className={classes.icon}>
        {showPassword
          ? <VisibilityOffOutlined className={classes.img} />
          : <VisibilityOutlined className={classes.img} />}
      </IconButton>
    </InputAdornment>
  );
};
