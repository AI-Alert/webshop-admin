import React, { useCallback, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'react-jss';
import { useNavigate } from 'react-router';
import { Box } from '@mui/material';
import backgroundImg from '../../assets/backgrounds/img.png';
import { EmailForm, PasswordForm } from '../../components/forms';
import { IFormValues } from '../../components/forms/emailForm/types';
import { SubmitBtn } from '../../components/submitBtn/SubmitBtn';
import { ITheme } from '../../components/theme';
import { useAlert } from '../../hooks/useAlert';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { AdminService } from '../../services';
import { loginUser } from '../../store/actions/actions';
import { routesNames } from '../../utils/constants';
import { useStyles } from './login.styles';

export const Login = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();
  const theme: ITheme | undefined = useTheme();
  const classes = useStyles({ theme });
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setAlert } = useAlert();

  useEffect(() => {
    const authed = AdminService.$isLoggedIn();
    if (authed) {
      navigate(routesNames.init);
    }
  });

  const onSubmit: SubmitHandler<IFormValues> = useCallback((data): void => {
    const { email, password } = data;
    loginUser({ email, password }, navigate)(dispatch)
      .catch((error) => {
        let message: string = '';
        if (error instanceof Error) {
          message = error.message;
        }
        else {
          message = String(error);
        }
        setAlert(message, 'error');
      }).then(() => {
        navigate(routesNames.main);
      });
    formRef?.current?.reset();
  }, []);

  return (
    <Box className={classes.mainBlock}>
      <img src={backgroundImg}
        alt="" className={classes.img}
      />
      <Box
        ref={formRef}
        component="form"
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1>Log in</h1>
        </div>
        <EmailForm register={register} required errors={errors} />
        <PasswordForm register={register} required errors={errors} />
        <SubmitBtn text={'Log in'} />
      </Box>
    </Box>
  );
};
