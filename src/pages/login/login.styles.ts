import { createUseStyles } from 'react-jss';
import { ITheme } from '../../components/theme';

type RuleNames =
  | 'form'
  | 'forgotPass'
  | 'mainBlock'
  | 'img'
  | 'submitBtn';

const PREFIX = 'Login';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>((theme: ITheme) => ({
  mainBlock: {
    display: 'flex',
    overflow: 'hidden',
    fontFamily: theme.abhayaLibre,
    height: '100vh',
  },
  img: {
    maxHeight: '100vh',
    backgroundSize: 'contain',
    width: '45vw',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '22%',
  },
  forgotPass: {
    alignSelf: 'self-end',
    margin: '55px 0 10px',
    fontWeight: 600,
    fontSize: 13,
  },
  submitBtn: {
    marginTop: 40,
  },
}), { name: PREFIX });
