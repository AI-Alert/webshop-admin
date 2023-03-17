import { createUseStyles } from 'react-jss';
import { ITheme } from '../theme';

type RuleNames =
  'img'
  | 'icon';

const PREFIX = 'PasswordAdornment';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      img: {
        color: theme.grey,
      },
      icon: {
        paddingRight: '15px',
      },
    }
  ),
  { name: PREFIX },
);
