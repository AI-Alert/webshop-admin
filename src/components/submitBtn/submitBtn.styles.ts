import { createUseStyles } from 'react-jss';
import { ITheme } from '../theme';

type RuleNames = 'button';

const PREFIX = 'SubmitButton';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>((theme: ITheme) => ({
  button: {
    marginTop: 40,
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: 20,
    background: 'black',
    '&:hover': {
      background: theme.grey,
    },
  },
}), { name: PREFIX });
