import { createUseStyles } from 'react-jss';
import { ITheme } from '../theme';

type RuleNames =
  | 'uploadBtn'
  | 'cancelBtn';

const PREFIX = 'ModalActionButtons';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      uploadBtn: {
        backgroundColor: theme.black,
        border: '1px solid black',
        '&:hover': {
          background: 'white',
          color: theme.black,
        },
      },
      cancelBtn: {
        color: theme.black,
        background: theme.white,
        border: '1px solid black',
        '&:hover': {
          background: theme.black,
          color: 'white',
        },
      },
    }
  ),
  { name: PREFIX },
);
