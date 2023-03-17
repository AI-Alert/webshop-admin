import React, { useState } from 'react';
import { FormControl, OutlinedInput } from '@mui/material';
import { errorNames, errorRegExp } from '../../../utils/constants';
import { ErrorText } from '../../errorText/ErrorText';
import { LabelInput } from '../../inputLabel/LabelInput';
import { PasswordAdornment } from '../../passwordAdornment/PasswordAdornment';
import { useStyles } from './passwordForm.styles';
import { IProps } from './types';


export const PasswordForm = (props: IProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, required, errors } = props;
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl} variant="outlined">
      <LabelInput text={'Password'} label={'password'} />
      <OutlinedInput
        id="password"
        {...register('password', {
          required,
          minLength: 8,
          pattern: errorRegExp.password,
        })}
        autoComplete="off"
        className={classes.input}
        error={!!errors.password}
        placeholder="Enter your password"
        aria-describedby="password-helper-text"
        type={showPassword ? 'text' : 'password'}
        endAdornment={<PasswordAdornment
          setShowPassword={setShowPassword} showPassword={showPassword}
        />}
      />
      {errors?.password?.type === 'required' && <ErrorText text={errorNames.passwordRequired} />}
      {errors?.password?.type === 'minLength' && <ErrorText text={errorNames.passwordLength} />}
      {errors?.password?.type === 'pattern' && <ErrorText text={errorNames.invalidPassword} />}
    </FormControl>
  );
};
