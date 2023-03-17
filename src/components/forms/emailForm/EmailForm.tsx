import React from 'react';
import { AlternateEmail } from '@mui/icons-material';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { errorNames, errorRegExp } from '../../../utils/constants';
import { ErrorText } from '../../errorText/ErrorText';
import { LabelInput } from '../../inputLabel/LabelInput';
import { useStyles } from './emailForm.styles';
import { IProps } from './types';

export const EmailForm = (props: IProps): JSX.Element => {
  const classes = useStyles();
  const { register, required, errors } = props;
  return (
    <FormControl className={classes.formControl} variant="outlined">
      <LabelInput text={'Email address'} label={'email'} />
      <OutlinedInput
        id="email"
        {...register('email', {
          required,
          pattern: errorRegExp.email,
        })}
        autoComplete="off"
        {...register('email', { required })}
        error={!!errors.email}
        className={classes.input}
        placeholder="Enter your email"
        aria-describedby="email-helper-text"
        endAdornment={<InputAdornment position="end">
          <AlternateEmail className={classes.andornment} />
        </InputAdornment>}
      />
      {errors?.email?.type === 'required' && <ErrorText text={errorNames.emailRequired} />}
      {errors?.email?.type === 'pattern' && <ErrorText text={errorNames.invalidEmail} />}
    </FormControl>
  );
};
