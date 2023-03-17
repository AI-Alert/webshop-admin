import { createUseStyles } from 'react-jss';
import { ITheme } from '../theme';

type RuleNames = 'error';

const PREFIX = 'ErrorText';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      error: {
        color: 'red',
        position: 'absolute',
        marginTop: 57,
        marginLeft: 3,
      },
    }
  ),
  { name: PREFIX },
);
