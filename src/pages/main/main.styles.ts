import { createUseStyles } from 'react-jss';
import { ITheme } from '../../components/theme';

export const mainBoxStyles = { display: 'flex', justifyContent: 'center' };
export const childBoxStyles = { flexGrow: 1, p: 4 };

type RuleNames =
  | 'main'
  | 'secondary'
  | 'mainContent';

const PREFIX = 'Main';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      main: {
        background: theme.black,
        color: theme.white,
      },
      secondary: {
        background: theme.white,
        color: theme.black,
      },
      mainContent: {
        '& .MuiPaper-root': {
          position: 'relative',
        },
      },
    }
  ),
  { name: PREFIX },
);
